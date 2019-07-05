import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Row, Col } from "reactstrap";
import OverviewSpecs from "../components/OverviewSpecs";
import LoadingImage from "../images/Loading.gif";
import StarImage from "../images/Star.svg";

const starRating = totalStar => {
  const star = [];
  for (let z = 0; z < totalStar; z++) {
    star.push(<img key={z} src={StarImage} alt="" />);
  }
  return star;
};

const OverviewKeySpecs = ({ vehicleId }) => (
  <Query
    query={gql`
    {
    vehicle(id: "${vehicleId}") {
      id
      acceleration
      max_speed
      ancap_rating
      range_fossil
      battery_capacity_rated
      electric_charge_port_type
      bodyType {
        name
      }
      countryVariants{
        standard_warranty_km
      }
    }
    offer(id: "${vehicleId}"){
      price
    }
  }
`}
  >
    {({ loading, error, data }) => {
      if (loading)
        return (
          <div className="loading">
            <img src={LoadingImage} alt="loading" />;
          </div>
        );
      if (error) return <p>Error :(</p>;
      return (
        <>
          <Row>
            <Col sm="12">
              <h4 className="font-weight-bold m-0 py-4">Overview</h4>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <OverviewSpecs
                title={"Top Speed/ Acceleration"}
                icon={"icon-speed"}
              >
                {data.vehicle.max_speed} km/h / {data.vehicle.acceleration} s
              </OverviewSpecs>
            </Col>
            <Col sm="6">
              <OverviewSpecs title={"ANCAP Rating"} icon={"icon-protect"}>
                {starRating(data.vehicle.ancap_rating)}
              </OverviewSpecs>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <OverviewSpecs title={"Range"} icon={"icon-marker"}>
                {data.vehicle.range_fossil || "XXXXX"} km
              </OverviewSpecs>
            </Col>
            <Col sm="6">
              <OverviewSpecs
                title={"Battery Capacity"}
                icon={"icon-charging-battery"}
              >
                {data.vehicle.battery_capacity_rated || "XXXXX"}
              </OverviewSpecs>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <OverviewSpecs title={"Price from"} icon={"icon-price-tag"}>
                {data.offer.price}
              </OverviewSpecs>
            </Col>
            <Col sm="6">
              <OverviewSpecs title={"TCO"} icon={"icon-estimate"}>
                {"XXX"}
              </OverviewSpecs>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <OverviewSpecs title={"Car Type"} icon={"icon-suv"}>
                {`${data.vehicle.bodyType.name}`}
              </OverviewSpecs>
            </Col>
            <Col sm="6">
              <OverviewSpecs title={"Charge Port"} icon={"icon-chargers"}>
                {data.vehicle.electric_charge_port_type || "XXXXX"}
              </OverviewSpecs>
            </Col>
          </Row>
        </>
      );
    }}
  </Query>
);

export default OverviewKeySpecs;
