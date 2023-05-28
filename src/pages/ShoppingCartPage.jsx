import { Box, List } from "@mui/material";
import { UserForm } from "components/userForm/userForm";

const ShoppingCartPage = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm />

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
      ></List>
      <button type="submit">Submit</button>
    </Box>
  );
};
export default ShoppingCartPage;
