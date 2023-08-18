// import { UserForm } from 'components/userForm/userForm';

import { Box, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
// import { addShopsOrders } from 'service/api';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';

import { Typography } from '@mui/material';
import { Form, Item, List } from './ShoppingCartPage.styked';
import { addShopsOrders } from 'service/api';
import axios from 'axios';
// import cryptoJs from 'crypto-js';
// const crypto = require('crypto');
const CryptoJS = require('crypto-js');

const data = {
  merchantAccount: 'test_merch_n1',
  merchantAuthType: 'SimpleSignature',
  merchantDomainName: 'www.market.ua',
  // merchantSignature: hashed_value,
  orderReference: 'DH783023',
  orderDate: '1415379863',
  amount: '1547.36',
  currency: 'UAH',
  orderTimeout: '49000',
  productName: [
    'Процессор Intel Core i5-4670 3.4GHz',
    'Память Kingston DDR3-1600 4096MB PC3-12800',
  ],
  productPrice: ['1000', '547.36'],
  productCount: ['1', '1'],
  clientFirstName: 'Вася',
  clientLastName: 'Пупкин',
  clientAddress: 'пр. Гагарина, 12',
  clientCity: 'Днепропетровск',
  clientEmail: 'some@mail.com',
  defaultPaymentSystem: 'card',
};
const input_stroka = `${data.merchantAccount};${data.merchantAuthType};${data.orderReference};${data.orderDate};${data.amount};${data.currency};${data.productName[0]};${data.productName[1]};${data.productCount[0]};${data.productCount[1]};${data.productPrice[0]};${data.productPrice[1]}`;
const secret_key = 'flk3409refn54t54t*FNJRET';

// // const hmac = cryptoJs.createHmac('md5', secret_key);
// hmac.update(input_stroka);

// const hashed_value = hmac.digest('hex');
// console.log(hashed_value);

const hashed_value = CryptoJS.HmacMD5(input_stroka, secret_key).toString(
  CryptoJS.enc.Hex
);
data['merchantSignature'] = hashed_value;

const ShoppingCartPage = ({
  countOrder,
  handleIncrement,
  handleDecrement,
  deleteProduct,
}) => {
  const [userDataOrder, setUserDataOrder] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleBuy = () => {
    axios
      .post('https://secure.wayforpay.com/pay', data)
      .then(response => {
        console.log('Response======>>>>', response.data);
      })
      .catch(error => {
        console.error('Error====>>>>', error);
      });
    console.log(`Продукт з ID `);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setUserData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const sendUserForm = evt => {
    evt.preventDefault();

    setUserDataOrder({
      ...userData,
      // totalPrice: totalPrice,
      product: [...countOrder],
    });

    setUserData({ name: '', email: '', phone: '', address: '' });
  };

  useEffect(() => {
    const total = countOrder
      .reduce((sum, item) => sum + Number(item.price) * item.count, 0)
      .toFixed(2);

    setTotalPrice(total);
    if (userDataOrder.length === 0) {
      return;
    }

    const getOrders = async () => {
      try {
        const getUserData = await addShopsOrders(userDataOrder);
        console.log(getUserData);
      } catch (error) {
        console.log('error', error);
      }
    };
    getOrders();
  }, [countOrder, userDataOrder]);

  return (
    <>
      {countOrder.length > 0 ? (
        <Box
          component="section"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',

            justifyContent: 'center',
            alignItems: 'center',
            pt: 2,
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#fff',

              borderRadius: 2,

              padding: 4,
            }}
          >
            <Form onSubmit={sendUserForm} sx={{}}>
              <Box sx={{ margin: 1 }}>
                <TextField
                  color="warning"
                  label="Username"
                  size="small"
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>

              <Box sx={{ margin: 1 }}>
                <TextField
                  color="warning"
                  label="Email"
                  size="small"
                  name="email"
                  type="text"
                  fullWidth
                  value={userData.email}
                  onChange={handleChange}
                />
              </Box>

              <Box sx={{ margin: 1 }}>
                <TextField
                  color="warning"
                  label="Phone"
                  size="small"
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Box>

              <Box sx={{ margin: 1 }}>
                <TextField
                  color="warning"
                  label="Address"
                  size="small"
                  type="text"
                  name="address"
                  fullWidth
                  value={userData.address}
                  onChange={handleChange}
                />
              </Box>
              <Button variant="outlined" type="submit" color="warning">
                Checkout
              </Button>
            </Form>
          </Box>

          <List>
            {countOrder.map(({ _id, title, price, count }) => (
              <Item key={_id}>
                <Typography variant="h5" sx={{ margin: 1 }}>
                  {title}
                </Typography>
                <Typography variant="h6" sx={{ margin: 1 }}>
                  Price: {price}$
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#f77960',
                      borderRadius: 2,
                    }}
                  >
                    <AddIcon
                      sx={{
                        padding: 0.7,
                        fontSize: 20,
                        color: '#fff',
                      }}
                      onClick={() => handleIncrement(_id)}
                    />
                    <Typography variant="h6" sx={{ margin: 1, color: '#fff' }}>
                      {count}
                    </Typography>
                    <RemoveIcon
                      sx={{ padding: 0.7, fontSize: 20, color: '#fff' }}
                      onClick={() => {
                        handleDecrement(_id);
                      }}
                    />
                  </Box>
                  <ClearIcon
                    onClick={() => deleteProduct(_id)}
                    sx={{ padding: 0.7, fontSize: 25, color: '#f77960' }}
                  />
                </Box>

                <Button onClick={() => handleBuy(_id)}>купити </Button>
              </Item>
            ))}
          </List>

          <Box>
            <Typography
              variant="h6"
              sx={{ margin: 1, fontSize: 25, color: '#f77960' }}
            >
              TotalPrici:
              {totalPrice}$
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#f95d94',
          }}
          variant="h4"
        >
          No item added to the cart
        </Typography>
      )}
    </>
  );
};
export default ShoppingCartPage;
