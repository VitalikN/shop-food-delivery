import { Box } from '@mui/material';
import { UserForm } from 'components/userForm/userForm';

// import { addShopsOrders } from 'service/api';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Typography } from '@mui/material';
import { Item, List } from './ShoppingCartPage.styked';

const ShoppingCartPage = ({ order }) => {
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
    <>
      <Box
        component="section"
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <UserForm />

        {order && (
          <List>
            {order.map(({ _id, title, price, count }) => (
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
                    <button type="button" onClick={() => {}}>
                      <ArrowDropUpIcon />
                    </button>
                    <button onClick={() => {}}>
                      <ArrowDropDownIcon />
                    </button>
                  </Box>
                </Box>
              </Item>
            ))}
          </List>
        )}
      </Box>
      <button type="submit">Submit</button>
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
