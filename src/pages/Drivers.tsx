import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardDriver from "../components/CardDriver";

const Drivers = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="start" alignItems="start" spacing={1}>
        <Grid item xs={12} md={4} lg={3}>
          <CardDriver />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <CardDriver />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <CardDriver />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <CardDriver />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <CardDriver />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Drivers;
