import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class IntegrantesService {

    private baseUrl = environment.BASE_URL + "api/sport/";

    constructor(private http:HttpClient) { }

    getIntegrantes(): Observable<any> {
        return this.http.get(this.baseUrl + "get-integrantes");
    }

    generarGrupos(numGrupos: number, integrantes: any): Observable<any> {
        return this.http.post(this.baseUrl + "generate-grupos", integrantes);
    }

    saveAsistencia(integrantes: any): Observable<any> {
        return this.http.post(this.baseUrl + "save-asistencia", integrantes);
    }
}
