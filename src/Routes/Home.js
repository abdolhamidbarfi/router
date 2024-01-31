import { useContext, useEffect } from "react";
import FormAddToDo from "../Components/Todo/FormAddToDo";
import ToDoList from "../Components/Todo/ToDoList";
import TodosContext from "../Contexts/todo";
import axios from "axios";

function Home() {

    const todosContext = useContext(TodosContext)

    const jsonHandler = (data) => {
        const todos = Object.entries(data)
            .map(([key, value]) => {
                return { key, ...value }
            })
        todosContext.dispatch({ type: "init-data", todos })
    }

    useEffect(() => {
        axios.get(`/todos.json`)
            .then(respnse => jsonHandler(respnse.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <main>
            <section className="jumbotron">
                <div className="container jumbotron-fluid d-flex flex-column align-items-center">
                    <h1 className="jumbotron-heading">Welcome!</h1>
                    <p className="lead text-muted">To get started, add some items to your list:</p>
                    <FormAddToDo />
                </div>
            </section>
            <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                        <ToDoList />
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Home;
