import { JOBS_URL } from "../service/jobsService";
import { USER_URL } from "../service/userService";
import { parseToJson } from "../utils/parseJSON.utils";

export const jobLoader = async ({ params }) => {
    try {
        const res = await fetch(`${JOBS_URL}/${params.id}`);
        const data = await res.json(); 
        return data;
    } catch (error) {
        console.log('Error on fetching data', error);
    } 
}

export const userLoader = async () => {
    const user = parseToJson(window.localStorage.getItem('user'))
    try {
        const res = await fetch(`${USER_URL}/${user && user.id}`);
        const data = await res.json(); 
        return data;
    } catch (error) {
        console.log('Error on fetching data', error);
    } 
}