import { Box } from '@mui/material';
import { Products } from 'components/products/products';
import { Restaurant } from 'components/restaurant/restaurant';
import { useState } from 'react';
// import { fetchShops } from 'service/api';

const ShopPage = ({ shops, handleAdd }) => {
  // const [shops, setShops] = useState([]);
  const [changeShop, setChangeShop] = useState(null);

  // useEffect(() => {
  //   const products = async () => {
  //     try {
  //       const shops = await fetchShops();

  //       setShops(shops);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   products();
  // }, []);

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
        <Products shops={shops} handleAdd={handleAdd} changeShop={changeShop} />
      )}
    </Box>
  );
};
export default ShopPage;
