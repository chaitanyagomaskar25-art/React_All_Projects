// collectionApi.js

import { api } from "./axios";


// Get individual collection information
export const getCollection = async (collectionId) => {
  const res = await api.get(
    `/collections/${collectionId}.json`
  );

  return res.data;
};


// Get books for a collection carousel
export const getCollectionBooks = async (
  query,
  page = 1,
  limit = 20
) => {
  const res = await api.get("/search.json", {
    params: {
      q: query,
      page,
      limit,
    },
  });

  return res.data;
};