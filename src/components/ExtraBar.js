import { useState } from "react";
import { Box, Snackbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  snack: {
    "& > *": {
      color: "#fff",
      backgroundColor: "#000000",
    },
  },
});

const ExtraBar = ({ open, toggleSnack }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    toggleSnack(false);
  };

  return (
    <Box>
      <Snackbar
        className={classes.snack}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      ></Snackbar>
    </Box>
  );
};

export default ExtraBar;
