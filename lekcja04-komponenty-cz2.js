"use strict";
// Rodzaje komponentów: klasowe (stanowe), funkcyjne (bezstanowe)
// komponent funkcyjny (return) // komponet klasowy (return, render) posiada state

// Przy zainstalowanej wtyczce react-developer-tools i wybraniu Components oraz wybranego komponentu
// np klikamy na 'Content' zauważymy, że jest to komponent klasowy/stanowy bo po przejściu na Console i wpisaniu $r
// pojawią się informacje Content {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
// Czyli posiada propsy i state


const Header = () => { // Twórz identyfikator kompon. z dużej litery
    return (
        <header className='header'>
        <h1>Komponent funkcyjny nr 1</h1>
        </header>
    )
}

const Footer = () => {
    const footerStyle = {
        backgroundColor: "rgb(30,30,30)",
        color: "white",
        fontSize: "0.9em",
        textAlign: "center",
        padding: "20px",
    };
    const links = [
        {text: "Główna", href: "/"},
        {text: "O nas", href: "/onas"},
        {text: "Produkty", href: "/produkty"},
        {text: "Kontakt", href: "/kontakt"},
    ]

    return (
        <footer style={footerStyle}>

     {links.map(elem => <a className='footerLink' href={elem.href}>{elem.text}</a>)}
        </footer>
    );
}


// komponent klasowy

class Content extends React.Component {
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

const Page = () =>{
    return (
        <div>
        <Header />
        <Content />
        <Footer />
        </div>
    );
}

ReactDOM.render(<Page/>, document.getElementById("root"));