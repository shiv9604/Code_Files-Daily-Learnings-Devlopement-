# SQL

Sql stands for stuructured query language which is used to manage the databases.

### How to Create Database

`CREATE DATABASE <name>` - It will create the database on your input name.

### How to Delete Database

`DROP DATABASE <name>` - It will delete the database the name we provided.

### How to see the all databases

`SHOW databses` - It will list down the databases.

### How to use some database

`USE <name>` - It will use the mentioned database.

### How to get the current database

`SELECT DATABASE()` - It will return you the current databse name.

### FEILDS & RECORDS

- `FEILDS -` Columns in the database.

- `RECORDS -` Rows in the database.

### Data Types

**Numeric :-** INT

**Strings :-** VARCHAR

**Date and Time :-**  DATE  

**Most Imp Datatypes :-**

<img src="./impDatatypes.png">

<img src="./data-types.png">

### HOW TO CREATE TABLES

```
CREATE TABLE users(
    name varchar(55),
    age int
);
```

It will create table with name which datatypes assgined to it.

### HOW TO SEE THE TABLES IN DATABASE

`SHOW TABLES` - It will show all the tables in the database which you are using.

### HOW TO SEE THE DESCRIPTION OF TABLE

`DESC <tablename>` - It will show the table information.

### HOW TO DELETE TABLE

`DROP <tablename>` - It will delete table from your current database.

### HOW TO INSERT DATA IN TABLES

- `INSERT INTO <tablename>(column1, column2) VALUES (value1, value2)`

- `INSERT INTO <tablename> VALUES(value1,value2)`

Above both queries will insert the data in the table.

### INSERT MULTIPLE DATA AT TIME

When we want to insert multiple data in the db we need to write query as it is but after `values('as',50,'asd'),('as',50,'asd'),('as',50,'asd'),('as',50,'asd'),('as',50,'asd'),('as',50,'asd'),` as like mentioned below.

```
INSERT INTO <tablename>(id,name,values) VALUES('shiv',18),('shiv',19),('shiv',20)
```

### HOW TO GET DATA

`SELECT * FROM <tablename>` - It will give all data of table.

### HOW TO SEE WARNINGS

`SHOW WARNINGS` - It will show the warnings.

### NULL & NOT NULL

`NULL` - NOT KNOWN

`NOT NULL` - CANT BE NULL

We use not null while creating the table like 
```
CREATE TABLE(id INT NOT NULL,name VARCHAR(55) NOT NULL)
```
When we use not null we cant keep the value as null and empty.


### HOW TO SET DEFAULT VALUE

We use default value while creating table and when user will not enter any value there will be default value over there.

```
CREATE TABLE <tablename>(
    id int not null default 1,
    name varchar(50) not null default unnamed
)
```

### HOW TO ALTER TABLE

Alter table is used to remove and add the column in the table.

`ALTER TABLE <tablename> ADD <columnname> varchar(55)` - It will add the column at the last.

`ALTER TABLE <tablename> DROP <columnname>` - It will delete the column as name provided.

### PRIMARY KEY

Primary key is the feild in the row by which we can identify that row uniquly.

```
CREATE TABLE <tablename>(
    stud_id int not null, 
    name varchar(55) not null, 
    PRIMARY KEY(stud_id))

```
This will make the student-id primary key.

### AUTOINCREMENT

We cant remember the id or unique id last inserted and we can keep checking database to know the last unique id soo with the auto increment we dont need to provide id it will be autoincremented and generated.


```
CREATE TABLE <tablename>(
    stud_id int not null AUTO_INCREMENT, 
    name varchar(55) not null, 
    PRIMARY KEY(stud_id))
```

Now our unique id will be automatically inserted and we dont need to provide it while inserting the data.

### UPDATE ROW

We can update rows with the help of update.

`UPDATE <tablename> SET <key = value> WHERE <condition>` - It will set key=value where that condition meets in the table.

Ex : 

We need to update the age of student ramesh in students table.

`UPDATE students SET age = 19 WHERE name="ramesh"`

### DELETE ROW

We can delete row with the mentionedd query which looks like same as get query but initial changes from `SELECT *` to `DELETE`.

`DELETE FROM <tableneme> WHERE <condition>` - It will check the condition and delete the row which matched the condition.

**MOST IMP :- When ever you want to delete any row from the database first you need to get the row first soo you can verify there is row which match with the condition.** 

## WHEN YOU DELETE ROW THERE WILL BE NO OTHER ROW WITH THAT ID AND DB WILL NOT REASSIGN THE ID'S



### CRUD OPRATION

**Creatre :-**

- `CREATE DATABASE <name>` - This will create Database.

- `CREATE TABLE <tablename>` - This will creates Table.

**Retrive :-**

- `SELECT * FROM <tablename>` - It will return all the columns.

- `SELECT id, fname, lname FROM <tablename>` - It will only return mentioned colmns.

**WHERE CLAUSE :-**

We can filter data with the help of where clause.

`SELECT * FROM <tablename> WHERE age=25` - It will return only that rows which age will be 25.

**Update :-**

`UPDATE <tablename> SET <key=value> WHERE <condition>` - It will update the value where the condition meets.
























