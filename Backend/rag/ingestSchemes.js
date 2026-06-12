import mongoose from "mongoose";
import dotenv from "dotenv";
import Schemev2 from "../models/schemev2.model.js";
import { generateEmbedding } from "./embedding.service.js";
import { DB_NAME } from "../constants.js";

dotenv.config();

await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

const schemes = await Schemev2.find();

for (const scheme of schemes) {
  const combinedText = `
    ${scheme.schemeName}
    ${scheme.detailedDescription_md}
    ${scheme.eligibilityDescription_md}
  `;

  const embedding = await generateEmbedding(combinedText);

  scheme.embedding = embedding;
  await scheme.save();

  console.log(`Embedded: ${scheme.schemeName}`);
}

console.log("All schemes embedded!");
process.exit();