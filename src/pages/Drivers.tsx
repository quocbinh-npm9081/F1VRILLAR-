import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardDriver from "../components/CardDriver";
import formula1 from "../api/formula1";
import { convertXmlToJson } from "../api/formula1";

const Drivers = () => {
  const [drivers, setDrivers] = React.useState<any[]>([]);
  React.useEffect(() => {
    const getList = async () => {
      let response = null;
      response = await formula1.getDrivers();
      const jsonData = convertXmlToJson(String(response)).MRData.DriverTable;
      // const { ResultsList } = jsonData;
      setDrivers(jsonData.Driver);
      console.log("ResultsList: ", jsonData);
    };
    getList();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="start" alignItems="start" spacing={1}>
        {drivers.map((drive: any, index: number) => (
          <Grid item xs={12} md={4} lg={3}>
            <CardDriver drive={drive} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Drivers;
