import express, {Request, Response} from 'express'
//client.ts
import { getTask } from './client/client-api';
// app.ts
import task_routes from './routes/task_routes'


const app = express();
const PORT =  process.env.PORT || 3000;
app.get('/', (req : Request, res : Response) =>{
    res.send('Bem-vindo à API de tarefas!');
});
app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Configurando as rotas da aplicação para utilizar as rotas relacionadas às tarefas
app.use('/',task_routes);
// cliente.ts   
async function Execute_Examples(): Promise<void> {
  // Listar tarefas
  console.log('Listando tarefas:');
  const tarefas = await getTask();
  console.log(tarefas);
}
Execute_Examples();