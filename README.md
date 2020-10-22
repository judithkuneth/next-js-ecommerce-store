# Title

next-js-ecommerce store

# Description

An ecommerce store with the following pages

- landingpage
- products overview
- product single page
- shopping cart
- checkout page
- thank you page

Lets you

- add products to basket
- remove products from basket
- update products in basket
- Fill out shipment and payment infos

# Technologies used

Next.js
Postgres.js
Jest
Cypress.io
GitHub Actions

# Libraries used

emotion/core
cookies-js
nextcookies
camelcase-keys
ley
dotenv

# Screenshots

## Landinpage

![landingpage](C:\Users\Judith\projects\next-js-ecommerce-store\markdown\img1.png 'Screenshot 1')

## Product Overview

## Product Detail Page

## Basket

## Chckout Page

# Setup Instructions

First setup up the Database then start the server

## Database Setup

Install postgres on your machine: https://www.postgresql.org/

``bash

Start potgres
``bash
postgres

Login with super-User
Windows: psql -U postgres postgres
mac: psql postgres

Setup new user and new database
CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;

Connect to the database using new user

1. quit psql
   \q
2. reconnect
   psql -U <user name> <database name>;

Create .env file in root

_PGHOST=<localhost>_
_PGDATABASE=<database_name>_
_PGUSER=<user_name>_
_PGPASSWORD=<password>_

Add .env to .gitignore!

Running the migrations
To set up the structure and the content of the database, run the migrations using Ley:

yarn migrate up
To reverse the last single migration, run:

yarn migrate down

## Start Server

_npm run dev_

or

_yarn dev_

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Deployment instructions

Deploy on Heroku https://dashboard.heroku.com/

- create a new app
- Connect to your Github Repo
- Install the Heroku Postres Add-on
- Deploy

# Tests

## Jest

_yarn jest_

## Cypress

\*yarn cypress start
