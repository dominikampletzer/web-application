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

  public async getSomeReturnData(): Promise<string[]> {
    const tempProm: Promise<boolean> = new Promise((resolve) => {
      const randomTime: number = Math.round(Math.random() * 4500);
      setTimeout(() => resolve(true), randomTime);
    });
    await tempProm.then();
    return Promise.resolve(['SOME DATA']);
  }
}
