import React from "react";
import { Grid } from "semantic-ui-react";

const EventDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={10}>Left Column</Grid.Column>
      <Grid.Column width={6}>Right Column</Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
