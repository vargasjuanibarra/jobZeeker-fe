export const FetchClient = {
    async get(url) {
        return await fetch(url, {
            headers: {  
                Accept: "application/json"  
              }  
        })
    },

    async post(url, body) {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    },

    async put(url, body) {
        return await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    },

    async delete(url) {
        return await fetch(url, {
            method: 'DELETE'
        })
    }
}