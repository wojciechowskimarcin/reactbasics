class Application extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            tekst: ""
        }
        //bindujemy bo to nie jest funkcja strzałkowa tylko tradycyjna i w niej this jest "undefined"
        this.handleResetBtn = this.handleResetBtn.bind(this);
    }

    handleInputChange = (e) =>{
        this.setState({
            tekst : e.target.value
        })
        console.log(e.target.value);
        console.log("state.text:"+this.state.tekst)
    }
    handleResetBtn(){

        this.setState({
            tekst: ""
        })

    }

render(){
    return(
            <React.Fragment>
                <input type="text" plasceholder='wpisz tekst' onChange={this.handleInputChange} value={this.state.tekst}/>
                <button onClick={this.handleResetBtn} >Reset</button>
            <h1>{this.state.tekst}</h1>
            </React.Fragment>
        )
    }


}

ReactDOM.render(<Application />, document.getElementById("root"));