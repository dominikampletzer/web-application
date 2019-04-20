import {AfterViewChecked, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-overview-component',
  template: `
  `,
})
export class TrendResultComponent implements OnInit, AfterViewChecked {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = 'https://ssl.gstatic.com/trends_nrtr/1754_RC01/embed_loader.js';
    this.elementRef.nativeElement.appendChild(scriptElement);
  }

  ngAfterViewChecked(): void {
    setTimeout(() => { // dirty hack to include widget easily
      const scriptElement = document.createElement('script');
      scriptElement.type = 'text/javascript';
      scriptElement.text = `trends.embed.renderExploreWidget("TIMESERIES", {
      "comparisonItem": [{
        "keyword": "protractor",
        "geo": "",
        "time": "2017-01-01 2018-12-31"
      }, {"keyword": "nightwatch", "geo": "", "time": "2017-01-01 2018-12-31"}, {
        "keyword": "nightwatch.js",
        "geo": "",
        "time": "2017-01-01 2018-12-31"
      }, {"keyword": "webdriver.io", "geo": "", "time": "2017-01-01 2018-12-31"}, {
        "keyword": "webdriverio",
        "geo": "",
        "time": "2017-01-01 2018-12-31"
      }], "category": 0, "property": ""
    }, {
      "exploreQuery": "date=2017-01-01%202018-12-31&q=protractor,nightwatchjs,nightwatch.js,webdriver.io,webdriverio",
      "guestPath": "https://trends.google.com:443/trends/embed/"
    }); `;
      this.elementRef.nativeElement.appendChild(scriptElement);
    }, 1000);
  }

}
