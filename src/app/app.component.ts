import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public hostUrl: string = 'https://ej2services.syncfusion.com/production/web-services/';
  public ajaxSettings: object = {
    url: this.hostUrl + 'api/FileManager/FileOperations',
    getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
    uploadUrl: this.hostUrl + 'api/FileManager/Upload',
    downloadUrl: this.hostUrl + 'api/FileManager/Download'
  };
}
