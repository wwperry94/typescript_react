import * as express from 'express';
import apiRouter from './routes';

const app = express();
app.use(express.json())
app.use("/api", apiRouter);
app.use(express.static('public'));
app.use("*", (req,res) => {
    
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));


