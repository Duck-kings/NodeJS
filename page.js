async function create(userName, userAge){
    let res = await fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            name:userName,
            age:userAge
        })
    });
    let user = await res.json();
    user.name = userName;
    user.age = userAge;
}
let form = document.querySelector('form');
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;

    create(name, age);
});