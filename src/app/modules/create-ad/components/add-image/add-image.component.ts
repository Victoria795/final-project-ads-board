import { Component, EventEmitter, Output } from '@angular/core';
import { FileService } from 'src/app/core/services/file.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent {

@Output() onUpload = new EventEmitter<string>();
inProgress = false;

constructor(private _fileService: FileService){}

uploadImage(event:Event){
  const file: File = ((event.target as HTMLInputElement).files as FileList)[0];
     this._fileService.upload(file)
       .subscribe({
         next: guid => {
           this.inProgress = false;
           this.onUpload.emit(guid);
         },
         error: err => {
           this.inProgress = false;
         },
       });
}
  
}
