import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import { APIfetch } from "../utils/APIfetch";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const [channelResponse, videosResponse] = await Promise.all([
          APIfetch(`channels?part=snippet&id=${id}`),
          APIfetch(`search?channelId=${id}&part=snippet,id&order=date`),
        ]);

        setChannelDetail(channelResponse?.items[0]);
        setVideos(videosResponse?.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        {channelDetail && <ChannelCard channelDetail={channelDetail} marginTop="-93px" />}
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
