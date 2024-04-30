# Midterm Java Technology project

- Using ReactJs and Redux
- Srping boot
- JWT authentication (Spring security)

**Get the request endpoints, HTTP Headers:**
link: https://github.com/fall-forward-42/MVP-mini-shop.git

## Stucture of backend

Database(MySql) -> Entity -> Repository -> Service -> Controller -> DTO -> API endpoints

### Config back-end

**Connect to database first**
spring.application.name=[lihitiShop]
spring.datasource.url=jdbc:mysql://[127.0.0.1:3306]/[database]
spring.datasource.username=[root]
spring.datasource.password=[yourpassword]
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update

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
