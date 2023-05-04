import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map, of } from 'rxjs';
import { ICategory } from 'src/app/shared/interfaces/i-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 constructor(private _http: HttpClient) {}
  
   getCategories():Observable<any>{
     return this._http.get<any>('/api/Category').pipe(map(res => this.transformCategories(res)))
  } 
  //  private mock = [
  //   {
  //     id: 'f92fed76-9dba-41d8-b3a2-03ae09826484',
  //     parentId: '15e6521e-73ad-427a-8140-fa3da965e7b9',
  //     name: 'Honda',
  //     isActive: true,
  //     createdAt: '2023-04-07T13:46:05.862Z',
  //   },
  //   {
  //     id: '15e6521e-73ad-427a-8140-fa3da965e7b9',
  //     parentId: 'd60257e3-a914-4c74-8ea6-d297d1eee92b',
  //     name: 'Автомобили',
  //     isActive: true,
  //     createdAt: '2023-04-07T15:51:33.942543Z',
  //   },
  //   {
  //     id: '5fe7d0a1-409d-444e-a6f2-9d40e760b4fe',
  //     parentId: '15e6521e-73ad-427a-8140-fa3da965e7b9',
  //     name: 'Ford',
  //     isActive: true,
  //     createdAt: '2023-04-09T13:03:54.916597Z',
  //   },
  //   {
  //     id: 'f92fed76-9dba-41d8-b3a2-03ae09826484',
  //     parentId: '15e6521e-73ad-427a-8140-fa3da965eg',
  //     name: 'Honda',
  //     isActive: true,
  //     createdAt: '2023-04-07T13:46:05.862Z',
  //   },
  //   {
  //     id: '15e6521e-73ad-427a-8140-fa3da965eg',
  //     parentId: 'd60257e3-a914-4c74-8ea6-d297d1eee92b',
  //     name: 'Мотоциклы',
  //     isActive: true,
  //     createdAt: '2023-04-07T15:51:33.942543Z',
  //   },
  //   {
  //     id: '5fe7d0a1-409d-444e-a6f2-9d40e760b4fe',
  //     parentId: '15e6521e-73ad-427a-8140-fa3da965eg',
  //     name: 'Ford',
  //     isActive: true,
  //     createdAt: '2023-04-09T13:03:54.916597Z',
  //   },
  //   {
  //     id: 'd60257e3-a914-4c74-8ea6-d297d1eee92b',
  //     parentId: null,
  //     name: 'Транспорт',
  //     isActive: true,
  //     createdAt: '2023-04-07T15:52:30.262636Z',
  //   },
  //   {
  //     id: 'f92fed76-9dba-41d8-b3a2-03ae09826484',
  //     parentId: '15e6521e-73ad-427a-8140-fa3da965e7b9',
  //     name: 'Honda',
  //     isActive: true,
  //     createdAt: '2023-04-07T13:46:05.862Z',
  //   },
  //   {
  //     id: '15e6521e-73ad-427a-8140-fa3da965e7b9123',
  //     parentId: 'd60257e3-a914-4c74-8ea6-d297d1eesdf',
  //     name: 'Компьютеры',
  //     isActive: true,
  //     createdAt: '2023-04-07T15:51:33.942543Z',
  //   },
  //   {
  //     id: '5fe7d0a1-409d-444e-a6f2-9d40e760b4fe',
  //     parentId: '15e6521e-73ad-427a-8140-fa3da965e7b9123',
  //     name: 'Ford',
  //     isActive: true,
  //     createdAt: '2023-04-09T13:03:54.916597Z',
  //   },
  //   {
  //     id: 'f92fed76-9dba-41d8-b3a2-03ae09826484',
  //     parentId: '15e6521e-73ad-427a-8140-fa3da965e7b9123',
  //     name: 'Honda',
  //     isActive: true,
  //     createdAt: '2023-04-07T13:46:05.862Z',
  //   },
  //   {
  //     id: '15e6521e-73ad-427a-8140-fa3da965eg',
  //     parentId: 'd60257e3-a914-4c74-8ea6-d297d1eesdf',
  //     name: 'Телефоны',
  //     isActive: true,
  //     createdAt: '2023-04-07T15:51:33.942543Z',
  //   },
  //   {
  //     id: '5fe7d0a1-409d-444e-a6f2-9d40e760b4fe',
  //     parentId: '15e6521e-73ad-427a-8140-fa3da965eg',
  //     name: 'Ford',
  //     isActive: true,
  //     createdAt: '2023-04-09T13:03:54.916597Z',
  //   },
  //   {
  //     id: 'd60257e3-a914-4c74-8ea6-d297d1eesdf',
  //     parentId: null,
  //     name: 'Электроника',
  //     isActive: true,
  //     createdAt: '2023-04-07T15:52:30.262636Z',
  //   },
  // ];
  // public getCategories():Observable<any> {
  //   return of(this.mock).pipe(map(res => this.transformCategories(res)))
  //  } 
  private transformCategories(array: any[]): any {
    const rootCategories = array.filter((category) => category.parentId === null
    );
    return this.findSubCategories(rootCategories, array);
   }
  private findSubCategories(currLevel: any[], array: any[]):any {
    const transformedArray = [];
    for (let item of currLevel){
      const child = array.filter((category) => category.parentId === item.id);
      item.child = this.findSubCategories(child, array);
      transformedArray.push(item);
    }
    return!
    transformedArray.length ? null : transformedArray;
   }
}
