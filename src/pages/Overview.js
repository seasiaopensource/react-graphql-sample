/**
 * it include all the smalll component to create a one page.
 *
 */
import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Heading from "../components/Heading";
import KeySpecs from "../components/KeySpecs";
import Cost from "../components/Cost";
import Environmental from "../components/Environmental";
import SafetyAndSecurity from "../components/SafetyAndSecurity";
import PowerTrain from "../components/PowerTrain";
import BodyAndChassis from "../components/BodyAndChassis";
import BodyAndChassisAdditional from "../components/BodyAndChassisAdditional";
import Range from "../components/Range";
import RealRange from "../components/RealRange";
import BatteryAndCharging from "../components/BatteryAndCharging";
import BatteryAndChargingAdditional from "../components/BatteryAndChargingAdditional";
import BatteryAndChargingMore from "../components/BatteryAndChargingMore";
import icons8 from "../images/icons8-search-100.svg";
import LoadingImage from "../images/Loading.gif";
import Slider from "../components/Slider";
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import OverviewKeySpecs from "../components/OverviewKeySpecs";
import "../style/Overview.scss";

const Overview = ({ match }) => (
  <Query
    query={gql`
      {
        countryVariant(id: "${match.params.id}") {
          id
          full_variant_name
          trim_name
          trim_detail
          vehicle {
            img_source
            id
            make
            model
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading)
        return (
          <div className="loading loading-full">
            <img src={LoadingImage} alt="" />
          </div>
        );
      if (error) return <p>Error :(</p>;
      if (data && data.countryVariant)
        return (
          <div className="overView">
            <Row className="pt-4 pb-4 align-items-center">
              <Col sm="12" md="12" lg="7">
                <Heading
                  title={`${data.countryVariant.vehicle.make} ${
                    data.countryVariant.vehicle.model
                  }`}
                  subTitle={`${data.countryVariant.full_variant_name}`}
                />
              </Col>
              <Col sm="12" md="12" lg="5">
                <KeySpecs vehicleId={data.countryVariant.vehicle.id} />
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="12" lg="6" className="pr-lg-0">
                <div className="home-slider">
                  <Slider />
                  <div className="home-slider-photos-caption">
                    Photos <span>| Videos</span>
                  </div>
                </div>
              </Col>
              <Col sm="12" md="12" lg="6" className="pl-lg-0">
                <div className="mb_outer-bg outer-bg h-100">
                  <OverviewKeySpecs
                    vehicleId={data.countryVariant.vehicle.id}
                  />
                </div>
              </Col>
            </Row>
            <Row className="pt-3 padding_y">
              <Col md="6">
                <InputGroup>
                  <Input placeholder="search" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <img src={icons8} alt="" width="22px" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
              <Col
                md="6"
                className="d-flex  justify-content-center align-items-center"
              >
                <div className="pt-md-0 pt-3 list_nav">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Cost</a>
                    </li>
                    <li> | </li>
                    <li>
                      <a href="javascript:void(0)">Environmental</a>
                    </li>
                    <li> | </li>
                    <li>
                      <a href="javascript:void(0)">Safety & Security</a>
                    </li>
                    <li> | </li>
                    <li>
                      <a href="javascript:void(0)">Powertrain</a>
                    </li>
                    <li> | </li>
                    <li>
                      <a href="javascript:void(0)">Body and chassis</a>
                    </li>
                    <li> | </li>
                    <li>
                      <a href="javascript:void(0)">Range</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <hr />
            <Row className="padding_y">
              <Col sm="12" md="6" lg="4">
                <Cost countryVariant={data.countryVariant.id} />
              </Col>
              <Col sm="12" md="6" lg="4">
                <Environmental countryVariant={data.countryVariant.id} />
              </Col>
              <Col sm="12" md="6" lg="4">
                <SafetyAndSecurity countryVariant={data.countryVariant.id} />
              </Col>
            </Row>
            <hr />

            <Row className="padding_y">
              <Col sm="12" md="6" lg="4">
                <PowerTrain countryVariant={data.countryVariant.id} />
              </Col>
              <Col sm="12" md="6" lg="4">
                <BodyAndChassis countryVariant={data.countryVariant.id} />
              </Col>
              <Col sm="12" md="6" lg="4">
                <BodyAndChassisAdditional
                  countryVariant={data.countryVariant.id}
                />
              </Col>
            </Row>
            <hr />

            <Row className="padding_y">
              <Col sm="12" md="6" lg="4">
                <Range countryVariant={data.countryVariant.id} />
              </Col>
              <Col sm="12" md="6" lg="4">
                <RealRange countryVariant={data.countryVariant.id} />
              </Col>
              {/*<Col sm="12" md="6" lg="4">
              <TabularInfo
                name="Range vs Speed"
                data={[{abc: "Key"}, {def: 200}]}
              />
            </Col>*/}
            </Row>
            <hr />
            <Row className="padding_y">
              <Col sm="12" md="6" lg="4">
                <BatteryAndCharging countryVariant={data.countryVariant.id} />
              </Col>
              <Col sm="12" md="6" lg="4">
                <BatteryAndChargingAdditional
                  countryVariant={data.countryVariant.id}
                />
              </Col>
              <Col sm="12" md="6" lg="4">
                <BatteryAndChargingMore
                  countryVariant={data.countryVariant.id}
                />
              </Col>
            </Row>
            <hr />
            <Row className="padding_y">
              <Col lg="8">
                <h4 className="pb-5 text-black font-weight-bold">
                  About Hyundai Kona Electric
                </h4>
                <h6 className="pb-3 text-black font-weight-normal text-uppercase">
                  GENERAL
                </h6>
                <p className="text-black pb-4">
                  The Hyundai Kona Electric rides on an all-new CUV platform and
                  is Hyundai’s first compact electric crossover for the U.S.
                  market, appealing to consumers with active, eco-focused
                  lifestyles of all kinds. 2019 Kona Electric models will be
                  produced in Ulsan, Korea and will be available in the
                  beginning of 2019, with initial availability in California and
                  subsequently in the ZEV-focused states in the western and
                  northeastern regions of the U.S. market.{" "}
                </p>

                <h6 className="pb-3 text-black font-weight-normal text-uppercase">
                  EXTERIOR
                </h6>
                <p className="text-black pb-4">
                  Kona Electric employs refined aesthetics with organic
                  geometric body forms and sporty contours for a modern,
                  eco-oriented appearance. Its distinctive design is reinforced
                  by the car’s voluminous, futuristic body styling that
                  emphasizes its well-proportioned, dynamic silhouette. A low
                  and wide stance complements its profile, with a long wheelbase
                  and short overhangs, ensuring sporty, nimble handling and
                  control, in addition to delivering superior driving stability
                  at highway speeds. Its refined, aero-tuned wheel arch and rear
                  fascia cladding combines powerfully with futuristic LED
                  lighting to create a high-tech eco appearance.
                </p>

                <h6 className="pb-3 text-black font-weight-normal text-uppercase">
                  INTERIOR
                </h6>
                <p className="text-black pb-4">
                  The unique features of the exterior continue inside with a
                  strong horizontal character line creating a wide and spacious
                  feel. Even with its compact dimensions and low roof line, the
                  Kona Electric delivers outstanding interior roominess,
                  especially front headroom.The sleek and simple interior
                  accentuates the modern and efficient exterior design. Kona
                  Electric exclusive shift-by-wire drive controls are supported
                  by a center console upper bridge element with an integrated
                  open-access lower storage bin for convenience. The
                  audio/navigation display incorporates advanced infotainment
                  features and the available floating eight-inch seamless
                  navigation touchscreen includes standard Android Auto™ and
                  Apple CarPlay™ capability.
                </p>

                <h6 className="pb-3 text-black font-weight-normal text-uppercase">
                  PERFORMANCE
                </h6>
                <p className="text-black pb-4">
                  The Kona Electric powertrain employs a high-efficiency 150 kW
                  (201 horsepower) permanent-magnet synchronous electric motor
                  supplied by a high-voltage 64 kWh lithium-ion battery. The
                  motor develops 291 lb.-ft. of torque distributed to the front
                  wheels. The powertrain inverter has a power density of 25.4
                  kVA per liter. The battery system is liquid-cooled and
                  operates at 356 volts. Battery pack energy density is 141.3
                  Wh/kg (greater than Chevy Bolt), with a total battery system
                  weight under 1,000 lbs.
                </p>

                <h6 className="pb-3 text-black font-weight-normal text-uppercase">
                  SAFETY
                </h6>
                <p className="text-black pb-4">
                  Hyundai is the only global car manufacturer to produce its own
                  steel for vehicle production for specific benefits to Kona
                  Electric structural integrity and safety. The lightweight yet
                  strong unibody structure has been developed with Advanced High
                  Strength Steel to deliver leading levels of safety.A host of
                  advanced safety features are also available on Kona Electric,
                  including Lane Keeping Assist, Blind-Spot Collision Warning,
                  Rear Cross-Traffic Collision-Avoidance Assist, Parking
                  Distance Warning and Forward Collision-Avoidance Assist with
                  Pedestrian Detection.
                </p>

                <h6 className="pb-3 text-black font-weight-normal text-uppercase">
                  CHARGING
                </h6>
                <p className="text-black pb-4">
                  The Kona Electric utilizes a standard Level-II on-board
                  charging system capable of a 7.2 kW rate of charge for rapid
                  recharging characteristics. Kona Electric estimated range is a
                  segment-leading 258 miles, meeting the varying needs of owner
                  lifestyles. An eighty percent charge can be achieved in 54
                  minutes with a Level-III quick charge (zero to 80 percent
                  charge @ 100 kW charging capability), using the SAE-Combo
                  charging port, while a 7.2 kW Level-II charger takes nine
                  hours and thirty-five minutes. This fast-charging capability
                  is standard on the Kona Electric.
                </p>

                <h6 className="pb-3 text-black font-weight-normal text-uppercase">
                  Version Features
                </h6>
                <p>
                  The Hyundai Kona Electric Long-range is the FWD SUV with the
                  64kWh battery.
                </p>
                <p>
                  It hits 62mph (100km/h) in 7.6s and reaches a top speed of
                  104mph (167km/h).
                </p>
                <p>
                  It is propelled by a front electric motor with a practical
                  output of 150kW providing 291lb-ft (395Nm) of torque.
                </p>
                <p>
                  It’s official EPA 258 miles (NEDC 546km) range enables you to
                  travel confidently without range-anxiety.
                </p>
              </Col>
            </Row>
            <hr />
            <Row>{/* <Col sm="" */}</Row>
          </div>
        );
      else return <p>No Car found!</p>;
    }}
  </Query>
);

export default Overview;
