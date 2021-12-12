<br/>
<div align="center">
  <a href="https://github.com/PdgarHern/ReactWithRubyUsingPostregSQL">
    <img src="documentation/images/Anime.png" alt="Logo" width="400" />
  </a>

  <h3 align="center">Anime info web using React, Ruby and PostreSQL</h3>
  <div flex-direction="row">
    <img src="documentation/images/ruby.png" alt="Ruby" width="50" />
    <img src="documentation/images/rails.png" alt="Rails" width="100" />
    <img src="documentation/images/react.png" alt="React" width="50" />
  </div>
  <br/>
</div>

<details>
  <summary>Index</summary>
  <ol>
    <li>
      <a href="#react-and-ruby-on-rails-web-app">React and Ruby on Rails Web App</a>
      <ul>
        <li><a href="#need-source">Need Source</a></li>
        <li><a href="#demanding-company">Demanding Company</a></li>
        <li><a href="#summarized-idea">Summarized idea</a></li>
      </ul>
    </li>
    <li>
      <a href="#data-model">Data Model</a>
      <ul>
        <li><a href="#entities">Entities</a></li>
        <li><a href="#relathionships">Relathionships</a></li>
      </ul>
    </li>
    <li>
      <a href="#user-requirements">User Requirements</a>
      <ul>
        <li><a href="#user-cases">User Cases</a></li>
      </ul>
    </li>
    <li>
      <a href="#system-functioning-and-requirements">System requirements and functioning</a>
    </li>
    <li>
      <a href="#interfaces">Interfaces</a>
      <ul>
        <li><a href="#usability">Usability</a></li>
      </ul>
    </li>
    <li>
      <a href="#guides">Guides</a>
      <ul>
        <li><a href="#installation-guide">Installation guide</a></li>
        <ul>
          <li><a href="#first-of-all">First of all</a></li>
          <li><a href="#backend">Backend</a></li>
          <li><a href="#frontend">Frontend</a></li>
          <li><a href="#starting-the-app">Starting the app</a></li>
        </ul>
      </ul>
    </li>
  </ol>
</details>

# React and Ruby on Rails Web App
Welcome to -*Your Anime Database*-, a web Anime info based app made up using React for the client and a Ruby on Rails API.<br/>
This is an app where you can store and check data about your favourite series, their actors and characters, and even create a 'Favourite' list for either the animes and characters.<br/>
<br/>
With its design and search engine, it makes incredibly easy looking up for what you're looking for. It comes with a register and login system, where you can create your own user, modify your profile and, by becoming and admin, administrate all the info in the database.

### Need Source
Anime's popularity has grown so much in recent times, and the demand for fast answers its even bigger.<br/>
Therefore, is logical to think of the possible usage of a fast and user firendly web app where you can store all this information that everyone is talking about at this moment.

### Demanding Company
This is a personal project *(The technologies used where demanded by Usabi)*

### Summarized idea
So, the idea of the project is to create a place to store and easily find information about animes, actors and characters, giving the tools to make it as comfortable as possible.
<br/>

# Data Model
Next, I will describe how the database is made, the entities and relathionships that exist and all the atributes.

### Entities
For this app, I created four entities: *Anime*, *Actor*, *Character* and *User*.<br/><br/>
<img src="documentation/images/er.PNG" alt="E-R" />
<br/><br/>
They all have a unique *id*, base of an auto-incrising integer assigned by the database.<br/>
The rest of the attributes are mostly strings, except from the following:<br/>
<ol>
  <li>
    Anime:
    <ul>
      <li>Premiered: Integer</li>
      <li>Episodes: Integer</li>
      <li>Poster: Image</li>
      <li>Thumb: Image</li>
    </ul>
  </li>
  <li>
    Actor:
    <ul>
      <li>Age: Integer</li>
      <li>Img: Image</li>
    </ul>
  </li>
  <li>
    Character:
    <ul>
      <li>Age: Integer</li>
      <li>Img: Image</li>
    </ul>
  </li>
  <li>
    User:
    <ul>
      <li>Age: Integer</li>
      <li>Profile_picture: Image</li>
      <li>Profile_image: Image</li>
    </ul>
  </li>
</ol>

###
For the first three entities, you don't have too much restrictions. You just need a title or a name to create an entry.<br/>
For the rest attributes you just have to put the correct data and there you go.<br/>
<br/>
For the *User* you have to sign up with a valid email, and the password has to have at list six characters. You also need to provide a *user_name*.

### Relathionships
As seen before, there are four relathionships between the four entities.<br/>
They are the following:<br/>
<ol>
  <li>Anime-Actor: One Anime has many Actors / One Actor belongs to one Anime</li>
  <li>Anime-Character: One Anime has many Characters / One Character belongs to one Anime</li>
  <li>User-Anime: One User has many Animes / One Anime has many Users (this is used for the 'Favourite' list)</li>
  <li>User-Character: One User has many Characters / One Character has many Users (this is used for the 'Favourite' list)</li>
</ol>

###
Here we can see that we have two One to many and two Many to many relathionships.<br/>
As you would now, we then have to add one more attribute to *Actor* and *Character*. The *id* of the *Anime* they belong to.<br/>
<br/>
We also then have to create two more tables. One for each Many to many relathionship.<br/>
We add these:
<ol>
  <li>User-Anime: With the User Id and the Anime Id</li>
  <li>User-Character: With the User Id and the Character Id</li>
</ol>
<img src="documentation/images/uml.PNG" alt="UML" />
<img src="documentation/images/relational.PNG" alt="Relational">

###
To see the postgre database generation code, head to <a href="animes/db/schema.rb">animes/db/schema.rb</a>

# User Requirements
The main objective of the project was to create a web app for storing, managing and checking *anime* and related information.<br/>
The app needed to have an *anime* searching engine, a place where you could either see every *anime* in the database or to search the one that you want to check.<br/>
Every *anime* had to have to more lists related to them.<br/>
The first one had to be the *actors*, and you would see that in the same page where you would check all the information of an *anime*.<br/>
The second list would be a *character* list. This list would be in a different page that you could access from the *anime info page*.<br/>
Also, *actors* and *characters* would also have an individual info page.<br/><br/>
For the *users*, they would have three related pages.<br/>
The first one would be a personal page. It would be a page where every *user* could see and change their own personal info.<br/>
The other two would be lists, like the ones that we already had.<br/>
One of those lists would be for the *'Favourite Animes'* list, and the second one would be for the *'Favourite Characters'*.<br/>
The routes and links would work like in the normal lists and every *user* could add or delete entries on this lists.<br/>
There would be two *user roles*:
<ol>
  <li>Normal Users</li>
  <li>Admin Users</li>
</ol>

###
Only the *Admin Users* could create, update or delete registers of the main tables.<br/>
<br/>
Lastly, you would have a *Home page* and an *About Us* page with some information about the app.

### User Cases
<img src="documentation/images/userCase.PNG" alt="User-Cases" />

# System functioning and requirements
We could say that this project is divided in three parts:<br/>
<ol>
  <li>Frontend / Web Client: Made using React</li>
  <li>Backend / API: Made using Rails</li>
  <li>Database: Made with PostgreSQL</li>
</ol>

###
When using the app, you interact directly with the *Web Client*.<br/>
This provides a good looking, easy way to manage and check the information from the *database* in a way that everyone can understand.<br/>
However, there is still one step in between the *Web Client* and the *database*. And that is the *API*.<br/>
The *API* acts like an interpreter between the other two parts of the project.<br/> 
It communicates with the *database* in a certain way it understands (SQL sentences) and also transforms all what have to do with the tables and the relathionships between them into objects to make it easier for the *Web Client* to understand.<br/>
<br/>
<img src="documentation/images/function.PNG" alt="Function-Diagram" />

###
To run this app you can use whatever computer you have and having the necessary tools installed.<br/>
Then you can access the *Web Client* with your same computer or using even your phone.

# Interfaces
Now, you can see some screenshots of the project mockups and prototype:<br/>
<ol>
  <li>Home</li>
  <br/>
  <ul>
    <img src="documentation/images/home.PNG" alt="Home" />
  </ul>
  <br/>
  <li>About Us</li>
  <br/>
  <ul>
    <img src="documentation/images/aboutus.PNG" alt="About-Us" />
  </ul>
  <br/>
  <li>Browse Info</li>
  <br/>
  <ul>
    <img src="documentation/images/browseinfo.PNG" alt="Browse-Info" />
  </ul>
  <br/>
  <li>Anime</li>
  <br/>
  <ul>
    <img src="documentation/images/animepage.PNG" alt="Anime-Page" />
  </ul>
  <br/>
  <li>Characters</li>
  <br/>
  <ul>
    <img src="documentation/images/characters.PNG" alt="Characters" />
  </ul>
  <br/>
  <li>Login</li>
  <br/>
  <ul>
    <img src="documentation/images/login.PNG" alt="Login" />
  </ul>
  <br/>
  <li>Register</li>
  <br/>
  <ul>
    <img src="documentation/images/register.PNG" alt="Register" />
  </ul>
  <br/>
  <li>User Page</li>
  <br/>
  <ul>
    <img src="documentation/images/userpage.PNG" alt="User-Page" />
  </ul>
  <br/>
  <li>Posts Pages</li>
  <br/>
  <ul>
    <img src="documentation/images/posts.PNG" alt="Posts" />
  </ul>
  <br/>
  <li>Update Pages</li>
  <br/>
  <ul>
    <img src="documentation/images/updates.PNG" alt="Update" />
  </ul>
</ol>

### Usability
Is all about *simplicity*. Its visual design and elements were made with the idea of making it easy.<br/>
Easy to read, easy to interact... easy to use.<br/>
<br/>
The *navigation* is easy to learn and remember for the user.<br/>
The information shown is displayed in a way that it's easy to found what you are looking for in a short period of time.<br/>
<br/>
The visual design as a whole is minimalistic.<br/>
The app goes on with four main colors:<br/>
<ol>
  <li>White (#fff)</li>
  <li>Light Grey (#eee)</li>
  <li>Medium Grey (#353535)</li>
  <li>Dark Grey (#1c1c1c)</li>
</ol>
<br/>
<img src="documentation/images/colors.PNG" alt="colors" />

###
I really like to use these kind of soft colors, which I think to be elegant and not disturbing in any way to the eyes of the user.<br/>
The app also makes use of *red* some times (for the logo and error messages).<br/>
<div flex-direction="row" align="center">
  <img src="documentation/images/logoColor.png" alt="logo-is-red" width="200" />
  <img src="documentation/images/errorMessage.PNG" alt="error" width="300" />
</div>

###
Talking about errors, these have been kwnown to *not* happen in the normal execution of the program.<br/>
However, and as seen before, these are correctly controlled and notified to the user whenever they happen and don't produce any internal error that isn't shown on the screen.<br/>
<br/>
The project also notifies the user in other cases, like when some information is incorrect during a sign up, or when you log out, for example.<br/>
<div flex-direction="row" align="center">
  <img src="documentation/images/signUpFail.PNG" alt="sign-up-fail" width="800" />
  <img src="documentation/images/logout.PNG" alt="logout" width="800" />
</div>

###
The project also has a loading feature so the user can always know what's happening.<br/>
<div align="center">
  <img src="documentation/images/spinner.PNG" alt="spinner" width="500" />
</div>

###
The user also has a *customizable page* where they can check their personal info, and the famous *'Favourite'* lists.
<div align="center">
  <img src="documentation/images/usercustom.PNG" alt="custom" width="550" />
  <img src="documentation/images/favouriteanimes.PNG" alt="fav" width="550" />
</div>

###
Again, all these things were made with simplicity in mind. Looking for an esay and fast way to do everything while keeping good aesthetic.

# Guides
Next, I will address the guides necessary to install and get the project running:

## Installation guide

### First of all
To get this app running you'll need to install *NodeJS*, *Yarn*, *Ruby 2.6.8* with *Rails 6.1* and *PostgreSQL* (I use PostgreSQL 14).<br/>
<br/>
Here you have some links:<br/>
[ - NodeJS Download](https://nodejs.org/es/)<br/>
[ - Ruby Download](https://rubyinstaller.org/downloads/)<br/>
[ - Ruby on Rails Installation Tutorial](https://guides.rubyonrails.org/getting_started.html)<br/>
[ - PostgreSQL Download](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)<br/>
<br/>
After installing *NodeJS*, run the following command to install *Yarn*:<br/>
```
npm install -g yarn
```

###
Once you have everything downloaded and installed you'll need to run a few things in the command prompt.<br/>
I recommend using the *Git Bash*. It's comfortable and shouldn't give you any problem.<br/>
<br/>
[ - Git Download](https://git-scm.com/downloads)

### Backend
The Backend is created with *Ruby on Rails* and uses *PostgreSQL* for the database.<br/>
<br/>
*Ruby* is an interpreted, high-level programming language designed with an emphasis on programming productivity and simplicity.<br/>
*Rails* is a model-view-controller framework for *Ruby*. It is used to create server-side web applications.<br/>
*PostgreSQL* is one of the biggest relational database management systems. It emphasizes extensibility and SQL compliance.<br/>
<br/>
In the <a href="animes">animes</a> folder you need to run ```bundle install```.<br/>
If the bash doesn't recognize *bundle*, try running ```gem install bundler``` first.<br/>
<br/>
Then, head to <a href="animes/config">config</a> and delete ```credentials.yml.enc```.<br/>
Now, run the command ```EDITOR=nano rails credentials:edit``` and add the next code:<br/>
```
devise:
  jwt_secret_key: <rails secret>
```
Where it says *rails secret* you have to put the secret code that the API will use in the encryptation of user credentials.<br/>
You can generate that secret code of your own by running that same command in the bash:<br/>
```
rails secret
```
To save and close the file, press *Ctrl+X*, *Y* and then *Enter*.<br/>
<br/>
Also, you will have to create a file called ```application.yml``` inside the <a href="animes/config">config</a> folder.<br/>
To do so run the command ```bundle exec figaro install```.<br/>
In that file, you will have to write the following:<br/>
```
development:
  host_postgres: your_host
  port_postgres: "your_port"
  username_postgres: your_user
  password_postgres: your_password
```
This is done this way for security reasons, keeping all your *PostgreSQL* information in private.<br/>
<br/>
Lastly, run ```rails db:setup``` and it will generate the entire database for you. It will be empty, though.<br/>
<br/>
If you want to insert some test data into the database (Not necessary) I recomend using Postman.<br/>
<br/>
[ - Postman Download](https://www.postman.com/downloads/)<br/>

### Frontend
This is a *React* frontend.<br/>
*React* is a JavaScript library for building user interfaces based on UI components.<br/>
<br/>
The *frontend* preparation is easy. You just have to access <a href="animes-frontend">animes-frontend</a> run ```npm install```.<br/>
<br/>
You don't have any data already in the *database* to run the *frontend*, you will be able to do every action since the beginning from here.


### Starting the app
Both *Ruby on Rails* and *React* uses port 3000.<br/>
However, run the *Backend* with ```rails s``` and then, when you run *React* using ```npm start``` it will auto select another port.<br/><br/>
Is possible that running ```rails s``` throughs you an error the first time. The terminal will require you to run ```yarn install --check-files```. Do so and then you should be able to run the server as normally.<br/><br/>
In further commits, the installation guide may be updated if necessary.
