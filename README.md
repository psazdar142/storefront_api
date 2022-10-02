# Storefront Backend

## Getting Started

1.) This project utilizes postgres and yarn, so be sure to have both **installed** on your machine. In addition, create two empty databases with the following names.

- postgres
- postgres_test

2.) Next, create a ".env" file in the root of the project and copy the text below to begin configuring the server, database, and security settings.

POSTGRES_HOST=localhost

POSTGRES_DB=postgres

POSGRES_USER=< enter your postgres db user name >

POSTGRES_PASSWORD=< enter your postgres db password >

PORT=5432

BCRYPT_PASSWORD=< enter string to be used as password salt >

SALT_ROUNDS=< # for how many times the password is hashed>

ENV=dev

POSTGRES_TESTING_DB=postgres_test

TOKEN_SECRET=< enter string to be used for json web token >



3.) Install required node modules using the following command

- yarn

## Commands

Start Server

- yarn watch

Run Jasmine unit test

- yarn test

Get database table set up configuration

- db-migrate up

Tear down database tables

- db-migrate down -c 3

## API Endpoint Examples

<<<<< User Endpoint Examples >>>>>
create -> POST -> http://localhost:3000/users
json body {
    "first_name": "Arthur",
    "last_name": "Robbinson",
    "password": "fruit"
}

index -> GET -> http://localhost:3000/users
json body {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkWnZVemVKbVdrNXZlODRTSnBtL2g4T09uWXlsMVdxd0Q2OGgwd0dLb1JoaU9Kc01LeUIvalcifSwiaWF0IjoxNjY0NzQ2MjAzfQ.YndtEy6nNXPkLRQSpmIv206ILQ3xaeVLXB7-qHvLAyc"
}

show -> GET -> http://localhost:3000/users/1
json body {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkWnZVemVKbVdrNXZlODRTSnBtL2g4T09uWXlsMVdxd0Q2OGgwd0dLb1JoaU9Kc01LeUIvalcifSwiaWF0IjoxNjY0NzQ2MjAzfQ.YndtEy6nNXPkLRQSpmIv206ILQ3xaeVLXB7-qHvLAyc"
}

<<<<< Product Endpoints >>>>>
create -> POST -> http://localhost:3000/products
json body {
    "product_name": "Apple",
    "product_price": "5",
    "id": "1",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkWnZVemVKbVdrNXZlODRTSnBtL2g4T09uWXlsMVdxd0Q2OGgwd0dLb1JoaU9Kc01LeUIvalcifSwiaWF0IjoxNjY0NzQ2MjAzfQ.YndtEy6nNXPkLRQSpmIv206ILQ3xaeVLXB7-qHvLAyc"
}

index -> GET -> http://localhost:3000/products
json body {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkWnZVemVKbVdrNXZlODRTSnBtL2g4T09uWXlsMVdxd0Q2OGgwd0dLb1JoaU9Kc01LeUIvalcifSwiaWF0IjoxNjY0NzQ2MjAzfQ.YndtEy6nNXPkLRQSpmIv206ILQ3xaeVLXB7-qHvLAyc"
}

show -> GET -> http://localhost:3000/products/1
json body {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkWnZVemVKbVdrNXZlODRTSnBtL2g4T09uWXlsMVdxd0Q2OGgwd0dLb1JoaU9Kc01LeUIvalcifSwiaWF0IjoxNjY0NzQ2MjAzfQ.YndtEy6nNXPkLRQSpmIv206ILQ3xaeVLXB7-qHvLAyc"
}

<<<<< Order Endpoints >>>>>
create -> POST -> http://localhost:3000/orders
json body {
    "id": 1,
    "product_id": 1,
    "product_quantity": 3,
    "user_id": 1,
    "order_status": "COMPLETE",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkWnZVemVKbVdrNXZlODRTSnBtL2g4T09uWXlsMVdxd0Q2OGgwd0dLb1JoaU9Kc01LeUIvalcifSwiaWF0IjoxNjY0NzQ2MjAzfQ.YndtEy6nNXPkLRQSpmIv206ILQ3xaeVLXB7-qHvLAyc"
}

index -> GET -> http://localhost:3000/orders
json body {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkWnZVemVKbVdrNXZlODRTSnBtL2g4T09uWXlsMVdxd0Q2OGgwd0dLb1JoaU9Kc01LeUIvalcifSwiaWF0IjoxNjY0NzQ2MjAzfQ.YndtEy6nNXPkLRQSpmIv206ILQ3xaeVLXB7-qHvLAyc"
}

show -> GET -> http://localhost:3000/orders/1
json body {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkWnZVemVKbVdrNXZlODRTSnBtL2g4T09uWXlsMVdxd0Q2OGgwd0dLb1JoaU9Kc01LeUIvalcifSwiaWF0IjoxNjY0NzQ2MjAzfQ.YndtEy6nNXPkLRQSpmIv206ILQ3xaeVLXB7-qHvLAyc"
}
