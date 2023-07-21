const Elements = (props) => 
<li>{props.item}</li>


class List extends React.Component{

state =  {
    elements: ["Intel Core i5-13400",
    "AMD Ryzen 7 7800X3D",
    "Intel Core i7-13700K",
    "AMD Ryzen 7 5800X3D"]
}

render(){
    const RenderList =
    this.state.elements.map((el,idx) => <Elements key={idx} item={el}/>)

    return(
        <ul>
        {RenderList}
        </ul>
    )
}


}

ReactDOM.render(<List/>, document.getElementById("root"));