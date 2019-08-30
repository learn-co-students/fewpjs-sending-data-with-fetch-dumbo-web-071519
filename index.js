// Add your code here
const body = document.querySelector("body");
function submitData(name, email){
    let formData = {
        name,
        email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);
            slapResponseOnDOM(object);
        })
        .catch(function (error) {
            alert("Bad things! Ragnarők!");
            console.log(error.message);
            slapErrorOnDOM(error.message);
        });

}

// function postData(url, configObj){

// }

function slapResponseOnDOM(object){
    // const li = document.createAttribute("p");
    // li.id = object.id
    document.body.innerHTML = `<p>id: ${object.id} name: ${object.name} email: ${object.email}</p>`
    // console.log(li)
    // body.append(li)
}

function slapErrorOnDOM(message){
    // const error = document.createAttribute("p");
    //console.log(message)
    document.body.innerHTML = `<p>${message}</p>`

    // body.append(error)
}
