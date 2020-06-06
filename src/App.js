import React from 'react';
import{BrowserRouter as Router} from 'react-router-dom';
import HomePagecomponent from "./HomePageComponent";
import './App.css';

function App() {
  return (
<Router>
  <HomePagecomponent/>
</Router>
   
  );
}

export default App;
