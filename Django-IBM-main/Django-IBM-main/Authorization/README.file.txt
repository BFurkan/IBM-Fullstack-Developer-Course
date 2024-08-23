Authentication: The process of verifying the identity of a user or system.

User: Represents an individual who interacts with the Django application. It typically includes information such as username, password, and email.

Registration: The process of creating a new user account in the application.

Login: The process by which a user provides credentials (such as username and password) to access a protected area of the application.

Logout: The process of ending a user’s session and removing their authentication status.


Required Installations

pip install --upgrade distro-info
pip3 install --upgrade pip==23.2.1
pip install virtualenv
virtualenv djangoenv
source djangoenv/bin/activate
pip install -U -r requirements.txt

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver