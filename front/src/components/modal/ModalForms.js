import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import "./modals-styles.scss";
import { styled } from "@mui/material/styles";

const Div = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    position: "relative",
    width:" 300px",
    height:"600px",
    overflowY: "scroll",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },

  [theme.breakpoints.up("md")]: {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    height: 800,
    overflowY: "scroll",
    border: "2px solid #000",
    boxShadow: 24,
    padding:"10px",
  },
  [theme.breakpoints.up("lg")]: {
    position: "relative",
    top: "50%",
    left: "80%",
    margin:"0 auto",
    transform: "translate(-50%, -50%)",
    width: 700,
    padding:"10px",
    height: 800,
    overflowY: "scroll",
    backgroundColor: "withe",
    border: "2px solid #000",
    boxShadow: 24,
  },

}));

export default function BasicModal(props) {
  const { open, handleclose, classname, children } = props;

  return (
    <>
      <Modal
        className="modal"
        open={open}
        onClose={handleclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Div>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontSize: 20,
              fontFamily: "koodak",
              direction: "rtl",
            }}
            className={classname}
          ></Typography>
          <Box
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: 20,
              fontFamily: "koodak",
              direction: "rtl",
              textAlign: "center",
            }}
          >
            {children}
          </Box>
        </Div>
      </Modal>
    </>
  );
}

BasicModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleclose: PropTypes.func.isRequired,
};
