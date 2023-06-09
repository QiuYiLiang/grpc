"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const { GreetingService, HelloService } = grpc.loadPackageDefinition(protoLoader.loadSync("./proto/hello.proto"));
const greetingService = {
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
};
const helloService = {
    hello(call, callback) {
        const name = call.request.name;
        callback(null, { message: `你好, ${name}!` });
    },
};
const server = new grpc.Server();
// server.addService(HelloServiceService, helloService);
// server.addService(GreetingServiceService, greetingService);
server.addService(HelloService.service, helloService);
server.addService(GreetingService.service, greetingService);
server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
server.start();
console.log("grpc server started on port 50051");
