import { Box, Stack } from "@mui/material";
import React from "react";

function Videos({ videos }) {
  // console.log(videos)
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
