const express = require("express");
const app = express();

// Home page
app.get("/", (req, res) => {
    res.send(`
        <h1>🏋️ Welcome to Gold's Gym</h1>
        <p>Train insane or remain the same.</p>

        <h2>Membership Plans</h2>
        <ul>
            <li>Basic Plan - $19/month</li>
            <li>Premium Plan - $39/month</li>
            <li>Elite Plan - $59/month</li>
        </ul>

        <h2>Features</h2>
        <ul>
            <li>Personal Training</li>
            <li>24/7 Access</li>
            <li>Free Weights & Machines</li>
            <li>Nutrition Coaching</li>
        </ul>

        <a href="/about">About Us</a> | <a href="/contact">Contact</a>
    `);
});

// About page
app.get("/about", (req, res) => {
    res.send(`
        <h1>About Gold's Gym</h1>
        <p>Gold's Gym is a global fitness brand helping people build strength and confidence.</p>
        <p>Founded with the mission to inspire fitness and transformation.</p>

        <a href="/">Home</a>
    `);
});

// Contact page
app.get("/contact", (req, res) => {
    res.send(`
        <h1>Contact Us</h1>
        <p>Email: support@goldsgymdemo.com</p>
        <p>Phone: +1 (555) 123-4567</p>

        <a href="/">Home</a>
    `);
});

// Azure required port
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Gold's Gym app running on port ${port}`);
});
