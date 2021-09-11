import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroductionComponent} from "./pages/introduction/introduction.component";
import {DefaultLayoutComponent} from "./layout/default-layout/default-layout.component";
import {BasicFormControlComponent} from "./form-examples/components/forms/basic-form-control/basic-form-control.component";

const routes: Routes = [
  {
    path: "", component: DefaultLayoutComponent, children: [
      {path: "", component: IntroductionComponent},
      {path: "basic", component: BasicFormControlComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
