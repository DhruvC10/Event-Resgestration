import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.send("hello from ts-app");
})

export default app;