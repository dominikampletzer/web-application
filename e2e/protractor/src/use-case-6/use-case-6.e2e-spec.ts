import {browser, protractor, ProtractorExpectedConditions} from 'protractor';
import {UseCase6Po} from './use-case-6.po';

describe('use-case-6 i-frame interaction', () => {
  let page: UseCase6Po;
  const conditions: ProtractorExpectedConditions = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new UseCase6Po();
  });

  it('Should open iframe and interact', () => {
    page.navigateTo();
    page.iFrameButton.click();
    browser.wait(conditions.visibilityOf(page.iFrame), 5000);
    browser.switchTo().frame(page.iFrame.getWebElement());
    browser.waitForAngularEnabled(false);
    browser.wait(conditions.elementToBeClickable(page.intranetButton), 5000);
    page.intranetButton.click();
    browser.wait(conditions.visibilityOf(page.subTitleFromIntranet), 30000);
    expect(page.subTitleFromIntranet.getText()).toBe('Benutzeranmeldung für den geschlossenen Benutzerbereich');
    browser.sleep(5000);
  });

});
