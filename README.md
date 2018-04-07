# Te reo Maori daily word EDA 2018

Daily kupu useful in the workplace and around home

## User Stories

### MVP

As a user:
* [ ] I want to be able to see a daily te reo word and have the english translation next to it
* [ ] I want to have an example of how i can use each word
* [ ] I want to have a list of all the words that are in the app

### Stretch 1

* [ ] I want to be able to input the week number and have a list appear of the words for the week
* [ ] I want to be able to log in 
* [ ] I want to be able to see which day i am up to
* [ ] I want to see how each word lines up with the theme of the week


 ---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | App | The component that holds everything |
  | Home | '/' route, base page for info and what the app is about|
  | Nav | The nav bar - on every page |
  | Auth | A place where you go to log in or register - holds both of those comps |
  | Login | Where you go to login |
  | Register | Where you go to register |
  | DailyWord | Where each word will appear |
  | WordList | All the words from the database |


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | user | Store user info |
  | dailyWord | Collects Recipes from external API |
  | index | Combines reducers

 ## Actions
 | type | data | purpose |
 | --- | --- | --- |
 | login | auth, users | logs in user|
 | logout | null |logs user out |
 | register | auth, users |registers user |

 ### users
 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_USERS | users | retreive the users from the server |
 | RECIEVE_USER | users | retrieve one user and their dietary stuff (join table yo) |
 

 ### dailyWord
| type | data | purpose |
| --- | --- | --- |
| GET_WORD | Database | Retrieve word |
| GET_WORDS | Database | Retrieve all words |

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| POST | /api/auth/login	| Yes | Log In a User	| The Users JWT Token |
| POST | /api/auth/register	| Yes | Register a User	| The Users JWT Token |
| GET | /api/users	| Yes | Get user profile info	| Array of user objects |
| GET | /api/dailyWord | Yes | Get all recipes | Array of Recipe Objects (we think) |




## DB (Server Side)

### Auth
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | user_name | String |
  | email | string |
  | hash | string |

### Words
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | maori_word | String |
  | english_word | string |
  | example | string |
  


## Setup

Run the following commands in your terminal:

yarn start

yarn knex migrate:latest
yarn knex seed:run

## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app

