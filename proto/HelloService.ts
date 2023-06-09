// Original file: proto/hello.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloRequest as _HelloRequest, HelloRequest__Output as _HelloRequest__Output } from './HelloRequest';
import type { HelloResponse as _HelloResponse, HelloResponse__Output as _HelloResponse__Output } from './HelloResponse';

export interface HelloServiceClient extends grpc.Client {
  hello(argument: _HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _HelloRequest, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  hello(argument: _HelloRequest, callback: grpc.requestCallback<_HelloResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface HelloServiceHandlers extends grpc.UntypedServiceImplementation {
  hello: grpc.handleUnaryCall<_HelloRequest__Output, _HelloResponse>;
  
}

export interface HelloServiceDefinition extends grpc.ServiceDefinition {
  hello: MethodDefinition<_HelloRequest, _HelloResponse, _HelloRequest__Output, _HelloResponse__Output>
}
