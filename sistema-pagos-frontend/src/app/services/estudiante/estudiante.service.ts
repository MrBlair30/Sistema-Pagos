import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudiante, Pago } from '../../model/estudiantes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http:HttpClient) { }

  public getAllPagos():Observable<Array<Pago>>{
    return this.http.get<Array<Pago>>("http://localhost:8080/api/pagos");
  }

  public getAllEstudiantes():Observable<Array<Estudiante>>{
    return this.http.get<Array<Estudiante>>("http://localhost:8080/api/estudiantes")
  }

  public getPagosPorEstudiante(codigo:string):Observable<Array<Pago>>{
    return this.http.get<Array<Pago>>(`http://localhost:8080/api/estudiante/${codigo}/pagos`);
  }

  public guardarPago(formData:any):Observable<Pago>{
    return this.http.post<Pago>("http://localhost:8080/api/pagos", formData);
  }

}
