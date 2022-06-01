import React, { useEffect, useState } from "react";
import LayoutUser from "../components/Layouts/Layout-user";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ConfigPayment from "../components/user/ConfigPayment";

const Div = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  margin: "0 auto",
  width: "80%",
}));
const Icone = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "40px",
  marginLeft:"20px",
}));

const ResultPayment = () => {
  const location = useLocation();
  const result = location.search;
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (result === "?failer") {
      setIsSuccess(false);
    } else {
      setIsSuccess(true);
    }
  }, [result]);

  return (
    <Box>
      {isSuccess ? (
        <Div
          sx={{
            mt: 45,
            fontSize: 40,
            textAlign: "center",
            border: 3,
            width: 500,
            p: 5,
            borderColor: "success.main",
          }}
        >
          <Typography variant="h3"  sx={{ fontFamily: "koodak" }}>نتیجه تراکنش</Typography>
          <Icone>
            <Typography
              sx={{ fontSize: 40, fontFamily: "koodak", color: "success.main" }}
            >
              موفقیت
            </Typography>
            <CheckCircleIcon sx={{ fontSize: 100, color: "success.main" }} />
          </Icone>

          <Typography sx={{ fontSize: 30, fontFamily: "koodak", mt: 5 }}>
            پرداخت شما با موفقیت انجام شد . سپاس از خرید شما
          </Typography>
          <ConfigPayment/>
        </Div>
      ) : (
        <Div
        sx={{
          mt: 45,
          fontSize: 40,
          textAlign: "center",
          border: 3,
          width: 500,
          p: 5,
          borderColor: "fail.main",
        }}
      >
        <Typography variant="h3"  sx={{ fontFamily: "koodak" }}>نتیجه تراکنش</Typography>
        <Icone>
          <Typography
            sx={{ fontSize: 40, fontFamily: "koodak", color: "fail.main" }}
          >
            شکست
          </Typography>
          <CancelIcon sx={{ fontSize: 100, color: "fail.main" }} />
        </Icone>

        <Typography sx={{ fontSize: 30, fontFamily: "koodak", mt: 5 }}>
        تراکنش با خطا مواجه شد . در صورت خروج وجه واریزی از حساب شما ، تا آخر روز به حساب شما عودت می گردد 
        </Typography>
      </Div>
      )}
    </Box>
  );
};

export default LayoutUser(ResultPayment);
