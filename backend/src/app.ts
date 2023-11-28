import express from 'express';
const app = express();
import { config } from 'dotenv';
config();
import cors from 'cors'
import emailRoutes from './routes/email'

const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: 'POST',
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  

app.use(express.json());
app.use(emailRoutes);

const port = 3300;

app.listen(port, ()=> {
    console.log(`Server is running on port${port}`);
});

