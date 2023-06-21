import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Express } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

/*
  @Post('signin')
    signin():string{
        return this.appService.login();
    }

    @Post('signup')
    signup():string{
        return this.appService.signup();
    }*/

  }