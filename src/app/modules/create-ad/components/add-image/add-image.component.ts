import { Component } from '@angular/core';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})

export class AddImageComponent {
  uploadedFiles: any[] = [];
  
  onUpload(event: { files: any; }) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
}
}

// import { Component, EventEmitter, Output } from '@angular/core';
// import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
// import { MessageService } from 'primeng/api';
// import { FileService } from 'src/app/core/services/file.service';

// @Component({
//   selector: 'app-add-image',
//   templateUrl: './add-image.component.html',
//   styleUrls: ['./add-image.component.scss'],
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       multi: true,
//       useExisting: AddImageComponent,
//     },
//     MessageService,
//   ],

// })
// export class AddImageComponent implements ControlValueAccessor{

//   public value:any[] = [];

//   constructor(private _fileService: FileService){}

//   onChange: (value: boolean) => void = () => { };

//   onTouched: () => void = () => { };

//   public writeValue(obj: any): void {
//     this.value = obj;
//   }

//   registerOnChange(fn: any): void {
//     this.onChange = fn;
//   }

//   registerOnTouched(fn: any): void {
//     this.onTouched = fn;
//   }

//   uploadImage(event:any){

//     const files: File[] = Array.from((event.target as HTMLInputElement).files as FileList);

//     this._fileService.upload(files)
//     .subscribe({
//       next:  (file) => {
//         this.value.push(file);
       
//       },
//       complete: () => {
//         this.writeValue(this.value);
//       },

//     })
//   }

// ПОПЫТКА НОМЕР1
// @Output() onUpload = new EventEmitter<string>();
// inProgress = false;

// constructor(private _fileService: FileService){}

// uploadImage(event:Event){
//   const file: File = ((event.target as HTMLInputElement).files as FileList)[0];
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

