import { Box, Button, List, Typography } from '@mui/material';
import restaurant from '../../restaurant.json';

export const Restaurant = ({ changeShopClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',

        alignItems: 'center',
        background: 'linear-gradient(to left, #b39eed, #eaafc8)',

        border: 1,
        borderColor: '#a288e7',
        borderRadius: 2,
        width: '300px',

        mr: 1,
        pt: 3,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: '#00e5ff',
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
              variant="outlined"
              onClick={() => changeShopClick(id)}
              sx={{
                background: 'linear-gradient(to left, #654ea3, #eaafc8)',
                color: ' #00e5ffe6',
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
