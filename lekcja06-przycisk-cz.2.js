// Button
// handleClick = () => {} vs handleClick(){}
// funkcja strzałkowa odnosi się bezpośrenio do obiektu
// kontekstu na jakim jest wywoływany (czyli w tym porzypadku do Appliacji)
 // Application {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
 // a funkcja tradycyjna wskazuje na "undefined"
// Rozwiązanie 1: można ją zbindować <button onClick={this.handleClick.bind(this)}>Dodaj "A"</button>
// Rozwiązanie:2:
class Application extends React.Component {
    // Tworzenie stanu w konstruktorze
    // wymaga użycia super ponieważ dziedziczymy po React.Component
    // Dobrze też jest przekazać props'y

    constructor(props){
        super(props);
        this.state = {
            text: "tekst:",
            letter: 65
        }
        // konieczność utworzenia kontekstu dla this przez zbindowanie do this
        this.handleClick = this.handleClick.bind(this);

}
    handleClick (){
        // Bezużyteczne bo nie wpływamy na odświeżanie komponentu 
        // this.state.text += "a";  console.log(this.state.text);
        // używamy setState aby przekazać obiekt po zmianie
        
        
        // this.setState({
        //     text: this.state.text + letter
        // })
        if (this.state.letter == 122){ // reset liter alfabetu
            this.state.letter=65; 
        }
        this.setState(()=>
           ( // Zwracanie całego obiektu
               {text: this.state.text + String.fromCharCode(this.state.letter),
               letter: this.state.letter+1}
               
           )
           
        )
        
    }
    render() {
        return(
            <React.Fragment>
                <button onClick={this.handleClick}>Dodaj {String.fromCharCode(this.state.letter)}</button>
                <h1>{this.state.text}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Application />, document.getElementById("root"));

