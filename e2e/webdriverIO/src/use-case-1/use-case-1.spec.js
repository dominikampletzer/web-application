const assert = require('assert');
const UseCase1Po = require('./use-case-1.po.js');

describe('use-case-1 Navigation and Form Input', () => {
  let page;
  beforeEach(() => {
    page = new UseCase1Po();
  });

  it('Should navigate To Component', () => {
    page.navigateTo();
    page.formButton.click();
    assert.equal(page.useCaseTitle.getText(), 'Test Fall 1');
  });

  it('Should insert Data into Form', () => {
    page.navigateTo();
    page.formButton.click();

    page.formName.setValue('Ampletzer');
    page.formFirstName.setValue('Dominik');

    page.formSex.click();
    let sexOption = $('#sexOption1');
    sexOption.waitForDisplayed(1000);
    sexOption.click();

    page.saveButton.click();
    page.sentName.waitForDisplayed(5000);
    assert.equal(page.sentName.getText(), 'Ampletzer');
    assert.equal(page.sentFirstName.getText(), 'Dominik');
    assert.equal(page.sentSex.getText(), 'Männlich');
  });
});
