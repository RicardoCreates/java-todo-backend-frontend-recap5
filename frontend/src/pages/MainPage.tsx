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
        <StyledDiv>
        <StyledContainer>
            <h1>ToDo Liste</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <StyledTodoInput
                            type="text"
                            value={todo.description}
                            onChange={(event) => handleDescriptionChange(todo.id, event.target.value)}
                        />
                        <StyledSelect
                            value={todo.status}
                            onChange={(event) => handleStatusChange(todo.id, event.target.value)}
                        >
                            <option value="OPEN">OPEN</option>
                            <option value="IN_PROGRESS">IN PROGRESS</option>
                            <option value="DONE">DONE</option>
                        </StyledSelect>
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
                <StyledInput
                    type="text"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    placeholder="Todo eingeben"
                />
                <StyledButton onClick={addTodo}>Hinzufügen</StyledButton>
            </>
            <div>
                <StyledLink to="/">← Zurück</StyledLink>
            </div>
        </StyledContainer>
        </StyledDiv>
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
    box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
        list-style-type: none;
    }
`

const StyledDiv = styled.div`
    text-align: center;
    padding: 20px;
    max-width: 800px;
    margin: 80px auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
`

const StyledInput = styled.input`
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    width: 100%;

    &:focus {
        outline: none;
        border-color: #007BFF;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    &::placeholder {
        color: #888;
        font-style: italic;
    }
`;

const StyledTodoInput = styled.input`
    padding: 8px;
    margin-right: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 200px;
    font-size: 14px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

    &:focus {
        outline: none;
        border-color: #007BFF;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;

const StyledSelect = styled.select`
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 14px;
    margin-right: 10px;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

    &:focus {
        outline: none;
        border-color: #007BFF;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;