import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createWord = payload => api.post(`/vocabulary`, payload)
export const getVocabulary = () => api.get(`/vocabulary`)
export const updateWord = (id, payload) => api.put(`/vocabulary/${id}`, payload)
export const deleteWord = id => api.delete(`/vocabulary/${id}`)
export const getWordById = id => api.get(`/vocabulary/${id}`)

const apis = {
    createWord,
    updateWord,
    deleteWord,
    getVocabulary,
    getWordById
}

export default apis