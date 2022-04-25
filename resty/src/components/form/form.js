import React from "react";

import './form.css'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url: '',
            method: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleButton = this.handleButton.bind(this);
    };


    handleChange(event){
        let url =  event.target.value;
        this.setState({url})
    
    }

    handleSubmit(event){
        event.preventDefault();
    }

    handleButton(event){
        let method = event.target.value;
        this.setState({method});
    }


    render(){
        return(
            <div>
                <form>
                    <label>
                        URL :  &nbsp;
                        <input type="text" placeholder="Enter URL" required onChange={this.handleChange}></input>
                    </label>
                    <button type="submit" value="Submit" onClick={this.handleSubmit}>
                       Submit
                    </button>
                    <div id="buttons">
                        <input className="button1" type="button" value="GET" onClick={this.handleButton}/>
                        <input className="button2" type="button" value="POST" onClick={this.handleButton}/>
                        <input className="button3" type="button" value="PUT" onClick={this.handleButton}/>
                        <input className="button4" type="button" value="DELETE" onClick={this.handleButton}/>

                    </div>
                </form>
                <div id='urlMethod'>
                    <p id="text">
                        {this.state.method}  &nbsp;  &nbsp; {this.state.url}            
                    </p>

                </div>
            </div>

        )
    }
}

export default Form;