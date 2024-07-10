export const BASE_URL = '/api/jobs'

class JobsService {

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getjobs(url) {
        try {
            const response = await this.httpClient.get(url);
            return response.json();
        } catch (error) {
            console.error('Error on fetching jobs', error)
        }
    }

    async createJob(job) {
        try {
            const response = await this.httpClient.post(BASE_URL, job);
            return response.json();
        } catch (error) {
            console.error('Error on creating jobs', error)
        }
    }

    async updateJob(job) {
        try {
            const response = await this.httpClient.put(`${BASE_URL}/${job.id}`, job);
            return response.json();
        } catch (error) {
            console.error('Error on updating job');
        }
    }

    async deleteJob(id) {
        try {
            const response = await this.httpClient.delete(`${BASE_URL}/${id}`);
            return response.json();
        } catch (error) {
            console.error('Error on deleting job');
        }
    }

    async jobSearch(searchTerm) {
        try {
            if(!searchTerm) {
                return this.getjobs(BASE_URL);
            }
            const response = await this.httpClient.get(`${BASE_URL}/search/${searchTerm}`);
            return response.json();
        } catch (error) {
            console.error('Error on searching job');
        }
    }
}

export default JobsService