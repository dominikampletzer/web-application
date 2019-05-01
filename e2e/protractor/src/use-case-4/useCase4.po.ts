import {by, element, ElementFinder} from 'protractor';
import {UseCase1Po} from '../use-case-1/useCase1.po';

export class UseCase4Po extends UseCase1Po {
  public formInNewTabButton: ElementFinder = element(by.id('formInNewTabButton'));
}
