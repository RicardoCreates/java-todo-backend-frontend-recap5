//package de.neuefische.backend.todo;
//
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.UUID;
//
//@Service
//class TodoService {
//
//    private final TodoRepository todoRepository;
//
//    TodoService(TodoRepository todoRepository) {
//        this.todoRepository = todoRepository;
//    }
//
//    List<Todo> getAll() {
//        return todoRepository.getAll();
//    }
//
//    public Todo save(Todo todo) {
//        String id = UUID.randomUUID().toString();
//
//        Todo todoToSave = todo.withId(id);
//
//        return todoRepository.save(todoToSave);
//    }
//
//    public Todo getById(String id) {
//        return todoRepository.getById(id);
//    }
//
//    public Todo update(Todo todo) {
//        return todoRepository.update(todo);
//    }
//
//    public void delete(String id) {
//        todoRepository.delete(id);
//    }
//}

package de.neuefische.backend.todo;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
class TodoService {

    private final TodoRepository todoRepository;

    TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    List<Todo> getAll() {
        return todoRepository.findAll(); // Nutze die Methode von MongoRepository
    }

    public Todo save(Todo todo) {
        return todoRepository.save(todo); // MongoDB verwaltet IDs selbst
    }

    public Todo getById(String id) {
        return todoRepository.findById(id).orElse(null); // Überprüfe auf Optional
    }

    public Todo update(Todo todo) {
        return todoRepository.save(todo); // Update mit save, wenn das Objekt existiert
    }

    public void delete(String id) {
        todoRepository.deleteById(id); // Nutze die Methode von MongoRepository
    }
}





