from flask import render_template
# from flask.ext.login import current_user
from . import main


@main.route('/')
def index():
    return render_template('index1.html')
    # if current_user.is_authenticated():
    #     return render_template('pd_content/2015_8_27_first_day_google.html')
    # else:


@main.route('/magnoliaUWS')
def magnoliauws():
    return render_template('magnoliaUWS.html')


@main.route('/CafeLalo')
def cafelalo():
    return render_template('CafeLalo.html')
