# GuessGender

About this application

## How To install

Clone the repository first
```
git clone https://github.com/GeonYoon/django-rest.git
```

### Frontend Configuration

```
cd frontend
npm install 
npm start 
```

### Backend Configuration

Make sure you have following software installed in your system. 
* Python3
* pip3

I highly encourage you to install the virutal environment so that you can create an independent environment
for this project. This can keep you out from affecting other projects by installing anything for this. 
```
pip3 install virtualenv 
```
Create virtual environment on the same dir where this project root folder is located at. 
Activate the environment
```
virtualenv -p python3 [envname]
source [name]/bin/activate 
```
Install all the dependencies for the project.
```
cd backend
pip install -r requirements.txt
```

Create your own super user for /admin
```
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser [name] 
```

Run server with following line
```
python3 manage.py runserver
```


## Built With

* [Django](https://www.djangoproject.com) - Python Web framework
* [Django REST framework](https://www.django-rest-framework.org) - To handle API requests
* [PostgreSQL](https://www.postgresql.org) - Database

## Authors

* **Geon Yoon ** - *Initial work* - [GeonYoon](https://github.com/GeonYoon)