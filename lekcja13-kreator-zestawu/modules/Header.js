const Header = (props) => {
    const selectedProducts = props.sushiProd.filter(sushi => sushi.selected === true);
    console.log("selectedProducts",selectedProducts);
    let price = 0;
     if(selectedProducts.length>0) price = selectedProducts.map(sushi => sushi.price)
                                             .reduce((a, b) => a + b); // sumowanie elementów tablicy

    return (
        <>
         <header>
            <h2>Podsumowanie zamówienia</h2>
            <p>Ilość wybranych produktów: {selectedProducts.length} / {props.sushiProd.length}</p>
            <p>Do zapłaty: <strong>{price} zł</strong></p>
         </header>
        </>
    )
}

//export default Header;