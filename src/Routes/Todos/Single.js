// import { useSearchParams } from "react-router-dom"; ==> If we want to get data from query, use useSearchParams

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleTodo() {

    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get("slug"))

    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true)

    const params = useParams();
    // let todo;


    useEffect(() => {
       if(params.id !== "todo"){
        axios.get(`/todos/${params.id}.json`)
        .then(response => {
            setTodo(response.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
       }
    }, [])



    return (
        <section className="jumbotron">
            <div className="container jumbotron-fluid d-flex flex-column align-items-center">
                {loading
                    ? <div><span>Loading Data</span></div>
                    : <div>
                        <h1 className="jumbotron-heading">{todo.text}</h1>
                        <p className="lead text-muted">{todo.done ? "Taske Compeletly Done" : "Task Ready for Done"}</p>
                    </div>}
            </div>
        </section>
    )
}

export default SingleTodo;