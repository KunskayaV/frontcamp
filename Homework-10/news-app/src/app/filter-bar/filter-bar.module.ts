import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFilterGroupComponent } from './text-filter-group/text-filter-group.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextFilterGroupComponent, FilterPanelComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [FilterPanelComponent]
})
export class FilterBarModule { }
