import {Injectable} from "@angular/core";
import {from, Observable} from "rxjs";
import {HttpClient, HttpParams, HttpUserEvent} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class BaseService<T> {
  public fullUrl = "http://127.0.0.1:8000/api/";
  private parameters: HttpParams = new HttpParams();

  constructor(public http: HttpClient) {
  }

  private getOptions(): any {
    const httpOptions = {};
    if (this.parameters) {
      httpOptions["params"] = this.parameters;
    }
    return httpOptions;
  }

  public clearParameter(): void {
    this.parameters = new HttpParams();
  }

  public addParameter(key: string, value: any): void {
    if (this.parameters.has(key)) {
      this.parameters = this.parameters.set(key, value);
    } else {
      this.parameters = this.parameters.append(key, value);
    }
  }

  public save(entity: T): Observable<T> {
    this.clearParameter();
    return this.http.post<T>(this.fullUrl, entity, this.getOptions())
      .pipe(
        tap(response => response as HttpUserEvent<T>),
        catchError(ex => from([]))
      );
  }

  public getById(id: number | string, route?: string): Observable<T> {
    const url = route ? `${this.fullUrl}${id}/${route}/` : `${this.fullUrl}${id}/`;
    return this.http.get<T>(url, this.getOptions())
      .pipe(
        tap(response => response as HttpUserEvent<T>),
        catchError(ex => from([]))
      );
  }

  public delete(id: number | string): Observable<any> {
    this.clearParameter();
    const url = `${this.fullUrl}${id}/`;
    return this.http.delete<any>(url, this.getOptions())
      .pipe(
        tap(response => response as HttpUserEvent<any>),
        catchError(ex => from([]))
      );
  }

  public update(id: number | string, entity: any): Observable<any> {
    this.clearParameter();
    const url = `${this.fullUrl}${id}/`;
    return this.http.patch<T>(url, entity, this.getOptions())
      .pipe(
        tap(response => response as HttpUserEvent<T>),
        catchError(ex => from([]))
      );
  }

  public getAll(route?: string): Observable<T[]> {
    const url = route ? `${this.fullUrl}${route}/` : `${this.fullUrl}`;
    return this.http.get<T[]>(url, this.getOptions())
      .pipe(
        tap(response => response as HttpUserEvent<T[]>),
        catchError(ex => from([]))
      );
  }
}
