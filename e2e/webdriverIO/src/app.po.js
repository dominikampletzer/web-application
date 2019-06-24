class AppPage {
  navigateTo() {
    browser.url('http://localhost:4200/');
  }

  get title() {
    return $('app-root h1');
  }

  getTitleText() {
    return this.title.getText();
  }
}
module.exports = AppPage
