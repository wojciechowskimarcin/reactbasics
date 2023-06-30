class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputText: "Proszę o wpisanie tekstu",
            inputValue: "a"
        }
       

   
       
    }
    handleChange = (e) => {
        this.state.inputValue = e.target.value
       // console.log(this.stateValue);
        this.setState(()=>{
            inputText: this.stateValue
        }
    
        
        )
        // console.log(this.state.inputValue);
        console.log(this.state.inputValue);

    }
    handleKeyDown = (e) =>{
        if (e.key === 'Enter') {
        e.preventDefault();
        console.log('handleKeyDown');
        console.log("State.InputTextValue:"+this.state.inputValue)
        document.getElementById('textArea').innerHTML=this.state.inputValue;
        }
    }
    render(){    
    return(
           <input type="text" placeholder={this.state.inputText} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
        );

    }
    

};

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttonText: "Reset"
        }
    }

    reset = () => {
        document.getElementById('textArea').innerHTML=""
    }

        render(){
           
        return (<input type='reset' value={this.state.buttonText} onClick={this.reset}/>);
        
        }
    
}
class TextArea extends Input{
    constructor(props){
        super(props);

        }
        
    render(){

        return(<h1 id='textArea'>{this.props.wartosc}</h1>)
    }
    
}
class TextInput extends Input {

    constructor(props){super(props);}
    render(){
    return(
        <React.Fragment>
        <form>
        <Input />
        <Button />
        </form>
        <TextArea wartosc={this.state.inputValue}/>
        </React.Fragment>
    )
    }
}

ReactDOM.render(<TextInput />, document.getElementById("root"));