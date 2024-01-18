async function getToken() {
    const response = await fetch(`http://localhost:3001/api/v1/user/login`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "email": "tony@stark.com",
            "password": "password123"
        })
    })
    const token = await response.json()
    return token.body.token
}

async function getUser() {
    const token = await getToken()
    const response = await fetch(`http://localhost:3001/api/v1/user/profile`, { 
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    })
    const user = await response.json()
    console.log(user.message)
    return user
}

export { getUser, getToken }