import {Injectable} from '@angular/core';


@Injectable()
export class AsyncApiService {

  constructor() {
  }

  public async getSomeReturnBool(): Promise<boolean> {
    const tempProm: Promise<boolean> = new Promise((resolve) => {
      const randomTime: number = Math.round(Math.random() * 4500);
      setTimeout(() => resolve(true), randomTime);
    });
    await tempProm.then();
    return Promise.resolve(true);
  }

  public async getSomeCustomItems(): Promise<CustomItem[]> {
    const tempProm: Promise<boolean> = new Promise((resolve) => {
      const randomTime: number = Math.round(Math.random() * 4500);
      setTimeout(() => resolve(true), randomTime);
    });
    await tempProm.then();

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
}

export interface CustomItem {
  title: string;
  description?: string;
  someNumber?: number;
}
