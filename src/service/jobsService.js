export const JOBS_URL = '/api/jobs'

class JobsService {

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getjobs(url) {
        try {
            const response = await this.httpClient.get(url);
            return await response.json();
        } catch (error) {
            console.error('Error on fetching jobs', error)
        }
    }

    async createJob(job) {
        try {
            const response = await this.httpClient.post(JOBS_URL, job);
            return await response.json();
        } catch (error) {
            console.error('Error on creating jobs', error)
        }
    }

    async updateJob(job) {
        try {
            const response = await this.httpClient.put(`${JOBS_URL}/${job.id}`, job);
            return await response.json();
        } catch (error) {
            console.error('Error on updating job');
        }
    }

    async deleteJob(id) {
        try {
            const response = await this.httpClient.delete(`${JOBS_URL}/${id}`);
            return await response.json();
        } catch (error) {
            console.error('Error on deleting job');
        }
    }

    async jobSearch(searchTerm, jobTypes) {
        try {
            if(!searchTerm && !jobTypes) {
                return this.getjobs(JOBS_URL);
            }
            const response = await this.httpClient.get(`${JOBS_URL}/search?searchTerm=${searchTerm}&jobTypes=${jobTypes}`);
            return await response.json();
        } catch (error) {
            console.error('Error on searching job');
        }
    }
}

export default JobsService