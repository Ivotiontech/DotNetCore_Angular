import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';
import { SalesSummaryComponent } from './dashboard-components/sales-summary/sales-summary.component';
import { FeedsComponent } from './dashboard-components/feeds/feeds.component';
import { TopSellingComponent } from './dashboard-components/top-selling/top-selling.component';
import { RecentCommentsComponent } from './dashboard-components/recent-comments/recent-comments.component';
import { TempGuideComponent } from './dashboard-components/temp-guide/temp-guide.component';
import { NgxSpinnerModule } from "ngx-spinner";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Dashboard' }
      ]
    },
    component: DashboardComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes), ChartsModule,
    NgxSpinnerModule],
  declarations: [DashboardComponent
    , SalesSummaryComponent, FeedsComponent, TopSellingComponent, RecentCommentsComponent, TempGuideComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {

}
