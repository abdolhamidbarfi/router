
import EditTodo from "./EditToDo";
import { useState , useContext} from "react";
import TodosContext from "../../Contexts/todo";
import axios from "axios";
import { Link } from "react-router-dom";

function ToDo(props){
   

    //start states section
    const [editTextToDo, setEditTextToDo] = useState(false)
    const todosContext = useContext(TodosContext)


    //start functions section
    const toggleFormEdit = () => {
        setEditTextToDo(!editTextToDo)
    }
    
    
    const changeInput = (newTextValue) => {
        axios.put(`/todos/${props.value.key}.json`, {done: props.value.done , text: newTextValue})
                .then(response => todosContext.dispatch({type: "edit-todo", payLoad:{text: response.data.text, key: props.value.key}}))
                .catch(err => console.log(err))
        
        setEditTextToDo(!editTextToDo)
    }

    const deleteHandler = () => {
        axios.delete(`/todos/${props.value.key}.json`)
        .then(response => todosContext.dispatch({type: "delete", payLoad:{key: props.value.key}}))
        .catch(err => console.log(err))
    }
  
    const doneHandler = (e) => {
        axios.put(`/todos/${props.value.key}.json`, {done: !props.value.done, text: props.value.text})
            .then(response => todosContext.dispatch({type: "toggleDone", payLoad:{key: props.value.key} }))
            .catch(err => console.log(err))
    
    }

    return (
        editTextToDo 
        ? <EditTodo text={props.value.text} onChangeInput={changeInput} />
        :  <div className="col-6 mb-2">
        <div className="d-flex justify-content-between align-items-center border rounded p-3">
            <Link to={`/single/${props.value.key}`}>
                {props.value.text}
            </Link>
            <div>
                <button 
                       type="button" 
                       className={`btn btn-sm m-1 ${props.value.done ? "bg-warning" : "btn-success"}`} 
                       onClick={() => doneHandler()}
                       >
                        {props.value.done ? "Undone" : "Done"}
                </button>
                <button 
                       type="button" 
                       className="btn btn-info btn-sm m-1" 
                       onClick={() => toggleFormEdit()}
                       >
                        edit
                </button>
                <button 
                       type="button" 
                       className="btn btn-danger btn-sm m-1" 
                       onClick={() => deleteHandler()}
                       >
                        delete
                </button>
            </div>
        </div>
    </div>
    )
}

export default ToDo;