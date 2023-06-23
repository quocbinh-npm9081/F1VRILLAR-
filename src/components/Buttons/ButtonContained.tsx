import React from "react";
import Button from "@mui/material/Button";
type TProps = {
  title: string;
  iconComponent: React.ReactNode;
  handleClick: () => void;
};
const ButtonContained: React.FC<TProps> = ({
  title,
  iconComponent,
  handleClick,
}) => {
  return (
    <Button
      variant="contained"
      endIcon={iconComponent}
      onClick={handleClick}
      sx={{ height: "100%" }}
    >
      {title}
    </Button>
  );
};

export default ButtonContained;
