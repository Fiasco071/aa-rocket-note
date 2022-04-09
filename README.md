<h1 align="center"> :rocket: RocketNotes 🚀 </h1>

<h5 align="center">  By: <a href="https://github.com/Fiasco071">Steve Choi</a> - <a href="https://rocket-note-app.herokuapp.com/"><i>Live site</i></h5>

<h2> About </h2>
Rocket Notes is a clone of Evernotes. Rocket notes is where you can save all your important thoughts in an organized way!

   - [Technologies Used](#tech)
   - [How to use our application](#howto)
   - [Features](#features)

<h2>Technologies Used</h2> <a name="tech"></a>
   
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/expressjs.svg)
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/git.svg)
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/heroku.svg)
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/javascript.svg)
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/nodejs.svg)
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/postgres.svg)
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/react.svg)
   ![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/expressjs.svg)

   
##How to use our application <a name="howto"></a>
 
Below is the step-by-step to install and initiate the program.
  
  1. git clone https://github.com/Fiasco071//aa-rocket-note.git
  
  2. Install NPM packages in your root folder
  
             npm install
  3. Create/Update your .env in root folder (use .envexample for reference)
  
             PORT=<<port number>>
             DB_USERNAME=<<Database User Name>>
             DB_PASSWORD=<<Database password>>
             DB_DATABASE=<<Database Name>>
             DB_HOST=localhost
             JWT_SECRET=<<Some randomized string value>>
             JWT_EXPIRES_IN=<<integer values in seconds>>
   
  4. Initialize Sequelize package to create the necessary files to use Sequelize
            
             npx sequelize init
  
  5. Create the user in Postgres and give it the necessary privilege (using credential variables in .env).
  
            CREATE USER <<username>> WITH PASSWORD <<password>> CREATEDB;
  
  6. Create and seed the database and tables
  
             npx dotenv sequelize db:create
             npx dotenv sequelize db:migrate
             npx dotenv sequelize db:seed:all
  
  7. Start the both backend and frontend servers using below command in the respective folder.
  
             npm start
  
  8. Console should pass below message if successful.
   
      #Backend
  
             [nodemon] 2.0.15
             [nodemon] to restart at any time, enter `rs`
             [nodemon] watching path(s): *.*
             [nodemon] watching extensions: js,mjs,json
             [nodemon] starting `node -r dotenv/config ./bin/www`
             Executing (default): SELECT 1+1 AS result
             Database connection success! Sequelize is ready to use...
             Listening on port 5000...

  
      #Frontend
   
            Compiled successfully!

            You can now view soloproject in the browser.

              Local:            http://localhost:3000
              On Your Network:  http://172.25.18.70:3000

            Note that the development build is not optimized.
            To create a production build, use npm run build.

            assets by status 5.68 MiB [cached] 12 assets
            assets by path . 2.9 KiB
              asset index.html 1.67 KiB [emitted]
              asset asset-manifest.json 1.23 KiB [emitted]
            cached modules 4.39 MiB (javascript) 633 KiB (asset) 31.4 KiB (runtime) [cached] 462 modules
            ./src/components/RichTxtEditor/updateFormEditor.js 8.69 KiB [built]
            webpack 5.70.0 compiled successfully in 215 ms
   
   
   <h2> Features </h2> <a name="features"></a>
   
 Logged in users can do the following...
   
 - Create/Read/View/Delete Notes
 - Create/Read/View/Delete Notebooks
