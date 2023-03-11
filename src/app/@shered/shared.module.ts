import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SummaryTextPipePipe } from './pipes/summary-text-pipe.pipe';
import { HeaderComponent } from './components/header/header.component';

const COMPONENTS = [
 FooterComponent,
 HeaderComponent,
 SummaryTextPipePipe
];

@NgModule({
  declarations: [ ...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[...COMPONENTS],
})
export class SharedModule { }
