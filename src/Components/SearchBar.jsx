import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React from "react";

function SearchBar() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        pl: 2,
        display: "flex",
        borderRadius: 20,
        boxShadow: "none",
        mr: { sm: 5 },
        alignItems: "center",
        width: 300,
        border: "1px solid green",
        justifyContent: "space-between",
      }}
    >
      <input
        className="searchBar"
        value={""}
        onChange={() => {}}
        type="text"
        placeholder="Search"
        style={{
          fontSize: "0.9rem",
          backgroundColor: "transparent",
          width: "100%",
          height: "100%",
          paddingInline: "0.5em",
          paddingBlock: "0.7em",
          border: "none",
          outline: "none",
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
