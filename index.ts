import express,{Application} from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan'

dotenv.config()
const app:Application = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));


app.get('/', (req, res) => {
  res.send('Hello, Express with TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
