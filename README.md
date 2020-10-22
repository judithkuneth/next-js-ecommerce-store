# next-js-ecommerce store

## Description

This application lets you browse through a collection of products. It lets you add individual products to the shopping cart, edit their count, remove a product from the cart and fill out payment and shipment details.

### Pages

- landingpage
- products overview
- product single page
- shopping cart
- checkout page
- thank you page

### Features

- add products to basket
- remove products from basket
- update products in basket
- fill out shipment and payment infos
- view alert in case a mandatory field is not filled out at checkout

# Technologies used

- Next.js
- Postgres.js
- Jest
- Cypress.io
- GitHub Actions

# Libraries used

- emotion/core
- cookies-js
- nextcookies
- camelcase-keys
- ley
- dotenv

### Screenshots

![landingpage](markdown/img1.png 'Landingpage')

![landingpage](markdown/img2.png 'Shop')

![landingpage](markdown/img3.png 'Cart')

![landingpage](markdown/img4.png 'Checkout')

## Setup Instructions

First setup up the Database then start the server

### Database Setup

Install postgres on your machine: https://www.postgresql.org/

Start postgres

```
postgres
```

Login with super-User on Windows:
`psql -U postgres postgres`
on mMac:
`psql postgres`

Setup new user and new database

```
CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
```

Connect to the database using new user

quit psql
`\q`
reconnect
`psql -U <user name> <database name>;`

Create .env file in root

```
_PGHOST=<localhost>_
_PGDATABASE=<database_name>_
_PGUSER=<user_name>_
_PGPASSWORD=<password>_
```

Add `.env` to .gitignore!

Running the migrations
To set up the structure and the content of the database, run the migrations using Ley:

`yarn migrate up`
To reverse the last single migration, run:

`yarn migrate down`

## Start Server

`_npm run dev_`

or

`_yarn dev_`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Deployment instructions

Deploy on Heroku https://dashboard.heroku.com/

- create a new app
- Connect to your Github Repo
- Install the Heroku Postres Add-on
- Deploy

# Tests

## Jest

`_yarn jest_`

## Cypress

`yarn cypress start`
