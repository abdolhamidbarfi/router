import { useState , useContext } from 'react';

import TodosContext from '../../Contexts/todo';
import AuthContext from '../../Contexts/auth';
import axios from 'axios';

function FormAddToDo(props) {

    const [formInput, setFormInput] = useState("");
    const todosContext = useContext(TodosContext);
    const authContext = useContext(AuthContext);

    const inputHandler = (e) => {
        setFormInput(e.target.value)
      }
    
      const formHandler = (e) => {
        e.preventDefault();
        
        if (formInput.length) {
          let todo = {text: formInput, done: false }
        axios.post(`/todos.json`, todo)
              .then(respons => todosContext.dispatch({type: "add-todo" , payLoad: {todo : {...todo , key: respons.data.name}}}))
              .catch(err => console.log(err))
            setFormInput("");
        }
      }
    
    return (
        authContext.authenticated
        ? <form className="form-inline" onSubmit={formHandler}>
        <div className="form-group d-flex">
          <input 
          type="text" 
          className="form-control mx-sm-3" 
          placeholder="i want to do ..." 
          onChange={inputHandler}
          value={formInput}
          />
          <button className="btn btn-primary ">add</button>
        </div>
      </form>
      : <span>Please login to add todo</span>
    )
}

export default FormAddToDo;