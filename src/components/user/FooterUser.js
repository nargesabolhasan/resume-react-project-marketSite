import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#6c4eb8",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, borderTop:10, p: 3, borderColor: "primary.main",mt:20 }}>
      <Box  sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-around",
        }}>
                <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "space-around",
        }}
      >
        <Typography
          variant="h4"
          sx={{ direction: "rtl", fontFamily: "koodak", pr: 4 }}
        >
              شرایط تخفیف ها :
        </Typography>
        <Box sx={{ direction: "rtl", width: "700px", p: 3 }}>
          در صورت نداشتن کد تخفیف می توانید 
          با ثبت نام در انواع قرعه کشی ها یا مناسبت های تخفیفاتی<br></br> مطلع شوید و خریدی لذت بخش را تجربه کنید
           با معرفی لینک ثبت نام به دوستان خود شامل دریافت <br></br>کد تخفیف خواهید شد  
           و همچنین اولین تجربه خرید شما در سایت با کد تخفیف ویژه ای همراه<br></br> خواهد شد
        </Box>
        <Typography
          variant="h4"
          sx={{ direction: "rtl", fontFamily: "koodak", pr: 4 }}
        >
              شرایط ارسال محصولات ها :
        </Typography>
        <Box sx={{ direction: "rtl", width: "700px", p: 3 }}>
        ارسال محصولات با پست انجام شده و هزینه ارسال به تمام نقاط ایران کاملا رایگان می باش
        </Box>
        
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "space-around",
        }}
      >
        <Typography
          variant="h4"
          sx={{ direction: "rtl", fontFamily: "koodak", pr: 4 }}
        >
          درباره ما :
        </Typography>
        <Box sx={{ direction: "rtl", width: "700px", p: 3 }}>
          سایت سیب ایرانی فعالیت خود را با هدف ایجاد وب سایت و فروشگاهی متفاوت
          در زمینه ارائه محصولات و خدمات اپل به صورت حرفه‌ای آغاز کرد و در تمام
          مدت فعالیت با استفاده درست از انتقادات و تجربه‌های مختلف توانسته تا
          علاوه بر کسب همراهی و اعتماد طیف وسیعی از کاربران، همواره در ارائه
          محصولات و انواع خدمات پس از فروش اعم از بیمه، گارانتی، خدمات
          نرم‌افزاری و سخت‌افزاری و غیره، عملکردی متمایز داشته باشد. تمامی این
          تلاش‌ها تنها به یک دلیل بوده و آن‌هم ساخت لبخندی از رضایت بر لبان شما
          است که خوشبختانه تا به امروز تحقق یافته است.
        </Box>
        <Typography
          variant="h4"
          sx={{ direction: "rtl", fontFamily: "koodak", pr: 4 }}
        >
              شرایط خرید حضوری  :
        </Typography>
        <Box sx={{ direction: "rtl", width: "700px", p: 3 }}>
         روز های شنبه تا چهارشنبه از ساعت 9 تا 20 پذیرای شما هستیم
        </Box>
      </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Item
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {" "}
            <AddLocationAltIcon />
            <Typography>خیابان رفعتی کوچه هاشمی زاده پلاک 33</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {" "}
            <LocalPhoneIcon />
            <Typography>02122556644 - 021559877 - 0217788357</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} md={1}>
          <Item
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {" "}
            <InstagramIcon />
            <Typography>@iranSib</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} md={1}>
          <Item
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {" "}
            <TwitterIcon />
            <Typography>@iranSib</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} md={1}>
          <Item
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {" "}
            <TelegramIcon />
            <Typography>@iranSib</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} md={1}>
          <Item
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {" "}
            <WhatsAppIcon />
            <Typography>@iranSib</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} md={2}>
          <Item
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {" "}
            <Typography sx={{ direction: "rtl", fontFamily: "koodak" }}>
              راه های ارتباطی
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}


//.د