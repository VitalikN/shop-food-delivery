import { Box, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';

import { Typography } from '@mui/material';
import { Form, Item, List } from './ShoppingCartPage.styked';
import { addShopsOrders } from 'service/api';

const CryptoJS = require('crypto-js');

const initialData = {
  merchantAccount: 'test_merch_n1',
  merchantDomainName: 'www.market.ua',
  orderReference: 'DH169235565',
  orderDate: '1415379863',
  amount: '147.36',
  currency: 'UAH',
  orderTimeout: '49000',
  // productName: [],
  // productPrice: [],
  // productCount: [],
  productName: ['Процессор Intel Core i9-4670 3.4GHz', 'Память'],
  productPrice: ['100', '147.36'],
  productCount: ['1', '1'],
  clientFirstName: 'Вася',
  clientLastName: 'Пупкин',
  clientAddress: 'пр. Гагарина, 12',
  clientCity: 'Днепропетровск',
  clientEmail: 'some@mail.com',
  defaultPaymentSystem: 'card',
};

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
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const productNames = countOrder.map(item => item.title);
    const productCounts = countOrder.map(item => item.count.toString());
    const productPrices = countOrder.map(item => item.price.toString());

    setData(prevData => ({
      ...prevData,
      productName: productNames,
      productCount: productCounts,
      productPrice: productPrices,
      amount: countOrder
        .reduce((sum, item) => sum + Number(item.price) * item.count, 0)
        .toString(),
    }));
  }, [countOrder]);

  // Додаємо новий useEffect
  useEffect(() => {
    if (countOrder && countOrder.length) {
      const updatedData = {
        ...data,
        merchantAccount: countOrder.merchantAccount || data.merchantAccount,
        productName: countOrder.productName || data.productName,
        productPrice: countOrder.productPrice || data.productPrice,
        // ... додайте інші поля, якщо потрібно
      };
      setData(updatedData);
    }
  }, [countOrder]);

  const replaceNewlines = text => text.replace(/\n/g, ' ');

  const inputValues = [
    data.merchantAccount,
    data.merchantDomainName,
    data.orderReference,
    data.orderDate,
    data.amount,
    data.currency,
    ...data.productName.map(replaceNewlines),
    ...data.productCount,
    ...data.productPrice,
  ];

  const input_stroka = inputValues.join(';');

  const secret_key = 'flk3409refn54t54t*FNJRET';

  const hashed_value = CryptoJS.HmacMD5(input_stroka, secret_key).toString(
    CryptoJS.enc.Hex
  );

  data['merchantSignature'] = hashed_value;

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
      <form
        method="post"
        action="https://secure.wayforpay.com/pay"
        acceptCharset="UTF-8"
      >
        <input name="merchantAccount" defaultValue={data.merchantAccount} />
        <input
          name="merchantDomainName"
          defaultValue={data.merchantDomainName}
        />
        <input name="orderReference" defaultValue={data.orderReference} />
        <input name="orderDate" defaultValue={data.orderDate} />
        <input name="amount" defaultValue={data.amount} />
        <input name="currency" defaultValue={data.currency} />
        <input name="orderTimeout" defaultValue={data.orderTimeout} />

        {data.productName.map((name, index) => (
          <input
            key={`productName-${index}`}
            name="productName[]"
            defaultValue={name}
          />
        ))}

        {data.productPrice.map((price, index) => (
          <input
            key={`productPrice-${index}`}
            name="productPrice[]"
            defaultValue={price}
          />
        ))}

        {data.productCount.map((count, index) => (
          <input
            key={`productCount-${index}`}
            name="productCount[]"
            defaultValue={count}
          />
        ))}

        {countOrder.map(({ _id, title, price, count }, index) => (
          <li key={_id}>
            <input name={`itemId-${index}`} defaultValue={_id} />
            <input name={`itemTitle-${index}`} defaultValue={title} />
            <input name={`itemPrice-${index}`} defaultValue={price} />
            <input name={`itemCount-${index}`} defaultValue={count} />
          </li>
        ))}

        <input name="clientFirstName" defaultValue={data.clientFirstName} />
        <input name="clientLastName" defaultValue={data.clientLastName} />
        <input name="clientAddress" defaultValue={data.clientAddress} />
        <input name="clientCity" defaultValue={data.clientCity} />
        <input name="clientEmail" defaultValue={data.clientEmail} />
        <input
          name="defaultPaymentSystem"
          defaultValue={data.defaultPaymentSystem}
        />
        <input name="merchantSignature" defaultValue={hashed_value} />
        <input type="submit" value="Test" />
      </form>

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

                {/* <Button onClick={() => handleBuy(_id)}>купити </Button> */}
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
