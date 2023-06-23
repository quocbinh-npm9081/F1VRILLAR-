import React from "react";
import Button from "@mui/material/Button";
type TProps = {
  title: string;
};
const ButtonOutline: React.FC<TProps> = ({ title }) => {
  return <Button variant="outlined">{title}</Button>;
};

export default ButtonOutline;
