const pb = require('../proto/calculateSum_pb');

exports.calculateSum = (call, callback) => {
  console.log('calculateSum called');

  const res = new pb.CalculateSumResponse().setResult(call.request.getFirstNumber() + call.request.getSecondNumber());

  callback(null, res);
}