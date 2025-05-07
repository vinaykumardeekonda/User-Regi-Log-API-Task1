
# User Authentication API

This is a RESTful API built using **Node.js**, **Express**, and **Sequelize**, which provides user registration and login functionality using either **email/password** or **email/OTP**. The API includes input validation, password hashing, JWT token generation, and email sending.

##  Features

- ✅ User Registration with hashed passwords

- ✅ Login with either:
  - Email & Password
  - Email & OTP (One-Time Password)

- ✅ Input validation using **Joi**

- ✅ Password hashing with **bcryptjs**

- ✅ JWT token-based authentication

- ✅ OTP sending via **Nodemailer**

- ✅ Sequelize ORM with **migrations**

- ✅ Centralized error handling

---

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **Sequelize (with MySQL)**
- **JWT (jsonwebtoken)**
- **Nodemailer**
- **Joi**
- **bcryptjs**

---

---
## 📂 Project Structure



src/

├── config/

│ └── config.js

├── controllers/

│ └── users.controller.js

├── migrations/

│ └── 20250507102700-create-users.js

├── models/

│ ├── index.js

│ └── users.model.js 

├── routes/

│ └── users.routes.js
├── utils/

│ ├── mailer.util.js 

│ └── tokens.util.js 

└── validations/

└── users.validate.js

├── app.js 

└── server.js 

---
---

## Install Dependencies:

- express

- sequelize

- bcryptjs

- jsonwebtoken

- nodemailer

- joi

- dotenv

---
---
## Set up environment variables:

**PORT=your_port**

**DB_HOST=localhost**

**DB_USER=root**

**DB_PASSWORD=yourpassword**

**DB_NAME=yourdbname**

**DB_DIALECT=your _dialect**

**JWT_TOKEN=your_jwt_secret**

**EMAIL_USER=your_email@example.com**

**EMAIL_PASSWORD=your_email_password**

---
---

## Run Sequelize migrations:

**1. npx sequelize-cli init**

**2. npx sequelize-cli migration:generate --name create-user**

**3. npx sequelize-cli db:migrate --config src/config/config.js --migrations-path src/migrations**

---
---

## Start the server

**npm start**

---
---

## How to Use

**=> Register: POST /api/users/register with name, email, and password.**

**=> Login with password: POST /api/users/login with email and password.**

**=> Request OTP: POST /api/users/login with email only.**

**=> Login with OTP: POST /api/users/login with email and otp.**
