import { Component, EventEmitter, Output } from '@angular/core';
import { FileService } from 'src/app/core/services/file.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})

export class AddImageComponent {

  @Output() OnUpload = new EventEmitter<string>();
  uploadedFiles: any[] = [];

  constructor(private _fileService: FileService){}
  
  onUpload(event: { files: any; }) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this._fileService.upload(this.uploadedFiles)
    .subscribe({
      next: guid => { 
        this.OnUpload.emit(guid);
      },
      error: err => {
        console.log(err)
      },
    })
}

// @Output() onUpload = new EventEmitter<string>();
// inProgress = false;

// constructor(private _fileService: FileService){}

// uploadImage(event:Event){
//   const file: any = ((event.target as HTMLInputElement).files as FileList)[0];
//      this._fileService.upload(file)
//        .subscribe({
//          next: guid => {
//            this.inProgress = false;
//            this.onUpload.emit(guid);
//          },
//          error: err => {
//            this.inProgress = false;
//          },
//        });
// }
}

