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



}


describe('use-case-1 Navigation and Form Input', () => {
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
    browser.waitUntil(() => {
      return $('#sexOption1').isDisplayed()
    }, 1000);
    $('#sexOption1').click();

    page.saveButton.click();

    browser.waitUntil(() => {
        return page.sentName.isDisplayed()
      },
      5000);
    assert(page.sentName.getText(), 'Ampletzer');
    assert(page.sentFirstName.getText(), 'Dominik');
    assert(page.sentSex.getText(), 'Männlich');
  });
});
