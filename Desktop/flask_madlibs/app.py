from flask import Flask, render_template, request
from stories import story

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', prompts=story.prompts)

@app.route('/story', methods=['POST'])
def generate_story():
    answers = {prompt: request.form[prompt] for prompt in story.prompts}
    generated_story = story.generate(answers)
    return render_template('story.html', story=generated_story)

if __name__ == '__main__':
    app.run(debug=True)
    app.run(debug=True)