import {Component} from '@angular/core';

@Component({
  selector: 'app-i-frame',
  template: `
    <div>
      <iframe src="https://www.th-rosenheim.de/" id="thRosenheim"
              width="95%" height="800" name="thRosenheim">

        <p>Ihr Browser kann leider keine eingebetteten Frames anzeigen </p>

      </iframe>
    </div>
  `
})

export class IFrameComponent {
}
