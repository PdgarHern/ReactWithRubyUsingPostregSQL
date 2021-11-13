# React and Ruby on Rails Web App
Just a litle Anime info app using these technologies.

## First of all
To get this app running you'll need to *NodeJS*, *Ruby 2.6.8* with *Rails 6.1* and *PostgreSQL* (I use PostgreSQL 14).<br/>
Here you have some links:<br/>
[NodeJS Download](https://nodejs.org/es/)<br/>
[Ruby Download](https://rubyinstaller.org/downloads/)<br/>
[Ruby on Rails Installation Tutorial](https://guides.rubyonrails.org/getting_started.html)<br/>
[PostgreSQL Download](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)<br/>

## Get the app running
Once you have everything downloaded and installed you'll need to run a few things in the command prompt.<br/>
I recommend using the *Git Bash*. It's comfortable and shouldn't give you any problem.<br/>
[Git Download](https://git-scm.com/downloads)

## Backend
The Backend is created with Ruby on Rails and uses PostgreSQL for the database.<br/>
<br/>
In the *Backend* you need to run ```bundle install``` and ```rails db:setup```.<br/>
<br/>
Also, you will have to create a file called *application.yml* inside the *config* folder.<br/>
In that file, you will have to write the following:<br/>
```
development:
  host_postgres: your_host
  port_postgres: "your_port"
  username_postgres: your_user
  password_postgres: your_password
```
This is done this way for security reasons.<br/>
<br/>
If you want to insert some test data into the database I recomend using Postman.<br/>
[Postman Download](https://www.postman.com/downloads/)<br/>

## Frontend
This is an early version of the project so, for now there is not much to see here really.
However you can see some information displaying on the screen and some routes are already created.

The *Frontend* preparation is easy. You just have to run ```npm install```.

## Starting the app
Both *Ruby on Rails* and *React* uses port 3000.
However, run the *Backend* with ```rails s``` and then, when you run *React* using ```npm start``` it will auto select another port.
In further commits, the installation guide may be updated if necessary.
