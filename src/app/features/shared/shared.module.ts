import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components, LoginFooterComponent } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [...components, RegisterComponent, LoginFooterComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  exports:[...components]
})
export class SharedModule { }
