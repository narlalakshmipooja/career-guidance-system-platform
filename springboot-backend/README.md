# Career Guidance Platform - Spring Boot Backend

This is a Spring Boot application for the Career Guidance platform backend.

## Requirements

- Java 17
- Maven
- MySQL

## Setup

1. Create a MySQL database named `career_db`.
2. Update the database credentials in `src/main/resources/application.properties` if necessary.
3. Run the application with `mvn spring-boot:run`.

## APIs

- GET /careers - Get all careers
- POST /careers - Create a new career
- PUT /careers/{id} - Update a career
- DELETE /careers/{id} - Delete a career