package de.neuefische.backend.todo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends MongoRepository<Todo, String> {
    // Du kannst hier zusätzliche Abfragen definieren, falls notwendig
}

