class MainApi {
    constructor() {
        this.url = 'https://paveldiplom.students.nomoredomains.monster';
    }

    _handleResponse(response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.statusText)
        }
    }

    signup(name, email, password) {
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: (
                JSON.stringify({ name, email, password })
            )
        })
            .then(this._handleResponse)
    }

    signin(email, password) {
        return fetch(`${this.url}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: (
                JSON.stringify({ email, password })
            )
        })
            .then(this._handleResponse)
    }

    tokenCheck(token) {
        return fetch(`${this.url}/users/me`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(this._handleResponse)
    }

    addingCard(keyword, title, text, source, link, image, date) {
        return fetch(`${this.url}/articles`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: (
                JSON.stringify({ keyword, title, text, source, link, image, date })
            )
        })
            .then(this._handleResponse)
    }

    deleteCard(id) {
        return fetch(`${this.url}/articles/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
        })
            .then(this._handleResponse)
    }

    getCards() {
        return fetch(`${this.url}/articles`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
        })
            .then(this._handleResponse)
    }

}

export default MainApi;