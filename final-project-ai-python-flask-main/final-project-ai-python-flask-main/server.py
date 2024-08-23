"""
This module contains the Flask server application for managing emoje.
"""
from flask import Flask, render_template, request
from EmotionDetection.emotion_detection import emotion_detector

app = Flask("Emotion Detector")


@app.route("/emotionDetector")
def emotion_detection():
    """
    Checks the entered text

    Returns:
        str: Sentieneled text result
    """
    text_to_analyze = request.args.get('textToAnalyze')
    response = emotion_detector(text_to_analyze)
    if response['dominant_emotion'] is None:
        return "Invalid text! Please try again!"
    return f"For the given statement, the system response is " \
           f"anger: {response['anger']}, disgust: {response['disgust']}, " \
           f"fear: {response['fear']}, joy: {response['joy']}, " \
           f"sadness: {response['sadness']}, " \
           f"The dominant_emotion is {response['dominant_emotion']}", 200


@app.route("/")
def index():
    """
    load index

    Returns:
        index.html
    """
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
