import { Box, Stack } from "@mui/material";
import React from "react";

function Videos({ videos }) {
  // console.log(videos)
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.videoId && <ChannelCard channelDetailideo={item}/>}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
