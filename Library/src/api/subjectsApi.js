import { api } from "./axios";

export const getSubject = async(subject)=>{

const res = await api.get(`/subjects/${subject}.json`);

return res.data;

}

export const getSubjectRevisionHistory = async (subject) => {
  const res = await api.get(`/subjects/${subject}/versions.json`);
  return res.data;
};

