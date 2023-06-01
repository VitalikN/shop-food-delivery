import { Box, Button, List, Typography } from '@mui/material';
import restaurant from '../../restaurant.json';

export const Restaurant = ({ changeShopClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',

        alignItems: 'center',
        background: '#ffffff',

        borderRadius: 2,
        width: '300px',

        mr: 1,
        pt: 3,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: 'bold',
          fontSize: 20,
        }}
      >
        Shops:
      </Typography>
      <List>
        {restaurant.map(({ id, name }) => (
          <li key={id}>
            <Button
              color="warning"
              variant="outlined"
              onClick={() => changeShopClick(id)}
              sx={{
                margin: 2,
                width: 140,
                height: 40,
              }}
            >
              {name}
            </Button>
          </li>
        ))}
      </List>
    </Box>
  );
};
