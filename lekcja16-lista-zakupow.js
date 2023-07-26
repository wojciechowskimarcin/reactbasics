const Product = (props) => {
    
   return (<div className="productRow" key={props.id}>
    <span>{props.name}</span> <span>{props.price}zł</span>
    <input type='text' id={"idProd"+props.id} className='inputProduct' width="40" min="0" max="10" onChange={props.updateCart} />/<span>{props.count}</span>
    <button onClick={props.deleteProduct}>x</button>
    </div>)
    }


class ShoppingList extends React.Component{
    root = document.getElementById("root");
    state = {
        products: [
                    {id: 1, name: "Mix świeżych sałat BIO", count: 100, stock: 100, price: 6.35},
                    {id: 2, name: "Jabłka świeże Red Prince BIO", stock: 200, count: 200, price: 5.2},
                    {id: 3, name: "Bakłażan BIO", count: 30, stock: 30, price: 11.00},
                    {id: 4, name: "Pomidory okrągłe BIO", count: 25, stock:25, price: 3.99},
                    {id: 5, name: "LUBELLA Pełne Ziarno Makaron świdry pełnoziarniste", count: 100, stock: 100, price: 4.5},
                    {id: 6, name: "SARITA Kasza gryczana", count: 88, stock: 88, price: 4.99}
        ],
        cart: [],
        sum: 0
    }
    oblicz = (props) =>{
        var suma =0;
        props.cart.forEach(elCart=> {
           
            props.products.forEach(eleProd => {
    
                if(eleProd.id==elCart.id) suma+=eleProd.price*elCart.count//console.log("eleProd.id:",eleProd.id, "elCart.id", elCart.id)
            })

        console.log("Suma:",suma.toFixed(2))
        this.setState({
            sum: suma.toFixed(2)
        })
        })}
        reset = (classe) => {

            const elements = document.querySelectorAll(classe);
    
            console.log("Liczba elementów", classe, ":",elements.length)
            if(elements.length===0){
                console.log("uzupełniam blok")
            }
             elements.forEach(a=>{
                a.value='';
                console.log(a);
            })
            this.setState({
                sum: 0,
                cart: []
            })
        }
    deleteProduct = (id) =>{
        console.log("Delete product id:",id)
        let products = [];
        let cart = [];
        Object.assign(products, this.state.products);
        const newProducts = products.filter(prod => (prod.id != id ? prod : ''));

        Object.assign(cart, this.state.cart);
        const newCart = cart.filter(cart => (cart.id != id ? cart : ''));

        console.log("newProducts:",newProducts)
        console.log("newCart:",newCart)
        console.log("this.state.products:",this.state.products)
        this.setState({
            products: newProducts,
            cart: newCart
        })
        let suma =0;
        
        newCart.forEach(elCart=> {
            console.log("this.state.CART", newCart)
           
            this.state.products.forEach(eleProd => {
    
                if(eleProd.id==elCart.id) suma+=eleProd.price*elCart.count//console.log("eleProd.id:",eleProd.id, "elCart.id", elCart.id)
            })
        })
        
        console.log("sumeczka:",suma)
        this.setState({
            sum: suma.toFixed(2)
        })


        const countInput = document.querySelectorAll(".productRow");
        console.log(".productRow liczba:",countInput.length)    
        
            
    }
    currentValue = (a) =>{
        if (a=="10")
        return 100
        
    }
    updateCart = (id, count) =>{
 
        id= parseInt(id)
        console.log("Działasz na produkcie:",id, "liczba zam:", count)
        //debugger;
        let products = [];
        Object.assign(products, this.state.products);
        console.log(products)
        let koszyk = []
        Object.assign(koszyk, this.state.cart)
        


        const updateValue = (id, stock) =>{
            const idProd = document.getElementById("idProd"+id);
            idProd.value = stock
            updateProducts(id, stock);
            
        }


        const updateProducts = (id, warosc) =>{
            let productstmp = Object.assign({}, products[id-1], {count: warosc});
            Object.assign(products, this.state.products);
            const newProducts = products.filter(prod => (prod.id != id ? prod : ''));
            
            
            let concatProducts = newProducts.push(productstmp)
            console.log(newProducts)
            console.log("------")
            console.log(concatProducts)
        }
        
        products.filter(prod => prod.id === id && count>prod.stock ?  updateValue(id, prod.stock) : "")
        products.filter(prod => prod.id === id && count>prod.stock ?  count=prod.stock : "")
        //products=products.map(prod => prod.id === id && count>prod.stock ?  prod.cart=prod.stock-count : "").map(a=>a);

        let koszyk1 = koszyk.filter((v,index) => v.id != id).map(a=>a)

        const podlicz = (cart) => {
            let suma = 0
            console.log("sumka:",suma);
            const products = this.state.products;
            console.log("products:",products)
            console.log("cart:",cart)
           products.filter(pel => cart.filter(cel => pel.id === cel.id ? suma+=(cel.count*pel.price): ""))
            console.log("suma:",suma);
            this.setState({
                sum: suma.toFixed(2),
                })

        }

        if(count==''){
            count=0
        }
        if(isNaN(count)){
            alert("Popraw wartość na liczbową")
        }
        count = parseInt(count)
        
        koszyk1.push({id: id, count: count})
        podlicz(koszyk1);
        console.log("koszyk1",koszyk1)
        this.setState({
            cart: koszyk1,
            })



    }

    render(){
        if (this.state.products.length===0){
            this.root.classList.remove("root");
        }
        else{
            if(!this.root.classList.contains("root")){
                this.root.classList.add("root");
            }
        }
        const ListProducts = this.state.products.map(prod => (
        <Product key={prod.id} 
        id={prod.id}
        name={prod.name} 
        price={prod.price} 
        count={prod.count} 
            updateCart={(e)=>{this.updateCart(prod.id, e.target.value)} }
            deleteProduct={()=>this.deleteProduct(prod.id)} currentValue={()=>this.currentValue()}/>) )
            
        return(
            <React.Fragment>
                {this.state.products.length>0 ? 
                <>
                {ListProducts}
                <div id="sum">{this.state.sum}</div>
                {/* <button onClick={()=>this.oblicz(this.state)}>Podlicz</button>*/}<button className="resetBtn" onClick={()=>this.reset(".productRow>input")}>Reset</button> 
                </>: <h2>Dziękujemy za zakupy :)</h2>}

            </React.Fragment>
        )
    }
}

ReactDOM.render(<ShoppingList />, document.getElementById("root"));