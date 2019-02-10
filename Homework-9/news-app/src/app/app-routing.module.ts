import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewsItemPageComponent } from './pages/news-item-page/news-item-page.component';
import { EditNewsPageComponent } from './pages/edit-news-page/edit-news-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  { path: 'news', component: MainPageComponent },
  { path: 'news/:id', component: NewsItemPageComponent },
  { path: 'news/:id/edit', component: EditNewsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
