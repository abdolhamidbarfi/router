function appReducer(prevState, action) {
    
    switch(action.type){
        case "init-data":
            return initData(prevState, action)
            break
            
        case "add-todo":
            return addTodos(prevState, action);
            break;
       
        case "delete":
           return deleteTodos(prevState, action)
            break;

        case "edit-todo":
           return editTodos(prevState, action)
            break;

        case "toggleDone":
           return toggleDoneTodos(prevState, action)
            break;

        case "login-user":
            return loginUser(prevState, action)
            break;
            
        case "logout-user":
            return logoutUser(prevState, action)
            break;

        default:
            return prevState
            break;
    }
}

export default appReducer;

const initData = (prevState, action) => {
    return({
        ...prevState,
        toDoLists: action.todos
    })
}

const addTodos = (prevState, action) => {
    return ({
        ...prevState,
        toDoLists: [
            ...prevState.toDoLists,
            action.payLoad.todo
        ]
    })
}

const deleteTodos = (prevState, action) => {
    return({
        ...prevState,
        toDoLists: prevState.toDoLists.filter(item => item.key !== action.payLoad.key)
    })
}

const editTodos = (prevState, action) => {
    let todos = prevState.toDoLists.map(item => {
        return (item.key === action.payLoad.key ? item.text = action.payLoad.text : item)
      });
    // let todos = prevState.toDoLists.map(item => {
    //     if (item.key === action.payLoad.key) {
    //         item.text = action.payLoad.text
    //         return item;
    //     } else {
    //         return item;
    //     }
    //   });
      console.log(todos)
      console.log(prevState)
    return({
        ...prevState,
        // toDoLists : todos
    })
}

const toggleDoneTodos = (prevState, action) => {
    let findItem = prevState.toDoLists.find(item => item.key === action.payLoad.key)
    findItem.done = !findItem.done
    let newItem = prevState.toDoLists.filter(item => item.key !== action.payLoad.key)
    return ({
        ...prevState,
        toDoLists:  [
            ...newItem,
            findItem
        ]
    })
}

const loginUser = (prevState, action) => {
    return ({
        ...prevState,
        authenticated: true
    })
}

const logoutUser = (prevState, action) => {
    return({
        ...prevState,
        authenticated: false
    })
}