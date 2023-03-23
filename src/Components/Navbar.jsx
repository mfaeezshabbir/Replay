import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../../src/Replay.svg";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        zIndex: "100",
        paddingInline: { xs: "0px", sm: "10px" },
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          textDecoration: "none",
        }}
      >
        <img src={logo} alt="logo" height={50} />
        <span
          style={{
            
            fontFamily: "Roboto",
            fontSize: "1.75rem",
            fontWeight: "bold",
            transform: "translate(-15px, 0px)",
          }}
        >
          REPLAY
        </span>
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
