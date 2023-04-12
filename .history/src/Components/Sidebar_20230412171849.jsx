import { Stack } from "@mui/material";
import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  const categories = [
    { name: "New", icon: HomeIcon },
    { name: "Coding", icon: CodeIcon },
    { name: "Music", icon: MusicNoteIcon },
    { name: "Education", icon: SchoolIcon },
    { name: "Podcast", icon: GraphicEqIcon },
    { name: "Movie", icon: OndemandVideoIcon },
    { name: "Gaming", icon: SportsEsportsIcon },
    { name: "Live", icon: LiveTvIcon },
    { name: "Sport", icon: FitnessCenterIcon },
    { name: "Fashion", icon: CheckroomIcon },
    { name: "Beauty", icon: FaceRetouchingNaturalIcon },
    { name: "Comedy", icon: TheaterComedyIcon },
    { name: "Gym", icon: FitnessCenterIcon },
    { name: "Crypto", icon: DeveloperModeIcon },
  ];

  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { md: "column" },
        overflowY: "auto",
        height: { sx: "auto", md: "92vh" },
        borderRight: "1px solid #3d3d3d",
        // px: { sx: 0, md: 2 },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory ? "#e50914" : "",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            height: "50px",
            padding: "0 15px",
            marginBottom: "5px",
            borderRadius: "0",
            border: "none",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "#fc1503",
              marginRight: "15px",
            }}
          >
            <category.icon />
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.7",
              textTransform: "capitalize",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
