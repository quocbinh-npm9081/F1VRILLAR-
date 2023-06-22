import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import SelectInput from "../components/Input/SelectInput";
import PagerShadow from "../components/PagerShadow";

import { years, rounds } from "../api/formula1";

const Results = () => {
  const [year, setYear] = useState<string>("2010");
  const [round, setRound] = useState<string>("1");
  const yearsArr = Object.values(years);
  const roundsArr = Object.values(rounds);
  console.log("roundsArr: ", roundsArr);

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
        <PagerShadow>
          <Box sx={{ display: "flex", gap: 2, alignItems: "baseline", py: 5 }}>
            <Typography variant="h2" component="h2" textAlign="start">
              {year} RACE RESULTS /
            </Typography>

            <Typography variant="h4" component="h2" textAlign="start">
              Round {round}
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }} gap={2}>
            <SelectInput
              title="Year"
              value={year}
              setValue={setYear}
              options={yearsArr}
            />
            <SelectInput
              title="Round"
              value={round}
              setValue={setRound}
              options={roundsArr}
            />
          </Box>
        </PagerShadow>
      </Grid>
    </Grid>
  );
};

export default Results;
