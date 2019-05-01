import {browser, by, element} from 'protractor';

export class AppPage {


  public iFrameButton = element(by.partialButtonText('iFr'));

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
}
