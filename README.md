# Breaddit
### Getting Set Up Locally
1. `git clone`
2. in psql: `CREATE USER breaddit WITH password 'strongPassword' CREATEDB;`
3. in project directory: `npm install`
4. `npx sequelize db:create`
5. `npx sequelize db:migrate`
6. `npx sequelize db:seed:all`
