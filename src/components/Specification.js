/**
 * this component use to create navigation
 */
import React from "react";
import "../style/Specification.scss";

class Specification extends React.Component {
  renderSupOrSub() {
    if (this.props.superText || this.props.subText) {
      const html = [];
      if (this.props.superText) {
        html.push(<span key="0">{this.props.superText}</span>);
      }

      if (this.props.subText) {
        html.push(<sub key="1">{this.props.subText}</sub>);
      }
      return html;
    }
  }

  render() {
    return (
      <div className=" d-flex mb-width align-items-end py-2 py-md-0">
        <i className={`icon ${this.props.icon}`} />

        <h4 className="title">
          {this.props.title || "NA"} {this.renderSupOrSub()}
        </h4>
      </div>
    );
  }
}

export default Specification;
