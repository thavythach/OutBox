import React from "react";

export default props => (
  <div className="foo">
    <hr />
    Hi I'm a Foo component with the headline:
    <h2>{props.block.headline}</h2>
  </div>
);
