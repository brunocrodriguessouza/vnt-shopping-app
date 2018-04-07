import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{

  canActivate(){
    console.log('CanActivate was called');
    return true;
  }

  constructor() { }

}
