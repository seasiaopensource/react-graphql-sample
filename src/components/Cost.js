import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import TabularInfo from "./TabularInfo";
import LoadingImage from "../images/Loading.gif";

const Cost = props => (
  <Query
    query={gql`
      {
        countryVariant(id: "${props.countryVariant}") {
          id
          country_code
          full_variant_name
          vehicle{
            id
            make
            model
            ancap_rating
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading)
        return (
          <div className="loading">
            <img src={LoadingImage} alt="" />;
          </div>
        );
      if (error) return <p>Error :(</p>;
      return <TabularInfo name="Cost" data={[]} />;
    }}
  </Query>
);

export default Cost;
