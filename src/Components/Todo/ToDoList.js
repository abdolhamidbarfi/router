import { useState , useContext} from "react";
import ToDo from "./ToDo"
import Navbar from "./Navbar";

import TodosContext from "../../Contexts/todo";


function ToDoList(props) {

    //start states section
    const [toggleTabe, setToggleTab] = useState(false)
    const todosContext = useContext(TodosContext);
    const {todos} = todosContext;
    

    //start variable section
    const doneUndoneTodo = todos.filter(todo => todo.done === toggleTabe)

    const handleToggleTab = () => {
        setToggleTab(!toggleTabe)
    }
   
    return (
        <>
        <Navbar onToggleTab={handleToggleTab} statusToggle={toggleTabe} />

                    {doneUndoneTodo.map((value) => {
                       return (
                        <ToDo value={value} key={value.key} />
                       )
                    })}
        </>
    )
}

export default ToDoList;