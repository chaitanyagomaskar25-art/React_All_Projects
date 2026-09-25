import { api } from "./axios";
export const getBooksBySubject = async (subject, limit, offset = 0) => {
  const res = await api.get(
    `/subjects/${encodeURIComponent(subject)}.json`,
    {
      params: {
        limit,
        offset,
      },
    }
  );

  return res.data;
};