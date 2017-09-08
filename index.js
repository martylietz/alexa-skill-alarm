'use strict';
const Alexa = require('alexa-sdk')
const APP_ID = undefined;
const skill_name = "Welcome Alarm";
const moment = require('moment-timezone')
const dynasty = require('dynasty');


exports.handler = function(event, context, callback)
{
  var alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers =
{
  'LaunchRequest': function ()
  {
   this.emit('WelcomeAlarm')
  },
  'AskName': function ()
  {
    var speechNameOutput = 'What is your name?';
    this.emit(':ask', speechNameOutput, 'WelcomeAlarm');
 },

  'WelcomeAlarm': function ()
  {

    var todayUser = new Date();
    var dd = todayUser.getDate();
    var mm = todayUser.getMonth()+1;
    var yyyy = todayUser.getFullYear();

if(mm<10) {
   mm = '0'+mm
 };
if(mm==1)
 {
   mm = 'January'
 };
if(mm==2)
 {
   mm = 'Febuary'
 };
if(mm==3)
{
  mm = 'March'
};
if(mm==4)
{
  mm = 'April'
};
if(mm==5)
{
  mm = 'May'
};
if(mm==6)
{
  mm = 'June'
};
if(mm==7)
{
  mm = 'July'
};
if(mm==8)
{
  mm = 'August'
};
if(mm==9)
{
  mm = 'September'
};
if(mm==10)
{
  mm = 'October'
};
if(mm==11)
{
  mm = 'November'
};
if(mm==12)
{
  mm = 'December'
}

var today = mm + ' ' + dd + ',' + ' ' + yyyy;

var d = new Date();
var dateHour = d.getHours();
var dateMinutes = d.getMinutes();
var day = d.getDay();
var realDay = moment().tz("America/Chicago").weekday();

if(realDay==0)
{
  realDay = "Sunday"
};

if(realDay==1)
{
  realDay = "Monday"
};

if(realDay==2)
{
  realDay = "Tuesday"
};

if(realDay==3)
{
  realDay = "Wednesday"
};

if(realDay==4)
{
  realDay = "Thursday"
};

if(realDay==5)
{
  realDay = "Friday"
};

if(realDay==6)
{
  realDay = "Saturday"
};


var nonTime = dateHour + ":" + dateMinutes;
var dateTime = nonTime
var realTime = moment().tz("America/Chicago").format('h:m,' );
var gM = ("Good Morning! ")

var speechOutput = (gM + "It is " + realTime + " on " + realDay + ', ' + today + '.');
    this.emit(':tellWithCard', speechOutput)

  },
  'Unhandled': function () {
        console.log("unhandled: " + APP_ID);
        console.log(this.event);
        console.log("Slots:");
        console.log(this.event.request.intent.slots);
        var speechOutputUnhandled = "Sorry, can you try again please";
        this.emit(':tell', speechOutputUnhandled);
    },
};
