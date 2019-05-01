import {browser, by, element, ElementFinder, promise} from 'protractor';

export class UseCase2Po {

  public lazyModuleButton = element(by.css('.lazy'));
  private useCaseTitle: ElementFinder;

  navigateTo() {
    return browser.get('/');
  }

  getUseCaseTitle(): ElementFinder {
    if (!this.useCaseTitle) {
      this.useCaseTitle = element(by.id('useCaseTitle'));
    }
    return this.useCaseTitle;
  }

  getSpinner(): ElementFinder {
    return element(by.id('spinnerContainer'));
  }

  getList(): ElementFinder {
    return element(by.id('list'));
  }

  getRow(index?: number): ElementFinder {
    return element(by.id('customItem' + index || '0'));
  }

  getRowText(index?: number): promise.Promise<string> {
    return element(by.id('customItem' + index || '0')).getText();
  }

  getSnackBar(): ElementFinder {
    return element(by.id('snackBarMessage'));
  }
}
