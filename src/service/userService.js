import { toast } from "react-toastify";

export const USER_URL = '/api/user'

class UserService {

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

    async loginUser(credentials) {
        try {
            const response = await this.httpClient.post(`${USER_URL}/login`, credentials);
            if (response.ok) {
                const data = await response.json();
                window.localStorage.setItem('user', JSON.stringify(data))
                window.localStorage.setItem('userAdmin', JSON.stringify(data.isAdmin))
                window.localStorage.setItem('accessToken', JSON.stringify(data.token))
                toast.success('You are logged in');
                
            } else {
                console.log(response);
                toast.error('Invalid email and password');
                return;
            }
            
        } catch (error) {
            console.error('Error on logging in', error)
        }
    }

    async registerUser(user) {
        try {
            const response = await this.httpClient.post(`${USER_URL}/register`, user);
            const data = await response.json();
            console.log('data', data);
            if (response.ok) {
                window.localStorage.setItem('user', JSON.stringify(data));
                window.localStorage.setItem('userAdmin', JSON.stringify(data.isAdmin));
                window.localStorage.setItem('accessToken', JSON.stringify(data.token));
                toast.success('You are logged in');
            }
        } catch (error) {
            console.error('Error on registering', error)
        }
    }
}

export default UserService