// Button



class Application extends React.Component {
    state = {
        text: "sss"
    }
    handleClick = () =>{
        // Bezużyteczne bo nie wpływamy na odświeżanie komponentu 
        // this.state.text += "a";  console.log(this.state.text);
        // używamy setState aby przekazać obiekt po zmianie

        const letter = "a";
        this.setState({
            text: this.state.text + letter
        })
    }
    render() {
        return(
            <React.Fragment>
                <button onClick={this.handleClick}>Dodaj "A"</button>
                <h1>{this.state.text}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Application />, document.getElementById("root"));

