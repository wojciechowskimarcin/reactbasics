const Elements = (props) => (
<ul><li>{`CPU name: ${props.item}`}</li>
<li>{`architecture: ${props.arch}`}</li>
<li>{`socket: ${props.socket}`}</li></ul>
);




const computerParts =  {
    cpu: [
        {name: "Intel Core i5-13400", architecture: "Raptor Lake", socket: "LGA 1700"},
        {name: "AMD Ryzen 7 7800X3D", architecture: "Zen 4", socket: "AM5"},
        {name: "Intel Core i7-13700K", architecture: "Alder Lake", socket: "LGA 1700"},
        {name: "AMD Ryzen 7 5800X3D", architecture: "Zen 3", socket: "AM4"}]
};

class List extends React.Component{

    checkSocket = (item, socket) => (item.socket === socket);
    constructor(){
        super();
    this.state = {
        computerParts: computerParts
    };
}

render(){

    const cpu = computerParts.cpu;
    const cpuState = this.state.computerParts;
    const filterRender = (obj, warunek) => obj.socket === warunek;
    this.setState = ({
        computerParts: {cpu: cpuState.cpu.filter(el => filterRender(el, "AM5"))}
    });
    const socket = () =>
        cpu.filter((item, index) => cpu.findIndex((obj)=>obj.socket===item.socket)===index).map(el => <option value={el.socket}>{el.socket}</option>);
        //usuwanie redundantnych https://codingbeautydev.com/blog/javascript-filter-duplicate-objects-from-array/
    
    
    //const RenderList1 = (e) => (cpuState.filter(el => filterRender(el, e)).map((el,idx) => <Elements key={idx} item={el.name} arch={el.architecture} socket={el.socket}/>));
    const RenderList1 = (e) => {
        this.setState = ({
            computerParts: cpuState.cpu.filter(el => filterRender(el, e))
        });
        console.log({cpu: cpuState.cpu.filter(el => filterRender(el, e))});
    };
    //RenderList1.map((el,idx) => <Elements key={idx} item={el.name} arch={el.architecture} socket={el.socket}/>)

    const selectedValue = (value) => console.log(value);

    let RenderList =
    cpuState.cpu.map((el,idx) => <Elements key={idx} item={el.name} arch={el.architecture} socket={el.socket}/>);

 
    return(
        
        <div>
                        <select onChange={(e)=>RenderList1(e.target.value)}>
            {socket()}
           
        </select>
        {RenderList}
        {console.log(this.state.computerParts)}

        

        </div>
    );
}


}

ReactDOM.render(<List/>, document.getElementById("root"));