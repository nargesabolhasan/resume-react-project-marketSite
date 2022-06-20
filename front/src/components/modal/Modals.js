import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";

const BaseModal = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "2px solid #000",
    boxShadow: 24,
    padding: "10px",
    minHeight: "150px",
    width: "300px",
  },
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "2px solid #000",
    boxShadow: 24,
    padding: "10px",
    minHeight: "150px",
    width: "450px",
  },
  [theme.breakpoints.up("lg")]: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "2px solid #000",
    boxShadow: 24,
    padding: "10px",
    minHeight: "150px",
    width: "450px",
  },
}));

export default function BasicModal(props) {
  const { open, handleclose, classname, bodyMassages, children } = props;

  return (
    <>
      <Modal
        open={open}
        onClose={handleclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BaseModal>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              borderBottom: 1,
              fontSize: 20,
              fontFamily: "koodak",
              direction: "rtl",
              mx: "auto"
            }}
            className={classname}
          ></Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: 20,
              fontFamily: "koodak",
              direction: "rtl",
              textAlign: "center",
            }}
          >
            {bodyMassages}
            {children}
          </Typography>
        </BaseModal>
      </Modal>
    </>
  );
}

BasicModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleclose: PropTypes.func.isRequired,
};
