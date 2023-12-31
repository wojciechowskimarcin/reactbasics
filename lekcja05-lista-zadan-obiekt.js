//Lista zadań


class TaskList extends React.Component{
    //tworzenie stanu - właściwości komponentu klasowego
    state = {
        "tasks": {
            "Poranny trening": "8:00-10:00",
            "Praca": "10:00-12:00",
            "Nauka Reacta": "12:00-14:00",
            "Trening Karate": "18:00-20:00"
        }
    }
    

    render(){
        // Zagnieżdżanie styli
        let taskCSS = {
            taskSpan : {
                "width" : "5em",
                "paddingRight": "1em",
                "float": "left"
            },
            taskEl : {
                "width": "30%",
                "backgroundColor": "orange",
                "borderBottom": "1px solid grey",
                "marginBottom": "5px",
                "color": "black",
                "fontWeight": "bolder",
                "padding": "5px"
            },
            taskUl : {
                "padding": "0"
            }
    }
        return(
            <div>
            <h1>Lista zadań</h1>
           <ul style={taskCSS.taskUl}>
            {/* Iteracja po obiekcie musimy używać Object.entries */}
                {Object.entries(this.state.tasks).map(([key, value], index) =>
                <li style={taskCSS.taskEl}><span style={taskCSS.taskSpan}> {value} </span>{key} </li>
        )}
            </ul>
            </div>
        )

    }
}

class TaskEl extends React.Component{
    render(){
        return(
           ""
        )
    }
}

const TaskElement = ({taskList}) => {
    return (
    taskList.map(task => <li>{task}</li>)
    );
};


ReactDOM.render(<TaskList />, document.getElementById("root"));
