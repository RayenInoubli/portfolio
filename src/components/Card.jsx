import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ title, description, image, url}) {
  return (
    <Card sx={{ width: '100%', marginTop: '2rem', border: '1px solid #ddd' }} elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <a href={url}>
              {title}
            </a>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}