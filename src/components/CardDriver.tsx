import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CustomizedDialogs from "./CustomizedDialogs";
type TProps = {
  drive: any;
};
const CardDriver: React.FC<TProps> = ({ drive }) => {
  const [isOpenDialog, setOpenDilog] = React.useState<boolean>(false);
  return (
    <>
      <Card
        sx={{ maxWidth: 345, margin: "0 auto" }}
        onClick={() => setOpenDilog(true)}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={drive.image}
            alt="avata"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="start"
            >
              {drive.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="start"
            >
              {drive.country}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              textAlign="start"
            >
              {drive.DateOfBirth}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <CustomizedDialogs
        isOpen={isOpenDialog}
        setOpenDilog={setOpenDilog}
        info={drive}
      />
    </>
  );
};

export default CardDriver;
