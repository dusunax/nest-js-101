import { Controller, Get } from '@nestjs/common';

@Controller()
export class MainController {
  @Get()
  findAll(): string {
    return `
      <div>
        <h1>🤗 API 🤗</h1>
        <ul>
          <li>
            <a href="/post">Go to Post</a>
          </li>
          <li>
            <a href="/hello">Go to Hello</a>
          </li>
        </ul>
      </div>
    `;
  }
}
