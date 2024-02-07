async function getToken(email, password) {
    const response = await fetch(`http://localhost:3001/api/v1/user/login`, {
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
        const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
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
    const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
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