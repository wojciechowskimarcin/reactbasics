// drestrukturyzacja tablicy i obiektu

const users = ["root","adminzsp","student","makelab"];
const [superUser, admin, uczen, laborka] = users;
console.log("Witaj superUżytkowniku:", superUser)

const computerUsers = [
    { name: "Stefan Burczymucha", login: "stefan", password: "1234" },
    { name: "Joanna Mucha", login: "fly", password: "mexico12" },
    { name: "Barbara Porzoga", login: "zorro", password: "escobar" },

]

const adminek = {
    name: "janek",
    login: "root",
    password: "żyrafyWchodząDoSzafy"
}

const {name: imie, login: loginName} = adminek; //zmiana nazwy

const [ stefan, joanna, barbara ] = computerUsers;
const [user1, , user3] = computerUsers;
const [,user2,] = computerUsers;
const allUsers = [adminek, ...computerUsers]; // operator rest łączenie tablic
const [mostImportantUser, ...otherUsers] = allUsers; // operator rest dzielenie tablicy

console.log(stefan.name)
console.log(imie)
console.log("user1:", user1, "user2:",user2)
console.log("allUsers:", allUsers)
console.log("mostImportantUser:", mostImportantUser)

// Komponent kontrolowany i niekontrolowany (tutaj tylko funkcja)
class Form extends React.Component{

state = {
    login: "",
    wartosc1: 0,
    wartosc3: 0,
    wartosc4: 0
}
// Komponent kontrolowany oznacza, że wartość zazwyczaj bierze ze stanu, a zmiana jest za pomocą funkcji
handleChange  = (e) =>{
    this.setState({
        login: e.target.value
    })
    console.log("this.state.login:",this.state.login )
    console.log("e.target.value:",e.target.value )
}
// komponent niekontrolowany
handleChangeNotControled = (e) => {
e.preventDefault();
const name = this.refs.nazwisko.value;
console.log("nazwisko:", name)
}
//setState - nadpisywanie, scalanie, prevState
handleClick1 = () =>{
    console.log("Wartość this.state.wartosc1:", this.state.wartosc1)
    this.setState({
        wartosc1: this.state.wartosc1+1
        //wartosc1: this.state.wartosc1++ nie działa ponieważ this.state.wartosc1 jest ciągle 0
    })
    
    console.log("wartosc1:", this.state.wartosc1)
}
handleClick3 = () =>{
    // będą się nadpisywać i wykona się ostatnia
    this.setState({
        wartosc3: this.state.wartosc3+1
    })
    this.setState({
        wartosc3: this.state.wartosc3+2
    })
    this.setState({
        wartosc3: this.state.wartosc3+1
    })
    console.log("wartosc3:", this.state.wartosc3)
}
handleClick4 = () =>{
    this.setState(prevState => ({
        wartosc4: prevState.wartosc4+1
    }))
    this.setState(prevState => ({
        wartosc4: prevState.wartosc4+2
    }))
    this.setState(prevState => ({
        wartosc4: prevState.wartosc4+1
    }))

    console.log("wartosc4:", this.state.wartosc4)
}
render(){
    return(
        <>
        <form onSubmit={this.handleChangeNotControled}>
        <input type="text" value={this.state.login} onChange={this.handleChange} placeholder="wpisz imię"/>
        <input type="text" placeholder="wpisz nazwisko" ref="nazwisko"/>
        <input type="submit" value="wyślij" />
        </form>
        <button onClick={this.handleClick1}>Zwiększ o 1</button><span>{this.state.wartosc1}</span>
        <button onClick={this.handleClick3}>Zwiększ o 3</button><span>{this.state.wartosc3}</span>
        <button onClick={this.handleClick4}>Zwiększ o 4</button><span>{this.state.wartosc4}</span>
        </>
    )
}

}

ReactDOM.render(<Form />, document.getElementById("root"))