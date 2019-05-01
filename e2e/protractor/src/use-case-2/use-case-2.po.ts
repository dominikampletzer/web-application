import {browser, by, element, ElementFinder, promise} from 'protractor';

export class UseCase2Po {

  public lazyModuleButton: ElementFinder = element(by.css('.lazy'));
  public title: ElementFinder = element(by.id('useCaseTitle'));
  public list: ElementFinder = element(by.id('list'));
  public snackBarMessage: ElementFinder = element(by.id('snackBarMessage'));
  public spinner: ElementFinder = element(by.id('spinnerContainer'));

  navigateTo() {
    return browser.get('/');
  }

  getRow(index?: number): ElementFinder {
    return element(by.id('customItem' + index || '0'));
  }

  getRowText(index?: number): promise.Promise<string> {
    return element(by.id('customItem' + index || '0')).getText();
  }

}
