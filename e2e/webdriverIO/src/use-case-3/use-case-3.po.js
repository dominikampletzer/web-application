const AppPage = require('../app.po');

class UseCase3Po extends AppPage {
  get dialogOpenButton() {
    return $('#openDialogButton');
  }

  get firstTitle() {
    return $('#dialogTitle');
  }

  get spinner() {
    return $('#spinner');
  }

  get firstList() {
    return $('#list');
  }

  get snackBarMessage() {
    return $('#snackBarMessage');
  }

  getRow(index) {
    return $('#customItem' + (index || '0'));
  }

  getRowText(index) {
    return $('#customItem' + (index || '0')).getText();
  }

  getSecondTitle() {
    return $$('#dialogTitle')[1];
  }

  getSecondList() {
    return $$('#list')[1];
  }

  getSecondListRow(index) {
    return $$('#customItem' + index)[1];
  }
}

module.exports = UseCase3Po;
