class App extends React.Component{
    state = {
     sushi: [
      {id: 1, name: "YASAI YAKI", description: "sezonowe warzywa grillowane, spicy mayo, wasabi", price: 22, selected: false},
      {id: 2, name: "KUDAMONO YASAI", description: "sezonowe owoce, serek Philadelphia, sałata, wasabi", price: 22, selected: false},
      {id: 3, name: "HOTATE TEMPURA", description: "małże św. Jakuba, ogórek, tobiko, spicy mayo, pieprz japoński, w całości w tempurze, wasabi", price: 52, selected: false},
      {id: 4, name: "SAKE KAWA", description: "smażona skóra z łososia, serek Philadelphia, ogórek, awokado, togarashi, sos kabayaki, sałata, orzechy ziemne z miodem i sezamem, wasabi", price: 35, selected: false},
      {id: 5, name: "MAGURO", description: "tuńczyk, ogórek, awokado, sałata, oshinko, spicy mayo, wasabi", price: 37, selected: false},
      {id: 6, name: "HIRAME TEMPURA", description: "halibut w tempurze, serek Philadelphia, awokado, mango, melon, tykwa, sałata, sos chilli mango,", price: 44, selected: false}
     ]
    }
    

    changeStatus = (id) =>{
        console.log("Zmiana stautusu:",id);

        const items = this.state.sushi.map(item => {
            if (item.id === id){
                item.selected = !item.selected
            }
           
        return item;
        })
        this.setState({
            sushi: items
        })
    }
    render(){
        return(
            <div className='app'>
            <Header sushiProd={this.state.sushi}/>
            <ListItems sushiProd={this.state.sushi} changeStatus={this.changeStatus}/>
            </div>
        )

    }



}

//export default App;