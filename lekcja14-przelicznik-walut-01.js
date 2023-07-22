const Cash = (props) => (
    <p>Warość w {props.description} <span className={props.amount*props.ratio!=0 ? "bolder" : false}>{(props.amount*props.ratio*props.price).toFixed(2)}{props.symbol}</span></p>
)

const Products = (props) => (

    <div id="prodSelection">
    <label htmlFor="productSelect">Wybierz produkt</label>&nbsp;
    <select onChange={props.onChangeHandler} id="productSelect">

        {props.products.map(prodElem => <option value={prodElem.id} key={prodElem.id}>{prodElem.name}</option>)}
    </select>
    </div>
)
class CurrencyConventer extends React.Component{

    state = {
           inputValue: 0,
           productID: 1
    }
    currency = [
        {id: 1, name: "zł", ratio: 1, description: "polskich złotych", symbol: "zł"},
        {id: 2, name: "dolar", ratio: 3.9990, description: "dolarach amerykańskich", symbol: "&#x24;"},
        {id: 3, name: "euro", ratio: 4.4501, description: "euro", symbol: "&#x20AC;"},
        {id: 4, name: "jen", ratio: 200.8178, description: "jenach", symbol: "&#xa5;"},
        {id: 5, name: "funt", ratio: 5.1422, description: "funtach brytyjskich", symbol: "&#xa3;"},
    ];

    products = [
        {id: 1, name: "Strona CMS", description: "", price: 3000},
        {id: 2, name: "Strona Dedykowana", description: "", price: 4000},
        {id: 3, name: "Strona Aplikacja", description: "", price: 6000},
        {id: 4, name: "Sklep internetowy", description: "", price: 5000}
    ]
    changeProduct = (e) =>{
        console.log(e.target.value);
        document.querySelector("#currencySection > input").value=0
        this.setState({
            inputValue: 0
        })
        this.inputValueHandler();
        this.setState({
            productID: parseInt(e.target.value)
        })

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
        const product = this.products.filter(prod => prod.id === this.state.productID ? prod : "")
        console.log("product:",product);
        console.log("product price:",product[0].price);
        const currency = this.currency.map(cash => 
        <Cash 
        description={cash.description} 
        ratio={cash.ratio} 
        amount={this.state.inputValue} 
        symbol={this.decode(cash.symbol)}
        price={product[0].price}/>)
        const products = <Products products={this.products} onChangeHandler={this.changeProduct}/>


        return(

            <React.Fragment>
                <section id="currencySection">
                <div>{products}</div>
                <input type="number" onChange={this.inputValueHandler} min="0" max="10" step="1"/>
                <p>{this.state.inputValue ==0 ? <span style={{color: 'grey', fontSize: '0.9em', fontStyle: 'italic'}}>Wybierz ilość</span> : ""}</p>
                {currency}
                </section>
            </React.Fragment>
        );
    }

}

ReactDOM.render(<CurrencyConventer />, document.getElementById("root"));