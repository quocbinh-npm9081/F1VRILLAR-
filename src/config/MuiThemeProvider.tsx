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
