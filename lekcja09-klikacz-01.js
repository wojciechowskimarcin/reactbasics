class Klikacz extends React.Component{

    state = {
        value: 0,
        clickCount: 0
    }


MathOpperation = (typ, value) => {
    console.log(typ, value)
    value=parseInt(value)
    if (typ == "add"){
        this.setState({
            value: this.state.value+value
        })
    }
    else if (typ == "substr"){
        this.setState({
            value: this.state.value-value
        })
    } 
    else if (typ == "reset"){
        this.setState({
            value: 0
        })
    }
    console.log(this.state)
}

    render(){
        return(
            <div>
                <Btn title='+' klick={this.MathOpperation} typ="add" value="10"/>
                <Btn title='-' klick={this.MathOpperation} typ="substr" value="10"/>
                <Btn title='reset' klick={this.MathOpperation} typ="reset" value="0"/>
                <MathArea value={this.state.value} />
            </div>
        )
    }
}

const Btn = (props) => {
    return(
    <button onClick={()=>props.klick(props.typ, props.value)}>{props.title}</button>
    )
}
const MathArea = (props) =>{
    return(
    <h2>{props.value}</h2>
    )
}

ReactDOM.render(<Klikacz />, document.getElementById("root"));