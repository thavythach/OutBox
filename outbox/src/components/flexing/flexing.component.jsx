import React from "react";


import { Grid } from '@material-ui/core';

import "./flexing.styles.css";

export default class Flexing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flexing: "Flexing begins",
      spacing: 3,
      config: {
          navVariant: {
              xs: 'temporary',
              sm: 'persistent',
              md: 'permanent',
          }
      }
    };
  }



  render() {
    return (
        <div className="flexing">
            <Grid container spacing={this.state.spacing}>
                
                {/* two */}
                <Grid item xs={4} sm={2}>Test 12-6</Grid>
                <Grid item xs={4} sm={2}>Test 12-6</Grid>
                <Grid item xs={4} sm={2}>Test 12-6</Grid>
                <Grid item xs={4} sm={2}>Test 12-6</Grid>
                <Grid item xs={4} sm={2}>Test 12-6</Grid>
                <Grid item xs={4} sm={2}>Test 12-6</Grid>

                {/* two */}
                <Grid item xs={12} sm={6}>Test 12-6</Grid>
                <Grid item xs={12} sm={6}>Test 12-6</Grid>

                {/* four */}
                <Grid item xs={6} sm={3}>Test 6-3</Grid>
                <Grid item xs={6} sm={3}>Test 6-3</Grid>
                <Grid item xs={6} sm={3}>Test 6-3</Grid>
                <Grid item xs={6} sm={3}>Test 6-3</Grid>
            </Grid>
        </div>
    );
  }
}
