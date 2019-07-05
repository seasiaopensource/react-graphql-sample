import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import TabularInfo from "./TabularInfo";
import LoadingImage from "../images/Loading.gif";

const BatteryAndCharging = props => (
  <Query
    query={gql`
      {
        countryVariant(id: "${props.countryVariant}") {
          id
          country_code
          full_variant_name
          vehicle{
            id
            battery_capacity_rated
            battery_capacity_usable

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
      return (
        <TabularInfo
          name="Battery & Charging"
          data={[
            {
              name: "Battery Capacity Rated",
              value: `${data.countryVariant.vehicle.battery_capacity_rated ||
                "N/A"}`
            },
            {
              name: "Battery Capacity Usable",
              value: `${data.countryVariant.vehicle.battery_capacity_usable ||
                "N/A"}`
            }
          ]}
        />
      );
    }}
  </Query>
);

export default BatteryAndCharging;
