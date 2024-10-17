## Project Structure

The project follows a modular structure with the following main components:

- **config/**: Contains configuration files (e.g., API URLs, API keys).
- **modules/**: The core business logic, divided into different modules.
  - **controllers/**: Handles incoming requests and routes them to the appropriate services.
  - **services/**: Business logic, including interaction with external APIs.
  - **infrastructure/**: Contains services for external APIs (e.g., RESAS API).
  
### Repository Layer

This project does not currently include a repository layer because it interacts with an external API and does not involve database operations.
このプロジェクトには外部 API と対話し、データベース操作が含まれないため、現在リポジトリ レイヤーは含まれていません。

If the project evolves to include database interactions, a `repositories/` folder can be added to separate the data access layer from the business logic.

### Environment 

For now commenting .env in gitignore because it contains API key and Base URL. 現時点では、.env (gitignore　ファイル)に API キーとベース URL が含まれているのでコメントします。