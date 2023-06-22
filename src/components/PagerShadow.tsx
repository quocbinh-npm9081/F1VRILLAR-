import * as React from "react";
import Paper from "@mui/material/Paper";

type TProps = {
  children: any;
};

const PagerShadow: React.FC<TProps> = ({ children }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        position: "relative",
        p: 2,
      }}
    >
      {children}
    </Paper>
  );
};
export default PagerShadow;
