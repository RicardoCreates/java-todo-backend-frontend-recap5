import styled from "styled-components";
import {Link} from "react-router-dom";

type Todo = {
    id: string;
    description: string;
    status: string;
};

type MainPageProps = {
    todos: Todo[];
    description: string;
    setDescription: (value: string) => void;
    handleStatusChange: (id: string, newStatus: string) => void;
    handleDescriptionChange: (id: string, newDescription: string) => void;
    deleteTodo: (id: string) => void;
    updateTodo: (id: string, updatedDescription: string) => void;
    addTodo: () => void;
};

export default function MainPage({
                                     todos,
                                     description,
                                     setDescription,
                                     handleStatusChange,
                                     handleDescriptionChange,
                                     deleteTodo,
                                     updateTodo,
                                     addTodo
                                 }: MainPageProps) {
    return (
        <StyledContainer>
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
                            onChange={(event) => handleStatusChange(todo.id, event.target.value)}
                        >
                            <option value="OPEN">OPEN</option>
                            <option value="IN_PROGRESS">IN PROGRESS</option>
                            <option value="DONE">DONE</option>
                        </select>
                        <StyledButton onClick={() => updateTodo(todo.id, todo.description)}>
                            Save Changes
                        </StyledButton>
                        <StyledButton onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </StyledButton>
                    </li>
                ))}
            </ul>
            <>
                <h2>Neues ToDo hinzufügen</h2>
                <input
                    type="text"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    placeholder="Todo eingeben"
                />
                <StyledButton onClick={addTodo}>Hinzufügen</StyledButton>
            </>
            <div>
                <StyledLink to="/">Hauptseite</StyledLink>
            </div>
        </StyledContainer>
    );
}

const StyledButton = styled.button`
    background: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    border: none;
    border-radius: 5px;
    box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
    margin-right: 10px;

    &:active {
        box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    text-decoration: none;
    border: 10px;
    color: black;
    margin: 20px;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`