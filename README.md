# Guess  Gender

Based on the text given by users, this app guesses their genders. Three different classifications are used to study Twitter's profile information. The studied model will predict the gender using the given inputs

![](guess_gif.gif)

## Notable features
- Machine learning model guesses users' gender 
- Naive Bayes Classifier, Multinomial Naive Bayes classifier, Logistic regression classifier are used to train the model 
- Support full authentication system 
- Private router restricts unauthenticated users to go to the private pages
- React and Django are used

## How To install
Clone the repository first
```
https://github.com/GeonYoon/guessGender.git
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
source [envname]/bin/activate 
```
Install all the dependencies for the project.
```
cd backend
pip install -r requirements.txt
```
Migrate all the changes
```
python manage.py makemigrations
python manage.py migrate
```
Create your own super user.
```
python manage.py createsuperuser
```
Run server with following line
```
python3 manage.py runserver
```

## nginx mandatory command
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml

minikube addons enable ingress
```

## Running Travis CLI in a Container

``` script
docker run -it -v $(pwd):/app ruby:2.3 sh
cd app
gem install travis
travis login
travis encrypt-file service-account.json -r  GeonYoon/guess_gender
```  

## configuration on gcloud browser conosle

```script
glcoud config set project kubernetes-252022
gcloud config set compute/zone us-central1-a
gcloud container clusters get-credentials guess-cluster
```

## 1. Install Helm script

## 2. RBACK

Role Based Access Control (RBAC)
Who can do what!

## 3. Tiller & Helm init & RBCA enable 

```scrit
kubectl create serviceaccount --namespace kube-system tiller

kubectl  create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller

helm init --service-account  tiller --upgrade

helm install stable/nginx-ingress --name my-nginx --set rbac.create=true

```

## Built With

* [Django](https://www.djangoproject.com) - Python Web framework
* [Django REST framework](https://www.django-rest-framework.org) - To handle API requests
* [React](https://reactjs.org/) - Used to build client side
* [Redux](http://redux.js.org/docs/basics/UsageWithReact.html) - Predictable state container for JavaScript apps
* [Pickle](https://docs.python.org/3/library/pickle.html) - The pickle module implements binary protocols for serializing and de-serializing a Python object structure.
* [Joblib](https://pypi.org/project/joblib/) - Joblib is a set of tools to provide lightweight pipelining in Python

## Authors
* **Geon Yoon ** - *Initial work* - [GeonYoon](https://github.com/GeonYoon)
