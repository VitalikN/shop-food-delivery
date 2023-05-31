import { Box } from '@mui/material';
import { Products } from 'components/products/products';
import { Restaurant } from 'components/restaurant/restaurant';
import { useState } from 'react';
// import { fetchShops } from 'service/api';

const ShopPage = ({ shops, handleAdd, loading }) => {
  const [changeShop, setChangeShop] = useState(null);

  const changeShopClick = id => {
    switch (id) {
      case 1:
        setChangeShop('Burger King');
        break;
      case 2:
        setChangeShop('CFK');
        break;

      default:
        setChangeShop(null);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
      }}
    >
      <Restaurant changeShopClick={changeShopClick} />
      {changeShop && (
        <Products
          shops={shops}
          handleAdd={handleAdd}
          changeShop={changeShop}
          loading={loading}
        />
      )}
    </Box>
  );
};
export default ShopPage;
