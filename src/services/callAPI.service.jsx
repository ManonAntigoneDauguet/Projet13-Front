const apiUrl = process.env.REACT_APP_API_URL

async function getToken(email, password) {
    const response = await fetch(`${apiUrl}user/login`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
    const token = await response.json()
    return token.body.token
}

async function getUser(token) {
    try {
        const response = await fetch(`${apiUrl}user/profile`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        })
        const user = await response.json()
        console.log(user.message)
        return user.body
    } catch {
        return null
    }
}

async function editUser(token, firstName, lastName) {
    const response = await fetch(`${apiUrl}user/profile`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            "firstName": firstName,
            "lastName": lastName
        })
    })
    const user = await response.json()
    console.log(user.message)
    return user.body
}

export { getUser, getToken, editUser }