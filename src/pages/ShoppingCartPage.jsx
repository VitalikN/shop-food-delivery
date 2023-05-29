import { Box } from '@mui/material';
import { UserForm } from 'components/userForm/userForm';
import { useEffect, useState } from 'react';
import { fetchShops } from 'service/api';
// import { addShopsOrders } from 'service/api';

// import { Button, Typography } from '@mui/material';
// import { Item } from 'components/products/products.styled';

const ShoppingCartPage = ({ order }) => {
  // const [shops, setShops] = useState([]);
  // const [changeShop, setChangeShop] = useState(null);
  const [userOrder, setUserOrder] = useState([]);

  useEffect(() => {
    // if (!order) return;

    const products = async () => {
      try {
        const res = await fetchShops();
        setUserOrder(res);
        // console.log(res);
        // const pro = res.filter(({ _id }) => _id === order._id);
        // setUserOrder(prevState => [...prevState, pro]);
      } catch (error) {
        console.log(error);
      }
    };
    products();
  }, [order]);
  console.log('userOrder=============', userOrder);

  // ==================
  // useEffect(() => {
  //   // if () return;

  //   const getOrders = async () => {
  //     try {
  //       const res = await addShopsOrders(order);
  //       setUserOrder(res);
  //       console.log(res);
  //       // setOrders(res);
  //     } catch (error) {
  //       console.log('------------error', error);
  //     }
  //   };
  //   getOrders();
  // }, [order]);

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <UserForm />

      {/* {userOrder && (
        <List
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            gap: 3,
            alignItems: 'center',
            border: 1,
            borderColor: '#1976d2',
            borderRadius: 2,
            pt: 2,
            pl: 4,
            pr: 4,
            pb: 2,
          }}
        >
          {userOrder
            // .filter(({ _id }) => _id === order._id)
            .map(({ _id, title, price }) => (
              <Item key={_id}>
                <Typography variant="h5" sx={{ margin: 1 }}>
                  {title}
                </Typography>
                <Typography variant="h6" sx={{ margin: 1 }}>
                  Price: {price}
                </Typography>
                <Button variant="outlined">add to cart</Button>
              </Item>
            ))}
        </List>
      )} */}
      <button type="submit">Submit</button>
    </Box>
  );
};
export default ShoppingCartPage;

/**
 *        "name": "King",
        "email": "king@mail.com",
        "phone": "50200222",
        "address": "uzh",
        "product": [
            {
                "restaurant": "Burger King",
                "title": "Burger",
                "price": "$10.00",
                "_id": "64706cdeb71b09a89918f0f5"
            }
        ]
 */
