// import { Box, Stack, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import Videos from "./Videos";
// import { APIfetch } from "../utils/APIfetch";

// function HomeFeed() {
//   const [selectedCategory, setSelectedCategory] = useState("New");
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       const data = await APIfetch(`search?part=snippet&q=${selectedCategory}`);
//       setVideos(data.items);
//     };

//     fetchVideos();
//   }, [selectedCategory]);

//   return (
//     <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
//       <Box
//         sx={{
//           height: { sx: "auto", md: "92vh" },
//           borderRight: "1px solid #3d3d3d",
//           px: { sx: 0, md: 2 },
//         }}
//       >
//         <Sidebar
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//         />
//         <Typography
//           className="copyright"
//           variant="body2"
//           sx={{ mt: 1.5, color: "#fff" }}
//         >
//           Copyrighted by Faeez
//         </Typography>
//       </Box>
//       <Box
//         p={2}
//         sx={{
//           overflow: "auto",
//           height: { sx: "auto", md: "92vh" },
//           flex: 2,
//         }}
//       >
//         <Typography
//           variant="h5"
//           fontWeight="bold"
//           sx={{ color: "#fff", mt: 2, ml: 2, mb: 2 }}
//         >
//           {selectedCategory}
//           <span style={{ color: "#fc1503", marginLeft: "10px" }}>Videos</span>
//         </Typography>

//         {videos.length > 0 ? (
//           <Videos videos={videos} />
//         ) : (
//           <Typography variant="body1" sx={{ color: "#fff" }}>
//             No videos found.
//           </Typography>
//         )}
//       </Box>
//     </Stack>
//   );
// }

// export default HomeFeed;

import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

// import { fetchFromAPI } from "../utils/fetchFromAPI";
// import { Videos, Sidebar } from "./";
import { APIfetch } from "../utils/APIfetch";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    APIfetch(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;