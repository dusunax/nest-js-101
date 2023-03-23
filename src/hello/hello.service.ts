import { Injectable } from '@nestjs/common';
import { Hello, HelloStatus } from './hello.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class HelloService {
  private hello: Hello[] = [];

  getAllHellos(): Hello[] {
    return this.hello;
  }

  createHello(greetingText: string, greetingDate: Date) {
    const hello: Hello = {
      id: uuid(),
      greetingText,
      greetingDate,
      status: HelloStatus.PUBILC,
    };

    this.hello.push(hello);
    return hello;
  }
}
