import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button';
import { Link as Scroll } from 'react-scroll'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    title: {
        fontFamily: 'Montserrat',
        fontSize: '2rem',
        color: '#fff',
    },
    desc: {
        fontSize: '1.1rem',
        color: '#ddd',
    },
    images: {
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.07, 1.07, 1)" },
    },
});

export default function ImageCard({ content, checked }) {
  const classes = useStyles();
  
  return (
    <Collapse in={checked} { ... (checked ? { timeout: 1000 } : {})}>
      <Card sx={{ 
          maxWidth: 645, 
          background: 'rgba(0,0,0,0.5)',
          margin: '20px',
      }}>
        <CardMedia
          component="img"
          height="440"
          image={content.imageUrl}
          alt="art"
          className={classes.images}
        />
        <CardContent>
          <Typography variant="h5" className={classes.title}>
            {content.title}
          </Typography>
          <Typography variant="body2" className={classes.desc}>
            {content.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Scroll to="gallery" smooth={true}>
            <Button size="small">{content.buttonTitle}</Button>
          </Scroll>
        </CardActions>
      </Card>
    </Collapse>
  );
}