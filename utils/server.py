
import os
from flask import Flask

# Get the absolute path for the directory containing the Flask app script
app_dir = os.path.abspath(os.path.dirname(__file__))

# Navigate up one level to get the absolute path for the root directory
project_dir = os.path.abspath(os.path.join(app_dir, '..'))

# Set the absolute paths for the template and static folders
template_folder = os.path.join(project_dir, 'public')
static_folder = os.path.join(project_dir, 'public')

app = Flask(__name__, template_folder=template_folder,
            static_url_path='', static_folder=static_folder)


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