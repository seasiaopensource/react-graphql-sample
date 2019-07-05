/**
 * This component use to create tabular form of data
 * it accepts to 2 props title and data.
 */
import React from "react";
import { Table } from "reactstrap";
import "../style/TabularInfo.scss";

class TabularInfo extends React.Component {
  render() {
    return (
      <>
        <h4 className="pb-4 font-weight-bold table_heading">
          {this.props.name}
        </h4>
        <Table striped size="lg" borderless={true}>
          <tbody>
            {this.props.data.length !== 0 ? (
              this.props.data.map((attr, index) => (
                <tr key={index}>
                  <td>{attr.name}</td>
                  <td>{attr.value}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Data Available</td>
              </tr>
            )}
          </tbody>
        </Table>
      </>
    );
  }
}

export default TabularInfo;
