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

### Install Runtime Dependencies
In order to run the app we need to install of the libraries and other bits and bobs that it depends on. The package.json and package-lock.json define what these dependencies are and NPM knows how to read them and install everything required.
1. cd into the repo's directory on your local
`cd tensorscripts`
2. Install runtime dependencies with NPM
`npm install`

### Start the Application
1. Turn the application on
`npm start`
2. Confirm the application is running by navigating to the below URL in your webbrowser.
`localhost:3000`

## Running the test suite
??????????????
