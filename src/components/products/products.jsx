import { Button, Typography } from '@mui/material';
import { List, Item } from './products.styled';
// import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DoneIcon from '@mui/icons-material/Done';

export const Products = ({
  shops,
  changeShop,
  handleAdd,
  isDisabled,
  deleteProduct,
}) => {
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
              Price: {price}$
            </Typography>

            <Button
              disabled={isDisabled(_id)}
              type="button"
              variant="outlined"
              onClick={() => handleAdd(_id)}
            >
              {isDisabled(_id) ? (
                <DoneIcon />
              ) : (
                <AddShoppingCartIcon fontSize="small" />
              )}
            </Button>
          </Item>
        ))}
    </List>
  );
};
