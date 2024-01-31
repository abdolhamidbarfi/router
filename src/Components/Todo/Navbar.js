import { useContext } from "react";
import TodosContext from "../../Contexts/todo";

function Navbar(props) {
  const todosContext = useContext(TodosContext);
  
    return (
        
        <nav className="col-6 mb-3">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">

                            <a 
                              className={`nav-item nav-link  font-weight-bold ${!props.statusToggle ? "active" : ""}`} 
                              id="nav-home-tab" 
                              onClick={props.onToggleTab}
                              >
                                undone 
                              <span className="badge  bg-secondary">
                                {todosContext.todos.filter((item) => item.done === false).length}
                              </span>
                            </a>

                            <a 
                              className={`nav-item nav-link  font-weight-bold ${props.statusToggle ? "active" : ""}`} 
                              id="nav-profile-tab" 
                              onClick={props.onToggleTab}
                              >
                                done 
                              <span className="badge bg-success">
                                {todosContext.todos.filter((item) => item.done === true).length}
                              </span>
                            </a>

                        </div>
                    </nav>
    )
}

export default Navbar;