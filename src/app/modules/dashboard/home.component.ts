import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/store/service/newsreader.service'
import INews from 'src/app/store/models/news.interface';
import { options, searchoptions, categoryList, countryList, sorting, paging, title } from 'src/app/store/constants/home.constant'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export default class HomeComponent implements OnInit {

  news: INews[];
  categoryList = categoryList
  countryList = countryList
  sorting = sorting
  paging = paging
  title = title

  private subscription: Subscription;
  constructor(private newsService: NewsService, route: ActivatedRoute) {
  };

  ngOnInit() {
    this.subscription = this.newsService.getNewsDetails(options)
      .subscribe((newsdetail: INews[]) => this.news = newsdetail)
  }

  passCategoryValuetoService(selectedCategory: any, categoryList: any) {
    this.clearfilter(categoryList)
    options.params.category = selectedCategory.id;
    selectedCategory.active = !selectedCategory.active
    this.subscription = this.newsService.getNewsDetails(options)
      .subscribe((newsdetail: INews[]) => this.news = newsdetail)
    console.log(selectedCategory.id + " " + selectedCategory.active)
  }

  passCountryValuetoService(selectedCountry: any, countryList: any) {
    this.clearfilter(countryList);
    options.params.country = selectedCountry.id;
    selectedCountry.active = !selectedCountry.active;
    this.subscription = this.newsService.getNewsDetails(options)
      .subscribe((newsdetail: INews[]) => this.news = newsdetail)
  }

  sortResults(sortingvalue: string) {
    options.params.sortBy = sortingvalue;
    this.subscription = this.newsService.getNewsDetailsBySorting(options)
      .subscribe((newsdetail: INews[]) => this.news = newsdetail)
  }

  changePageSize(pagesize: string) {
    options.params.pageSize = pagesize
    this.subscription = this.newsService.getNewsDetailsByPageSize(options)
      .subscribe((newsdetail: INews[]) => this.news = newsdetail)
  }

  searchNews(query: string) {
    searchoptions.params.q = query
    this.subscription = this.newsService.searchNews(searchoptions)
      .subscribe((newsdetail: INews[]) => this.news = newsdetail)
  }


  clearfilter(list: any) {
    list.forEach(value => {
      value.active = false;
    });
  }

}
