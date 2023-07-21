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

render(){
    return(
        <div>
            <button  onClick={this.remProdftomCart} disabled={this.state.cart?false:true}>-</button>
            <span> {this.state.cart} </span>
            <button onClick={this.addProdtoCart} disabled={this.state.cart===8?true:false}>+</button>
        </div>
    )
}
}

ReactDOM.render(<CounterProducts />, document.getElementById("root"));