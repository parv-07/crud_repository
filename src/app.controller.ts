import { Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';

@Controller('/')
export class appController {
  @Get()
  index(@Res() res: Response) {
    console.log(__dirname, '>>>>>>>>>>>>>>>>>>>>>>>>>');
    res.sendFile('views/facebook.html', {
      root: path.join(__dirname, '../src'),
    });
    // res.sendFile('views/facebook.html');
  }
  // @Post('/callback')
  // getcallback() {
  //   console.log('Welcome');
  // }
}
