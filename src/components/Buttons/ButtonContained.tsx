import React from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
type TProps = {
  title: string;
};
const ButtonContained: React.FC<TProps> = ({ title }) => {
  return (
    <Button variant="contained" endIcon={<SendIcon />}>
      {title}
    </Button>
  );
};

export default ButtonContained;
