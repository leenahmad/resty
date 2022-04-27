import React from "react";

import './results.scss'

function Results(props){

    return(
        <section>
            <div className="div">
                <p>url: {props.url}</p>
                <p>method: {props.method}</p>
            </div>
            <div className="res">
            <pre>{props.data ? JSON.stringify(props.data , undefined , 2) : null}</pre>
         </div>
        </section>

    );
    }

export default Results;