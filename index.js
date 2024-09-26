const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// Route for the login API
app.post("/api/login", (req, res) => {
    const { userName, password } = req.body;
    if (userName === "admin" && password === "password") {
        res.json({ token: "12345", message: "Login successful" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

// Route to serve the login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public',"login", 'login.html'));
});

// Add routes for other pages as needed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public',"Home" , 'Home.html'));
});

app.get('/order', (req, res) => {
    res.sendFile(path.join(__dirname, 'public',"Order" ,'Order.html'));
});
app.get('/Gift', (req, res) => {
    res.sendFile(path.join(__dirname, 'public',"Gift" ,'Gift.html'));
});
app.get('/my-cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public',"my-cart" ,'cart.html'));
});
app.get('/Pay', (req, res) => {
    res.sendFile(path.join(__dirname, 'public',"Pay" ,'pay.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
