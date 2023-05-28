import { Button, Typography } from '@mui/material';
import { List, Item } from './products.styled';
import { useState } from 'react';

export const Products = ({ shops, changeShop }) => {
  const [orders, setOrders] = useState([]);

  const handleAdd = idProduct => {
    const [addProduct] = shops.filter(({ _id }) => _id === idProduct);
    const updateProduct = { ...addProduct, count: 1 };

    setOrders(updateProduct);
  };
  // console.log(orders);

  console.log(orders);
  return (
    <List>
      {shops
        .filter(el => el.restaurant === changeShop)
        .map(({ _id, title, price }) => (
          <Item key={_id}>
            <Typography variant="h5" sx={{ margin: 1 }}>
              {title}
            </Typography>
            <Typography variant="h6" sx={{ margin: 1 }}>
              Price: {price}
            </Typography>
            <Button variant="outlined" onClick={() => handleAdd(_id)}>
              add to cart
            </Button>
          </Item>
        ))}
    </List>
  );
};
