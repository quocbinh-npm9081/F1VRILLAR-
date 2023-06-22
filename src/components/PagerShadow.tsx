import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

type TProps = {
  children: any;
};

const PagerShadow: React.FC<TProps> = ({ children }) => {
  return (
    <Grid container spacing={2}>
      <Paper elevation={3}>{children}</Paper>
    </Grid>
  );
};
export default PagerShadow;
