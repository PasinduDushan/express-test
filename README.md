# Welcome to Express Test

Hello there. From this repository you can actually test your basic skills by testing yourself by fixing and writing code. To get started please read below to understand how it works.


# Get Start

```bash
$ git clone https://github.com/PasinduDushan/express-test.git

$ cd express-test

$ npm install --save
```

## How is works?

In the ```app.js``` there are purposefully removed code and some errors in the code. Just go ahead and write code in ```app.js```. There are 4 tests and you can test if the code you wrote is actually working by doing ```npm test <command name>```. Examples are provided below.

## Example Overview

Example code :
```javascript
app.post("/command_1",  async  (req,  res)  =>  {
  //Write your code
});
```
After writing code you can test it using the name specified as the express route. In the example provided it's ```command_1```. 

Testing the code you wrote: 
```bash
$ npm test command_1
```

## Objectives you have to complete in each challenge

1. In the ```command_1``` route you have to write a login to send ```400``` status code if the username or password is missing in the given request.  And also if the username and password is provided you have to send back a user id in the formar of json and user id must be sent as ```userId```. You can any integer as te user id

2. In the ```command_2``` route you have to write code to accept an authorization code form a request and you have to write the logic to return ```401``` status code if username, password or authentication code is missing and to get things a little bit up you also have to write the logic to if authentication token does not equal to ```testing_token_1234```, username does not equal to ```username``` and password does not equal to ```password``` and then ```return```. You can implement the logic I said at last to the same ```if``` statement above. If all above statements are correct you can go ahead and send ```200``` status code. You must implement getting authentication token as ```req.headers.authorization```

3. In the ```command_3``` you have to write the same logic above but unlike before you have to send a userId to the client instead of ```200``` status code. You must specify user id as ```userId``` and for the user id you can send any integer. 

4. In the ```command_4``` you have to implement the same login and also add a new functionality which will check base64 tokens and if the token is base64, function will return ```true``` or if not then it'll return ```false```. As said in the ```command_2``` you have to check if the base64 code is missing and if the given token is not a base64 then it'll return ```false```. You can implement this to the same logic as above. You have to write regex to identify base64 or if you don't know how to do that then you can use an alternate way. After than if everything is fine then you have to send the user id as specified above. 

### Make sure you test the code after you write it. You can test it one by one using ```npm test command_1``` as an example or you can test the whole code you code using  just ```npm test```

# Hope you guys will enjoy!
