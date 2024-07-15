import React from "react";
import { useThemeContext } from "../theme/ThemeContextProvider";

import { TextField, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
const Sidebar = () => {
  const { mode, toggleColorMode } = useThemeContext();
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "secondary.main",
        height: "100%",
        width: "25%",
      }}
    >
      <Box className="search-ham" sx={{ display: "flex" }}>
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <TextField
          variant="outlined"
          placeholder="Rounded Input"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px", // Adjust the border-radius value as needed
            },
          }}
        />
        <IconButton
          type="button"
          sx={{ px: "10px", height: "40px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
