import React from "react";
import ReactJson from 'react-json-view'

import './results.scss'

function Results(props){

    return(
        <section>
            <div className="div">
                <p>url: {props.url}</p>
                <p>method: {props.method}</p>
            </div>

         <per > 
             {props.data ? 
             
            <div className="res">
                <h2>Headers</h2>
                <ReactJson src={props.data.header}/>
                <h2>
                    Results
                </h2>
                <ReactJson  src={props.data}/>

            </div>
            : null}
         </per>
        </section>

    );
    }

export default Results;