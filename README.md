# Government Scheme Recommendation System

## Overview

Government Scheme Recommendation System is an AI-powered web application that helps users discover relevant government welfare schemes and receive intelligent responses to scheme-related queries.

The system combines semantic search, vector embeddings, MongoDB Atlas Vector Search, and Google's Gemini AI to provide context-aware recommendations and conversational assistance.

## Features

* User authentication and registration
* Government scheme discovery and recommendation
* AI-powered chatbot for scheme-related queries
* Semantic search using vector embeddings
* Retrieval-Augmented Generation (RAG) architecture
* Multilingual response support (English and Hindi)
* MongoDB Atlas Vector Search integration

## Tech Stack

### Frontend

* React.js
* JavaScript
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* JWT Authentication

### AI & RAG

* Google Gemini 1.5 Flash
* Transformers.js
* MiniLM Embeddings (all-MiniLM-L6-v2)
* MongoDB Atlas Vector Search

## System Architecture

User Query
→ Generate Query Embedding
→ MongoDB Atlas Vector Search
→ Retrieve Relevant Government Schemes
→ Provide Context to Gemini AI
→ Generate Final Response

## How It Works

1. Government scheme data is stored in MongoDB.
2. Scheme descriptions and eligibility details are converted into vector embeddings.
3. User queries are transformed into embeddings using MiniLM.
4. MongoDB Atlas Vector Search retrieves the most relevant schemes.
5. Retrieved schemes are supplied as context to Gemini AI.
6. Gemini generates a grounded response based on the retrieved information.

## Project Structure

```text
Backend/
├── controllers/
├── models/
├── routes/
├── services/
├── rag/
│   ├── embedding.service.js
│   ├── vectorSearch.service.js
│   ├── ragChat.service.js
│   └── ingestSchemes.js

Frontend/
├── src/
├── public/

Dataset/
├── government_schemes_dataset_2500.csv
├── schemes_rag_documents.csv
└── rag_chunks.json
```

## Installation

### Clone Repository

```bash
git clone https://github.com/gurugubelliharish/Government-Scheme-Recommendation-System.git
```

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_api_key
```

Start backend:

```bash
npm start
```

### Frontend Setup

```bash
cd Frontend
npm install
npm start
```

## Future Enhancements

* Personalized eligibility prediction
* Advanced recommendation ranking
* Support for additional Indian languages
* Scheme application tracking
* Real-time government scheme updates

## Author

Harish Gurugubelli
