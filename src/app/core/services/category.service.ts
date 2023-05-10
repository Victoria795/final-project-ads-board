import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { ICategory } from 'src/app/shared/interfaces/i-category';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 private endpoint: string = '/api/Category';

 constructor(private _http: HttpClient) {}
  
  getCategories():Observable<ICategory[]>{
     return this._http.get<ICategory[]>(`${this.endpoint}`).pipe(map(res => this.transformCategories(res)))
  } 
  getCategoryById(id:string):Observable<ICategory>{
    return this._http.get<ICategory>(`${this.endpoint}/`+ id)
  }
  getFlatCategories():Observable<ICategory[]>{
    return this._http.get<ICategory[]>(`${this.endpoint}`)
  }
  makeBreadcrumbs(advertCategory:string):MenuItem[] {

    let breadCrumbsArray: MenuItem[] = [];
    let currentCategory = advertCategory;

    const categories$: Observable<ICategory[]> =
    this.getFlatCategories();
    
    categories$.subscribe((res) => {
      while (currentCategory !== null) {
        for (let category of res) {
          if (category.id === currentCategory) {
            breadCrumbsArray.unshift({ label: category.name });
            currentCategory = category.parentId;
          }
        }
      }
    }
    )
    return breadCrumbsArray
  }

  //Преобразовываем полученный плоский масссив во вложенный
  private transformCategories(array: ICategory[]): ICategory[] {
    const rootCategories = array.filter((category) => category.parentId === null
    );
    return this.findSubCategories(rootCategories, array);
   }
  private findSubCategories(currLevel: any, array: ICategory[]):any {
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
