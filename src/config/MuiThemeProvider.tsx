import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { red } from "@mui/material/colors";

import React from "react";
type TProps = {
  children: any;
};
const MuiThemeProvider: React.FC<TProps> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      secondary: {
        main: red[400],
      },
    },
    typography: {
      h2: {
        "@media (min-width:200px)": {
          fontSize: "1.5rem",
        },
        "@media (min-width:600px)": {
          fontSize: "2.5rem",
        },
      },
      h4: {
        "@media (min-width:200px)": {
          fontSize: "0.8rem",
        },
        "@media (min-width:600px)": {
          fontSize: "1rem",
        },
      },
      subtitle2: {
        "@media (min-width:200px)": {
          fontSize: "0.6rem",
        },
        "@media (min-width:600px)": {
          fontSize: "0.9rem",
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {children}
      </>
    </ThemeProvider>
  );
};
export default MuiThemeProvider;
