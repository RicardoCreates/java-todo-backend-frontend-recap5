import {useEffect, useState} from "react";
import axios from 'axios';
import Navbar from "./components/Navbar.tsx";
import GlobalStyles from "./Globalstyles.ts";

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

    // delete
    function deleteTodo(id: string) {
        axios.delete(`/api/todo/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id))
            })
            .catch(error => console.log(error));
    }

    // description input
    function handleDescriptionChange(id: string, newDescription: string) {
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, description: newDescription} : todo
        ));
    }

    // Status
    function handelStatusChange(id: string, newStatus: string) {
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, status: newStatus} : todo
        ));
    }


    return (
        <>
            <GlobalStyles/>
            <Navbar />
            <main>
            <h1>ToDo Liste</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="text"
                            value={todo.description}
                            onChange={(event) => handleDescriptionChange(todo.id, event.target.value)}
                        />
                        <select
                            value={todo.status}
                            onChange={(event) => handelStatusChange(todo.id, event.target.value)}
                        >
                            <option value={"OPEN"}>OPEN</option>
                            <option value={"IN_PROGRESS"}>IN PROGRESS</option>
                            <option value={"DONE"}>DONE</option>
                        </select>
                        <button onClick={() => updateTodo(todo.id, todo.description)}>
                            Save Changes
                        </button>
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <h2>Neues ToDo hinzufügen</h2>
            <input
                type={"text"}
                value={description}
                onChange={event => setDescription(event.target.value)}
                placeholder={"Todo eingeben"}
            />
            <button onClick={addTodo}>Hinzufügen</button>
            </main>
        </>
    );
}
