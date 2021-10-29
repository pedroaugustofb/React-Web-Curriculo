import React from 'react'
import Home from '../views/home/Home'

function HomeController({history}) {
    const goTo = (path) => {
      history.push(path);
    };
  
    return <Home goTo={goTo}/>;
  }

  export default HomeController;