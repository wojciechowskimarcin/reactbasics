const ConfirmedAgeFalse = () =>("Potwierdź, że masz 18 lat");
const ConfirmedAgeTrue = () =>("Masz 18 lat");
const AdditionalMessage = (props) =>{

if (props.age18){
    return "Masz możliwość zakupu"
}
else{
    return "Nie masz możliwości zakupu"
}

}
class Potwierdzenie extends React.Component {

state = {
    age: false,
}

ConfirmClick = () =>{
    console.log("age state:",this.state.age);
    this.setState({
        age: !this.state.age
    })
}


render(){
    let stylTrue = {"marginLeft": "20px", "backgroundColor":"green", "color":"white", "padding":"10px", "width":"20%"}
    let stylFalse = {"marginLeft": "20px", "backgroundColor":"red", "color":"white", "padding":"10px", "width":"20%"}

    return(
        <>
            <h1>Potwierdzenie wieku</h1>
            <input id="ageCheckbox" type="checkbox" onClick={this.ConfirmClick} value={this.state.age}/>
            <label forLabel="ageCheckbox">{this.state.age? <ConfirmedAgeTrue />: <ConfirmedAgeFalse />}</label>
            <p style={this.state.age?stylTrue:stylFalse}><AdditionalMessage age18={this.state.age} /></p>

        </>

    )

    }


}

ReactDOM.render(<Potwierdzenie/>, document.getElementById("root"));

