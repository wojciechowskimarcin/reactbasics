class LifeCycle extends React.Component{
constructor(props){
    super(props);
    this.state = {
        idProd: 1,
        status: true
    }
}
    componentDidMount(){
        // tylko raz się wywołuje podobnie jak w konstruktorze
        console.log("Wywołuję componentDidMount()") // ale wcześniej będzie wywołana funkcja cdm z dziecka
        let time = 0
        setTimeout(() => 
            console.log("Komponent został zamontowany"), 3000
        )
        const odlicznie = setInterval(() => 
        {console.log("Komponent został zamontowany ...", time+=2, "sekund temu")
        if(time >= 10){
            clearInterval(odlicznie);
            console.log("Bye ...")
        }
    }, 2000
    )
    }
    componentDidUpdate(){
        console.log("KOMPONENT ZOSTAŁ ZAKTUALIZOWANY!!!")
        //this.setState({}) // --> uwaga na nieskończoną pętlę (sprawdź ile razy komponent został zaktualizowany!)
        //this.handleCahngeStatus()
    }

handleChangeStatus = () => {
    this.setState({
        status: !this.state.status
    })
    console.log("this.state.status:",this.state.status)
}

handleClick = () =>{
    this.setState({
        idProd: this.state.idProd + 1
    })
    this.handleChangeStatus()
}
render(){
    // this.setState({}) // --> uwaga na nieskończoną pętlę (sprawdź ile razy komponent został zaktualizowany!)
    return(
        <React.Fragment>
            <p onClick={this.handleClick}>Id produktu: {this.state.idProd}</p>
            {this.state.status && <Child />} {/* w zależności od statusu będzie się komponent pokazywał */}
        </React.Fragment>
    )
}

}

class Child extends React.Component{
// Na
    componentDidMount(){
        console.log("Komponent <Child/> został zamontowany")
    }
    componentDidUpdate(){
        console.log("Komponent <Child/> został zaktualizowany")
    }
    componentWillUmount(){
        console.log("Komponent <Child/> został odmontowany")
    }
    render(){
        
        return(
            <p>Dziecko</p>
        )
    }
}

ReactDOM.render(<LifeCycle />, document.getElementById("root"))