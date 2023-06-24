import * as React from "react";
import Paper from "@mui/material/Paper";

type TProps = {
  children: any;
  width?: string;
};

const PagerShadow: React.FC<TProps> = ({ children, width }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        flex: 1,
        width: width ? width : "auto",
        position: "relative",
        p: 2,
      }}
      style={{
        marginTop: "10px",
      }}
    >
      {children}
    </Paper>
  );
};
export default PagerShadow;
