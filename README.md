# Storefront Backend

## Getting Started

1.) This project utilizes postgres and yarn, so be sure to have both **installed**

2.) Set up database using the following steps

* Create a user

  * ```
    CREATE USER store_front_user WITH PASSWORD 'storefront_password';
    ```
* Create a development database and a testing database

  * ```dasd
    CREATE DATABASE postgres;
    ```
  * ```
    CREATE DATABASE postgres_test;
    ```
* Grant all database privleges to user in both databases

  * ```
    GRANT ALL PRIVILEDGES ON DATABASE postgress to store_front_user
    ```
  * ```
    GRANT ALL PRIVILEDGES ON DATABASE postgress_test to store_front_user
    ```

3.) Next, create a ".env" file in the root of the project and copy the text below to begin configuring the server, database, and security settings. NOTE: the enviorment (ENV) is set to "dev" by default. Running the command "yarn test" will change the enviorment to "test" when running unit tests.

POSTGRES_HOST=localhost

POSTGRES_DB=postgres

POSGRES_USER=store_front_user

POSTGRES_PASSWORD=store_front_password

PORT=5432

BCRYPT_PASSWORD=< enter string to be used as password salt >

SALT_ROUNDS=< # for how many times the password is hashed>

ENV=dev

POSTGRES_TESTING_DB=postgres_test

TOKEN_SECRET=< enter string to be used for json web token >

4.) Install required node modules using the following command

- yarn

## Commands

Start Server

- yarn watch

Run Jasmine unit test

- yarn test

Get database table set up configuration

- db-migrate up

Tear down database tables

- db-migrate down -c 4

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
    "product_id": [1,2],
    "product_quantity": [5,6],
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
