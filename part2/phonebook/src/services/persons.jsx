import axios from 'axios'

const baseUrl = "http://localhost:3001/persons"


const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(res => res.data)
}

const update = (id, newObj) => {
    const request = axios.put(`${baseUrl}/${id}`, newObj)
    return request.then(res => res.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(res => res.data)
}

const updatePerson = (id, newObj) => {
    const request = axios.put(`${baseUrl}/${id}`, newObj)
    return request.then(res => res.data)
}

export default { create, update, deletePerson, updatePerson }