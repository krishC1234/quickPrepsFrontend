import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { Observable } from 'rxjs';
import { questionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/apiResponse';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  public questions: Question[];
  public type: string;
  public numQuestions: number;

  constructor(private questionService: questionService, private route: Router, private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(): void {
    this.spinner.show();
    let obsObj: Observable<ApiResponse<Question[]>>;
    obsObj = this.questionService.getAll();
    obsObj.subscribe(
      (response: ApiResponse<Question[]>) => {
        this.spinner.hide();
        console.log(response);
        if (response.isValid) {
          console.log("The list has been printed");
          this.questions = response.data;
          this.numQuestions = this.questions.length;
        }
        else {
          alert(response.errors[0]);
        }
      },
      (error: any) => {
        this.spinner.hide();
        console.log("Coming from error handler");
        if (error.status = 401) {
          this.toastr.error(error.error, 'Redirecting to login page', {
            timeOut: 3000
          });
          this.route.navigate(['/login/']);
        }
      });
  }

  public filter(): void {
    this.spinner.show();
    let obsObj: Observable<ApiResponse<Question[]>>;
    obsObj = this.questionService.getType(this.type);
    obsObj.subscribe((response: ApiResponse<Question[]>) => {
      this.spinner.hide();
      console.log(response);
      if (response.isValid) {
        console.log("The new list has been printed");
        this.questions = response.data;
        this.numQuestions = this.questions.length;
      }
      else {
        alert(response.errors[0]);
      }
    },
      (error: any) => {
        this.spinner.hide();
        console.log("Coming from error handler");
        if (error.status = 401) {
          this.toastr.error(error.error, 'Redirecting to login page', {
            timeOut: 3000
          });
          //this.route.navigate(['/login/']);
        }
      });

  }

}
