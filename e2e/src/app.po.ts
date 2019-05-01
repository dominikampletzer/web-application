import {browser, by, element, ElementFinder} from 'protractor';

export class AppPage {

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
}
