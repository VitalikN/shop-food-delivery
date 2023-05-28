import { Box, Button, List } from "@mui/material";
import restaurant from "../../restaurant.json";

export const Restaurant = ({ changeShopClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
        border: 1,
        borderColor: "#1976d2",
        borderRadius: 2,
        width: "250px",
        mr: 4,
        ml: 8,
      }}
    >
      <h1>Shops:</h1>
      <List>
        {restaurant.map(({ id, name }) => (
          <li key={id}>
            <Button
              variant="outlined"
              onClick={() => changeShopClick(id)}
              sx={{
                margin: 2,
                width: 140,
                height: 40,
              }}
              //   className={changeShop === shops.name ? "active" : ""}
            >
              {name}
            </Button>
          </li>
        ))}
      </List>
    </Box>
  );
};
