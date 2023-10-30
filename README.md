## Getting Started

Explain how to get a copy of your project up and running on the user's local machine for development and testing purposes.

### Prerequisites

-   php ^8.1
-   Composer
-   XAMPP
-   npm

### Installation

Step by step guide on how to get your development environment running.

-   **Clone this repository**

```bash
git clone https://gitlab.com/BillyHasman/NewsWebsite.git
````

```bash
cd NewsWebsite
```

-   **Install composer and npm packages**

```bash
composer update
npm install
```

-   **Setup Laravel Environment**

```bash
copy .env.example .env
php artisan key:generate
```

-   **Setup Database**
    Create Database in your MySQL server. Open `.env` file and update `DB_DATABASE={your_database_name}` with required credential. After that, run migration.

```bash
php artisan migrate
```

-   **Run server**
    Open 2 terminal for running backend-server and frontend-server.

```bash
php artisan serve
```

```bash
npm run dev
```

-   **Accessing Project**
    Open `localhost:8000` to access News Page.
    Open `localhost:8000/login` to access User Admin Dashboard 

## Usage

This is examples and instructions on how to use your project.

<!-- #### Learning Resources

-   <a href="https://talltips.novate.co.uk/" target="_blank">TALL Stack tips</a>
-   <a href="https://filamentphp.com/docs" target="_blank">Filament Documentation</a> -->
