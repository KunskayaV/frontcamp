import { DateTransformerPipe } from './date-transformer.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageViewComponent } from './page-view/page-view.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    PageViewComponent,
    InputComponent,
    CheckboxComponent,
    DropdownComponent,
    TextareaComponent,
    DateTransformerPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    PageViewComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    DropdownComponent,
    TextareaComponent,
    DateTransformerPipe,
  ],
})
export class SharedModule { }
