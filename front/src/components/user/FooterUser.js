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
import AttachEmailIcon from "@mui/icons-material/AttachEmail";

const Item = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    background: "#ba6b6c",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize:10
  },
  [theme.breakpoints.up("md")]: {
    background: "#ba6b6c",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  [theme.breakpoints.up("lg")]: {
    background: "#ba6b6c",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const Div = styled("div")(({ theme }) => ({
  direction: "rtl",
  width: "600px",
  padding: "6px",
  margin: "0 10px",
  fontSize: 15,
}));

const ResponsiveText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("lg")]: {
    display: "block",
    direction: "rtl",
    fontFamily: "koodak",
    width: 600,
  },
}));

const MainFooter = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-around",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-around",
  },
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    alignItems: "start",
    justifyContent: "space-around",
    flexDirection: "row",
  },
}));

export default function FullWidthGrid() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        borderTop: 10,
        borderBottom: 10,
        p: 3,
        borderColor: "#ba6b6c",
        mt: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <MainFooter>
        <Grid
          container
          spacing={2}
          sx={{ direction: "rtl", order: { xs: 2, lg: 1 } }}
        >
          <Grid item xs={12} md={12}>
            <Item
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Typography sx={{ direction: "rtl", fontFamily: "SansWeb" }}>
                راه های ارتباطی
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <AddLocationAltIcon />
              <Typography sx={{ direction: "rtl", fontFamily: "SansWeb" }}>
                خیابان رفعتی کوچه هاشمی زاده پلاک 33
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <LocalPhoneIcon />
              <Typography sx={{ direction: "rtl", fontFamily: "SansWeb" }}>
                02122556644 - 021559877 - 0217788357
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={12}>
            <Item
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <AttachEmailIcon />
              <Typography sx={{ fontFamily: "SansWeb" }}>
                iranSib@yahoo.com
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "space-around",
            order: { xs: 2, lg: 2 },
          }}
        >
          <ResponsiveText variant="h4">شرایط تخفیف ها :</ResponsiveText>
          <ResponsiveText>
            در صورت نداشتن کد تخفیف می توانید با ثبت نام در انواع قرعه کشی ها یا
            مناسبت های تخفیفاتی مطلع شوید و خریدی لذت بخش را تجربه کنید با معرفی
            لینک ثبت نام به دوستان خود شامل دریافت کد تخفیف خواهید شد و همچنین
            اولین تجربه خرید شما در سایت با کد تخفیف ویژه ای همراه خواهد شد
          </ResponsiveText>
          <ResponsiveText variant="h4">شرایط ارسال محصولات ها :</ResponsiveText>
          <ResponsiveText>
            ارسال محصولات با پست انجام شده و هزینه ارسال به تمام نقاط ایران
            کاملا رایگان می باش
          </ResponsiveText>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "space-around",
            order: { xs: 1, lg: 3 },
          }}
        >
          <Typography
            variant="h4"
            sx={{ direction: "rtl", fontFamily: "koodak", mr: { md: 3 } ,fontSize: { xs:25, lg: 35, md: 30 }}}
          >
            درباره ما :
          </Typography>
          <Div
            sx={{
              direction: "rtl",
              fontFamily: "koodak",
              mr: { md: 3 },
              width: { xs: 300,sm: 500 , lg: 600, md: 500 },
            }}
          >
            سایت سیب ایرانی فعالیت خود را با هدف ایجاد وب سایت و فروشگاهی متفاوت
            در زمینه ارائه محصولات و خدمات اپل به صورت حرفه‌ای آغاز کرد و در
            تمام مدت فعالیت با استفاده درست از انتقادات و تجربه‌های مختلف
            توانسته تا علاوه بر کسب همراهی و اعتماد طیف وسیعی از کاربران، همواره
            در ارائه محصولات و انواع خدمات پس از فروش اعم از بیمه، گارانتی،
            خدمات نرم‌افزاری و سخت‌افزاری و غیره، عملکردی متمایز داشته باشد.
            تمامی این تلاش‌ها تنها به یک دلیل بوده و آن‌هم ساخت لبخندی از رضایت
            بر لبان شما است که خوشبختانه تا به امروز تحقق یافته است.
          </Div>
          <ResponsiveText variant="h4">شرایط خرید حضوری :</ResponsiveText>
          <ResponsiveText>
            روز های شنبه تا چهارشنبه از ساعت 9 تا 20 پذیرای شما هستیم
          </ResponsiveText>
        </Box>
      </MainFooter>
      <Grid container spacing={2} sx={{ p: 2, direction: "rtl",display: { xs: "none", md: "flex", lg: "flex" } }}>
        <Grid item xs={3}>
          <Item
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <InstagramIcon />
            <Typography sx={{ fontFamily: "SansWeb" }}>iranSib@</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TwitterIcon />
            <Typography sx={{ fontFamily: "SansWeb" }}>iranSib@</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TelegramIcon />
            <Typography sx={{ fontFamily: "SansWeb" }}>iranSib@</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <WhatsAppIcon />
            <Typography sx={{ fontFamily: "SansWeb" }}>iranSib@</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

//.د
