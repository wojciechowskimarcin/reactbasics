class CounterProducts extends React.Component{

    state = {
        stock: 10,
        cart: 0
    }

    addProdtoCart = () => {
        this.setState({
            cart: this.state.cart + 1,
        })
    }
    remProdftomCart = () => {
        this.setState({
            cart: this.state.cart - 1,
        })
    }
    buyProd = () =>{
        this.setState({
            stock: this.state.stock-this.state.cart,
            cart: 0
        })
    }

render(){
    const {cart, stock} = this.state;
    const stylZero = cart===0?{opacity: 0.3}:{}; // warunkowanie stylu w zależności od wartości stanu cart, {} --> zastępuje nam null (zwraca pusty obiekt)
    
    return(
        <div>
            <button  onClick={this.remProdftomCart} 
            disabled={cart?false:true  || stock==0?true:false}>-</button>
            {/* Powyższe wyrażenie to warunek blokujący przycisk wtedy kiedy stan koszyka jest = 0 czyli jest false oraz wtedy kiedy stock=0  */}
            <span style={stylZero}> {cart} </span>
            <button onClick={this.addProdtoCart} disabled={cart===stock?true:false }>+</button>
            {cart>0?<button onClick={this.buyProd}>Kup</button>:false}
            {console.log(stock)}
        </div>
    )
}
}

ReactDOM.render(<CounterProducts />, document.getElementById("root"));