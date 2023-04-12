import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../utils/constant';
import React from "react";
function VideoCard() {
  return (
    <>
      <Card>
        <Link to={videold ? `/video/${videold}` : demoVideoUr1}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: 358, height: 180 }}
          />
        </Link>
        <CardContent sx={{ backgroundCoIor: '#lelele', height: '106px' }}>
          <Link to={videold ? `/video/${videold}` : demoVideoUr1}>
            <Typography variant="subtitlel" fontWeight="b01d" color="#FFF">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : democh}>
            <Typography variant="subtitlel" fontWeight="b01d" color="#FFF">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
        </CardContent>
      </Card >
    </>
  )
}
export default VideoCard;
