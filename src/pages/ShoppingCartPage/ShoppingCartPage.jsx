// import { UserForm } from 'components/userForm/userForm';

import { Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

// import { addShopsOrders } from 'service/api';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Typography } from '@mui/material';
import { Item, List } from './ShoppingCartPage.styked';
import { addShopsOrders } from 'service/api';

const ShoppingCartPage = ({
  countOrder,
  handleIncrement,
  handleDecrement,
  deleteProduct,
}) => {
  const [userDataOrder, setUserDataOrder] = useState([]);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await addShopsOrders(userDataOrder);

        console.log(res);
      } catch (error) {
        console.log('error', error);
      }
    };
    getOrders();
  }, [userDataOrder]);

  const handleChange = event => {
    const { name, value } = event.target;
    setUserData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const sendUserForm = e => {
    e.preventDefault();
    setUserDataOrder({
      ...userData,
      product: [...countOrder],
    });
    setUserData({ name: '', email: '', phone: '', address: '' });
  };

  return (
    <>
      {
        <Box
          component="section"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',

            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',

              border: 1,
              borderColor: '#1976d2',
              borderRadius: 2,

              padding: 4,
            }}
          >
            <form onSubmit={sendUserForm}>
              <Box sx={{ margin: 1 }}>
                <TextField
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
                  label="Address"
                  size="small"
                  type="text"
                  name="address"
                  fullWidth
                  value={userData.address}
                  onChange={handleChange}
                />
              </Box>

              <button type="submit">Submit</button>
            </form>
          </Box>

          <List>
            {countOrder &&
              countOrder.map(({ _id, title, price, count }) => (
                <Item key={_id}>
                  <Typography variant="h5" sx={{ margin: 1 }}>
                    {title}
                  </Typography>
                  <Typography variant="h6" sx={{ margin: 1 }}>
                    Price: {price}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ margin: 1 }}>
                      {count}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <ArrowDropUpIcon
                        sx={{ padding: 0.7, fontSize: '30px' }}
                        onClick={() => handleIncrement(_id)}
                      />
                      <ArrowDropDownIcon
                        sx={{ padding: 0.7, fontSize: '30px' }}
                        onClick={() => {
                          handleDecrement(_id);
                        }}
                      />
                    </Box>
                    <button onClick={() => deleteProduct(_id)}>Delete</button>
                  </Box>
                </Item>
              ))}
          </List>
        </Box>
      }
    </>
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
