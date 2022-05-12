import React from 'react'
import Button from "@mui/material/Button";
import PropTypes from 'prop-types';

const ButtonAdd = (props) => {
  const{children,clickHandler,disabled}=props
  return (
    <Button
    variant="contained"
    sx={{ fontSize: 20, fontFamily: "koodak", mt: 3 }}
    type="submit"
    onClick={clickHandler}
    disabled={disabled}
  >
    {children}
  </Button>
  )
}
ButtonAdd.propTypes = {
  children: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

export default ButtonAdd