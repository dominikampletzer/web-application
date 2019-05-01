import {browser, by, element, ElementFinder} from 'protractor';

export class UseCase1Po {

  public formButton = element(by.id('formButton'));
  private useCaseTitle: ElementFinder;
  private formSaveButton: ElementFinder;

  navigateTo() {
    return browser.get('/');
  }

  getFormName(): ElementFinder {
    return element(by.id('name'));
  }

  getFormFirstName(): ElementFinder {
    return element(by.id('first-name'));
  }

  getFormSex(): ElementFinder {
    return element(by.id('sex'));
  }

  getUseCaseTitle(): ElementFinder {
    if (!this.useCaseTitle) {
      this.useCaseTitle = element(by.id('useCaseTitle'));
    }
    return this.useCaseTitle;
  }

  getFormSaveButton(): ElementFinder {
    if (!this.formSaveButton) {
      this.formSaveButton = element(by.className('btn btn-success'));
    }
    return this.formSaveButton;
  }
}
