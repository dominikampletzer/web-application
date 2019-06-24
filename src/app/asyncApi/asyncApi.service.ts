import {Injectable} from '@angular/core';
import {SnackBarHelperService} from '../uiFrameworks/snack-bar-helper.service';


@Injectable()
export class AsyncApiService {

  constructor(private snackBarHelper: SnackBarHelperService) {
  }

  public async getSomeReturnBool(): Promise<boolean> {
    await this.randomTimeOut().then();
    return Promise.resolve(true);
  }

  public async getSomeCustomItems(): Promise<CustomItem[]> {
    await this.randomTimeOut().then();

    const someCustomItems: CustomItem[] = [
        {
          title: 'Item Nr 1',
          description: 'ein total nutzloses Objekt',
          someNumber: 42
        },
        {
          title: 'Item Nr 2',
          description: 'ein total nutzloses Objekt',
          someNumber: 3
        },
        {
          title: 'Item Nr 3',
          description: 'ein total nutzloses Teil',
          someNumber: 17
        },

      ]
    ;
    return Promise.resolve(someCustomItems);
  }

  public async uploadFile(file: File): Promise<boolean> {
    await this.randomTimeOut().then();
    this.snackBarHelper.openSnackbar(file.name + ' ' + file.size);
    return Promise.resolve(true);
  }

  private randomTimeOut(): Promise<boolean> {
    return new Promise((resolve) => {
      const randomTime: number = Math.round(Math.random() * 4500);
      setTimeout(() => resolve(true), randomTime);
    });
  }
}

export interface CustomItem {
  title: string;
  description?: string;
  someNumber?: number;
}
