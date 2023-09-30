import express,{Application} from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'


dotenv.config()
const app:Application = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello, Express with TypeScript!');
});

app.use('*', (_, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
