import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { questionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/apiResponse';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FileUploadService } from 'src/app/services/fileUploadService';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']

})

export class QuestionCreateComponent {
  public question: Question;
  public loading: boolean;

  constructor(private fileUploadService: FileUploadService, private questionService: questionService, private route: Router, private toastr: ToastrService, private spinner: NgxSpinnerService) {
    this.question = new Question();
    this.loading = false;
  }

  public create(): void {
    this.spinner.show();

    let obsObj: Observable<any>;
    obsObj = this.questionService.create(this.question);
    obsObj.subscribe((response: ApiResponse<Question>) => {
      this.spinner.hide();

      console.log(response);
      if (response.isValid) {
        this.route.navigate(['/question/list']);
        this.toastr.success("Creation is successful", 'Redirecting to list page', {
          timeOut: 3000
        });
      }
      else {
        this.toastr.error(response.errors[0], 'Failure to create', {
          timeOut: 3000
        });
      }
    },
      (error: any) => {
        this.spinner.hide()
        console.log("Coming from error handler");
        if (error.status = 401) {
          this.route.navigate(['/login/']);
          this.toastr.error(error.error, error, {
            timeOut: 3000
          });
        }
      });
  }

  public onFileChanged(event, isVideo: boolean) {
    let file = event.target.files[0];
    this.uploadFile(file, isVideo);
  }

  private uploadFile(file: File, isVideo: boolean): void {
    this.loading = true;
    this.fileUploadService.uploadFile(file).subscribe(
      response => {
        this.loading = false;
        if (response.isValid) {
          console.log(response);
          this.question.image = response.data;
        } else {
          this.toastr.error(response.errors[0]);
        }
      },
      error => {
        this.loading = false;
        console.log(error);
        this.toastr.error("something went wrong!");
      }
    )
  }


}
