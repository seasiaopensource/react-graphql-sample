import React from "react";

const Heading = ({ title, subTitle }) => {
  return (
    <div className="pb-3 pb-md-0">
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
    </div>
  );
};

export default Heading;
