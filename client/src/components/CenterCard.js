import React from 'react'
import { makeStyles } from '@mui/styles'
import ImageCard from './ImageCard'
import content from '../static/content'
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default function CenterCard() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="center-card">
            <ImageCard content={content[0]} checked={checked}/>
            <ImageCard content={content[1]} checked={checked}/>
        </div>
    )
}