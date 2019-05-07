const AppPage = require('../app.po');

class UseCase2Po extends AppPage {
  get lazyModuleButton() {
    return $('.lazy');
  }

  get useCaseTitle() {
    return $('#useCaseTitle');
  }

  get list() {
    return $('#list');
  }

  get snackBarMessage() {
    return $('#snackBarMessage');
  }

  get spinner() {
    return $('#spinnerContainer');
  }

  getRow(index) {
    return $('#customItem' + (index || '0'));
  }

  getRowText(index) {
    return $('#customItem' + (index || '0')).getText();
  }

}

module.exports = UseCase2Po;
