import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Box, Typography } from '@mui/material';
import { LinkStyled } from './Styled.styled';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const SharedLayout = () => {
  return (
    <>
      <AppBar
        sx={{
          background: '#ffffff',
          color: '#414141',
        }}
      >
        <Box
          component="nav"
          sx={{
            display: { xs: 'flex' },
            height: '60px',

            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 2,
            marginLeft: 10,
          }}
        >
          <LinkStyled to="/">
            <Typography variant="h5"> Shop</Typography>
          </LinkStyled>

          <LinkStyled to="/cart">
            <ShoppingCartOutlinedIcon fontSize="large" />
          </LinkStyled>
        </Box>
      </AppBar>
      <Box
        component="main"
        sx={{
          minHeight: 'calc(100vh - 148px)',

          pt: 10,
          pb: 1,
          pl: 1,
          pr: 1,
        }}
      >
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </Box>
      <AppBar
        component="footer"
        sx={{
          position: 'relative',
          background: ' #ffffff',
          color: '#414141',
        }}
      >
        <Box
          sx={{
            display: { xs: 'flex' },
            height: '60px',

            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1">Disigned by Vitalii Nozhenko</Typography>
        </Box>
      </AppBar>
    </>
  );
};

export default SharedLayout;
