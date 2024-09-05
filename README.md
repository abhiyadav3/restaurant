# Restaurant REST API

This is a **Restaurant REST API** built using **Node.js** and **Express** for the backend. The API uses a **MongoDB Cluster** to store data and is hosted on **Render**. It allows users to perform **CRUD** (Create, Read, Update, Delete) operations on two collections: `menu` and `person`. Users can interact with the database via **Postman**.

## Features

- **Menu Management**: Add, view, update, and delete menu items such as starters, drinks, main courses, desserts, salads, and bread.
- **Staff Management**: Add, view, update, and delete data related to restaurant staff such as chefs, waiters, and managers.
- **CRUD Operations**: Perform full CRUD operations using Postman or any other REST API client.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (Hosted on MongoDB Cluster)
- **Hosting**: Render
- **Tools**: Postman for API testing

## Collections

### 1. `menu`
Contains information about the restaurant's menu items.

- **Fields**:
  - `name`: The name of the menu item (e.g., Paneer Tikka, Butter Chicken).
  - `category`: The category of the item (e.g., Starter, Main Course, Drink).
  - `price`: The price of the menu item.
  - `is_available`: A boolean flag indicating the availability of the menu item.
  - `vegetarian`: A boolean flag indicating whether the item is vegetarian.

### 2. `person`
Contains information about staff members working in the restaurant.

- **Fields**:
  - `name`: The name of the person.
  - `age`: The age of the person.
  - `work`: The person's role (e.g., chef, waiter, manager).
  - `mobile`: The person's contact number (unique).
  - `email`: The person's email (unique).
  - `address`: The residential address of the person.
  - `salary`: The monthly salary of the person.

 ## API Endpoints

### Base URL

The base URL for interacting with the API is: 


### Menu Collection Endpoints

1. **Get All Menu Items**

   **GET** `/menu`

   Returns all menu items.

2. **Get Single Menu Item**

   **GET** `/menu/:id`

   Returns a specific menu item by ID.

3. **Get All Menu Items by Category**

   **GET** `/menu/:category`

   Returns all menu items in a specific category (`Starter`, `Drink`, `Main Course`, `Dessert`, `Salad`, `Bread`).

   Example: 
   - `/menu/Starter` returns all starter items.
   - `/menu/Dessert` returns all dessert items.

4. **Add a New Menu Item**

   **POST** `/menu`

   Add a new menu item by sending the data in JSON format.

   Example request body:
   ```json
   {
     "name": "Paneer Tikka",
     "category": "Starter",
     "price": 250,
     "is_available": true,
     "vegetarian": true
   }
5. **Update a Menu Item**

   **PUT** `/menu/:id`

   Update an existing menu item by providing the item ID and updated data.

7. **Delete a Menu Item**

   **DELETE** `/menu/:id`

   Delete a specific menu item by ID.

### Person Collection Endpoints

1. **Get All Staff Members**

   **GET** `/person`

   Returns all staff members.

2. **Get Single Staff Member**

   **GET** `/person/:id`

   Returns a specific staff member by ID.

3. **Get Staff Members by Job Role**

   **GET** `/person/:work`

   Returns all staff members with a specific job role (`chef`, `waiter`, `manager`).

   Example: 
   - `/person/waiter` returns all waiters.
   - `/person/chef` returns all chefs.
   - `/person/manager` returns all managers.

4. **Add a New Staff Member**

   **POST** `/person`

   Add a new staff member by sending the data in JSON format.

   Example request body:
   ```json
   {
     "name": "John Doe",
     "age": 25,
     "work": "chef",
     "mobile": "1234567890",
     "email": "john@example.com",
     "address": "123 Street, City",
     "salary": 30000
   }

5. **Update a Staff Member**
   
   **PUT** `/person/:id`

   Update an existing staff member by providing the staff member's ID and updated data.

6. **Delete a Staff Member**

   **DELETE** `/person/:id`

   Delete a specific staff member by ID.

## Using Postman

You can interact with the API through Postman by performing the following steps:

1. **Open Postman**.
2. **Set the request method** (GET, POST, PUT, DELETE) based on the action you want to perform.
3. **Enter the request URL**, using the appropriate endpoint from the API section above.
4. For **POST** and **PUT** requests:
   - Switch to the **Body** tab.
   - Select **raw** format, then choose **JSON** from the dropdown.
   - Input the necessary data in **JSON format**.
5. **Click Send** to execute the request and view the response.



  
