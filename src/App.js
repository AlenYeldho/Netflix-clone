import React from 'react';
import NavbarM from './components/navbar/navbar';
import "./App.css"
import Banner from './components/banner/banner';
import Rawposter from './components/Rawposter/Rawposter';
import Footer from './footer/footer';
import { action, orginals, romance,horror,comedy,trending } from './urls';

function App() {
  return (
    <div className="App">
       <NavbarM/>
      <Banner/> 
      <Rawposter url={orginals} title="Netflix Originals"/>
      <Rawposter url={trending} title="Trending"isSmall/>
      <Rawposter url={action} title="Action"isSmall/>
      <Rawposter url={comedy} title="Comedy"isSmall/>
      <Rawposter url={horror} title="Horror"isSmall/>
      <Rawposter url={romance} title="Romance"isSmall/>
      <Footer/>
    </div>
  );
}

export default App;
