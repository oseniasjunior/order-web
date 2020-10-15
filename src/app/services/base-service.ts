import {Injectable} from "@angular/core";
import {from, Observable} from "rxjs";
import {HttpClient, HttpParams, HttpUserEvent} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class BaseService<T> {
  public baseUrl = "http://127.0.0.1:8000/api/";
  public endpoint = "";
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

  public save(entity: T, path: string): Observable<T> {
    this.clearParameter();
    const fullUrl = `${this.baseUrl}${path}`;
    return this.http.post<T>(`${fullUrl}`, entity, this.getOptions())
      .pipe(
        tap(response => response as HttpUserEvent<T>),
        catchError(ex => from([]))
      );
  }

  public getById(id: number | string, path: string, route?: string): Observable<T> {
    const fullUrl = `${this.baseUrl}${path}`;
    const url = route ? `${fullUrl}${id}/${route}/` : `${fullUrl}${id}/`;
    return this.http.get<T>(url, this.getOptions())
      .pipe(
        tap(response => response as HttpUserEvent<T>),
        catchError(ex => from([]))
      );
  }

  public delete(id: number | string, path: string): Observable<any> {
    this.clearParameter();
    const fullUrl = `${this.baseUrl}${path}`;
    const url = `${fullUrl}${id}/`;
    return this.http.delete<any>(url, this.getOptions())
      .pipe(
        tap(response => response as HttpUserEvent<any>),
        catchError(ex => from([]))
      );
  }

  public update(id: number | string, entity: any, path: string): Observable<any> {
    this.clearParameter();
    const fullUrl = `${this.baseUrl}${path}`;
    const url = `${fullUrl}${id}/`;
    return this.http.patch<T>(url, entity, this.getOptions())
      .pipe(
        tap(response => response as HttpUserEvent<T>),
        catchError(ex => from([]))
      );
  }

  public getAll(path: string, route?: string): Observable<T[]> {
    const fullUrl = `${this.baseUrl}${path}`;
    const url = route ? `${fullUrl}${route}/` : `${fullUrl}`;
    return this.http.get<T[]>(url, this.getOptions())
      .pipe(
        tap(response => response as HttpUserEvent<T[]>),
        catchError(ex => from([]))
      );
  }
}
