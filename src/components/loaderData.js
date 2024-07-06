export const jobLoader = async ({ params }) => {
    try {
        const res = await fetch(`/api/jobs/${params.id}`);
        const data = await res.json(); 
        return data;
    } catch (error) {
        console.log('Error on fetching data', error);
    } 
}