import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/apiResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { questionService } from 'src/app/services/question.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FileUploadService } from 'src/app/services/fileUploadService';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  public question: Question;
  public loading: boolean;

  constructor(private fileUploadService: FileUploadService, private activatedRoute: ActivatedRoute,
    private router: Router,
    private questionService: questionService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) {
    this.question = new Question();
  }

  ngOnInit() {
    let id: string = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(id);
    this.loadData(id);
  }

  public loadData(id: string): void {
    let obsObj: Observable<ApiResponse<Question>>;
    obsObj = this.questionService.getQuestion(id);
    obsObj.subscribe((response: ApiResponse<Question>) => {
      if (response.isValid) {
        this.question = response.data;
      }
      else {
        alert(response.errors[0]);
      }
    })
  }

  public update(): void {
    this.spinner.show();
    let obsObj: Observable<ApiResponse<Question>>;
    obsObj = this.questionService.update(this.question);
    obsObj.subscribe((response: ApiResponse<Question>) => {
      this.spinner.hide();
      console.log(response);
      if (response.isValid) {
        this.toastr.success("Sucessful Update", "Redirecting to list page", {
          timeOut: 3000
        });
        this.router.navigate(['/question/list']);
      }
      else {
        this.toastr.error(response.errors[0], "Error", {
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
