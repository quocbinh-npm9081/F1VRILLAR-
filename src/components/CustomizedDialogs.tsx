import * as React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import AccordionTutorial from "./AccordionTutorial";
import BarChart from "./Charts/BarChart";
type TProps = {
  isOpen: boolean;
  setOpenDilog: (isOp: boolean) => void;
  info: any;
};
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const CustomizedDialogs = ({ isOpen, setOpenDilog, info }: TProps) => {
  const handleClose = () => {
    setOpenDilog(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {info.name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: "flex", margin: 1 }} alignItems="end">
            <Box>
              <img src={info.image} alt="fake driver" />
            </Box>
            <Box>
              <Typography gutterBottom>Team: {info.team}</Typography>
              <Typography gutterBottom>Country: {info.country}</Typography>
              <Typography gutterBottom>
                DateOfBirth: {info.DateOfBirth}
              </Typography>
              <Typography gutterBottom>Podiums: {info.podiums}</Typography>
              <Typography gutterBottom>Points: {info.points}</Typography>
              <Typography gutterBottom>
                World Championships: {info.worldChampionships}
              </Typography>
              <Typography gutterBottom>
                Highest Race Finish: {info.highestRaceFinish}
              </Typography>
              <Typography gutterBottom>
                Highest Grid Position: {info.highestGridPosition}
              </Typography>
            </Box>
          </Box>

          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
          <AccordionTutorial title="Achievements">
            <BarChart driverInfo={info} />
          </AccordionTutorial>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};
export default CustomizedDialogs;
