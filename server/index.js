import express from 'express';
import path from 'path'
import ssr from './ssr'

const app = express();
app.use(express.static(path.join(__dirname, '..', 'dist')));

ssr(app);

app.listen(9001, () => {
  console.log("===========");
  console.log(`server running at ${9001}`, `http://localhost:9001`);
  console.log("===========");
})
