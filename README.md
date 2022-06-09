# McGill Frosh2022 Website

### Install Docker
https://docs.docker.com/desktop/mac/install/

### Install Node
https://nodejs.org/en/download/

or through homebrew:
brew install node

#### Update npm
sudo npm install npm --global

### Install Nest js
npm i -g @nestjs/cli

### Install Postico (For viewing database)
https://eggerapps.at/postico/

### Create database
psql postgres\
CREATE ROLE postgres WITH LOGIN PASSWORD 'password';\
ALTER ROLE postgres CREATEDB;\
\q\
psql postgres -U postgres\
CREATE DATABASE frosh2022 OWNER postgres;


## Run Backend
Make sure Docker Desktop is open\
cd backend\
npm run start --> will run on localhost:4000\
npm run start:dev --> builds docker and runs on localhost:8080

## Run Frontend
cd frontend\
npm i\
npm run start
