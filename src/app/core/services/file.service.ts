import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {
//для одного файла
  constructor(private _http: HttpClient) { }
  private endpoint: string = '/api/File';
  upload(file: File): Observable<string> {
         const formData = new FormData();
         formData.append('file', file, file.name);
         return this._http.post<string>(`${this.endpoint}`, formData);
     }
//для нескольких файлов если понадобится 
//   upload(files: File[]): Observable<string> {
//     const formData = new FormData();
//     files.forEach(file => formData.append('files[]', file, file.name));
//     return this._http.post<string>(`${this.endpoint}`, formData);
// } 
}
