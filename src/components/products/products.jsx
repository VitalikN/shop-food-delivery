import { Button, List, ListItem } from "@mui/material";

export const Products = ({ shops, changeShop }) => {
  return (
    <List
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: 3,
        alignItems: "center",
        border: 1,
        borderColor: "#1976d2",
        borderRadius: 2,
        pt: 2,
        pl: 4,
        pr: 4,
        pb: 2,
      }}
    >
      {shops
        .filter((el) => el.restaurant === changeShop)
        .map(({ _id, title, price }) => (
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: 250,
              border: 1,
              borderColor: "#1976d2",
              borderRadius: 2,
            }}
            key={_id}
          >
            <h3>{title}</h3>
            <p>
              <strong>Price:</strong> {price}
            </p>
            <Button variant="outlined">add to cart</Button>
          </ListItem>
        ))}
    </List>
  );
};
