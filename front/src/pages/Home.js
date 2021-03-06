import React, { useState } from "react";
import LayoutUser from "../components/Layouts/Layout-user";
import { FooterUser, HomeCategoty,} from "../components";
import macbookpro2021 from "../assets/images/logo/macbookpro2021.png";
import ipad from "../assets/images/logo/ipad.jpg";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Slider from "../components/user/home/Slider";
import { Typography } from "@mui/material";
import { useNavigate, NavLink, useParams } from "react-router-dom";

const Div = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  margin: "0 auto",
  width: "80%",
}));

const Paragraph = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    direction: "rtl",
  fontFamily: "koodak",
  width: "90%",
  padding: "5px",
  boxShadow: "-2px 22px #ba6b6c37",
  },
  [theme.breakpoints.up("md")]: {
    direction: "rtl",
  fontFamily: "koodak",
  width: "60%",
  padding: "10px",
  boxShadow: "-2px 22px #ba6b6c37",
  },
  [theme.breakpoints.up("lg")]: {
  direction: "rtl",
  fontFamily: "koodak",
  width: "50%",
  padding: "10px",
  boxShadow: "-2px 22px #ba6b6c37",
  }
}));

const PhotoWraper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    margin: "0 auto",
    marginTop: "10px",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    margin: "0 auto",
    marginTop: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    margin: "0 auto",
    marginTop: "10px",
  },
}));

const Img = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "300px",
  },
  [theme.breakpoints.up("md")]: {
    width: "500px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));
const Img1 = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "300px",
    order:1
  },
  [theme.breakpoints.up("md")]: {
    width: "500px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
    order:2
  },
}));

const Home = () => {
  const [handleOpen, setHandleOpen] = useState({ open: true });
  let navigate = useNavigate();

  const handleClick = () => {
    setHandleOpen({ open: true });
  };

  const handle = (id) => {
    //setHandleOpen({ open: true });
    navigate(`/products/${id}`);
  };

  return (
    <>
      <Div sx={{ mt:{ lg:20, md: 20, xs:2 }}}>
        <Slider handleOpen={handleOpen} />
        <Paper
          sx={{ margin: "30px 0", boxShadow: "5px -10px 20px 2px #ba6b6c37",pb:2 }}
        >
          <PhotoWraper>
            <Paragraph sx={{ fontSize: { xs: 15, md: 20, lg: 20 } , order: { xs: 2, md: 1, lg: 1 },pb: { xs: 0, md: 0, lg: 8 },pt: { xs: 0, md: 0, lg:10 }}}>
              ?????? ???? ?????? 2020 ???????????????? ?????? ???? ???? ?????????????????????? ???? ?????????? ?????? ????
              ?????????????????????? ?????? ??????????? ???? ?????????? ???? ?????? ?????? 2020 ?????????? ???? ????????????????
              M1 ?????????? ?????????? ?? ???????? ???? ?????????? ?????????? ????. ???? ?????? ?????? 2020 ???? ??????????
              ???????????? ?? ?????????????? ?????? ?????????????? ?????????????? ?????????? ??????????????? ???? ???? ????????
              ?????????? ?? ???????? ???????? ???????? ?????????? ?? ?????????? ?????????? ?????????? ?????????? ????????????
              ???????????? ?????????????? ??????. ?????? ?????????? ???? ??????????????? ?????? ?????????? ???????? ?????????????? ??
              ?????????? ???????? ???? ???????????? ????????????????? ???????? ???? ??????????????? ?????????? ?????? ???? ????
              ?????????? ?????????? ????????????????????????? ???????? ??????????. ?????????????? ???? ??????????????????? ??????
              ?????????????? ??????????????????????????????????? ???????? ?????? ?????? ???? ???? ????????????????? ???????? ????????
              ?????????? ???????????? ?????? ??????. ?????? ???????? ?????????? ?????? ???????? ?????????? ???????? ???????? ????
              ???? ?????? ???????? ???????????? ???????? ?????? ???????????????? ???????? ???????? ???? ?????????? ???? ???? ??????
              ???????????? ???????????? ?????????? ?????? ?? ???????? ???? ??????????????? ?????????? ???? ?????? ??????????????
              ?????????? ?????????? ???? ?????? ?????????????? ??????????.
            </Paragraph>
            <Img1 src={macbookpro2021} onClick={() => handle(7)}/>
          </PhotoWraper>
          <PhotoWraper>
            <Img src={ipad} onClick={() => handle(7)}/>
            <Paragraph
              sx={{
                fontSize: { xs: 15, md: 20, lg: 20 },
              }}
            >
              ?????????? ???????? ?????? ???????? ?????? ?? | ?????????????? ???? ???????? ???????????? ???????? ?????? ????????
              ?????? ?? ???? ???? ?????????? ?????????????? ?????????? ???????? ?????? ?????????????? ?????? ?????? ????
              ????????????????????????? ?????????????? ?????? ???????????? ?????? ?????????? ?????? ???? ?????????? ???????? ????
              ???????? ???????? ???????????? ???????? ??????. ???????? ?????? ???????? ?????? ?? ?????????? ???????????????? M1
              ?????? ???? ???? ?????? ???? ?????? ???? ?????????????????????? ???? ???????? ?????????????? ???????? ?????????? ??????
              ?? ????????????????? ???? ?????????? ???????? iPadOS ???????????????? ???????? ???? ???? ???????????? ??????????????
              ?????? ???????? ??????. ???????????????? ???? ?????? ?????????? ???????? ???? ???????? ?????? ?????? ???????? ????
              ???? ???????? ?? ???????? ???????????? ?????????? ?????????? ???????????? ?????????? ???? ?????????? ???????? ??
              ????????????????????? ?????????? ?? ?????????????? ???? ???? ???????? ???????????? ?????????? ??????. ??????
              ???????????????? ???????? ???????? ?????? ???? ?????????? ???????????? ???? ???????????? ???????? ?????? ?? ??????
              ?????????????? ?????????????? ???? ?????????? ???? ???????????? ???????????? ?????????? ?? ???????? ????????
              ????????????????????? ?????????? ?????????? ?????? ??????????.
              <Typography sx={{ display: { xs: "none", md: "none", lg:"flex" },pb:2,fontFamily: "koodak",fontSize:20}}>
                ?????????? M1 ???????? ???????? ???????? ?? ???????????? ???????? ?????? ???????? ?????? ?? ???????? ????????
                ???? ??????????????????????? ?????????????? ????????????? ???? ???? ?????? ???? ?????? ?????? ?? ?????? ????
                ?????????????????????? ???? ?????????? ???? ?????? ?????????????? ?????????? ?????? ??????. ?????? ??????????
                ???????? ?????? ???? ???????? ???????????? ???? ?????????? ???????? ???????? ???? ???? ?????????? ?????????? ????
                ???? ????????????? ???? ???? ?????????? ?????? ?????????? ?????? ?? ???????? ?????????????? ???????????? ??????????
                ?? ?????????? ???????? ???????? ?????????? ???? ???????? ??????. ?????????? M1 ???????? ?????? ???? ????????
                ???????? ???????? ???? ??????????????????? ???????????? ???? ?????? ?????? ?????????? ??????. ?????? ??????????
                ?????????? ?????? ???? ?????????????? ?????????????? ???? ???? ??????????????????????? ???????????? ?? ????????????????
                ?????????? ?????? ?? ???? ???? ???????? ?????????????? ?????????????? ???????? ???????? ???? ??????????????????????
                ???????? ?????????? ???????????? ???????? ?????? ?????? ???? ?????????? ????????.
                <br></br>
                ???????? ?????????? ?????? ???? ???????? ?????????????? ???????? ???????? ???????????? ???????? ?????????? ??????????
                ?????? ?? ???? ?????? ?????? ???????? ?????????? ?? ?????????? ?????? ?????????? ?????? ???? ?????? ??????
                ?????????? ?????????? ??????. ???????? ?????? ????????????????? ???? ???? ?????? ???????? ?????????? ???????? ????
                ?????? ???????? ???????? ?????????????? ?????????????? ?????????? ???????? ?? ?????????? ?????????????? ???????? ????
                ???? ???????????? ?????????????? ?????????? ?????? ???????? ??????. ?????????? M1 ?????????? ?????? ???? ??????
                ???????????? ?????????? ?? ???????? ???????????? ???????????? ?? ???????? ???????????? ?????????????? ?? ????
                ???????? ?????????? ???? ????????????????????? ???????????? ???????????? ?????? ???? ???? ?????????? ???????? ??????
                ???? ???????? ???????????????? ???? ???? ???????? ???????? ???? ?????? ?????????? ?????????? ?????????? ???????? ??
                ???????? ???????????? ?????????????? ?????? ???? ???? ???????? ???? ????????????????????? ???????? ???????????????
                ??????. ?????????????? ????????????????????? ???? ???? ?????? ???? ?????? ???????? ?????????? ???? ????
                ???????????????????
              </Typography>
            </Paragraph>
          </PhotoWraper>
        
          
        </Paper>
        <Paper
          sx={{ margin: "30px 0", boxShadow: "5px -10px 20px 2px #ba6b6c37" ,pb:5,pt:1,width: "100%"}}
        >
        <HomeCategoty/>
        </Paper>
      </Div>
      <FooterUser />
    </>
  );
};

export default LayoutUser(Home);
