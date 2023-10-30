const pb = require('../proto/greet_pb');

exports.greet = (call, callback) => {
  console.log('greet called');
  const res = new pb.GreetResponse().setResult(`Hello ${call.request.getFirstName()}`);

  callback(null, res);
}

exports.greetManyTimes = (call, _) => {
  console.log('greetManyTimes called');
  const res = new pb.GreetResponse();

  for (let i = 0; i < 10; ++i) {
    res.setResult(`Hello ${call.request.getFirstName()} - number ${i}`);
    call.write(res);
  }

  call.end();
}