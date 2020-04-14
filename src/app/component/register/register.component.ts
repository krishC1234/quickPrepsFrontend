import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/helper/logger';
import { RegisterRequestModel } from 'src/app/models/user/register-request-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  //properties
  public registers: RegisterRequestModel;

  public constructor(public logger: Logger) {
    this.registers = new RegisterRequestModel();
    this.logger.logInfo("Register Component constructor is called");
  }

  public register(): void {
    console.log(this.registers)
  }
}
