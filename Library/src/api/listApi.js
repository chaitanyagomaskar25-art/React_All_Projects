// listApi.js

import { api } from "./axios";

export const getLists = async () => {
  const res = await api.get("/lists.json");
  return res.data;
};

export const getListDetails = async (listId) => {
  const res = await api.get(`/lists/${listId}.json`);
  return res.data;
};

export const getListBooks = async (listId) => {
  const res = await api.get(`/lists/${listId}/books.json`);
  return res.data;
};