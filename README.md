# tensorscripts
Backend for TensorScripts product

## Getting Started

### Clone the repo
https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository

### Install System Dependencies
Several key tools are required to work effectively with NodeJS, this section will walk you through getting them installed on your mac. All commands below assume you're executing them in terminal.

#### Homebrew
1. Check to see if you have homebrew installed
`brew -v`
2. If you have homebrew installed, update it.
`brew update`
3. If you do not have homebrew installed, follow the official install guide here: https://docs.brew.sh/Installation

#### NodeJS
1. Check to see if you have node installed
`brew info node`
2. If you have node installed, confirm it is version 13.5.0 or newer
`node -v`
3. If node is installed but is an earlier version than 13.5.0, upgrade it
`brew upgrade node`
4. If node is not installed, install it with homebrew
`brew install node`
5. Confirm NPM was installed alongside Node and is at least version 6.13.4
`npm -v`
6. If NPM was not installed, install it with brew and go back to step 5
`brew install npm`
7. If NPM was installed but is not yet at version 6.13.4 or higher, update it with homebrew
`brew upgrade npm`

At this point you should have Homebrew & NodeJS installed. NodeJS should've also installed Node Package Manager (NPM) which is the javascript version of python's PIP.

#### typeorm
1. Check to see if you have typeorm installed.
`typeorm -v`
2. If you do not have typeorm installed, install it globally with npm.
`npm install -g typeorm`

#### PostgreSQL
1. Check to see if you have postgreSQL install.
`brew info postgresql`
2. If you have less than version 12.1, upgrade it with brew.
`brew upgrade postgresql`
3. If you upgraded your postgresql version, upgrade the database records and configurations.
`brew postgresql-upgrade-database`
3. If you don't have postgresql installed, install it with brew.
`brew install postgresql`
4. Start postgresql with pg_ctl
`pg_ctl -D /usr/local/var/postgres start`
5. Confirm postgresql is running with ps and grep.
`ps auxwww | grep postgres`
One would expect to see a collection of processes running with the name (rightmost column) 'postgres: '
6. If postgres is running, create the 'cat' database and connect to it.
`createdb cat`
`psql cat`
You should be pulled into the psql command line tool for the recently created 'cat' database. To exit the psql tool type `\q`. For more on PSQL commands, see: https://www.postgresqltutorial.com/postgresql-administration/psql-commands/

At this point you should have a live running postgres instance.

### Install Runtime Dependencies
In order to run the app we need to install of the libraries and other bits and bobs that it depends on. The package.json and package-lock.json define what these dependencies are and NPM knows how to read them and install everything required.
1. cd into the repo's directory on your local
`cd tensorscripts`
2. Install runtime dependencies with NPM
`npm install`

### Setup your Database & Schemas
If you haven't yet setup your database and schemas, please do so. This only needs to be done once per machine.
1. Create your postgres tensorscripts database.
`createdb tensorscripts`
2. Connect to your tensorscripts postgres database with psql
`psql tensorscripts`
3. Create your development schema inside the tensorscripts postgres database
`CREATE SCHEMA development;`
4. Create your test schema inside the tensorscripts postgres database
`CREATE SCHEMA test;`
5. Exit psql
`\q`

### Setup your ormconfig.json file
In order for typeorm to connect to the database it must know where it is and what credentials to use. Included in the repository is a file called ormconfig.json.sample. 
1. Make a copy of the ormconfig.json.sample file and remove the '.sample'
`cp ormconfig.json.sample ormconfig.json`

### Start the Application
1. Start your local postgres instance if it isn't already running. See the above PostgreSQL install steps 5 and 4 for how to do this.
2. Turn the application on
`npm start`
3. Confirm the application is running by navigating to the below URL in your webbrowser.
`localhost:3000/users`

## Running the test suite
??????????????
