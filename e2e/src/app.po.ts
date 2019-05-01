import {browser, by, element, ElementFinder} from 'protractor';

export class AppPage {

  public formButton = element(by.id('formButton'));
  public lazyModuleButton = element(by.css('color:blue'));
  public uploadButton = element(by.buttonText('Upload'));
  public iFrameButton = element(by.partialButtonText('iFr'));
  public dialogOpenButton = element(by.id('openDialogButton'));
  public formInNewTabButton = element(by.id('formInNewTabButton'));
  public lazyModuleInNewTabButton = element(by.id('lazyInNewTabButton'));
  private useCaseTitle: ElementFinder;
  private formSaveButton: ElementFinder;

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
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
