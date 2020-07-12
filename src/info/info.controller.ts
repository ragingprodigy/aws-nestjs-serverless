import { Controller, Get } from '@nestjs/common';

@Controller()
export class InfoController {
  @Get('env')
  getEnv() {
    return process.env;
  }
}
