import { useState, useContext } from "react";
import TodosContext from "../../Contexts/todo";

function EditTodo(props) {

    const [textToDo, setTextToDo] = useState(props.text)
    const todosContext = useContext(TodosContext)
    
    const handleChangeInput = (e) => {
        setTextToDo(e.target.value);
    }
   


    return (
        <div className="col-6 mb-2">
        <div className="d-flex justify-content-between align-items-center border rounded p-3">
            <div>
            <input 
          type="text" 
          className="form-control mx-sm-3"
          value={textToDo}
          onChange={handleChangeInput}
          />
            </div>
            <div>
                <button 
                       type="button" 
                       className="btn btn-info btn-sm m-1" 
                       onClick={() => props.onChangeInput(textToDo)
                       }>
                        edit
                </button>
            </div>
        </div>
    </div>
    )

}

export default EditTodo;