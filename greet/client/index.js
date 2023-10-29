const grpc = require("@grpc/grpc-js");
const { GreetServiceClient } = require("../proto/greet_grpc_pb");
const { GreetRequest } = require("../proto/greet_pb");

function doGreet(client) {
  console.log("doGreet called");

  const req = new GreetRequest().setFirstName("Derek");

  client.greet(req, (err, res) => {
    console.log('client greet callback executed');
    if (err) {
      return console.log(err);
    }
    console.log(`Greet: ${res.getResult()}`);
  });
}

function main() {
  const addr = "localhost:5001";
  const credentials = grpc.credentials.createInsecure();
  const client = new GreetServiceClient(addr, credentials);

  doGreet(client);
  client.close();
}

main();
