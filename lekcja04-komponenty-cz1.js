"use strict";
// Rodzaje komponentów: klasowe (stanowe), funkcyjne (bezstanowe)

// komponent funkcyjny

const AppFn = () => { // Twórz identyfikator kompon. z dużej litery

    return (
        <>
        <h1>Komponent funkcyjny nr 1</h1>
        </>
    )
}

//ReactDOM.render(<AppFn/>, document.getElementById("root"));

// komponent klasowy

class AppClass extends React.Component {
    state = {
        vat: 23,
    }
    render(){
        return(
            <div className="komponent">
                <h1>Komponent klasowy nr 1</h1>
                <div>Warość state vat: {this.state.vat}</div>
            </div>
        );
    }
}
ReactDOM.render(<><AppClass/><AppFn/></>, document.getElementById("root"));