// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var calculateSum_pb = require('./calculateSum_pb.js');

function serialize_calculateSum_CalculateSumRequest(arg) {
  if (!(arg instanceof calculateSum_pb.CalculateSumRequest)) {
    throw new Error('Expected argument of type calculateSum.CalculateSumRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculateSum_CalculateSumRequest(buffer_arg) {
  return calculateSum_pb.CalculateSumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculateSum_CalculateSumResponse(arg) {
  if (!(arg instanceof calculateSum_pb.CalculateSumResponse)) {
    throw new Error('Expected argument of type calculateSum.CalculateSumResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculateSum_CalculateSumResponse(buffer_arg) {
  return calculateSum_pb.CalculateSumResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculateSumServiceService = exports.CalculateSumServiceService = {
  calculateSum: {
    path: '/calculateSum.CalculateSumService/CalculateSum',
    requestStream: false,
    responseStream: false,
    requestType: calculateSum_pb.CalculateSumRequest,
    responseType: calculateSum_pb.CalculateSumResponse,
    requestSerialize: serialize_calculateSum_CalculateSumRequest,
    requestDeserialize: deserialize_calculateSum_CalculateSumRequest,
    responseSerialize: serialize_calculateSum_CalculateSumResponse,
    responseDeserialize: deserialize_calculateSum_CalculateSumResponse,
  },
};

exports.CalculateSumServiceClient = grpc.makeGenericClientConstructor(CalculateSumServiceService);
