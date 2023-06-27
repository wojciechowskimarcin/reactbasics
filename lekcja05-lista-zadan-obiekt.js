//Lista zadań


class TaskList extends React.Component{
    //tworzenie stanu - właściwości komponentu klasowego
    state = {
        /*tasks : ["Poranny trening", "Praca", "Nauka Reacta", "Trening Karate"],
        hour: ["8:00-10:00","8:00-10:00","8:00-10:00",]*/
        "tasks": {
            "Poranny trening": "8:00-10:00",
            "Praca": "10:00-12:00",
            "Nauka Reacta": "12:00-14:00",
            "Trening Karate": "18:00-20:00"
        }
    }
    

    render(){
        let taskCss = {
            "width" : "5em",
            "paddingRight": "1em",
            "float": "left"
        }
        return(
            <div>
            <h1>Lista zadań</h1>
           <ul>
            {/* Iteracja po obiekcie musimy używać Object.entries */}
                {Object.entries(this.state.tasks).map(([key, value], index) =>
                <li><span style={taskCss}> {value} </span>{key} </li>
        )}
            </ul>
            </div>
        )

    }
}

class TaskEl extends React.Component{
    render(){
        return(
            //this.props.taskList.map((task, index) => console.log({task}))
           31
        )
    }
}

const TaskElement = ({taskList}) => {
    return (
    taskList.map(task => <li>{task}</li>)
    );
};


ReactDOM.render(<TaskList />, document.getElementById("root"));
