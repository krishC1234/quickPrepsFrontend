import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { TestService } from 'src/app/services/testService';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TestResumeResponse } from 'src/app/models/testResumeResponse';
import { TestResumeRequest } from 'src/app/models/testResumeRequest';
import { Question } from 'src/app/models/question';
import { StartComponent } from '../start/start.component';
import { SubmitTestRequest } from 'src/app/models/testSubmitRequest';

@Component({
  selector: 'app-submit-answer',
  templateUrl: './submit-answer.component.html',
  styleUrls: ['./submit-answer.component.css']
})
export class SubmitAnswerComponent implements OnInit {

  public modelResume: TestResumeRequest;
  public displayImage: boolean;
  public modelSubmit: SubmitTestRequest;
  public displayScore: boolean;
  public finalScore: string;
  public data: any;
  public currentQuestion: number;
  public size: number;
  public correct: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private testService: TestService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) {
    this.modelResume = new TestResumeRequest();
    this.modelSubmit = new SubmitTestRequest();
    this.displayScore = false;
    this.correct = true;
  }

  ngOnInit() {
    this.loadData();
  }

  public loadData(): void {
    this.modelResume._id = localStorage.getItem("testId");
    this.modelResume.email = localStorage.getItem("email");
    this.spinner.show();
    let obsObj: Observable<TestResumeResponse>;
    obsObj = this.testService.resume(this.modelResume);
    obsObj.subscribe((response: TestResumeResponse) => {
      this.spinner.hide();
      console.log(response);
      if (response.isValid) {
        this.toastr.success("Good luck on your test", "", {
          timeOut: 2000
        });
        this.data = response.data;
        this.size = this.data.size;
        console.log(this.size);
        console.log(this.modelSubmit.answer);
        if (this.data.question.image != null) {
          this.displayImage = true;
        }
        this.currentQuestion = this.data.currentIndex + 1;
        console.log(response.data);
      }
      else {
        this.toastr.error(response.errors[0], "Error", {
          timeOut: 1000
        });
        this.router.navigate(['/tests/start']);
      }
    });
  }

  public submitAnswer() {
    this.modelSubmit._id = localStorage.getItem("testId");
    this.modelSubmit.email = localStorage.getItem("email");
    let obsObj: Observable<TestResumeResponse>;
    obsObj = this.testService.submit(this.modelSubmit);
    obsObj.subscribe((response: TestResumeResponse) => {
      console.log(response);
      if (response.isValid) {
        console.log(response.data);
        const questionA = document.getElementById("question-answers-A") as HTMLInputElement;
        questionA.checked = false;
        const questionB = document.getElementById("question-answers-B") as HTMLInputElement;
        questionB.checked = false;
        const questionC = document.getElementById("question-answers-C") as HTMLInputElement;
        questionC.checked = false;
        const questionD = document.getElementById("question-answers-D") as HTMLInputElement;
        questionD.checked = false;


        if (this.size == this.modelSubmit.answer) {
          this.correct = false;
          this.data = response.data;
          console.log(this.size);
          console.log(this.modelSubmit.answer);
          setTimeout(() => { this.correct = true; }, 500);
          this.toastr.success("Correct Answer", "", {
            timeOut: 500
          });
          this.finalScore = this.data.finalScore;
          this.size = this.data.size;
          this.currentQuestion = this.data.currentIndex + 1;

          console.log(this.finalScore);
          //When test is over
          if (this.data.status !== "1") {
            this.displayScore = true;
            this.correct = false;
          }
          if (this.data.question.image == null) {
            this.displayImage = false;
          }
          if (this.data.status == "1" && this.data.question.image != null) {
            this.displayImage = true;
          }
        }

        else {
          this.correct = false;
          console.log("incorrect");
          let answer = this.getAnswer(this.data.size);
          this.toastr.error(answer, "The correct answer is:", {
            timeOut: 3000
          });
          this.finalScore = this.data.finalScore;
          console.log("Final Score is ", this.finalScore);
          setTimeout(() => {
            this.data = response.data;
            this.correct = true;
            this.size = this.data.size;
            this.currentQuestion = this.data.currentIndex + 1;

            if (this.data.status !== "1") {
              this.displayScore = true;
              this.correct = false;
            }
            if (this.data.question.image == null) {
              this.displayImage = false;
            }
            if (this.data.status == "1" && this.data.question.image != null) {
              this.displayImage = true;
            }


          }, 3000);
        }
      }
    });
  }

  public getAnswer(val: number): string {
    if (val == 1) {
      return this.data.question.optionA;
    }
    else if (val == 2) {
      return this.data.question.optionB;
    }
    else if (val == 3) {
      return this.data.question.optionC;
    }
    else {
      return this.data.question.optionD;
    }
  }




}
