module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'test-app' );


app.launch( function( request, response ) {
	response.say( 'Welcome to your test skill' ).reprompt( 'Way to go. You got it to run. Bad ass.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + exception.message);
};

app.intent('sayNumber',
  {
    "slots":{"number":"NUMBER"}
	,"utterances":[ 
		"say the number {1-100|number}",
		"give me the number {1-100|number}",
		"tell me the number {1-100|number}",
		"I want to hear you say the number {1-100|number}"]
  },
  function(request,response) {
    var number = request.slot('number');
    response.response = {
             "version": "1.0",
             "response": {
               
               "directives": [
{ 
    "type": 'Display.RenderTemplate', 
    "template": { 
       "type": "BodyTemplate2",
       "token": "CheeseDetailView",
       "backButton": "HIDDEN",
       "backgroundImage": 'https://www.example.com/background-image1.png',
       "title": "Parmigiano Reggiano",
       "image": 'https://www.example.com/parmigiano-reggiano.png',
       "textContent": {
    "text":"Parmigiano Reggiano\nCountry of origin: Italy\n\n Parmesan cheese is made from unpasteurized cow’s milk. It has a hard, gritty texture, and is fruity and nutty in taste.",
	  "type" : "RichText"
		}
	}
} ,
{
      "type": "Hint",
      "hint": {
        "type": "PlainText",
        "text": "search for blue cheese"
      }
    }
  ],
               "outputSpeech": {
                 "type": "SSML",
                 "ssml": "<speak>I'm trying</speak>"
               },
               "reprompt": {
                 "outputSpeech": {
                   "type": "SSML",
                   "ssml": "<speak>Please answer</speak>"
                 }
               },
               "shouldEndSession": false,
               "card": {
                 "type": "Simple",
                 "title": "Still testing",
                 "content": "Content of the card"
               },
             "sessionAttributes": {}
           }
    };
    return response.send();
  }
);

module.exports = app;