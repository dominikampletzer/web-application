import {by, element, ElementFinder} from 'protractor';
import {AppPage} from '../app.po';

export class UseCase5Po   extends AppPage{
  public toUploadButton = element(by.buttonText('Upload'));
  public title: ElementFinder = element(by.id('useCaseTitle'));
  public uploadInput: ElementFinder = element(by.css('input[type="file"]'));
  public snackBarMessage: ElementFinder = element(by.id('snackBarMessage'));
}
