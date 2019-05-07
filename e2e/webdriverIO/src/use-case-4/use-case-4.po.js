const AppPage = require('../app.po');

class UseCase4Po extends AppPage {
  get formInNewTabButton() {
    return $('#formInNewTabButton');
  }

  get useCaseTitle() {
    return $('#useCaseTitle');
  }
}

module.exports = UseCase4Po;
