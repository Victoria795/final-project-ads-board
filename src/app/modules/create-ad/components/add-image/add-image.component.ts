import { Component, EventEmitter, Output } from '@angular/core';
import { FileService } from 'src/app/core/services/file.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})

export class AddImageComponent {

  //для одного файла

  @Output() upload = new EventEmitter<string>();
  uploadedFile: any;
  endpoint: string = 'http://90.156.209.122:5000/File/';
  constructor(private _fileService: FileService,
              private _messageService:MessageService){}
  
  public onUpload(event: any) {
    this.uploadedFile = ((event as HTMLInputElement).files as FileList)[0];
    // for(let file of event.files) {
    //     this.uploadedFiles.push(file);
    // }
    this._fileService.upload(this.uploadedFile)
    .subscribe({
      next: guid => { 
        this.upload.emit(`${this.endpoint}` + guid);
        this._messageService.add({severity: 'success', summary: 'Изображение успешно загружено!'});
      },
      error: err => {
        console.log(err)
      },
    })
}

// для нескольких файлов, если понадобится
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

