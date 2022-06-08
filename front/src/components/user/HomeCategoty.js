import React from "react";
import useGetAxios from "../../axios/useGetAxios";
import { useNavigate, Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Titles = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    fontFamily: "koodak",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
    fontFamily: "koodak",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px",
    fontFamily: "koodak",
  },
}));

const HomeCategoty = () => {
  let navigate = useNavigate();
  const { data, loading, error } = useGetAxios(`/categories/?_embed=products`);
  const handleNavigate = (id) => {
    navigate(`/categories/${id}`);
  };
  //const user = useSelector((state) => state);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Box>
          {data?.data.map((item) => (
            <Box onClick={handleNavigate} item xs={12}>
            <Titles key={item.id} xs={6}>{item.name}</Titles>
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
};

export default HomeCategoty;
