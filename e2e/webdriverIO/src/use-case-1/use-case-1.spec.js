const assert = require('assert');

class UseCase1Po {
  get formButton() {
    return $('#formButton');
  }

  get formName() {
    return $('#name');
  }

  get formFirstName() {
    return $('#first-name');
  }

  get formSex() {
    return $('#sex');
  }

  get title() {
    return $('#useCaseTitle');
  }

  get saveButton() {
    return $('.btn-success');
  }

  get sentName() {
    return $('#sentName');
  }

  get sentFirstName() {
    return $('#sentFirstName');
  }

  get sentSex() {
    return $('#sentSex');
  }

  navigateTo() {
    browser.url('http://localhost:4200/');
  }

}


describe('use-case-1 Navigation and Form Input', () => {
  let page;
  beforeEach(() => {
    page = new UseCase1Po();
  });

  it('Should navigate To Component', () => {
    page.navigateTo();
    page.formButton.click();
    assert.equal(page.title.getText(), 'Test Fall 1');
  });

  it('Should insert Data into Form', () => {
    page.navigateTo();
    page.formButton.click();

    page.formName.setValue('Ampletzer');
    page.formFirstName.setValue('Dominik');

    page.formSex.click();
    $('#sexOption1').waitForDisplayed(1000);
    $('#sexOption1').click();

    page.saveButton.click();

    page.sentName.waitForDisplayed(5000);
    assert.equal(page.sentName.getText(), 'Ampletzer');
    assert.equal(page.sentFirstName.getText(), 'Dominik');
    assert.equal(page.sentSex.getText(), 'Männlich');
  });
});
