# **SV SHOP**

**SV SHOP** is a full-stack e-commerce system designed to allow users to browse, sort, and purchase products seamlessly. This project highlights features like user authentication, product management, and order processing, built using **Node.js**, **Express.js**, and **MongoDB**.

---

## **Features**

### **User Management**
- User registration and login with secure data storage.
- Validation of user input to ensure reliability and security.

### **Product Management**
- Dynamic product listing fetched from the database.
- Real-time sorting by name or price for better user experience.

### **Order Processing**
- Product selection with automatic total price calculation.
- Order data stored securely for future use.

### **Frontend**
- Interactive user interface designed with **HTML**, **CSS**, and **JavaScript**.

### **Backend**
- RESTful APIs built using **Node.js** and **Express.js**.
- Database operations handled with **MongoDB** and **Mongoose**.

---

## **Project Structure**

```
client/
|-- index.html          # Login page
|-- signup.html         # Registration page
|-- products.html       # Product display and sorting page
|-- buy.html            # Purchase summary page
|-- style.css           # Styles for login page
|-- styleSignUp.css     # Styles for signup page
|-- styleProducts.css   # Styles for product page
|-- styleBuy.css        # Styles for purchase page
|-- script.js           # Frontend logic

server/
|-- app.js              # Main server file
|-- models/             # Mongoose schemas for users, products, and orders
```

---

## **Installation Instructions**

Follow these steps to run the project locally:

### **1. Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/SV-SHOP.git
cd SV-SHOP
```

### **2. Install dependencies**
```bash
npm install
```

### **3. Set up MongoDB**
- Create a MongoDB database (use **MongoDB Atlas** or a local MongoDB instance).
- Update the connection string in the `connectToDb` function in the `app.js` file:
  ```javascript
  await mongoose.connect('your-mongodb-connection-string');
  ```

### **4. Run the server**
```bash
node app.js
```

### **5. Access the application**
Open your browser and navigate to:
```
http://localhost:3000/index
```

---

## **Key Technologies**
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose for schema management)

---

## **Contributing**
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Contact**
For questions or suggestions, feel free to contact me:
- Email: [yekfir59@gmail.com](mailto:yekfir59@gmail.com)

---

