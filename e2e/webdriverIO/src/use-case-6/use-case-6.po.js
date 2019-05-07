const AppPage = require('../app.po');

class UseCase6Po extends AppPage {
  get iFrameButton() {
    return $("#iFrame");
  }

  get intranetButton() {
    return $('*=ntrane');
  }

  get iFrame() {
    return $('#thRosenheim');
  }

  get subTitleFromIntranet() {
    return $('//*[@id="c55958"]/div/h2');
  }
}

module.exports = UseCase6Po;
