import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const { open, handleclose, classname, children } = props;

  return (
    <>
      <Modal
        open={open}
        onClose={handleclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              borderBottom: 1,
              fontSize: 20,
              fontFamily: "koodak",
              direction: "rtl",
            }}
            className={classname}
          >
          </Typography>
          <Box
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: 20, fontFamily: "koodak", direction: "rtl",textAlign: "center"}}
          >
            {children}
          </Box>
        </Box>
      </Modal>
    </>
  );
}

BasicModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleclose: PropTypes.func.isRequired,
};