import Schemev2 from "../models/schemev2.model.js";
import { generateEmbedding } from "./embedding.service.js";

export const vectorSearch = async (queryText) => {
  const queryEmbedding = await generateEmbedding(queryText);

  const results = await Schemev2.aggregate([
    {
      $vectorSearch: {
        index: "default",
        path: "embedding",
        queryVector: queryEmbedding,
        numCandidates: 50,
        limit: 5
      }
    }
  ]);

  return results;
};