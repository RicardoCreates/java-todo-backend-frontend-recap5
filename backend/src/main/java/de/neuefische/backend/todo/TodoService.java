package de.neuefische.backend.todo;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
class TodoService {

    private final TodoRepository todoRepository;

    TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    List<Todo> getAll() {
        return todoRepository.findAll();
    }

    public Todo save(Todo todo) {
        return todoRepository.save(todo);
    }

    public Todo getById(String id) {
        return todoRepository.findById(id).orElse(null);
    }

    public Todo update(Todo todo) {
        return todoRepository.save(todo);
    }

    public void delete(String id) {
        todoRepository.deleteById(id);
    }
}





