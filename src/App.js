import React from 'react';
import axios from 'axios';
import { useState  , useReducer} from 'react';

import './App.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import History from './components/history/history';

const initialState = {
  history: []
}

function App(){
  const [data , setData] = useState(null);
  const [requestparams , setReq] = useState({});
  const [history , setHistory] = useState([]);
  const [state , dispatch] = useReducer(historyReducer, initialState);

  function historyReducer(state = history , action){
    const {type , payload} = action;

    switch(type){
      case 'STORE_DATA' : const history = [...state.history , payload.history]
       return { history }
      default: return state;

    }
  }

  function addAction(history){
    return{
      type: 'STORE_DATA',
      payload: { history }
    }
  }


 const callApi = async (requestparams) =>{
    
  setReq(requestparams)
  // let callMethod =  requestparams.method
  const res = await axios (requestparams.url , (requestparams.body) ? (requestparams.body) : null)
    
    const data = {
      header: res.headers,
      results: res.data

    }
    setHistory([...history,requestparams])
    setData(data)
    dispatch(addAction(requestparams))

}


    return(
      <>
      <Header />

      <Form handleApiCall= {callApi} />
      <History history = {history}/>
      <Results data={data} url={requestparams.url} method={requestparams.method}/>

      <Footer />
      </>
    )
  }



export default App;
