const challengeBase = [
    {id: 1, description: "Utwórz aplikację ToDoApp"},
    {id: 2, description: "Utwórz prostą apkę Array Filter"},
    {id: 3, description: "Utwórz licznik kliknięć"},
    {id: 4, description: "Stwórz prostą apkę typu Accordion (harmonijka)"}, 
    {id: 5, description: "Stwórz prosty Image Slider"},
    {id: 6, description: "Stwórz w React aplikację Checklist"}
]


class Challenge extends React.Component {

    state = {
        selectedChallengeID: 0,
        information: ""
    }
    information = (info) => (
        this.setState({
            information: info
        }
    ))
    resetInformation = () =>{
        this.setState({
            information: ""
        });
    }
    postHandler = (e) => {
        this.resetInformation();
        e.preventDefault();
        console.log("Dodaję wyzwanie :P");
        const countChallenges = challengeBase.length;
        console.log("Liczba wyzwań:",countChallenges);
        const textInput = document.querySelector("input[placeholder='Dodaj wyzwanie']");

        console.log("Treść wyzania:", textInput.value);
        if (textInput.value.length > 0){
        challengeBase.push({id: countChallenges+1, description: textInput.value})
        console.log("Dodałem wyzwanie")
        this.information("Dodałem wyzwanie")
        //setInterval(()=> {this.information(""); },3000)
        textInput.value="";
        console.log("Tablica:",challengeBase)
        }
        else {
            console.log("Dodaj treść wyzwania")
            this.information("Dodaj treść wyzwania")
            //setInterval(()=> {this.information("")},2000)
        }
    
    }
    RandomChallenge = (e) =>{
        e.preventDefault();
        this.resetInformation();
        console.log("Losuję wyzwanie :P");
        const countofChallenge = challengeBase.length;
        const RandomChallengeId = Math.floor(Math.random() * (countofChallenge)+1)
        console.log("Liczba wyzwań", countofChallenge);
        console.log("Wylosowanie wyzwanie", RandomChallengeId);
        
        this.setState({
            selectedChallengeID: RandomChallengeId
        })
    }
    ChoosenChallenge = (val) =>{
        const chellangeChoosen = challengeBase.filter(a => a.id ===val).map(b => b.description)
        console.log("Wyzwanie:",chellangeChoosen)
    return (<React.Fragment><p id='challengeNr'>Wyzwanie #{val}</p><br/><div id="challengeContent">{chellangeChoosen}</div></React.Fragment>)
    }
    
    



    render(){
        
        return (
            <React.Fragment>
                <h2>Wyzwanie</h2>
                <form method="post" onSubmit={this.postHandler}>
                <button onClick={this.RandomChallenge}>Losuj wyzwanie</button>
                <div>
                <input type="text" placeholder="Dodaj wyzwanie" onKeyDown={(e)=>{ e.key=='Enter'? this.postHandler(e) : ""}}/>
                <input type="submit" value="Dodaj wyzwanie"/>
                </div>
                </form>
                <p id="challengeArea">{this.state.selectedChallengeID !=0 ? this.ChoosenChallenge(this.state.selectedChallengeID): "Brak wybranego wyzwania"}</p>
                <p><strong className={this.state.information=="Dodaj treść wyzwania"?"alert":"" || this.state.information=="Dodałem wyzwanie"?"success":""}>{this.state.information}</strong></p>
            </React.Fragment>
        )
    }

}

ReactDOM.render(<Challenge />, document.getElementById("root"));