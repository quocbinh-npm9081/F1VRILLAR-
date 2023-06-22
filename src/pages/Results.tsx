import React from "react";
import Grid from "@mui/material/Grid";

import PagerShadow from "../components/PagerShadow";

const Results = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <PagerShadow>test </PagerShadow>;
      </Grid>
    </Grid>
  );
};

export default Results;
