import { toast } from "react-toastify";
export const USER_URL = '/api/users'

class UserService {
    
    constructor(httpClient) {
        this.httpClient = httpClient
    }
    
    async getUsers() {
        console.log('USER_URL', USER_URL);
        try {
            const response = await this.httpClient.get(`${USER_URL}`);
            console.log('response', response);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error on fetching users', error)
        }
    }
    async getUser(userId) {
        try {
            const response = await this.httpClient.get(`${USER_URL}/${userId}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error on fetching user', error)
        }
    }

    async updateUser(user) {
        try {
            const response = await this.httpClient.put(`${USER_URL}/${user.id}`, user)
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error on updating user details')
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

    async usersSearch(searchTerm, jobTypes) {
        try {
            if(!searchTerm && !jobTypes) {
                return this.getUsers();
            }
            const response = await this.httpClient.get(`${USER_URL}/search?searchTerm=${searchTerm}&jobTypes=${jobTypes}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error on searching for users');
        }
    }
}

export default UserService