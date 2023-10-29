const grpc = require('@grpc/grpc-js')
const serviceImpl = require('./service_impl');
const service = require('../proto/calculateSum_grpc_pb');

const addr = 'localhost:5001';

function cleanup(server) {
  server.forceShutdown();
  console.log('Cleanup');
}

function main() {
  const server = new grpc.Server();
  const credentials = grpc.ServerCredentials.createInsecure();

  process.on('SIGINT', () => {
    console.log('Shutting down gRPC server...');
    cleanup(server);
  });

  server.addService(service.CalculateSumServiceService, serviceImpl);
  server.bindAsync(addr, credentials, (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`gRPC listening on ${addr}`);
    server.start();
  });
}

main();