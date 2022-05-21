import { React, useState, memo } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";

const ShowPassword = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  //
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const { value, onChange, onBlur } = props;
  return (
    <FormControl>
      <InputLabel
        htmlFor="password"
        sx={{ flexGrow: 1, mt: 2, fontSize: 20, fontFamily: "koodak" }}
      >
        رمز عبور
      </InputLabel>
      <Grid container columns={6} sx={{ mt: 5 }}>
        <Input
          xs={3}
          sx={{ flexGrow: 1 }}
          id="password"
          name="password"
          type={passwordShown ? "text" : "password"}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          required
        />
        <span
          xs={3}
          className="iconeHolder text-white p-2 border border-secondary fs-5"
          onClick={togglePassword}
        >
          {!passwordShown && <VisibilityIcon onClick={togglePassword} />}
          {passwordShown && <VisibilityOffIcon onClick={togglePassword} />}
        </span>
      </Grid>
    </FormControl>
  );
};

export default memo(ShowPassword);
