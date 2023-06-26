//console.log(React);
//console.log(ReactDOM);
//https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=entry&corejs=2&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWwIwF4A8ATAlgNwD4BBBAQxmQoGsQozMB6PIgKFElkRQCYsyIubHBhD0AcgBOcauSriY1OAE8JZbPjiSoABlTjCrGMZPHMZbbmBIY1gRDWXrcAwBUQMAFZxoMYtuVqAFdAIUAmCygrJENTM0YBIThCIA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=true&targets=&version=7.22.5&externalPlugins=&assumptions=%7B%7D


const elem = React.createElement(
    "div",
    null,
    "Pierwsze koty za płoty"
);

const mainStyle = { 
    backgroundColor: "rgba(200,200,200,.4)",
    padding: "10px 50px 200px 50px"
};
const footerStyle = {
    backgroundColor: "rgb(30,30,30)",
    color: "white",
    fontSize: "0.9em",
    textAlign: "center",
    padding: "20px"
};


//ReactDOM.render(elem, document.getElementById("root"));

const header = (
                <header className="headerStyle">
                <h2>Witajcie na mojej stronie</h2>
                </header>
                );
const main = <main style={mainStyle}><p>To jest treść strony</p></main>;
const footer = <footer style={footerStyle}>&copy; Wszystkie prawa zastrzeżone</footer>;

const page = [header, main, footer];

ReactDOM.render(page, document.getElementById("root"));