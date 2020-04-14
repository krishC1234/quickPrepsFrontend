import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Demo } from "./component/demo";
import { HeaderComponent } from "./component/shared/header/header.component";
import { FooterComponent } from "./component/shared/footer/footer.component";
import { PlaceComponent } from "./component/place/place.component";
import { LoginComponent } from "./component/user/login/login.component";
import { RegisterComponent } from './component/register/register.component';
import { Logger } from './helper/logger';
import { TodoUnitComponent } from './component/Todo/todo-unit/todo-unit.component';
import { TodoListComponent } from './component/Todo/todo-list/todo-list.component';
import { TodoUpdateComponent } from './component/Todo/todo-update/todo-update.component';
import { TodoCreateComponent } from './component/Todo/todo-create/todo-create.component';
import { TodoDeleteComponent } from './component/Todo/todo-delete/todo-delete.component';
import { QuestionCreateComponent } from './component/question/question-create/question-create.component';
import { QuestionDeleteComponent } from './component/question/question-delete/question-delete.component';
import { EditQuestionComponent } from './component/question/edit-question/edit-question.component';
import { QuestionListComponent } from './component/question/question-list/question-list.component';
import { QuestionUnitComponent } from './component/question/question-unit/question-unit.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BookComponent } from './tests/book/book.component';
import { StartComponent } from './tests/start/start.component';
import { SubmitAnswerComponent } from './tests/submit-answer/submit-answer.component';
import { BlogComponent } from './component/blog/blog.component';
import { HtmlCourseComponent } from './component/courses/html-course/html-course.component';
import { CoursePageComponent } from './component/courses/course-page/course-page.component';
import { CssCourseComponent } from './component/courses/css-course/css-course.component';
import { JsCourseComponent } from './component/courses/js-course/js-course.component';
import { SqlCourseComponent } from './component/courses/sql-course/sql-course.component';
import { AboutMeComponent } from './component/about-me/about-me.component';



@NgModule({
  declarations: [
    AppComponent,
    Demo,
    HeaderComponent,
    FooterComponent,
    PlaceComponent,
    LoginComponent,
    RegisterComponent,
    TodoUnitComponent,
    TodoListComponent,
    TodoUpdateComponent,
    TodoCreateComponent,
    TodoDeleteComponent,
    QuestionCreateComponent,
    QuestionDeleteComponent,
    EditQuestionComponent,
    QuestionListComponent,
    QuestionUnitComponent,
    BookComponent,
    StartComponent,
    SubmitAnswerComponent,
    BlogComponent,
    HtmlCourseComponent,
    CoursePageComponent,
    CssCourseComponent,
    JsCourseComponent,
    SqlCourseComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [Logger],
  bootstrap: [AppComponent]

})
export class AppModule { }
