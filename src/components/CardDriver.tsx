import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
type TProps = {
  drive: any;
};
const CardDriver: React.FC<TProps> = ({ drive }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="start"
          >
            {drive.GivenName}
            {""} {drive.FamilyName}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="start">
            {drive.Nationality}
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
  );
};

export default CardDriver;
