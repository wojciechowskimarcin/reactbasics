const Elements = (props) => 
<ul><li>{`CPU name: ${props.item}`}</li>
<li>{`architecture: ${props.arch}`}</li>
<li>{`socket: ${props.socket}`}</li></ul>;

const computerParts =  {
    cpu: [
        {name: "Intel Core i5-13400", architecture: "Raptor Lake", socket: "LGA 1700"},
        {name: "AMD Ryzen 7 7800X3D", architecture: "Zen 4", socket: "AM5"},
        {name: "Intel Core i7-13700K", architecture: "Alder Lake", socket: "LGA 1700"},
        {name: "AMD Ryzen 7 5800X3D", architecture: "Zen 3", socket: "AM4"}]
};

class List extends React.Component{


render(){

    const cpu = computerParts.cpu;
    const RenderList =
    cpu.map((el,idx) => <Elements key={idx} item={el.name} arch={el.architecture} socket={el.socket}/>);

    return(
        <div>
        {RenderList}
        </div>
    );
}


}

ReactDOM.render(<List/>, document.getElementById("root"));