const AppPage = require('../app.po');

class UseCase5Po extends AppPage {
  get toUploadButton() {
    return $("#upload");
  }

  get useCaseTitle() {
    return $('#useCaseTitle');
  }

  get uploadInput() {
    return $('<input />');
  }

  get snackBarMessage() {
    return $('#snackBarMessage');
  }
}

module.exports = UseCase5Po;
