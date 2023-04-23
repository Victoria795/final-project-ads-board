import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private _http: HttpClient) { }

  endpoint: string = '/api/File';
  
  upload(files: File[]): Observable<string> {
    const formData = new FormData();
    files.forEach(file => formData.append('files[]', file, file.name));

    return this._http.post<string>('', formData);
}
}
