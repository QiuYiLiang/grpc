import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "../proto/hello";
import { HelloServiceHandlers } from "../proto/HelloService";
import { GreetingServiceHandlers } from "../proto/GreetingService";
import { HelloServiceService, GreetingServiceService } from "../proto/hello_grpc_pb";

const { GreetingService, HelloService } = grpc.loadPackageDefinition(
  protoLoader.loadSync("./proto/hello.proto")
) as unknown as ProtoGrpcType;

const greetingService: GreetingServiceHandlers ={
  sayHello(call, callback) {
    const name = call.request.name;
    const message = `Hello, ${name}!`;
    callback(null, { message });
  },
  sayGoodbye(call, callback) {
    const name = call.request.name;
    const message = `Goodbye, ${name}!`;
    callback(null, { message });
  },
}


const helloService: HelloServiceHandlers = {
  hello(call, callback) {
    const name = call.request.name;
    callback(null, { message: `你好, ${name}!` });
  },
}

const server = new grpc.Server();

// server.addService(HelloServiceService, helloService);
// server.addService(GreetingServiceService, greetingService);

server.addService(HelloService.service, helloService);
server.addService(GreetingService.service, greetingService);

server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
server.start();
console.log("grpc server started on port 50051");
