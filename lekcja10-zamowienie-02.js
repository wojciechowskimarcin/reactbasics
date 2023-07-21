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


const BuyBtn = () =>{

        return(
            <button type="submit">Dokonaj zakupu</button>
        )
}

class Potwierdzenie extends React.Component {

state = {
    age: false,
    confirmBuy: false,
}



ConfirmClick = () =>{
    console.log("age state:",this.state.age);
    this.setState({
        age: !this.state.age
    })
}

HandleSubmitForm = (e) =>{
    e.preventDefault();
    console.log("Powstrzymałem wysyłanie formularza");
    this.setState({
        confirmBuy: true
    })
}

render(){
    const styles = {
        pageStyle: {
            "margin": "20px",
        },
        stylTrue: {"marginLeft": "20px", "backgroundColor":"green", "color":"white", "padding":"10px", "width":"20%"
        },
        stylFalse: {"marginLeft": "20px", "backgroundColor":"red", "color":"white", "padding":"10px", "width":"20%"
        },
        pageStyleBuy: {"marginLeft": "20px", "backgroundColor":"green", "color":"white", "padding":"10px", "width":"50%", "textAlign": "center"
    }
    }

    const {stylTrue, stylFalse, pageStyle, pageStyleBuy} = styles; // destrukturyzacja
    const {age, confirmBuy} = this.state;

    if (!confirmBuy){
    return(
        <div style={pageStyle}>
            <h1>Potwierdzenie wieku</h1>
            <form onSubmit={this.HandleSubmitForm} >
            <input id="ageCheckbox" type="checkbox" onClick={this.ConfirmClick} value={age}/>
            <label forLabel="ageCheckbox">{age? <ConfirmedAgeTrue />: <ConfirmedAgeFalse />}</label>
            <p style={age?stylTrue:stylFalse}><AdditionalMessage age18={age} /></p>
            {age?<BuyBtn/>:false}
            </form>
        </div>
    )
    }
else{
    return(

    <div style={pageStyleBuy}>
        <h1>Dziękujemy za zakup</h1>

    </div>
    )
}
    }


}

ReactDOM.render(<Potwierdzenie/>, document.getElementById("root"));

