const Cash = (props) => (
    <p>Warość w {props.description} <span className={props.amount*props.ratio!=0 ? "bolder" : false}>{(props.amount*props.ratio).toFixed(2)}{props.symbol}</span></p>
)

class CurrencyConventer extends React.Component{

    state = {
        currency: [
            {id: 1, name: "dolar", ratio: 3.9990, description: "dolarach amerykańskich", symbol: "&#x24;"},
            {id: 2, name: "euro", ratio: 4.4501, description: "euro", symbol: "&#x20AC;"},
            {id: 3, name: "jen", ratio: 200.8178, description: "jenach", symbol: "&#xa5;"},
            {id: 4, name: "funt", ratio: 5.1422, description: "funtach brytyjskich", symbol: "&#xa3;"},
        ],
        inputValue: 0
    }

    inputValueHandler = (e) => {
        this.setState({
            inputValue: parseFloat(e.target.value)
        })
    }
    decode(str) { // zamienia encję na text
        let txt = document.createElement("textarea");
        txt.innerHTML = str;
        return txt.value;
        }


    render(){

        const currency = this.state.currency.map(cash => 
        <Cash 
        description={cash.description} 
        ratio={cash.ratio} 
        amount={this.state.inputValue} 
        symbol={this.decode(cash.symbol)}/>)
    


        return(

            <React.Fragment>
                <section id="currencySection">
                <input type="number" onKeyDown={(e)=>{ e.key=='Enter'? this.inputValueHandler(e) : ""}} />
                <p>{this.state.inputValue ==0 ? <span style={{color: 'grey', fontSize: '0.9em', fontStyle: 'italic'}}>Po wybraniu wartości naciśnij enter</span> : ""}</p>
                {currency}
                </section>
            </React.Fragment>
        );
    }

}

ReactDOM.render(<CurrencyConventer />, document.getElementById("root"));