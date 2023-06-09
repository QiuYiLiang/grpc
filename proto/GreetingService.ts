// Original file: proto/hello.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GoodbyeRequest as _GoodbyeRequest, GoodbyeRequest__Output as _GoodbyeRequest__Output } from './GoodbyeRequest';
import type { GoodbyeResponse as _GoodbyeResponse, GoodbyeResponse__Output as _GoodbyeResponse__Output } from './GoodbyeResponse';
import type { HelloRequest as _HelloRequest, HelloRequest__Output as _HelloRequest__Output } from './HelloRequest';
import type { HelloResponse as _HelloResponse, HelloResponse__Output as _HelloResponse__Output } from './HelloResponse';

export interface GreetingServiceClient extends grpc.Client {
  sayGoodbye(argument: _GoodbyeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GoodbyeResponse__Output>): grpc.ClientUnaryCall;
  sayGoodbye(argument: _GoodbyeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GoodbyeResponse__Output>): grpc.ClientUnaryCall;
  sayGoodbye(argument: _GoodbyeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GoodbyeResponse__Output>): grpc.ClientUnaryCall;
  sayGoodbye(argument: _GoodbyeRequest, callback: grpc.requestCallback<_GoodbyeResponse__Output>): grpc.ClientUnaryCall;
  sayGoodbye(argument: _GoodbyeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GoodbyeResponse__Output>): grpc.ClientUnaryCall;
  sayGoodbye(argument: _GoodbyeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GoodbyeResponse__Output>): grpc.ClientUnaryCall;
  sayGoodbye(argument: _GoodbyeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GoodbyeResponse__Output>): grpc.ClientUnaryCall;
  sayGoodbye(argument: _GoodbyeRequest, callback: grpc.requestCallback<_GoodbyeResponse__Output>): grpc.ClientUnaryCall;
  
  sayHello(argument: _HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface GreetingServiceHandlers extends grpc.UntypedServiceImplementation {
  sayGoodbye: grpc.handleUnaryCall<_GoodbyeRequest__Output, _GoodbyeResponse>;
  
  sayHello: grpc.handleUnaryCall<_HelloRequest__Output, _HelloResponse>;
  
}

export interface GreetingServiceDefinition extends grpc.ServiceDefinition {
  sayGoodbye: MethodDefinition<_GoodbyeRequest, _GoodbyeResponse, _GoodbyeRequest__Output, _GoodbyeResponse__Output>
  sayHello: MethodDefinition<_HelloRequest, _HelloResponse, _HelloRequest__Output, _HelloResponse__Output>
}
