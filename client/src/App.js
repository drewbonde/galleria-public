import React from 'react';
import { makeStyles } from '@mui/styles';
import Header from './components/Header'
import CssBaseline from '@mui/material/CssBaseline'
import CenterCard from './components/CenterCard'
import Gallery from './components/Gallery'
import useWindowPosition from './hook/useWindowPosition';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

function App() {
  const classes = useStyles();
  const checked = useWindowPosition("gallery")
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <CenterCard />
      <Gallery />
    </div>
  );
}

export default App;
