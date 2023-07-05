import { NestApplication, NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { appendFile } from 'fs';
import passport from 'passport';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const express1 = express();
  const app = await NestFactory.create(RootModule);
  // app.use(express.static('views'));
  //const app = await NestFactory.create<NestExpressApplication>(module);
  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // app.set('html');

  // app.engine('html', index.renderFile);
  // app.set('view engine', 'html');
  // app.set('views', join(__dirname, '..', 'views'));

  await app.listen(3000, () => {
    console.log('The Server is Started');
    // res.send.json('welcome parv');
  });
  // app.use(passport.initialize());
}
bootstrap();
