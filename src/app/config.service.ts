import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Runners} from './runner';
import { environment } from './../environments/environment';



@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

 url = environment.apiEndpoint;

getRunners(): Observable<Runners[]> {
  return this.http.get<Runners[]>(
   this.url);
}
/*  getRunners() {
    return this.http.get(`${this.url}/get-runners`).pipe(
      catchError(this.handleError<Runners[]>('runners', [])));
}

private handleError(operation = 'operation', result?: T) {
  return (error: any): Observable => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

private log(message: string) {
  console.log(message);
}*/
}