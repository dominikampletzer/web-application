import {browser, protractor, ProtractorExpectedConditions} from 'protractor';
import {UseCase5Po} from './use-case-5.po';
import * as path from 'path';

describe('use-case-5 open upload-window and interact', () => {
  let page: UseCase5Po;
  const conditions: ProtractorExpectedConditions = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new UseCase5Po();
  });

  it('Should navigate to upload-component', () => {
    page.navigateTo();
    page.toUploadButton.click();
    expect(page.title.getText()).toEqual('Test Fall 5');
  });

  it('Should pass path to file-input and fake upload', () => {
    page.navigateTo();
    page.toUploadButton.click();

    // page.uploadInput.click(); // öffnet ein Fenster welches sich der Kontrolle von Protractor entzieht

    // alternative Pfad händisch eingeben
    const fileToUpload = './forUpload.txt';
    const absolutePath = path.resolve(__dirname, fileToUpload);

    page.uploadInput.sendKeys(absolutePath);

    // sendKeys triggers upload. Snackbar shows fileTitle and memory size
    browser.wait(conditions.visibilityOf(page.snackBarMessage), 5000);
    expect(page.snackBarMessage.getText()).toBe('forUpload.txt 27');

    /* Chrome und FireFox verhindern, dass der Pfad aus File-Inputs herausgelesen wird!
     Aus diesem Grund wird er mit fakepath verschleiert. Dennoch kann es verwendet werden.
     Auf nicht Windows system, muss diese Zeile auskommentiert werden.
     */
    expect(page.uploadInput.getAttribute('value')).toBe('C:\\fakepath\\forUpload.txt');
  });

});
