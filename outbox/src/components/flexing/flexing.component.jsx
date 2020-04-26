import React from "react";

import { Menu } from "@material-ui/core";
import items from "./items.json";
import companyList from './companyList.json';
import { Row, Col } from 'react-simple-flex-grid';
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image";

import "./flexing.styles.css";

export default class Flexing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flexing: "Flexing begins",
    };
  }



  render() {
    return <div className="flexing">{this.state.flexing}</div>;
  }
}
