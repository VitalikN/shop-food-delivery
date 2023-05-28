import { Button, Typography } from '@mui/material';
import { List, Item } from './products.styled';

export const Products = ({ shops, changeShop }) => {
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
            <Button variant="outlined">add to cart</Button>
          </Item>
        ))}
    </List>
  );
};
