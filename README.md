# Laravel + Vue CRUD Application

This is a simple project demonstrating CRUD functionality using Laravel as the backend and Vue.js as the frontend. The project integrates Vuex for state management and focuses on functionality over design.

## Features

- Create, read, update, and delete operations.
- Laravel-powered API backend.
- Vue.js frontend with Vuex for state management.

## Requirements

- PHP 7.x
- Composer
- Node.js & npm
- A database (e.g., MySQL)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install PHP dependencies using Composer:
   ```bash
   composer install
   ```

3. Install JavaScript dependencies:
   ```bash
   npm install
   ```

4. Set up your environment:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Configure your database credentials in the `.env` file:
     ```env
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=your_database_name
     DB_USERNAME=your_username
     DB_PASSWORD=your_password
     ```

5. Run database migrations:
   ```bash
   php artisan migrate
   ```

6. Start the Laravel development server:
   ```bash
   php artisan serve
   ```

7. Compile frontend assets:
   ```bash
   npm run dev
   ```

## Usage

1. Visit the Laravel development server (usually `http://127.0.0.1:8000`).
2. Perform CRUD operations through the provided interface.

## Development Notes

- Backend: API routes are defined in `routes/api.php`.
- Frontend: Vue components and Vuex store are located in the `resources/js` directory.
- To modify frontend logic or state management, edit Vuex store modules or Vue components.

## License

This project is licensed under the [MIT License](LICENSE).
```

Let me know if you need adjustments or additional sections!
