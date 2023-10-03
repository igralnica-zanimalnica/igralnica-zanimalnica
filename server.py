
import os
from flask import Flask


app = Flask(__name__, template_folder=os.path.abspath(os.path.dirname(__file__)),
            static_url_path='/', static_folder=os.path.join(os.path.abspath(os.path.dirname(__file__)), 'public'))


@app.route('/')
def home():
    return app.send_static_file("index.html")

@app.route('/училищна-занималня')
def school_zanimalnica():
    return app.send_static_file("index.html")

@app.route('/лятна-игралница')
def summer_igralnica():
    return app.send_static_file("index.html")


@app.route('/лятна-занималница')
def summer_zanimalnica():
    return app.send_static_file("index.html")

@app.route('/за-нас')
def about():
    return app.send_static_file("index.html")

@app.route('/контакти')
def contacts():
    return app.send_static_file("index.html")

@app.route('/admin')
def admin():
    return app.send_static_file("index.html")

if __name__ == '__main__':
    app.run(debug=True)