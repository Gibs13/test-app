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
  "type": "Display.RenderTemplate",
  "template": {
    "type": "BodyTemplate2",
    "token": "A2079",
    "backButton": "VISIBLE",
    "backgroundImage": {
      "contentDescription": "Textured grey background",
      "sources": [
        {
          "url": "https://www.example.com/background-image1.png"
        }
      ],
      "title": "My Favorite Car",
      "image": {
        "contentDescription": "My favorite car",
        "sources": [
          {
            "url": "https://www.example.com/my-favorite-car.png"
          }
        ]
      },
      "textContent": {
        "primaryText": {
          "text": "See my favorite car",
          "type": "PlainText"
        },
        "secondaryText": {
          "text": "Custom-painted",
          "type": "PlainText"
        },
        "tertiaryText": {
          "text": "By me!",
          "type": "PlainText"
        }
      }
    }
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
             "sessionAttributes": {}
           }
    };
    return response.send();
  }
);

module.exports = app;