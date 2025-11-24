# 👥 User Management REST API (MySQL)

RESTful API untuk manajemen pengguna menggunakan Node.js, Express, dan MySQL.

## ✨ Features

- ✅ **Create User** - POST `/api/users`
- ✅ **Get All Users** - GET `/api/users`
- ✅ **Get User by ID** - GET `/api/users/:id`
- ✅ **Delete User** - DELETE `/api/users/:id`
- ✅ **Email Validation** - Format email yang valid
- ✅ **Unique Email** - Email tidak boleh duplikat
- ✅ **Password Validation** - Minimal 8 karakter
- ✅ **JSON Response** - Semua response dalam format JSON
- ✅ **Error Handling** - Penanganan error yang jelas
- ✅ **Auto Create Table** - Table users dibuat otomatis

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MySQL** - Relational database
- **mysql2** - MySQL client for Node.js
- **dotenv** - Environment variables
- **cors** - Cross-Origin Resource Sharing

## 📋 Prerequisites

Sebelum memulai, pastikan sudah menginstall:

- [Node.js](https://nodejs.org/) (v14 atau lebih tinggi)
- [MySQL](https://dev.mysql.com/downloads/mysql/) (v5.7 atau lebih tinggi)
- [Postman](https://www.postman.com/downloads/) (untuk testing - optional)
- [Git](https://git-scm.com/downloads) (untuk clone repository)

## 📦 Installation

### 1. Clone Repository

```bash
git clone https://github.com/lentakristina/developer_Test.git
```

### 2. Install Dependencies

```bash
npm install
```

**Dependencies yang akan terinstall:**
```json
{
  "express": "^4.18.2",
  "mysql2": "^3.6.5",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1"
}
```

### 3. Setup MySQL Database

**Menggunakan MySQL Workbench (Recommended)**

1. Buka MySQL Workbench
2. Connect ke localhost
3. Buat database baru:
```sql
CREATE DATABASE userdb;
```

### 4. Setup Environment Variables

Buat file `.env` di root folder:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=userdb
```

### 5. Run Application

**Development mode :**
```bash
npm run dev
```


Server akan berjalan di: `http://localhost:3000`

Jika berhasil, akan muncul:
```
✅ Connected to MySQL Database
✅ Users table ready
🚀 Server running on port 3000
📍 API URL: http://localhost:3000
```

## 🗄️ Database Schema

### Table: users

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

| Column | Type | Constraint | Description |
|--------|------|------------|-------------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT | User ID |
| name | VARCHAR(255) | NOT NULL | Full name |
| email | VARCHAR(255) | NOT NULL, UNIQUE | Email address |
| password | VARCHAR(255) | NOT NULL | Password (min 8 chars) |
| created_at | TIMESTAMP | DEFAULT NOW | Registration date |

## 📡 API Endpoints

### Base URL
```
http://localhost:3000
```

### 1. Create User (POST)

**Endpoint:** `POST /api/users`

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "Lenta",
  "email": "lenta@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": 1,
    "name": "Lenta",
    "email": "lenta@example.com",
    "createdAt": "2024-01-20T10:30:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Email already exists"
}
```

### 2. Get All Users (GET)

**Endpoint:** `GET /api/users`

**Success Response (200):**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "name": "Lenta",
      "email": "lenta@example.com",
      "created_at": "2024-01-20T10:30:00.000Z"
    },
    {
      "id": 2,
      "name": "Jane",
      "email": "jane@example.com",
      "created_at": "2024-01-20T10:35:00.000Z"
    }
  ]
}
```

### 3. Get User by ID (GET)

**Endpoint:** `GET /api/users/:id`

**Example:** `GET /api/users/1`

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "lenta",
    "email": "lenta@example.com",
    "created_at": "2024-01-20T10:30:00.000Z"
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "User not found"
}
```

### 4. Delete User (DELETE)

**Endpoint:** `DELETE /api/users/:id`

**Example:** `DELETE /api/users/1`

**Success Response (200):**
```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": {
    "id": 1,
    "name": "Lenta",
    "email": "lenta@example.com"
  }
}
```

## 🧪 Testing API

### Using Postman

**1. Create User:**
- Method: `POST`
- URL: `http://localhost:3000/api/users`
- Headers: `Content-Type: application/json`
- Body (raw JSON):
```json
{
  "name": "Lenta",
  "email": "lenta@example.com",
  "password": "password123"
}
```

**2. Get All Users:**
- Method: `GET`
- URL: `http://localhost:3000/api/users`

**3. Get User by ID:**
- Method: `GET`
- URL: `http://localhost:3000/api/users/1`

**4. Delete User:**
- Method: `DELETE`
- URL: `http://localhost:3000/api/users/1`

### Using cURL

**Create User:**
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Lenta\",\"email\":\"lenta@example.com\",\"password\":\"password123\"}"
```

**Get All Users:**
```bash
curl http://localhost:3000/api/users
```

**Get User by ID:**
```bash
curl http://localhost:3000/api/users/1
```

**Delete User:**
```bash
curl -X DELETE http://localhost:3000/api/users/1
```

## 🔐 Validation Rules

### User Input

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| name | String | Yes | Cannot be empty, max 255 chars |
| email | String | Yes | Valid email format, Unique, max 255 chars |
| password | String | Yes | Minimum 8 characters, max 255 chars |

### Email Format Examples

- ✅ `lenta@example.com`
- ✅ `user.name@company.co.id`
- ✅ `test123@mail.com`
- ❌ `userexample.com` (missing @)
- ❌ `@example.com` (missing username)
- ❌ `user@domain` (missing extension)


*

## 👨‍💻 Author

Lenta Kristina Sianturi
