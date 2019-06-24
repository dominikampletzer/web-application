import {by, element, ElementFinder} from 'protractor';
import {AppPage} from '../app.po';

export class UseCase6Po extends AppPage {
  public iFrameButton: ElementFinder = element(by.partialButtonText('iFr'));
  public intranetButton: ElementFinder = element(by.partialLinkText('ntrane'));
  public iFrame: ElementFinder = element(by.id('thRosenheim'));
  public subTitleFromIntranet: ElementFinder = element(by.xpath('//*[@id="c55958"]/div/h2'));
}
