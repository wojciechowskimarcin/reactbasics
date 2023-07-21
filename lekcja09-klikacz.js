class Clicker extends React.Component{

    constructor(){
        super();
        this.Operation = this.Operation.bind(this);

        this.state = {
            value : 0,
            countClick: 0
        }
    }

    Operation = (number, typ) =>{
       // alert("Wywołanie metody Operation()");
       
        
       
        // this.setState ({
        //     value: 10
        // })
        //debugger
        if(typ !="reset"){
        this.setState(prevState=>({
            value: prevState.value +number
        }))
        }
        else{
            this.setState({
                value: 0
            })
            }
        //debugger
        
        console.log("value w funkcji Operation(): ", this.state.value)
        
    }
    render(){
       
        return(
                <React.Fragment>
                 {console.log("value po renderze:",this.state.value)}
                          
                <p>Paragraf</p>
                <Btn label="+" fn={this.Operation.bind(this,10,"add")}></Btn>
                <Btn label="-" fn={()=>this.Operation(-10,"substr")}></Btn>
                <Btn label="Reset" fn={this.Operation.bind(this,null,"reset")}></Btn>
                <h2>{this.state.value}</h2>
                </React.Fragment>
        );
        
    }

}
class Btn extends React.Component{
    constructor(props){
        super(props);
    }

    render(){


        return(
            <>
                <button onClick={this.props.fn}>{this.props.label}</button>
                
            </>
        );
    }

}



ReactDOM.render(<Clicker />, document.getElementById("root"));