import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GreetingServiceClient as _GreetingServiceClient, GreetingServiceDefinition as _GreetingServiceDefinition } from './GreetingService';
import type { HelloServiceClient as _HelloServiceClient, HelloServiceDefinition as _HelloServiceDefinition } from './HelloService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  GoodbyeRequest: MessageTypeDefinition
  GoodbyeResponse: MessageTypeDefinition
  GreetingService: SubtypeConstructor<typeof grpc.Client, _GreetingServiceClient> & { service: _GreetingServiceDefinition }
  HelloRequest: MessageTypeDefinition
  HelloResponse: MessageTypeDefinition
  HelloService: SubtypeConstructor<typeof grpc.Client, _HelloServiceClient> & { service: _HelloServiceDefinition }
}

