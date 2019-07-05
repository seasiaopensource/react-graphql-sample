import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Specification from "./Specification";
import LoadingImage from "../images/Loading.gif";

const KeySpecs = ({ vehicleId }) => (
  <Query
    query={gql`
      {
        vehicle(id: "${vehicleId}") {
          year
          seats
          max_speed
          range_fossil
          powerTrainType {
            name
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <img width="40px" src={LoadingImage} alt="" />;
      if (error) return <p>Error :(</p>;
      return (
        <div className="align-items-sm-end d-flex flex-wrap justify-content-between">
          <Specification
            superText={"Available"}
            title={"Now"}
            icon={"icon-avail1"}
          />

          <Specification title={data.vehicle.seats} icon={" icon-passenger"} />

          <Specification
            title={data.vehicle.powerTrainType.name}
            icon={"icon-fuel"}
          />

          <Specification
            title={data.vehicle.range_fossil}
            icon={"icon-location"}
            subText={"Km"}
          />
        </div>
      );
    }}
  </Query>
);

export default KeySpecs;
