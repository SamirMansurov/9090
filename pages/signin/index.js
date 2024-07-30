import { ApiCall } from "../../lib/http.request";

const form = document.forms.namedItem('form')
const pass = document.querySelector('#password')
const Call = new ApiCall("http://localhost:8080")

form.onsubmit = async (e) => {
    e.preventDefault();

    const fm = new FormData(e.target)

    const user = {}

    fm.forEach((val, key) => user[key] = val)

    const users = await Call.getData('/users?email=' + user.email)

    if(users.data.length <= 0) {
        alert('User not registered!')
        return
    }

    if(users.data[0].password !== pass.value) {
        alert('Password is wrong!')
        return
    }
    form.reset()
    location.assign('/') 
}