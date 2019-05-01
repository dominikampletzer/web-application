import {browser, by, element, ElementFinder, promise} from 'protractor';

export class UseCase3Po {

  public dialogOpenButton: ElementFinder = element(by.id('openDialogButton'));
  public firstTitle: ElementFinder = element(by.id('dialogTitle'));
  public firstSpinner: ElementFinder = element(by.id('spinner'));
  public firstList: ElementFinder = element(by.id('list'));
  public snackBarMessage: ElementFinder = element(by.id('snackBarMessage'));

  navigateTo() {
    return browser.get('/');
  }

  getRow(index?: number): ElementFinder {
    return element(by.id('customItem' + index || '0'));
  }

  getRowText(index?: number): promise.Promise<string> {
    return element(by.id('customItem' + index || '0')).getText();
  }

  getSecondTitle(): ElementFinder {
    return element.all(by.id('dialogTitle')).get(1);
  }

  getSecondSpinner(): ElementFinder {
    return element.all(by.id('spinner')).get(1);
  }

  getSecondList(): ElementFinder {
    return element.all(by.id('list')).get(1);
  }

  getSecondListRow(index: number): ElementFinder {
    return element.all(by.id('customItem' + index)).get(1);
  }

  getSecondListRowText(index: number): promise.Promise<string> {
    return element.all(by.id('customItem' + index)).get(1).getText();
  }
}
