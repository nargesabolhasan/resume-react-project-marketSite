import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

const InputChange = (props) => {
  const {
    inputType,
    changeHandler,
    value,
    clickHandler,
    keyInput,
    keyDownHandler,
    disableInput,
    placeholders,
    inputId,
  } = props;
  return (
    <div>
      <TextField
        variant="outlined"
        type={inputType}
        defaultValue={value}
        onChange={changeHandler}
        onClick={clickHandler}
        key={keyInput}
        onKeyDown={keyDownHandler}
        disabled={disableInput}
        placeholder={placeholders}
        id={inputId}
      />
    </div>
  );
};

InputChange.propTypes = {
  inputType: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
  clickHandler: PropTypes.func.isRequired,
  keyDownHandler: PropTypes.func.isRequired,
  disableInput: PropTypes.bool,
  placeholders: PropTypes.string,
  value: PropTypes.string,
  inputId: PropTypes.string.isRequired,
};

export default InputChange;
