# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

* Index

  * Request: GET
  * route: /products
  * body:

    * ```{
      {
         "token": < JWT token >
      }
      ```
* Show

  * Request: GET
  * route: /products/{ product id }
  * body:
    * ```{
      {
         "token": < JWT token >
      }
      ```
* Create

  * Request: POST
  * route: /products
  * body:
    * ```
      {
          "product_name": string,
          "product_price": string,
          "id": "1",
          "token": < JWT token >
      }
      ```

#### Users

* Index

  * Request: GET
  * route: /users
  * body:

    * ```{
      {
         "token": < JWT token >
      }
      ```
* Show

  * Request: GET
  * route: /users/{ user id }
  * body:
    * ```{
      {
         "token": < JWT token >
      }
      ```
* Create

  * Request: POST
  * route: /users
  * body:
    * ```
      {
         "first_name": string,
         "last_name": string,
         "password": string
      }
      ```

#### Orders

* Show

  * Request: GET
  * route: /orders/{ user id }
  * body:
    * ```{
      {
         "token": < JWT token >
      }
      ```
* Create

  * Request: POST
  * route: /orders
  * body:
    * ```
      {
         "id": 1,
         "product_id": int,
         "product_quantity": int,
         "user_id": int,
         "order_status": string,
         "token": < JWT token >
      }
      ```

## Data Shapes

#### Product

* id: PRIMARY KEY
* name: VARCHAR(100)
* price: INTEGER

#### User

* id: PRIMARY KEY
* firstName: VARCHAR(100)
* lastName: VARCHAR(100)
* password: VARCHAR(100)

#### Orders

* id: PRIMARY KEY
* id of each product in the order: INTEGER -----> FORIGN KEY
* quantity of each product in the order: INTEGER
* user_id: INTEGER -----> FORIGN KEY
* status of order (active or complete): VARCHAR 100
