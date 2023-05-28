import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Typography } from "@mui/material";
import { LinkStyled } from "./Styled.styled";

const SharedLayout = () => {
  return (
    <>
      <AppBar>
        <Box
          component="nav"
          sx={{
            display: { xs: "flex" },
            height: "60px",

            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
            marginLeft: 10,
          }}
        >
          <LinkStyled to="/">
            <Typography variant="h5"> Shop</Typography>
          </LinkStyled>

          <LinkStyled to="/cart">
            <Typography variant="h5"> Shopping Cart</Typography>
          </LinkStyled>
        </Box>
      </AppBar>
      <Box
        component="main"
        sx={{
          minHeight: "calc(100vh - 65px)",
          pt: 10,
          pb: 3,
          pl: 3,
          pr: 3,
        }}
      >
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

export default SharedLayout;
