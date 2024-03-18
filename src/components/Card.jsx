import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from '../assets/profile.png';

export default function ActionAreaCard({ title, description }) {
  return (
    <Card sx={{ width: '100%', marginTop: '2rem', border: '1px solid #ddd' }} elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}