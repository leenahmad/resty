import React from 'react';
import axios from 'axios';
import { useState } from 'react';

import './App.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';

function App(){
  const [data , setData] = useState(null);
  const [requestparams , setReq] = useState({});

 const callApi = async (requestparams) =>{
    
  setReq(requestparams)
  // let callMethod =  requestparams.method
  const res = await axios (requestparams.url , (requestparams.body) ? (requestparams.body) : null)
    
    const data = {
      header: res.headers,
      results: res.data

    }
    setData(data)

}


    return(
      <React.Fragment>
      <Header />

      <Form handleApiCall= {callApi} />
      <Results data={data} url={requestparams.url} method={requestparams.method}/>

      <Footer />
      </React.Fragment>
    )
  }



export default App;
