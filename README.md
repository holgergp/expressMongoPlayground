# expressMongoPlayground
Quick Express and Mongo App built with http://expressjs.com/de/starter/generator.html

Start it from the commandline via `DEBUG=myapp:* npm start`
Or via IntelliJ using the Node Run Config using `bin/www` as `JavaScript-File`
It binds to port 3000 or to `$PORT

You can interact with the app in the following ways

`GET`: `localhost:3000/users/` returns all users
`PUT`: `localhost:3000/users/` with a JSON body `{"username":"user3"}` Puts a new document in the DB having a generated ID
`PUT`: `localhost:3000/users/` with a JSON body `{"_id:"123",username":"user3"}` Puts a new document in the DB having ID '123'
`POST`: `localhost:3000/users/123` with a JSON body `{username":"user5"}` Puts a new document in the DB replacing the document found under ID '123'
`POST`: `localhost:3000/users/user3/user4` without a JSON body. Replaces in the document with name 'user3' the username 'user4'. This method is just a quick hack to experiment with different Mongo update mechanisms and probably makes Roy Fielding cry.

For now it expects a running MongoDB at the default port 27017, and having a database called `playground1`

I installed Mongo on a Mac via Homebrew and started it via `mongod --config /usr/local/etc/mongod.conf`
You can start it as a service using `brew services start mongodb`
