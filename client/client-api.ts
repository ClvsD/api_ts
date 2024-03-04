import axios, {AxiosResponse} from 'axios';

const URL_BASE= 'http://localhost:3000'

interface Task{
    id: number;
    desc: string;
}

export async function getTask(): Promise<Task[]>{
    try{
        const response: AxiosResponse<Task[]> = await axios.get(`${URL_BASE}/tasks`);
        return response.data;
    }
    catch(error){
        console.error('Erro ao obter tarefas', error);
        return[];
    }
}