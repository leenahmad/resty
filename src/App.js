import React from 'react';


import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';

class App extends React.Component{

  render(){
    return(
      <React.Fragment>
      <Header />
      <Form />
      <Results />
      <Footer />
      </React.Fragment>
    )
  }
}


export default App;
