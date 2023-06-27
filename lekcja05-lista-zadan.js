//Lista zadań


class TaskList extends React.Component{
    //tworzenie stanu - właściwości komponentu klasowego
    state = {
        tasks : ["Poranny trening", "Praca", "Nauka Reacta", "Trening Karate"],
        hour: ["8:00-10:00","8:00-10:00","8:00-10:00",]
    }

    render(){
        return(
            <div>
            <h1>Lista zadań</h1>
           <ul>
                <TaskEl taskList={this.state.tasks} />
            </ul>
            </div>
        )

    }
}

class TaskEl extends React.Component{
    render(){
        return(
            this.props.taskList.map((task, index) => <li>{task}</li>)
        )
    }
}

const TaskElement = ({taskList}) => {
    return (
    taskList.map(task => <li>{task}</li>)
    );
};


ReactDOM.render(<TaskList />, document.getElementById("root"));
