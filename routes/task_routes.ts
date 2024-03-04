import  express  from "express";
import { Create_Task , List_Task} from '../controller/task_controller';

const router = express.Router();

router.get('/tasks', List_Task);
router.post('/tasks', Create_Task);   
//router.put('/tarefas/:id', Att_Task);
//router.delete('/tarefas/:id', Del_Task);

export default router;