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

  createHello(createHelloDTO: CreateHelloDTO): Hello {
    const { greetingText } = createHelloDTO;

    const hello: Hello = {
      id: uuid(),
      greetingText,
      status: HelloStatus.PUBILC,
    };

    this.hellos.push(hello);
    return hello;
  }

  updateHelloStatusById(id: string, status: HelloStatus): Hello {
    const hello = this.getHelloById(id) as Hello;
    hello.status = status;
    return hello;
  }

  deleteHelloById(id: string) {
    this.hellos = this.hellos.filter((x) => x.id !== id);
  }
}
