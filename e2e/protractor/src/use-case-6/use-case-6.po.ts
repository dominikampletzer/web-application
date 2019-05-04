import {browser, by, element, ElementFinder} from 'protractor';

export class UseCase6Po {
  public iFrameButton: ElementFinder = element(by.partialButtonText('iFr'));
  public intranetButton: ElementFinder = element(by.partialLinkText('ntrane'));
  public iFrame: ElementFinder = element(by.id('thRosenheim'));
  public subTitleFromIntranet: ElementFinder = element(by.xpath('//*[@id="c55958"]/div/h2'));

  navigateTo() {
    return browser.get('/');
  }
}
