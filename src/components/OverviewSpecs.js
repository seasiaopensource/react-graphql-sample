/**
 * to show small part of overview section
 */
import React from "react";
import "../style/OverviewSpecs.scss";

class OverviewSpecs extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center over_view_in">
        <div className="mr-4">
          <span className={`icon ${this.props.icon}`} />
        </div>
        <div>
          <h3 className="title">{this.props.title}</h3>
          <h3 className="subtitle">{this.props.children}</h3>
        </div>
      </div>
    );
  }
}

export default OverviewSpecs;
