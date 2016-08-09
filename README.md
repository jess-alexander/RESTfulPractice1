# RESTfulPractice1
Create an interface and background processing for CRUD


| NAME   |   PATH           | HTTP Verb  |   Purpose  | MONGOOSE METHOD|
-----|--------------------|-----------|---------------------------------------------
| INDEX   |  /dogs          |   GET     |List all dogs |Dog.find({}, function(err, dogsReturned){|
| **NEW**     | **/dogs/new**    |   **GET**   |**Show new dog Form**|  |
| **CREATE**  | **/dogs**      |  **POST**  |**Create a new dog, then redirect somewhere** | Dog.create(req.body.dog, function(err, |
| SHOW    |  /dogs/:id      |   GET     |Show info about one specific dog | Dog.findById(req.params.id, function(err, |
| **EDIT**    |  **/dogs/:id/edit** |   **GET**     |**Show edit form for one dog** | Dog.findById(req.params.id, function(err, |
| **UPDATE**  |  **/dogs/:id**      |   **PUT**     |**Update a particular dog, then redirect somewhere** | Dog.findByIdAndUpdate(req.params.id, |
| DESTROY |  /dogs/:id      |   DELETE  |Delete a particular dog, then redirect somewhere | Dog.findByIdAndRemove(req.params.id, |



