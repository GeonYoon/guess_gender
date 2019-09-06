docker build -t ssy01013/guess-frontend:latest -t ssy01013/guess-frontend:$SHA -f ./frontend/Dockerfile ./frontend
docker build -t ssy01013/guess-backend:latest -t ssy01013/guess-backend:$SHA -f ./backend/Dockerfile ./backend

docker push ssy01013/guess-frontend:latest
docker push ssy01013/guess-backend:latest

docker push ssy01013/guess-frontend:$SHA
docker push ssy01013/guess-backend:$SHA

kubectl apply -f k8s
kubectl set image deployments/backend-deployment backend=ssy01013/guess-backend:$SHA
kubectl set image deployments/frontend-deployment backend=ssy01013/guess-frontend:$SHA

  