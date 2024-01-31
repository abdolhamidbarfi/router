import './App.css';
import "bootstrap/dist/css/bootstrap.css"

//Import Componenet
import Header from "./Layouts/Header"
import { lazy, useEffect, useReducer, Suspense } from 'react';

//import Context
import TodosContext from '../Contexts/todo';
import AuthContext from '../Contexts/auth';
import AppReducer from '../Reducers/appReducer';
import axios from 'axios';
import Home from '../Routes/Home';

//Routes
import { Route, Routes } from 'react-router-dom';


const About = lazy(() => import("../Routes/About"))
const ContactUS = lazy(() => import("../Routes/ContactUs"))
const SingleTodo = lazy(() => import("../Routes/Todos/Single"))
const NotFound = lazy(() => import("../Routes/NotFound"))


function App() {

  const [state, dispatch] = useReducer(AppReducer, {
    toDoLists: [],
    authenticated: false
  })


  return (
    <AuthContext.Provider value={{
      authenticated: state.authenticated,
      dispatch
    }}>
      <TodosContext.Provider value={{
        todos: state.toDoLists,
        dispatch
      }}>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/about' element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <About />
              </Suspense>
            } />

            <Route path='/contact-us' element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <ContactUS />
              </Suspense>
            } >
              <Route path='' element={<div><p>Cantact Form</p></div>} />
              <Route path='address' element={<div><p>Cantact Adress</p></div>} />
            </Route>

            <Route path='/single/:id' element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <SingleTodo />
              </Suspense>
            } />

            <Route path='*' element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <NotFound />
              </Suspense>
            } />
          </Routes>
        </div>
      </TodosContext.Provider>
    </AuthContext.Provider>

  );
}

export default App;
