# Web Service & RESTful API for ToDoList Application
For Testing Purpose

Todo List API Services using Express JS

## Installation and Setup Instructions
### Prerequisites
1. Git
2. Node.js
3. NPM
4. MongoDB

### Installation
1. Clone this repository: `git clone <link-repository>`
2. Change directory to the project: `cd <name directory>`
3. Install dependencies: `npm install`
4. Run the application: `npm run dev`
5. The application will be available at: `http://localhost:3000`

## Domain Services
### Task
1. Register
2. Login
3. Create Task
4. Get All Tasks
5. Get Task By Id
6. Update Task
7. Delete Task
8. Delete All Task

## Api Documentation with Thunder Client
### Register
#### Request
```http
POST /api/auth/register
```
#### Header
```json
Content-Type: application/json
```
#### Body
```json
{
  "username": "fathonah",
  "email": "fathonah@gmail.com",
  "password": "fathonah123"
}
```
#### Response
```json
{
  "username": "fathonah",
  "email": "fathonah@gmail.com",
  "_id": "65518182a3b50a0f7fe5f764",
  "__v": 0
}
```

### Login
#### Request
```http
POST /api/auth/login
```
#### Header
```json
Content-Type: application/json
```
#### Body
```json
{
  "username": "fathonah",
  "email": "fathonah@gmail.com",
  "password": "fathonah123"
}
```
#### Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTE4MTgyYTNiNTBhMGY3ZmU1Zjc2NCIsImlhdCI6MTY5OTg0NDUzOSwiZXhwIjoxNjk5OTMwOTM5fQ.FOkGd2WuvCdOys9j1J4UTPUiQOKQNpz_95eK-3dnxYc"
}
```

### Create Task
#### Request
```http
POST /api/todos
```
#### Header
```json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTE4MTgyYTNiNTBhMGY3ZmU1Zjc2NCIsImlhdCI6MTY5OTg0NDUzOSwiZXhwIjoxNjk5OTMwOTM5fQ.FOkGd2WuvCdOys9j1J4UTPUiQOKQNpz_95eK-3dnxYc
```
#### Body
```json
{
  "title": "Memasak",
  "description": "ayam goreng krispi"
}
```
#### Response
```json
{
  "title": "Memasak",
  "description": "ayam goreng krispi",
  "userId": "65518182a3b50a0f7fe5f764",
  "_id": "65519bee417d33e35ed87a90",
  "__v": 0
}
```

### Get All Tasks
#### Request
```http
GET /api/todos
```
#### Header
```json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTE4MTgyYTNiNTBhMGY3ZmU1Zjc2NCIsImlhdCI6MTY5OTg0NDUzOSwiZXhwIjoxNjk5OTMwOTM5fQ.FOkGd2WuvCdOys9j1J4UTPUiQOKQNpz_95eK-3dnxYc
```
#### Response
```json
[
  {
    "_id": "65519bee417d33e35ed87a90",
    "title": "Memasak",
    "description": "ayam goreng krispi",
    "userId": "65518182a3b50a0f7fe5f764",
    "__v": 0
  },
  {
    "_id": "65519c51417d33e35ed87a92",
    "title": "Mencuci",
    "description": "mencuci piring dan pakaian",
    "userId": "65518182a3b50a0f7fe5f764",
    "__v": 0
  }
]
```

### Get Task By Id
#### Request
```http
GET /api/todos/65519c51417d33e35ed87a92
```
#### Header
```json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTE4MTgyYTNiNTBhMGY3ZmU1Zjc2NCIsImlhdCI6MTY5OTg0NDUzOSwiZXhwIjoxNjk5OTMwOTM5fQ.FOkGd2WuvCdOys9j1J4UTPUiQOKQNpz_95eK-3dnxYc
```
#### Response
```json
{
  "_id": "65519c51417d33e35ed87a92",
  "title": "Mencuci",
  "description": "mencuci piring dan pakaian",
  "userId": "65518182a3b50a0f7fe5f764",
  "__v": 0
}
```

### Update Task
#### Request
```http
PUT /api/todos/65519bee417d33e35ed87a90
```
#### Header
```json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTE4MTgyYTNiNTBhMGY3ZmU1Zjc2NCIsImlhdCI6MTY5OTg0NDUzOSwiZXhwIjoxNjk5OTMwOTM5fQ.FOkGd2WuvCdOys9j1J4UTPUiQOKQNpz_95eK-3dnxYc
```
#### Body
```json
{
  "title": "Membuat sarapan",
  "description": "ayam goreng krispi"
}
```
#### Response
```json
{
  "_id": "65519bee417d33e35ed87a90",
  "title": "Membuat sarapan",
  "description": "ayam goreng krispi",
  "userId": "65518182a3b50a0f7fe5f764",
  "__v": 0
}
```

### Delete Task
#### Request
```http
DELETE /api/todos/65519bee417d33e35ed87a90
```
#### Header
```json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTE4MTgyYTNiNTBhMGY3ZmU1Zjc2NCIsImlhdCI6MTY5OTg0NDUzOSwiZXhwIjoxNjk5OTMwOTM5fQ.FOkGd2WuvCdOys9j1J4UTPUiQOKQNpz_95eK-3dnxYc
```
#### Response
```json
{
  "message": "Todo deleted successfully"
}
```

### Delete All Task
#### Request
```http
DELETE /api/todos/
```
#### Header
```json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTE4MTgyYTNiNTBhMGY3ZmU1Zjc2NCIsImlhdCI6MTY5OTg0NDUzOSwiZXhwIjoxNjk5OTMwOTM5fQ.FOkGd2WuvCdOys9j1J4UTPUiQOKQNpz_95eK-3dnxYc
```
#### Response
```json
{
  "message": "All todos deleted successfully"
}
```

## Author
- [Intan Nur Fathonah]