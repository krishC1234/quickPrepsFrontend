import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/apiResponse';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/services/testService'
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user'
import { TestCreateRequest } from 'src/app/models/testCreateRequest';
import { TestCreateResponse } from 'src/app/models/testCreateResponse';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public user: TestCreateRequest;
  public testId: string;
  public launch: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private testService: TestService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) {
    this.user = new TestCreateRequest();
    this.launch = false;
  }

  ngOnInit() {
  }


  public book(): void {
    this.spinner.show();
    let obsObj: Observable<TestCreateResponse>;
    obsObj = this.testService.book(this.user);
    obsObj.subscribe((response: TestCreateResponse) => {
      this.spinner.hide();
      console.log(response);
      if (response.isValid) {
        this.toastr.success("Sucessful", "", {
          timeOut: 3000
        });

        this.testId = response.data;
        localStorage.setItem("email", this.user.email);
        console.log(this.testId);
        localStorage.setItem("testId", this.testId);
        this.launch = true;
      }
      else {
        this.toastr.error(response.errors[0], "Error", {
          timeOut: 3000
        });
      }
    });
  }

  public goTo() {
    this.router.navigate(['/tests/submit']);
  }

}
