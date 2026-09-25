import { api } from "./axios"

export const getAuthorDetails = async (authorId) => {
    const res = await api.get(`/authors/${authorId}.json`)
    return res.data
}