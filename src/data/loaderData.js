import { JOBS_URL } from "../service/jobsService";

export const jobLoader = async ({ params }) => {
    try {
        const res = await fetch(`${JOBS_URL}/${params.id}`);
        const data = await res.json(); 
        return data;
    } catch (error) {
        console.log('Error on fetching data', error);
    } 
}