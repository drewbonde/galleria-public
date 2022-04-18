import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

export default function Gallery({ gallery }) {
  const classes = useStyles();
  return (
    <div className={classes.root} id="gallery">    
        <ImageList open={gallery} sx={{ 
            width: '88%',
            height: '90%',
        }}>
          <ImageListItem key="Subheader" cols={2}>
          </ImageListItem>
        </ImageList>
    </div>
  );
}