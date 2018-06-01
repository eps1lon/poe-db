# poe-db

[![Build Status](https://travis-ci.org/eps1lon/poe-db.svg?branch=master)](https://travis-ci.org/eps1lon/poe-db)

Relational database for `Content.ggpk` from Path of Exile@3.3.0.

## Requirements

python 3.4 for PyPoe

## install

```bash
$ git clone --recursive https://github.com/eps1lon/poedb.git@1.3.0

# run in a python 3.4 virtualenv for PyPoE:
$ yarn install --production

# you might need to config PyPoE to find the Content.ggpk
$ yarn run load-content

# Be sure to set the necessary environment variables for the connection
$ yarn run db:build
```

## Database Setup

```sql
# just to display what priviliges are needed
CREATE USER 'poedb'@'localhost' IDENTIFIED BY '***';
CREATE DATABASE poedb;
GRANT USAGE ON *.* TO 'poedb'@'localhost';
GRANT ALL PRIVILEGES ON `poedb`.* TO 'poedb'@'localhost';
```

### environment variables

The following variables have to be set as environment variables in order to
authenticate to the database (alternatively follow the instructions in `.env.example`):

* `POEDB_HOST`
* `POEDB_USER` needs the following privileges
  * drop/create host wide for `db:create`, `db:drop`
  * all read/write privileges for the specified db
* `POEDB_PW`
* `POEDB_DB`

# Endpoints

## `/describe/:model_name`

* `:model_name` - in CamelCase singular

```javascript
{
  attributes: Attribute[],
  belongsTo: Association[],
  hasMany: Association[],
  belongsToMany: Association[],
  asCollection: string, // table name
}
```

## `/find/:model_name`

<!-- see src/controller/find -->

* query params:
  * `page` - type: number, default: 1
  * `page_size` - type: number, default: 20
  * `order` - type: `[AttributeName, 'ASC' | 'DESC'][]`
  * `withDescription` - includes the `/describe` endpoint type: boolean, default: false
  * `attributes` - whitelist, type: `AttributeName[]`
  * `where` - plain js object, see http://docs.sequelizejs.com/manual/tutorial/querying.html#where

### `/find/:model_name/:id`

* `:model_name` - in CamelCase singular
* `:id` - primary key
* includes belongsTo and belongsToMany associations

```javascript
{
  count: 1,
  rows: ModelInstance,
}
```

### `/find/:model_name`

* `:model_name` - in CamelCase plural
* includes belongsTo associations

```javascript
// Returns
{
  count: number,
  rows: ModelInstance[],
}
```

## `/describe/:model_name`

* `:model_name` - in CamelCase singular

```javascript
// Returns
{
  attributes: Attribute[],
  belongsTo: Association[],
  hasMany: Association[],
  belongsToMany: Association[],
  asCollection: string, // table name
}
```

## `/scoped/:model_name/:scope_name`

* `:model_name` - in CamelCase singular
* `:scope_name` - defined scope for this specific model
  <!-- see src/controller/find -->
* query params:
  * `page` - type: number, default: 1
  * `page_size` - type: number, default: 20
  * `where` - plain js object, see http://docs.sequelizejs.com/manual/tutorial/querying.html#where

```javascript
// Returns
ModelInstance[]
```

# dev environment

The repository should contain the latest models. If they are out of date
the package contains scripts to generate new ones. To do so run the following
commands:

```bash
$ yarn install
$ yarn run dev:parseContent
$ yarn run dev:models
```

Remember to add and run migrations if necessary.

## Patch workflow

Dev workflow in case the spec in Content.ggpk changes (i.e. a patch hits):
Wait for spec update in OmegaK2/PyPoE or change submodule and file a PR.

```bash
$ yarn run load-content
$ yarn run dev:models --poe $POE_CLIENT_VERSION
$ yarn run db:schema
$ yarn run db:migration:generate # adjust for renames
# verify generated migrations use diff between models as a helper
$ yarn run db:migration:run up
$ yarn run db:insert
$ yarn run test # mainly for scope tests
```

### models

The models in src/models/base are auto generated. For specific scopes,
getters, setters etc create or update the specific files in the corresponding folders.
