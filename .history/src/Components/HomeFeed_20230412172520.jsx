import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import Sidebar from "./Sidebar";
import { APIfetch } from "../utils/APIfetch";

const ENDPOINT_BASE_URL = "search";
const PART_PARAM = "part=snippet";
const MAX_RESULTS_PARAM = "maxResults=50";

const HomeFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);

      try {
        const url = `${ENDPOINT_BASE_URL}?${PART_PARAM}&${MAX_RESULTS_PARAM}&q=${selectedCategory}`;
        const data = await APIfetch(url);
        setVideos(data.items);
        setError(null);
      } catch (error) {
        setError(error.message);
        setVideos(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "72vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
          align="center"
        >
          {error ? (
            `Error: ${error}`
          ) : isLoading ? (
            "Loading..."
          ) : (
            <>
              © {new Date().getFullYear()} MFAEEZSHABBIR
            </>
          )}
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory}{" "}
          <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default HomeFeed;
