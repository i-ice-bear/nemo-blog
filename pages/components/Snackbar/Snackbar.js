import * as React from "react";
import Stack from "@mui/material/Stack";
import { Button } from "@nextui-org/react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import contactresponsive from "../../page/scss/Contact.module.scss";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackbarComponent(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  return (
    <>
      <button
        type="submit"
        onClick={() => handleClick(SlideTransition)}
        className={contactresponsive.sumbitbtn}
      >
        Submit
      </button>
      <button type="submit" className={contactresponsive.sumbitbtn}>
        Get Back
      </button>
      <Snackbar
        className="w-50"
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default SnackbarComponent;
