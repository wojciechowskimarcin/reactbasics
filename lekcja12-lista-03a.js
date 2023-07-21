const computerParts =  {
    cpu: [
        {name: "Intel Core i5-13400", architecture: "Raptor Lake", socket: "LGA 1700"},
        {name: "AMD Ryzen 7 7800X3D", architecture: "Zen 4", socket: "AM5"},
        {name: "Intel Core i7-13700K", architecture: "Alder Lake", socket: "LGA 1700"},
        {name: "AMD Ryzen 7 5800X3D", architecture: "Zen 3", socket: "AM4"}]
};

const CompPart = (props) =>(

    <ul>
        <li>{props.name} </li>
        <li>{props.architecture}</li>
        <li>{props.socket}</li>
    </ul>

)


class ComputerParts extends React.Component{
    constructor(){
        super();
        this.state = {
            computerParts: {...computerParts} // kopiowanie obiektu przez spread
        }
        var choosenSocket = "any";
    }
    

    render(){
        const cpu = this.state.computerParts.cpu;
        
        const socketHandler = (e) =>{
            this.choosenSocket = e.target.value;
            console.log(this.choosenSocket)
            this.setState({
               // computerParts: {cpu: computerParts.cpu.filter(el => el.socket===this.choosenSocket)}
            })
            
        }
        console.log({cpu: computerParts.cpu.filter(el => el.socket===this.choosenSocket)})
        console.log("state:",this.state.computerParts)
        console.log("this.choosenSocket:",this.choosenSocket)
         
        
        const socket = () =>
        computerParts.cpu.filter((item, index) => computerParts.cpu.findIndex((obj)=>obj.socket===item.socket)===index).map(el => <option value={el.socket}>{el.socket}</option>);

        const compParts = computerParts.cpu.filter(this.choosenSocket===undefined || this.choosenSocket=="all" ?()=>true:element => element.socket ===this.choosenSocket).map(el => <CompPart 
            name={el.name}
            architecture={el.architecture}
            socket={el.socket}/>)
        return(
            
            <div>
            <select onChange={socketHandler}>
            <option value="all">wszystkie</option>
                {socket()}
            </select>
                
                {compParts}


            </div>

        )
    }



}

ReactDOM.render(<ComputerParts />, document.getElementById("root"));