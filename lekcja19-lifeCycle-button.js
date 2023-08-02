class Button extends React.Component{

state = {
    ratio: 0,
    value: 1
}

componentDidUpdate(){
    console.log("componetDidUpdate")
}
componentDidMount(){
    this.setState({
        ratio: 1
    })
    console.log("componentDidMount")
}

componetWillUnmount(){

}

onclickhandle = (value, ratio) =>{

if (ratio == 0){
    ratio = 1
}
else if( ratio == 1 && value == 1){
    ratio = 2;
}
else if(ratio == 2 && value>=1000){
    ratio= 0.5
}
else if(ratio == 0.5 && value <= 1){
    ratio = 1;
    value = 1;
}


this.setState({
    ratio: ratio,
    value: value*ratio
})
}
render(){
    return(
        <React.Fragment>
        <button onClick={()=>this.onclickhandle(this.state.value, this.state.ratio)}>Pomnóż przez {
        this.state.ratio ==1 && this.state.value==1? 2 : this.state.ratio}</button>
        <h2>{this.state.value}</h2>
        </React.Fragment>
    )
}


}

ReactDOM.render(<Button />, document.getElementById("root"))