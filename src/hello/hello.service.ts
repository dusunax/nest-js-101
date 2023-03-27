import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

import { Hello, HelloStatus } from './hello.model';
import { CreateHelloDTO } from './dto/createHello.dto';

@Injectable()
export class HelloService {
  private hellos: Hello[] = [];

  getAllHellos(): Hello[] {
    return this.hellos;
  }

  getHelloById(id: string) {
    return this.hellos.find((x) => x.id === id);
  }

  createHello(createHelloDTO: CreateHelloDTO) {
    const { greetingText } = createHelloDTO;

    const hello: Hello = {
      id: uuid(),
      greetingText,
      status: HelloStatus.PUBILC,
    };
    console.log(hello);

    this.hellos.push(hello);
    return hello;
  }
}
