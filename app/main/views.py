from flask import render_template
from flask.ext.login import current_user
from . import main


@main.route('/')
def index():
    if current_user.is_authenticated():
        return render_template('pd_list.html')
    else:
        return render_template('index.html')
