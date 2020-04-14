import { Component } from "@angular/core";
import { LoginRequestModel } from "src/app/models/user/login-request-model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { LoginResponseModel } from 'src/app/models/user/login-response-model';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'q';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  public model: LoginRequestModel;

  public constructor(private httpClient: HttpClient,
    private userService: UserService,
    private route: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) {
    this.model = new LoginRequestModel();
    console.log("Login Component constructor is called");
  }

  public login() {
    let obsObj: Observable<LoginResponseModel> = this.userService.login(this.model);

    this.spinner.show();

    obsObj.subscribe(
      (response: LoginResponseModel) => {
        this.spinner.hide();
        console.log(response);
        localStorage.setItem("Token", response.data);
        console.log(localStorage.getItem("Token"));
        if (!response.errors) {
          this.toastr.success('You have been logged in', 'Success', {
            timeOut: 3000
          });
          this.route.navigate(['/question/list']);
        }
        else {
          this.toastr.error('Incorrect Username or Password', 'Log In Failure', {
            timeOut: 3000
          });
        }
      },
      (error: any) => {
        this.spinner.hide();
        console.log(error);
      })
  }

}
