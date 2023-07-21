class Itema extends React.Component{
    
    
    selectProdHandler = (id) =>{
        console.log(`Wybrano produkt: ${id}`)
        console.log(this.state)
    }


    render(){
        return(<li onClick={()=>this.selectProdHandler(this.props.id)}>{this.props.name} <strong>{this.props.price} zł</strong> <p className='prodDescription'>{this.props.description}</p> </li>)
    }

}

