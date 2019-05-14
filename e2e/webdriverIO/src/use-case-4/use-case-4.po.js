const UseCase1Po = require('../use-case-1/use-case-1.po');

class UseCase4Po extends UseCase1Po {
  get formInNewTabButton() {
    return $('#formInNewTabButton');
  }
}

module.exports = UseCase4Po;
