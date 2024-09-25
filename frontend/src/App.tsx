import './App.css'
import {useEffect, useState} from "react";
import axios from 'axios';

type Todo = {
    id: string;
    description: string;
    status: string;
};

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [description, setDescription] = useState<string>("");

    // get Todos
    useEffect(() => {
        axios.get("/api/todo")
            .then(response => setTodos(response.data))
            .catch(error => console.log(error));

        axios.post("api/todo",)
    }, []);

    // add Todos
    function addTodo() {
        const newTodo: Partial<Todo> = {
            description: description,
            status: "OPEN"
        };

        // post
        axios.post("api/todo", newTodo)
            .then(response => {
                setTodos([...todos, response.data]);
                setDescription("");
            })
            .catch(error => console.log(error));
    }


    return (
        <>
            <h1>ToDo Liste</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.description} - {todo.status}
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
        </>
    )
}


