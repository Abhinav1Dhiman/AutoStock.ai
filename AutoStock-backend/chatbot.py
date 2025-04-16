from flask import Flask, request, jsonify
from flask_cors import CORS
from fuzzywuzzy import fuzz
import json

app = Flask(__name__)
CORS(app)

with open("faq.json", "r") as f:
    faq_data = json.load(f)

def find_best_match(user_query):
    max_score = 0
    best_answer = None

    for item in faq_data:
        score = fuzz.token_set_ratio(user_query.lower(), item["question"].lower())
        if score > max_score:
            max_score = score
            best_answer = item["answer"]

    if max_score >= 50:
        return best_answer
    return "Sorry, I couldn't find an answer for that."

@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    question = data.get('question', '')
    print("Received:", question)

    answer = find_best_match(question)
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True)
