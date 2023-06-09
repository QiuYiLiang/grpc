import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "../proto/hello";

const { GreetingService, HelloService } = grpc.loadPackageDefinition(
  protoLoader.loadSync("./proto/hello.proto")
) as unknown as ProtoGrpcType;

const greetingService = new GreetingService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

const helloService = new HelloService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

const name = "Bob";

greetingService.sayHello({ name }, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  if (res) {
    console.log(res.message);
  }
});

greetingService.sayGoodbye({ name }, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  if (res) {
    console.log(res.message);
  }
});

helloService.hello({ name }, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  if (res) {
    console.log(res.message);
  }
});
