import React from "react";
import Foo from "./components/Foo";
import Bar from "./components/Bar";
import Email from "./components/Email";

const Components = {
  foo: Foo,
  bar: Bar,
  email: Email
};

export default block => {
  if (typeof Components['email'] !== "undefined") {
    return React.createElement(Components['email'], {
      key: block.panelItem,
      block: block
    });
  }
  return React.createElement(
    () => <div>The component {'block.component'} has not been created yet.</div>,
    { key: block.panelItem }
  );
};
