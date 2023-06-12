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

    generarGrupos(requestApp: any): Observable<any> {
        return this.http.post(this.baseUrl + "generate-grupos", requestApp);
    }

    actualizarGrupos(requestApp: any): Observable<any> {
        return this.http.post(this.baseUrl + "actualizar-grupos", requestApp);
    }    

    saveAsistencia(integrantes: any): Observable<any> {
        return this.http.post(this.baseUrl + "save-asistencia", integrantes);
    }
}
