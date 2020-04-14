import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ApiResponse } from 'src/app/models/apiResponse';
import { questionService } from 'src/app/services/question.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-question-delete',
  templateUrl: './question-delete.component.html',
  styleUrls: ['./question-delete.component.css']
})
export class QuestionDeleteComponent implements OnInit {
  public question: Question;
  public id: string;

  constructor(private questionService: questionService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) {
    this.question = new Question();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
  }


  public delete(): void {
    this.spinner.show();

    let obsObj: Observable<ApiResponse<Question>>;
    obsObj = this.questionService.delete(this.id);
    obsObj.subscribe((response: ApiResponse<Question>) => {
      if (response.isValid) {
        this.spinner.hide();

        this.route.navigate(['/question/list']);
        this.toastr.success("Delete was successful", 'Redirecting to list page', {
          timeOut: 3000
        });
      }
      else {
        this.spinner.hide();
        this.toastr.error(response.errors[0], 'Error', {
          timeOut: 3000
        });
      }
    })
  }

}
