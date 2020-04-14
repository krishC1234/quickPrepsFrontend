import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/testService';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TestResumeRequest } from 'src/app/models/testResumeRequest';
import { TestCreateResponse } from 'src/app/models/testCreateResponse';
import { Observable } from 'rxjs';
import { TestResumeResponse } from 'src/app/models/testResumeResponse';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  public model: TestResumeRequest;
  public data: Question;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private testService: TestService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) {
    this.model = new TestResumeRequest();
    this.data = new Question;
  }

  public resume(): void {
    localStorage.setItem("testId", this.model._id);
    localStorage.setItem("email", this.model.email);
    this.router.navigate(['/tests/submit']);
  }
}
