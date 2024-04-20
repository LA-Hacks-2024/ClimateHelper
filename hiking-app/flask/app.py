from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = 'secret'
db = SQLAlchemy(app)



class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True) # user identity
    username = db.Column(db.String(20), nullable=False, unique=True) # user name
    password = db.Column(db.String(80), nullable=False) # user password



@app.route('/')
def home():
    return render_template('home.html')


@app.route('/')
def login():
    return render_template('login.html')


@app.route('/')
def register():
    return render_template('register.html')



if __name__ == '__main__':
    app.run(debug=True)