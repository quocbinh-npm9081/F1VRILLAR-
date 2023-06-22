import { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import SelectInput from "../components/Input/SelectInput";
import PagerShadow from "../components/PagerShadow";
import StickyHeaderTable from "../components/StickyHeaderTable";

import formula1 from "../api/formula1";
import { years, rounds, convertXmlToJson } from "../api/formula1";

const Results = () => {
  const [year, setYear] = useState<string>("2010");
  const [round, setRound] = useState<string>("1");
  const [raceName, setRaceName] = useState<string>("");
  const [dateStart, setDateStart] = useState<string>("");
  const [raceResults, setRaceResults] = useState<any>([]);

  const yearsArr = Object.values(years);
  const roundsArr = Object.values(rounds);
  useEffect(() => {
    const getList = async () => {
      let response = null;

      response = await formula1.getRaceResult(year, round);
      const jsonData = convertXmlToJson(String(response)).MRData.RaceTable;
      const { RaceName, Date, ResultsList } = jsonData.Race;
      setRaceName(RaceName);
      setDateStart(Date);
      setRaceResults(ResultsList.Result);
    };
    getList();
  }, [year, round]);

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

            <Typography variant="h4" component="h5" textAlign="start">
              Round {round}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "baseline", pb: 2 }}>
            <Typography variant="body1" textAlign="start" sx={{ py: 2 }}>
              Race name: {raceName}
            </Typography>

            <Typography variant="body2" component="h5" textAlign="start">
              Date start: {dateStart}
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
          </Box>{" "}
          <Box mt={5}>
            <StickyHeaderTable data={raceResults} />
          </Box>
        </PagerShadow>
      </Grid>
    </Grid>
  );
};

export default Results;
