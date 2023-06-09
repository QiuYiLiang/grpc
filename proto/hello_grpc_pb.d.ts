// package: 
// file: proto/hello.proto

import * as grpc from '@grpc/grpc-js';
import * as proto_hello_pb from '../proto/hello_pb';

interface IGreetingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sayHello: IGreetingServiceService_IsayHello;
  sayGoodbye: IGreetingServiceService_IsayGoodbye;
}

interface IGreetingServiceService_IsayHello extends grpc.MethodDefinition<proto_hello_pb.HelloRequest, proto_hello_pb.HelloResponse> {
  path: '/.GreetingService/sayHello'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<proto_hello_pb.HelloRequest>;
  requestDeserialize: grpc.deserialize<proto_hello_pb.HelloRequest>;
  responseSerialize: grpc.serialize<proto_hello_pb.HelloResponse>;
  responseDeserialize: grpc.deserialize<proto_hello_pb.HelloResponse>;
}

interface IGreetingServiceService_IsayGoodbye extends grpc.MethodDefinition<proto_hello_pb.GoodbyeRequest, proto_hello_pb.GoodbyeResponse> {
  path: '/.GreetingService/sayGoodbye'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<proto_hello_pb.GoodbyeRequest>;
  requestDeserialize: grpc.deserialize<proto_hello_pb.GoodbyeRequest>;
  responseSerialize: grpc.serialize<proto_hello_pb.GoodbyeResponse>;
  responseDeserialize: grpc.deserialize<proto_hello_pb.GoodbyeResponse>;
}

export const GreetingServiceService: IGreetingServiceService;
export interface IGreetingServiceServer extends grpc.UntypedServiceImplementation {
  sayHello: grpc.handleUnaryCall<proto_hello_pb.HelloRequest, proto_hello_pb.HelloResponse>;
  sayGoodbye: grpc.handleUnaryCall<proto_hello_pb.GoodbyeRequest, proto_hello_pb.GoodbyeResponse>;
}

export interface IGreetingServiceClient {
  sayHello(request: proto_hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
  sayHello(request: proto_hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
  sayHello(request: proto_hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
  sayGoodbye(request: proto_hello_pb.GoodbyeRequest, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
  sayGoodbye(request: proto_hello_pb.GoodbyeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
  sayGoodbye(request: proto_hello_pb.GoodbyeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
}

export class GreetingServiceClient extends grpc.Client implements IGreetingServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public sayHello(request: proto_hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
  public sayHello(request: proto_hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
  public sayHello(request: proto_hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
  public sayGoodbye(request: proto_hello_pb.GoodbyeRequest, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
  public sayGoodbye(request: proto_hello_pb.GoodbyeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
  public sayGoodbye(request: proto_hello_pb.GoodbyeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.GoodbyeResponse) => void): grpc.ClientUnaryCall;
}

interface IHelloServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  hello: IHelloServiceService_Ihello;
}

interface IHelloServiceService_Ihello extends grpc.MethodDefinition<proto_hello_pb.HelloRequest, proto_hello_pb.HelloResponse> {
  path: '/.HelloService/hello'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<proto_hello_pb.HelloRequest>;
  requestDeserialize: grpc.deserialize<proto_hello_pb.HelloRequest>;
  responseSerialize: grpc.serialize<proto_hello_pb.HelloResponse>;
  responseDeserialize: grpc.deserialize<proto_hello_pb.HelloResponse>;
}

export const HelloServiceService: IHelloServiceService;
export interface IHelloServiceServer extends grpc.UntypedServiceImplementation {
  hello: grpc.handleUnaryCall<proto_hello_pb.HelloRequest, proto_hello_pb.HelloResponse>;
}

export interface IHelloServiceClient {
  hello(request: proto_hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
  hello(request: proto_hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
  hello(request: proto_hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

export class HelloServiceClient extends grpc.Client implements IHelloServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public hello(request: proto_hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
  public hello(request: proto_hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
  public hello(request: proto_hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

