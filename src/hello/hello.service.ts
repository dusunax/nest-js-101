import { Injectable } from '@nestjs/common';
import { Hello, HelloStatus } from './hello.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class HelloService {
  private hello: Hello[] = [];

  getAllHellos(): Hello[] {
    return this.hello;
  }

  createHello(greetingText: string) {
    const hello: Hello = {
      id: uuid(),
      greetingText,
      greetingDate: new Date(),
      status: HelloStatus.PUBILC,
    };

    this.hello.push(hello);
    return hello;
  }
}
