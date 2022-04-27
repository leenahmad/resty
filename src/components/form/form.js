import React from "react";

import './form.css'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url: '',
            method: '',
        }
        this.handleUrl = this.handleUrl.bind(this);
        this.urlClicker = this.urlClicker.bind(this);
        this.changeMethod = this.changeMethod.bind(this);
    };

    urlClicker(e){
        e.preventDefault();
        this.setState({
            url:this.state.input,
            method: this.state.method1,
        })
    }

    handleUrl(e) {
        e.preventDefault();
        this.setState({
            input: e.target.value
        })
    }

    changeMethod(e)  {
        e.preventDefault();
        this.setState({
    
            method1: e.target.value
        })
    }

    // handleChange(event){
    //     let url =  event.target.value;
    //     this.setState({url})
    
    // }

    // handleSubmit(event){
    //     event.preventDefault();
    // }

    // handleButton(event){
    //     let method = event.target.value;
    //     this.setState({method});
    // }


    render(){
        return(
            <div>
                <form>
                    <label>
                        URL :  &nbsp;
                        <input type="text" placeholder="Enter URL" required onChange={this.handleUrl}></input>
                    </label>
                    <button type="button"  onClick={this.urlClicker}>
                       Submit
                    </button>
                    <div id="buttons">
                        <input className="button1" type="button" value="GET" onClick={this.changeMethod}/>
                        <input className="button2" type="button" value="POST" onClick={this.changeMethod}/>
                        <input className="button3" type="button" value="PUT" onClick={this.changeMethod}/>
                        <input className="button4" type="button" value="DELETE" onClick={this.changeMethod}/>

                    </div>
                </form>
                
                   <textarea  value =  {this.state.method+ ' ' + this.state.url} />
                                 
              

                </div>
          

        )
    }
}

export default Form;