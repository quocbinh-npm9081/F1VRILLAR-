import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardDriver from "../components/CardDriver";

const dummyDrivers = [
  {
    name: "Max Verstappen",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png",
    team: "Aston Martin",
    country: "Spain",
    podiums: "104",
    points: "2178",
    worldChampionships: "2",
    highestRaceFinish: "1",
    highestGridPosition: "1",
    dateOfBirth: "29/07/1981",
  },
  {
    name: "Fernando Alonso",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png",
    team: "Red Bull Racing",
    country: "Netherlands",
    podiums: "85",
    points: "2206.5",
    worldChampionships: "2",
    highestRaceFinish: "1",
    highestGridPosition: "1",
    dateOfBirth: "9/12/1992",
  },
  {
    name: " Sergio Perez",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png",
    team: "Red Bull Racing",
    country: "Mexico",
    podiums: "30",
    points: "1327",
    worldChampionships: "0",
    highestRaceFinish: "0",
    highestGridPosition: "1",
    dateOfBirth: "22/01/1986",
  },
  {
    name: "Lewis Hamilton",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png",
    team: "Mercedes",
    country: "United Kingdom",
    podiums: "194",
    points: "4507.5",
    worldChampionships: "7",
    highestRaceFinish: "1 ",
    highestGridPosition: "1",
    dateOfBirth: "12/03/1983",
  },
  {
    name: " Sergio Perez",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png",
    team: "Ferrari",
    country: "Spain",
    podiums: "15",
    points: "850.5",
    worldChampionships: "0",
    highestRaceFinish: "1",
    highestGridPosition: "1",
    dateOfBirth: "27/03/1990",
  },
  {
    name: "George Russell",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png",
    team: "Mercedes",
    country: "United Kingdom",
    podiums: "10",
    points: "	359",
    worldChampionships: "0",
    highestRaceFinish: "1",
    highestGridPosition: "1",
    dateOfBirth: "15/02/1998",
  },
  {
    name: "Charles Leclerc",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png",
    team: "Ferrari",
    country: "Monaco",
    podiums: "25",
    points: "	922",
    worldChampionships: "0",
    highestRaceFinish: "1",
    highestGridPosition: "2",
    dateOfBirth: "16/10/1997",
  },
  {
    name: "Aston Martin",
    image:
      "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col/image.png",
    team: "Aston Martin",
    country: "Canada",
    podiums: "3",
    points: "	231",
    worldChampionships: "0",
    highestRaceFinish: "1",
    highestGridPosition: "2",
    dateOfBirth: "29/10/1998",
  },
];

const Drivers = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="start" alignItems="start" spacing={1}>
        {dummyDrivers.map((drive: any, index: number) => (
          <Grid key={drive.DateOfBirth} item xs={12} md={4} lg={3}>
            <CardDriver drive={drive} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Drivers;
