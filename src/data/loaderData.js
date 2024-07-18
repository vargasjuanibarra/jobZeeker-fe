import { JOBS_URL } from "../service/jobsService";
import { USER_URL } from "../service/userService";

export const jobLoader = async ({ params }) => {
    try {
        const res = await fetch(`${JOBS_URL}/${params.id}`);
        const data = await res.json(); 
        return data;
    } catch (error) {
        console.log('Error on fetching data', error);
    } 
}

export const userLoader = async ({ params }) => {
    try {
        const res = await fetch(`${USER_URL}/${params.id}`);
        const data = await res.json(); 
        return data;
    } catch (error) {
        console.log('Error on fetching data', error);
    } 
}