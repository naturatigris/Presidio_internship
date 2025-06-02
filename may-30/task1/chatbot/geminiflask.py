# gemini_flask.py

import google.generativeai as genai
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
import json
from flask import Flask, request, jsonify

app = Flask(__name__)

genai.configure(api_key="AIzaSyBKtwon-qOwLuB2WbH8N9QWgO6OelRAWak")

with open('BankDetails.json') as f:
    qa_data = json.load(f)

questions = [item["question"] for item in qa_data]
embedder = SentenceTransformer('all-MiniLM-L6-v2')
question_embeddings = embedder.encode(questions, convert_to_numpy=True)

dimension = question_embeddings.shape[1]
index = faiss.IndexFlatL2(dimension)
index.add(np.array(question_embeddings))

def retrieve_context(user_question, top_k=1):
    user_embedding = embedder.encode([user_question], convert_to_numpy=True)
    distances, indices = index.search(user_embedding, top_k)

    result = []
    for i in indices[0]:
        match = qa_data[i]
        result.append(f"Q: {match['question']}\nA: {match['answer']}")
    return "\n\n".join(result), distances[0][0]  

def ask_gemini(user_question,threshold=1.0):
    context, distance = retrieve_context(user_question)

    if distance > threshold:
        return "Sorry, I couldn’t find a relevant answer to your question."
    prompt = f"""You are a banking assistant. Answer the user's question based on the following context:

{context}

User question: {user_question}
Answer:"""

    model = genai.GenerativeModel("gemini-2.0-flash")
    response = model.generate_content(prompt)
    return response.text.strip()

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    user_question = data.get("prompt", "")

    if not user_question:
        return jsonify({"text": "Invalid input"}), 400

    try:
        answer = ask_gemini(user_question)
        return jsonify({"text": answer})
    except Exception as e:
        return jsonify({"text": f"Error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5001)
