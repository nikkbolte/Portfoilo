
import './App.css';
import Header from "./MyComponents/Header";

import Footer from "./MyComponents/Footer";
import Mainn from "./MyComponents/Mainn";
//import Home from './routes/Home';
//import About from './routes/About';
import Services from './MyComponents/Services';
//import Resume from './routes/Resume';
import Contact from './MyComponents/Contact';

import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Mainn/>
     <Footer/>
    </>
  );
}

export default App;
