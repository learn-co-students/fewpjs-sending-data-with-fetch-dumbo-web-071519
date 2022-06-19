function submitData(userName, userEmail) {
    const config = {
        method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name:  `${userName}`,
                email: `${userEmail}`
            })
    }
    // Please remember to have a return in your function
    // Thank you~! 🙂
    return fetch('http://localhost:3000/users', config)
    .then(resp => resp.json())
    .then(handleData)
    .catch(handleErr)
}

function handleData(data) {
    document.body.innerHTML = data["id"]
}

function handleErr(err) {
    document.body.innerHTML += `${err.message}`
}
