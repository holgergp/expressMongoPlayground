# expressMongoPlayground
Quick Express and Mongo App built with http://expressjs.com/de/starter/generator.html

Start it from the commandline via `DEBUG=myapp:* npm start`
Or via IntelliJ using the Node Run Config using `bin/www` as `JavaScript-File``

For now it expects a running MongoDB at the default port 27017, and having a database called `playground1`

I installed Mongo on a Mac via Homebrew and started it via `mongod --config /usr/local/etc/mongod.conf`
You can start it as a service using `brew services start mongodb`
