Getting Started
Run yarn to get required node modules
    - yarn
Get database table set up configuration
    - db-migrate up 


Commands
    - Start project
        * yarn watch
    - Tear down tables
        * db-migrate down -c 3


API Routes


postgress server credentials
    - pass: parssa_pass
    - Port 5432

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