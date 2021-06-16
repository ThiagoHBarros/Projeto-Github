import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProjgitService {
   
  constructor(private http: HttpClient) { }

  public getInfos():Observable<any>{
    return this.http.get('https://api.github.com/users/glaucotodesco');
  }

  public getErro(): Observable<any>{
    return this.http.get(``)
  }
}
