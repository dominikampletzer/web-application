import {by, element, ElementFinder, promise} from 'protractor';
import {AppPage} from '../app.po';

export class UseCase2Po extends AppPage {
  public lazyModuleButton: ElementFinder = element(by.css('.lazy'));
  public title: ElementFinder = element(by.id('useCaseTitle'));
  public list: ElementFinder = element(by.id('list'));
  public snackBarMessage: ElementFinder = element(by.id('snackBarMessage'));
  public spinner: ElementFinder = element(by.id('spinnerContainer'));

  getRow(index?: number): ElementFinder {
    return element(by.id('customItem' + index || '0'));
  }

  getRowText(index?: number): promise.Promise<string> {
    return element(by.id('customItem' + index || '0')).getText();
  }

}
