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
              اپل در سال 2020 تغییراتی مهم را در کامپیوترهای مک اعمال کرد که
              قدرتمندترین مدل آن‌ها با عنوان مک بوک پرو 2020 همراه با پردازنده
              M1 آماده معرفی و عرضه به بازار جهانی شد. مک بوک پرو 2020 با تراشه
              هوشمند و اختصاصی اپل سیلیکون توانسته قدرتی بی‌نظیر را به شکلی
              بهینه و بدون مصرف زیاد انرژی و تولید حرارت آماده اجرای کارهای
              روزمره کاربران کند. این محصول در تست‌های بنچ مارک، قدرت پردازشی و
              موارد دیگر در شرایطی بهینه‌تر نسبت به مدل‌های مشابه خود که با
              تراشه اینتل تولیدشده‌اند قرار دارند. استفاده از تراشه‌های اپل
              سیلیکون بلندپروازانه‌ترین حرکت اپل است که طی پروژه‌ای چهار ساله
              آماده اجرایی شده است. این ایده اولین بار توسط استیو جابز مطرح شد
              تا اپل روزی بتواند تمام سخت افزارهای لازم برای یک محصول را به طور
              کاملاً خودکفا طراحی کند و حالا مک بوک‌های مبتنی بر اپل سیلیکون
              اولین نمونه از این محصولات هستند.
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
              بررسی آیپد پرو ۲۰۲۱ نسل ۵ | انقلابی در هویت آیپدها آیپد پرو ۲۰۲۱
              نسل ۵ که در جریان کنفرانس بهاری شرکت اپل رونمایی شد، یکی از
              انقلابی‌ترین محصولات غول فناوری این روزها است که هویتی جدید به
              دسته بندی آیپدها داده است. آیپد پرو ۲۰۲۱ نسل ۵ دارای پردازنده M1
              است که تا پیش از این در کامپیوترهای مک مورد استفاده قرار گرفته بود
              و می‌تواند با سیستم عامل iPadOS امکاناتی ویژه را در اختیار کاربران
              خود قرار دهد. پشتیبانی از این تراشه جدید به آیپد پرو کمک کرده تا
              با سرعت و قدرت بیشتری امکان اجرای کارهای مختلف را داشته باشد و
              پردازش‌های مرکزی و گرافیکی را به شکلی متفاوت انجام دهد. این
              پردازنده جدید باعث شده تا هویتی متفاوت به آیپدها داده شود و این
              محصولات بتوانند به عنوان یک دستگاه کاملاً مستقل و کافی برای
              کاربری‌های مختلف آماده کار باشند.
              <Typography sx={{ display: { xs: "none", md: "none", lg:"flex" },pb:2,fontFamily: "koodak",fontSize:20}}>
                تراشه M1 هسته اصلی قدرت و پردازش آیپد پرو ۲۰۲۱ نسل ۵ آیپد جدید
                از پردازنده‌ای استفاده می‌کند که تا پیش از این فقط و فقط در
                کامپیوترهای مک مبتنی بر اپل سیلیکون تعبیه شده بود. این موضوع
                باعث شده تا آیپد بتواند در سیستم عامل آیپد او اس قدرتی مشابه با
                مک بوک‌ها را به کاربر خود ارائه دهد و بدون محدودیت کارهای مختلف
                و وظایف مورد نیاز کاربر را اجرا کند. تراشه M1 باعث شده تا آیپد
                پروی جدید به سریع‌ترین دستگاه در نوع خود تبدیل شود. این تراشه
                طراحی شده تا بیشترین امکانات را به علاقه‌مندان فناوری و تکنولوژی
                ارائه دهد و از آن طریق کاربران بتوانند بدون نیاز به کامپیوترهای
                دیگر تمامی کارهای مورد نظر خود را انجام دهند.
                <br></br>
                جالب اینجا است که قدرت پردازشی آیپد جدید افزایش قابل توجهی داشته
                است و در عین حال مصرف باتری و انرژی این محصول نیز به طور کلی
                بهبود داشته است. آیپد پرو می‌تواند با یک بار شارژ باتری برای یک
                روز کاری کامل پاسخگوی نیازهای کاربر باشد و تمامی امکانات ممکن را
                در اختیار استفاده کننده خود قرار دهد. تراشه M1 تعبیه شده در این
                آیپدها دارای ۸ هسته پردازش مرکزی، ۸ هسته پردازش گرافیکی و ۱۶
                هسته مربوط به پردازش‌های هوشمند مصنوعی است که در مجموع باعث شده
                تا قدرت پردازنده تا ۵۰ درصد نسبت به نسل پیشین بهبود داشته باشد و
                قدرت پردازش گرافیکی نیز تا ۴۰ درصد در دستگاه‌های جدید سریع‌تر
                شود. نمایشگر باکیفیت‌تر که تا پیش از این هرگز معادل آن را
                ندیده‌اید
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
