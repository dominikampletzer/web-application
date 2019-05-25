import {Component} from '@angular/core';
import {AsyncApiService} from '../asyncApi/asyncApi.service';

@Component({
  selector: 'app-upload',
  template: `
    <div>
      <h1 id="useCaseTitle">Test Fall 5</h1>
      <input type="file" id="upload" multiple (change)="upload($event.target.files)">
    </div>
  `
})

export class UploadComponent {

  public constructor(private asyncApi: AsyncApiService) {
  }

  public upload(fileList: FileList): void {
    const tempArr = Array.from(fileList);
    tempArr.forEach((file: File) => {
      this.asyncApi.uploadFile(file).then();
    });

  }
}
