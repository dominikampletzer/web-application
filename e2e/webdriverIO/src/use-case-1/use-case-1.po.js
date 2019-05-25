const AppPage = require('../app.po');

class UseCase1Po extends AppPage{
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

  get useCaseTitle() {
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

module.exports = UseCase1Po;
