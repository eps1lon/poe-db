# Requirements
python 3.4 for PyPoe

# install
1. `git clone --recursive https://github.com/eps1lon/poe_db.git`

2. run in a python 3.4 virtualenv for PyPoE:

   `yarn install --production`

3. parse Content.ggpk (you might need to config PyPoE to find the Content.ggpk):

   `yarn run dev:parseContent`

4. Be sure to set the necessary environment variables for the connection:

   `yarn run db:build`

## dev environment
The repository should contain the latest models. If they are out of date
the package contains scripts to generate new ones. To do so run the following
commands:

1. install devDependencies:

   `yarn install`

2. see install step 3

3. generate the models

   `yarn run dev:models`

4. see install step 4
