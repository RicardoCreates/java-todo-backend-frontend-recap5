import {useEffect, useState} from "react";
import axios from 'axios';
import Navbar from "./components/Navbar.tsx";
import GlobalStyles from "./Globalstyles.ts";
import Footer from "./components/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import HomePage from "./pages/HomePage.tsx";

type Todo = {
    id: string;
    description: string;
    status: string;
};

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [description, setDescription] = useState<string>("");

    // Get Todos
    useEffect(() => {
        axios.get("/api/todo")
            .then(response => setTodos(response.data))
            .catch(error => console.log(error));
    }, []);

    // Add Todo
    function addTodo() {
        const newTodo: Partial<Todo> = {
            description: description,
            status: "OPEN"
        };

        axios.post("/api/todo", newTodo)
            .then(response => {
                setTodos([...todos, response.data]);
                setDescription("");
            })
            .catch(error => console.log(error));
    }

    // Update Todo
    function updateTodo(id: string, updatedDescription: string) {
        const todoToUpdate = todos.find(todo => todo.id === id);

        if (!todoToUpdate) return;

        const updatedTodo = {
            id: id,
            description: updatedDescription,
            status: todoToUpdate.status
        };

        axios.put(`/api/todo/${id}`, updatedTodo)
            .then(response => {
                setTodos(todos.map(todo =>
                    todo.id === id ? response.data : todo
                ));
            })
            .catch(error => console.log(error));
    }

    // Delete Todo
    function deleteTodo(id: string) {
        axios.delete(`/api/todo/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(error => console.log(error));
    }

    // Handle description change
    function handleDescriptionChange(id: string, newDescription: string) {
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, description: newDescription} : todo
        ));
    }

    // Handle status change
    function handleStatusChange(id: string, newStatus: string) {
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, status: newStatus} : todo
        ));
    }

    return (
        <>
            <GlobalStyles/>
            <Navbar/>
            <Routes>
                <Route path="/mainpage" element={
                    <MainPage
                        todos={todos}
                        description={description}
                        setDescription={setDescription}
                        handleStatusChange={handleStatusChange}
                        handleDescriptionChange={handleDescriptionChange}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                        addTodo={addTodo}
                    />
                }/>
                <Route path={"/"} element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </>
    );
}
