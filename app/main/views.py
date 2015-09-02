from flask import render_template
from flask.ext.login import current_user
from . import main


@main.route('/')
def index():
    return render_template('index1.html')
    # if current_user.is_authenticated():
    #     return render_template('pd_content/2015_8_27_first_day_google.html')
    # else:

# @main.route('/pd_list/2015_8_27_first_day_google')
# @login_required
# def pd_one():
#     return render_template('pd_content/2015_8_27_first_day_google.html')
