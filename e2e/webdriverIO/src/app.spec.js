const assert = require('assert');
const AppPage = require('./app.po');

describe('workspace-project App', () => {
  it('should display welcome message', () => {
    let page = new AppPage();
    page.navigateTo();
    assert.equal(page.getTitleText(), 'SQS SS-2019 Dummy-Applikation Ampletzer/Voit');
  });

});


