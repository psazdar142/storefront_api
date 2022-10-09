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

3.) Next, create a ".env" file in the root of the project and copy the text below to begin configuring the server, database, port, and security settings. NOTE: the enviorment (ENV) is set to "dev" by default. Running the command "yarn test" will change the enviorment to "test" when running unit tests. 

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

4.) Navigate to the database.json file and enter your postgres user name and password as well as your desired port number as shown below. By default this program uses port 5432.
{
    "dev": {
      "driver": "pg",
      "host": "localhost",
      "database": "postgres",
      "user": "store_front_user",
      "password": "store_front_password",
      "port": "5432"
    },
    "test": {
      "driver": "pg",
      "host": "localhost",
      "database": "postgres_test",
      "user": "store_front_user",
      "password": "store_front_password",
      "port": "5432"
    }
  }

5.) Install required node modules using the following command

- yarn

6.) Set up db tables

- db-migrate up

7.) Start server

- yarn watch
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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkQ0ttd082dHNuY3lGQ2lMSHJwSWs4LmhycTQubW9MeXBuVFY5YmdPcE5YNUkvVklHZmp4OU8ifSwiaWF0IjoxNjY1MjY1NzA1fQ.iySZZVhgdZOD-NE7fSZrbA-h4sMjNa0nJgCJ3gvuKYU"
}

show -> GET -> http://localhost:3000/users/1
json body {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkQ0ttd082dHNuY3lGQ2lMSHJwSWs4LmhycTQubW9MeXBuVFY5YmdPcE5YNUkvVklHZmp4OU8ifSwiaWF0IjoxNjY1MjY1NzA1fQ.iySZZVhgdZOD-NE7fSZrbA-h4sMjNa0nJgCJ3gvuKYU"
}

<<<<< Product Endpoints >>>>>
create -> POST -> http://localhost:3000/products
json body {
    "product_name": "Apple",
    "product_price": "5",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkQ0ttd082dHNuY3lGQ2lMSHJwSWs4LmhycTQubW9MeXBuVFY5YmdPcE5YNUkvVklHZmp4OU8ifSwiaWF0IjoxNjY1MjY1NzA1fQ.iySZZVhgdZOD-NE7fSZrbA-h4sMjNa0nJgCJ3gvuKYU"
}

index -> GET -> http://localhost:3000/products
json body {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkQ0ttd082dHNuY3lGQ2lMSHJwSWs4LmhycTQubW9MeXBuVFY5YmdPcE5YNUkvVklHZmp4OU8ifSwiaWF0IjoxNjY1MjY1NzA1fQ.iySZZVhgdZOD-NE7fSZrbA-h4sMjNa0nJgCJ3gvuKYU"
}

show -> GET -> http://localhost:3000/products/1
json body {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkQ0ttd082dHNuY3lGQ2lMSHJwSWs4LmhycTQubW9MeXBuVFY5YmdPcE5YNUkvVklHZmp4OU8ifSwiaWF0IjoxNjY1MjY1NzA1fQ.iySZZVhgdZOD-NE7fSZrbA-h4sMjNa0nJgCJ3gvuKYU"
}

<<<<< Order Endpoints >>>>>
create -> POST -> http://localhost:3000/orders
json body {
    "product_id": [1,2],
    "product_quantity": [5,6],
    "user_id": 1,
    "order_status": "COMPLETE",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkQ0ttd082dHNuY3lGQ2lMSHJwSWs4LmhycTQubW9MeXBuVFY5YmdPcE5YNUkvVklHZmp4OU8ifSwiaWF0IjoxNjY1MjY1NzA1fQ.iySZZVhgdZOD-NE7fSZrbA-h4sMjNa0nJgCJ3gvuKYU"
}

index -> GET -> http://localhost:3000/orders/1
json body {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkQ0ttd082dHNuY3lGQ2lMSHJwSWs4LmhycTQubW9MeXBuVFY5YmdPcE5YNUkvVklHZmp4OU8ifSwiaWF0IjoxNjY1MjY1NzA1fQ.iySZZVhgdZOD-NE7fSZrbA-h4sMjNa0nJgCJ3gvuKYU"
}

show -> GET -> http://localhost:3000/orders/1
json body {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiQXJ0aHVyIiwibGFzdF9uYW1lIjoiUm9iYmluc29uIiwicGFzc3dvcmQiOiIkMmIkMTAkQ0ttd082dHNuY3lGQ2lMSHJwSWs4LmhycTQubW9MeXBuVFY5YmdPcE5YNUkvVklHZmp4OU8ifSwiaWF0IjoxNjY1MjY1NzA1fQ.iySZZVhgdZOD-NE7fSZrbA-h4sMjNa0nJgCJ3gvuKYU"
}
