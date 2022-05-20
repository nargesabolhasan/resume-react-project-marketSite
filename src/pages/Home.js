import React, { useState } from "react";
import LayoutUser from "../components/Layouts/Layout-user";
import { useNavigate, Outlet } from "react-router-dom";
import { FooterUser, MainUser, ModalAddProduct } from "../components";
import homeBackGround from "../assets/images/logo/homeBackGround.webp";
import macbookpro2021 from "../assets/images/logo/macbookpro2021.png";
import ipad from "../assets/images/logo/ipad.jpg";
import { styled } from "@mui/material/styles";
import useGetAxios from "../axios/useGetAxios";
import CardProduct from "../components/user/home/Card-Product";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "../components/user/home/Slider";

const Div = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  margin: "0 auto",
  width: "80%",
}));

const PhotoWraper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  width: "100%",
  margin: "0 auto",
}));

const Home = () => {
  let navigate = useNavigate();
  const { data, loading, error } = useGetAxios(`/categories/?_embed=products`);

  const [handleOpen, setHandleOpen] = useState({ open: true });

  //const matches = useMediaQuery("(max-width:600px)");

  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const handleNavigate = (id) => {
    navigate(`/categories/${id}`, { replace: true });
  };

  return (
    <>
      <Div>
        
        {/* <img src={homeBackGround} style={{ margin: "30px", width: "100%" }} /> */}
        <Slider handleOpen={handleOpen}  />

        <PhotoWraper>
          <Box
            sx={{
              direction: "rtl",
              fontFamily: "koodak",
              width: "50%",
              p: 3,
              boxShadow: "-2px 22px rgba(0,0,0,0.2)",
            }}
          >
            اپل در سال 2020 تغییراتی مهم را در کامپیوترهای مک اعمال کرد که
            قدرتمندترین مدل آن‌ها با عنوان مک بوک پرو 2020 همراه با پردازنده M1
            آماده معرفی و عرضه به بازار جهانی شد. مک بوک پرو 2020 با تراشه
            هوشمند و اختصاصی اپل سیلیکون توانسته قدرتی بی‌نظیر را به شکلی بهینه
            و بدون مصرف زیاد انرژی و تولید حرارت آماده اجرای کارهای روزمره
            کاربران کند. این محصول در تست‌های بنچ مارک، قدرت پردازشی و موارد
            دیگر در شرایطی بهینه‌تر نسبت به مدل‌های مشابه خود که با تراشه اینتل
            تولیدشده‌اند قرار دارند. استفاده از تراشه‌های اپل سیلیکون
            بلندپروازانه‌ترین حرکت اپل است که طی پروژه‌ای چهار ساله آماده اجرایی
            شده است. این ایده اولین بار توسط استیو جابز مطرح شد تا اپل روزی
            بتواند تمام سخت افزارهای لازم برای یک محصول را به طور کاملاً خودکفا
            طراحی کند و حالا مک بوک‌های مبتنی بر اپل سیلیکون اولین نمونه از این
            محصولات هستند.
          </Box>
          <img src={macbookpro2021} style={{ width: "50%" }} />
        </PhotoWraper>
        <PhotoWraper>
          <img src={ipad} style={{ width: "50%" }} />
          <Box
            sx={{
              direction: "rtl",
              fontFamily: "koodak",
              width: "50%",
              p: 3,
              boxShadow: "2px 22px rgba(0,0,0,0.2)",
            }}
          >
            بررسی آیپد پرو ۲۰۲۱ نسل ۵ | انقلابی در هویت آیپدها آیپد پرو ۲۰۲۱ نسل
            ۵ که در جریان کنفرانس بهاری شرکت اپل رونمایی شد، یکی از انقلابی‌ترین
            محصولات غول فناوری این روزها است که هویتی جدید به دسته بندی آیپدها
            داده است. آیپد پرو ۲۰۲۱ نسل ۵ دارای پردازنده M1 است که تا پیش از این
            در کامپیوترهای مک مورد استفاده قرار گرفته بود و می‌تواند با سیستم
            عامل iPadOS امکاناتی ویژه را در اختیار کاربران خود قرار دهد.
            پشتیبانی از این تراشه جدید به آیپد پرو کمک کرده تا با سرعت و قدرت
            بیشتری امکان اجرای کارهای مختلف را داشته باشد و پردازش‌های مرکزی و
            گرافیکی را به شکلی متفاوت انجام دهد. این پردازنده جدید باعث شده تا
            هویتی متفاوت به آیپدها داده شود و این محصولات بتوانند به عنوان یک
            دستگاه کاملاً مستقل و کافی برای کاربری‌های مختلف آماده کار باشند.
            تراشه M1 هسته اصلی قدرت و پردازش آیپد پرو ۲۰۲۱ نسل ۵ آیپد جدید از
            پردازنده‌ای استفاده می‌کند که تا پیش از این فقط و فقط در کامپیوترهای
            مک مبتنی بر اپل سیلیکون تعبیه شده بود. این موضوع باعث شده تا آیپد
            بتواند در سیستم عامل آیپد او اس قدرتی مشابه با مک بوک‌ها را به کاربر
            خود ارائه دهد و بدون محدودیت کارهای مختلف و وظایف مورد نیاز کاربر را
            اجرا کند. تراشه M1 باعث شده تا آیپد پروی جدید به سریع‌ترین دستگاه در
            نوع خود تبدیل شود. این تراشه طراحی شده تا بیشترین امکانات را به
            علاقه‌مندان فناوری و تکنولوژی ارائه دهد و از آن طریق کاربران بتوانند
            بدون نیاز به کامپیوترهای دیگر تمامی کارهای مورد نظر خود را انجام
            دهند.
            <br></br>
            جالب اینجا است که قدرت پردازشی آیپد جدید افزایش قابل توجهی داشته است
            و در عین حال مصرف باتری و انرژی این محصول نیز به طور کلی بهبود داشته
            است. آیپد پرو می‌تواند با یک بار شارژ باتری برای یک روز کاری کامل
            پاسخگوی نیازهای کاربر باشد و تمامی امکانات ممکن را در اختیار استفاده
            کننده خود قرار دهد. تراشه M1 تعبیه شده در این آیپدها دارای ۸ هسته
            پردازش مرکزی، ۸ هسته پردازش گرافیکی و ۱۶ هسته مربوط به پردازش‌های
            هوشمند مصنوعی است که در مجموع باعث شده تا قدرت پردازنده تا ۵۰ درصد
            نسبت به نسل پیشین بهبود داشته باشد و قدرت پردازش گرافیکی نیز تا ۴۰
            درصد در دستگاه‌های جدید سریع‌تر شود. نمایشگر باکیفیت‌تر که تا پیش از
            این هرگز معادل آن را ندیده‌اید
          </Box>
        </PhotoWraper>
      </Div>
      <FooterUser />
    </>
  );
};

export default LayoutUser(Home);

// function App() {
//   const [handleOpen, setHandleOpen] = useState({ open: true });

//   const matches = useMediaQuery("(max-width:600px)");
//   return (
//     <>
//       <AutoRotatingCarouselModal
//         handleOpen={handleOpen}
//         setHandleOpen={setHandleOpen}
//       />
//     </>
//   );
// }
// export default App
