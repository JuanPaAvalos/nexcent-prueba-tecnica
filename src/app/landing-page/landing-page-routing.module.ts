import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  {
    path: '',
    children: [
      // { path: 'portfolio', component: HomePageComponent },
      { path: 'home-module', component: HomeComponent },
      { path: '', redirectTo: 'home-module', pathMatch: 'full' },
      { path: '**', redirectTo: 'home-module' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
