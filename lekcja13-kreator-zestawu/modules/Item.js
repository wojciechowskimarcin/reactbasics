const Item = (props) =>{
    console.log("selected:", props.selected)
    return(<li className={props.selected ? "selected" : false}onClick={()=>props.changeStatus(props.id)}>{props.name} <strong>{props.price} zł</strong> <p className='prodDescription'>{props.description}</p> </li>)
}