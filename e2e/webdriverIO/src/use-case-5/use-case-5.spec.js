const assert = require('assert');
const path = require('path');
const UseCase5Po = require('./use-case-5.po.js');

describe('use-case-5 open upload-window and interact', () => {
  let page;
  beforeEach(() => {
    page = new UseCase5Po();
  });

  it('Should navigate to upload-component', () => {
    page.navigateTo();
    page.toUploadButton.click();
    assert.equal(page.useCaseTitle.getText(), 'Test Fall 5');
  });

  it('Should pass path to file-input and fake upload', () => {
    page.navigateTo();
    page.toUploadButton.click();

    // page.uploadInput.click(); // öffnet ein Fenster welches sich der Kontrolle von Protractor entzieht

    // alternative Pfad händisch eingeben
    const fileToUpload = './forUpload.txt';
    const absolutePath = path.resolve(__dirname, fileToUpload);

    page.uploadInput.setValue(absolutePath);

    // sendKeys triggers upload. Snackbar shows fileTitle and memory size
    page.snackBarMessage.waitForDisplayed(5000);
    assert.equal(page.snackBarMessage.getText(), 'forUpload.txt 27');

    /* Chrome und FireFox verhindern, dass der Pfad aus File-Inputs herausgelesen wird!
     Auf Chrome wird mit fakepath verschleiert. auf FireFox bekommt man ihn garnicht heraus!
     Aus diesem Grund wird er mit fakepath verschleiert. Dennoch kann es verwendet werden.
     Auf nicht Windows system, muss diese Zeile auskommentiert werden.
     */
    // assert.equal(page.uploadInput.getValue(), 'C:\\fakepath\\forUpload.txt');
  });

});
