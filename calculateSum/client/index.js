const grpc = require("@grpc/grpc-js");
const { CalculateSumServiceClient } = require("../proto/calculateSum_grpc_pb");
const { CalculateSumRequest } = require("../proto/calculateSum_pb");

function doCalc(client) {
  const req = new CalculateSumRequest().setFirstNumber(57586).setSecondNumber(72679);

  client.calculateSum(req, (err, res) => {
    if (err) {
      return console.log(err);
    }
    console.log(`${res.getResult()}`);
  });
}

function main() {
  const addr = "localhost:5001";
  const credentials = grpc.credentials.createInsecure();
  const client = new CalculateSumServiceClient(addr, credentials);

  doCalc(client);
  client.close();
}

main();
