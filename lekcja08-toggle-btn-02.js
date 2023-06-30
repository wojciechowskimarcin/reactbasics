class ToggleBtn extends React.Component {
    constructor(props) {
        super(props);
        this.handleBtn = this.handleBtn.bind(this); // bindowanie tradycyjnej funkcji
    }
    styles = {
        paragraph: {width: '50%', padding: '2%', backgroundColor: 'rgb(30,30,30)', color: "white"}
    }
    state = {
        tglBtn: false
    }

    tekst = `To jest tekst To jest tekst To jest tekst To jest tekst
    To jest tekst To jest tekst To jest tekst To jest tekst
    To jest tekst To jest tekst To jest tekst To jest tekst
    To jest tekst To jest tekst To jest tekst To jest tekst
    To jest tekst To jest tekst To jest tekst To jest tekst`;

    handleBtn(){
        //debugger
        //this.setState({ /* Przy wywołaniu setState() React odświeża widok */
       // tglBtn: !this.state.tglBtn
       // })
       // debugger
       // zwrócenie funkcji z argumentem prevState
        this.setState((prevState) => ({
            tglBtn: !prevState.tglBtn
        }))

        // debugger
    }

    render(){
       // debugger //zmiana przy renderze tglBtn
        return(
            <React.Fragment>
            <button onClick={this.handleBtn}>{this.state.tglBtn ? "Ukryj" : "Pokaż"}</button>
            {/* Dwa sposoby na prostą instrukcję warunkową Question Mark ?: oraz koniunkcja ^ && iloczyn logiczny */}
            <p style={this.state.tglBtn ? this.styles.paragraph : null}>{this.state.tglBtn && this.tekst }</p>
            </React.Fragment>

        );
    }
    }

    ReactDOM.render(<ToggleBtn />, document.getElementById("root"));