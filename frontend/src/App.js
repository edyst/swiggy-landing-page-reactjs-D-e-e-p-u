import React from 'react';
import Header from './swiggy_components/header_swiggy';
import Body from './swiggy_components/body_s';
import Footer from './swiggy_components/footer';
import Sec from './swiggy_components/sec3';
import './App.css'
import  {body_section} from './All_Data/mydata';




function App() {
  return (
    <div>
     <Header/>
     <Body data={body_section}/>
     <Sec/>
     <Footer/>

    </div>
  );
}

export default App;
