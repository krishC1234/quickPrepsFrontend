import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { Demo } from './component/demo';
import { TodoListComponent } from './component/Todo/todo-list/todo-list.component';
import { TodoUpdateComponent } from './component/Todo/todo-update/todo-update.component';
import { TodoCreateComponent } from './component/Todo/todo-create/todo-create.component';
import { TodoDeleteComponent } from './component/Todo/todo-delete/todo-delete.component';
import { EditQuestionComponent } from './component/question/edit-question/edit-question.component';
import { QuestionDeleteComponent } from './component/question/question-delete/question-delete.component';
import { QuestionCreateComponent } from './component/question/question-create/question-create.component';
import { QuestionListComponent } from './component/question/question-list/question-list.component';
import { AuthGuard } from './guards/auth.guard';
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

const routes: Routes = [

  { path: '', component: Demo },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tests/book', component: BookComponent },
  { path: 'tests/start', component: StartComponent },
  { path: 'tests/submit', component: SubmitAnswerComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'courses', component: CoursePageComponent },
  { path: 'courses/html', component: HtmlCourseComponent },
  { path: 'courses/css', component: CssCourseComponent },
  { path: 'courses/javascript', component: JsCourseComponent },
  { path: 'courses/sql', component: SqlCourseComponent },
  { path: 'aboutUs', component: AboutMeComponent },

  {
    path: "question", canActivate: [AuthGuard], children:
      [
        { path: "list", component: QuestionListComponent },
        { path: "create", component: QuestionCreateComponent },
        { path: "update/:id", component: EditQuestionComponent },
        { path: "delete/:id", component: QuestionDeleteComponent },
        { path: "type", component: QuestionListComponent },
      ]
  },
  // { path: 'question/list', canActivate: [AuthGuard], component: QuestionListComponent },
  // { path: 'question/create', canActivate: [AuthGuard], component: QuestionCreateComponent },
  // { path: 'question/update/:id', canActivate: [AuthGuard], component: EditQuestionComponent },
  // { path: 'question/delete/:id', canActivate: [AuthGuard], component: QuestionDeleteComponent },
  { path: '**', component: Demo },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
