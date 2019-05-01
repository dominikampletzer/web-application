import {browser, by, element, ElementFinder} from 'protractor';

export class UseCase5Po {
  public toUploadButton = element(by.buttonText('Upload'));
  public title: ElementFinder = element(by.id('useCaseTitle'));
  public uploadInput: ElementFinder = element(by.css('input[type="file"]'));
  public snackBarMessage: ElementFinder = element(by.id('snackBarMessage'));

  navigateTo() {
    return browser.get('/');
  }
}
