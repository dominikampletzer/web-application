import {browser, by, element, ElementFinder} from 'protractor';

export class UseCase1Po {

  public formButton: ElementFinder = element(by.id('formButton'));
  public formName: ElementFinder = element(by.id('name'));
  public formFirstName: ElementFinder = element(by.id('first-name'));
  public formSex: ElementFinder = element(by.id('sex'));
  public title: ElementFinder = element(by.id('useCaseTitle'));
  public saveButton: ElementFinder = element(by.className('btn btn-success'));
  public sentName: ElementFinder = element(by.id('sentName'));
  public sentFirstName: ElementFinder = element(by.id('sentFirstName'));
  public sentSex: ElementFinder = element(by.id('sentSex'));

  navigateTo() {
    return browser.get('/');
  }

}
