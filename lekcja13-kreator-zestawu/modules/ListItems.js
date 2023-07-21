const ListItems = (props) => {
console.log(props.sushiProd)
        return(
            <ul>
                {props.sushiProd.map(element => 
                                <Item id={element.id} name={element.name} description={element.description} 
                                price={element.price} changeStatus={props.changeStatus} selected={element.selected}/>)
                } 
            </ul>
        );

}

//export default ListItems;