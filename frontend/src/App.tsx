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

    useEffect(() => {
        axios.get("/api/todo")
            .then(response => setTodos(response.data))
            .catch(error => console.log(error));
    }, []);


    return (
        <>
            <h1>ToDo Liste</h1>
            <ul>
                {todos.map((todo)=> (
                    <li key={todo.id}>
                        {todo.description} - {todo.status}
                    </li>
                ))}
            </ul>
        </>
    )
}


