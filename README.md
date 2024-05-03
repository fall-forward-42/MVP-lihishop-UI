# User Interface for Midterm Project of Java Technology - Le Hai Tien - 52101002
## Technologies used:
- ReactJs and ReduxToolkits
**Get the request endpoints, HTTP Headers:**
link: https://github.com/fall-forward-42/MVP-mini-shop.git

## Stucture of backend

Database(MySql) -> Entity -> Repository -> Service -> Controller -> DTO -> API endpoints

### How to run
1. Check connect to Backend Repo

2. Run script
```
npm run start
```


#### APIs

POST: /api/auth/register
POST: /api/auth/login
GET: /api/users
GET: /api/users/single
GET: /api/categories
GET: /api/products
POST: /api/products
POST: /api/products/search-by-category
DELETE: api/products/{id}
POST: /api/carts - add product item to cart
GET: /api/carts - show all items in cart
PUT: /api/carts/update-quantity-item
DELETE: /api/carts/delete-item
GET: /api/carts/submit
GET: /api/orders/ - Get all of orders of user
GET: /api/orders/{id} - Get pariticular order with all items
