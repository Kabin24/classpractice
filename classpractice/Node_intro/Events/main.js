const event = require('events');
let eventEmitter = new event.EventEmitter();

eventEmitter.on ('sendmail',()=> {
   console.log('an email has been send')
 });

function singup(){
// related to sing up function
    eventEmitter.emit('sendmail');
 }
 
singup();