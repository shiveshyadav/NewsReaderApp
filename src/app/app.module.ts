import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './modules/dashboard/news-list/news-list.component';
import { HomeModule } from './modules/dashboard/home.module';
import { NewsService } from './store/service/newsreader.service'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
