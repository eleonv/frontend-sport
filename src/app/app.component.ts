import { Component } from '@angular/core';
import { take } from 'rxjs';
import { Integrante } from 'src/entity/integrante';
import { IntegrantesService } from 'src/services/integrantes.service';
import { Constantes } from 'src/util/constante';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    [x: string]: any;
    _constante = Constantes;
    title = 'frontend-sport';

    /*integrantes: any = [
        { idIntegrante: 1, nombre: "Persona 1", asistencia: true },
        { idIntegrante: 2, nombre: "Persona 2", asistencia: false },
        { idIntegrante: 3, nombre: "Persona 3", asistencia: false },
        { idIntegrante: 4, nombre: "Persona 4", asistencia: false }
    ];*/

    totalGrupos: number = 2;
    integrantes: any =  [];
    grupos: any = [];

    /*grupostmp: any = [
        {
            nombre: "Grupo A",
            integrantes: [
                { idIntegrante: 1, nombre: "Persona 1", asistencia: true },
                { idIntegrante: 2, nombre: "Persona 2", asistencia: false },
            ]
        },
        {
            nombre: "Grupo B",
            integrantes: [
                { idIntegrante: 3, nombre: "Persona 3", asistencia: false },
                { idIntegrante: 4, nombre: "Persona 4", asistencia: false }
            ]
        },
        {
            nombre: "Grupo C",
            integrantes: []
        },

    ];*/

    constructor(private integrantesService: IntegrantesService) {
        this.cargarInicial();
    }

    onCheckAsistencia(event: any, idIntegrante:number) {
        console.log("sasae", event);
        let checkvalue = event.target.checked;
        console.log(checkvalue, idIntegrante);

        this.integrantes.forEach((x: any)=>{
            if(x.idIntegrante == idIntegrante) {
                x.asistencia = checkvalue;
            }
        });
        
        
    }

    cargarInicial() {
        this.integrantesService.getIntegrantes()
        .pipe(take(1))
        .subscribe((response: any) => {
            if (response.status == this._constante.RESPONSE_OK) {
                console.log("response", response);
                this.integrantes = response.data;
            } else {
                //this.toastr.warning(response.message, 'Advertencia');
            }
            //this.globals.desactivarLoading();
        });        
    }


    onGuardarAsistencia() {
        //console.log("...guardando asistencia");
        console.log(this.integrantes);
        
    }

    onCheckValue(event: any) {
        let checkvalue = event.target.checked;

        this.integrantes.forEach((x: any) => {
            x.asistencia = checkvalue
        });

    }

    onGenerarGrupos() {

        if (!this.totalGrupos) return;

        let requestApp = {
            totalGrupos: this.totalGrupos,
            participantes: this.integrantes
        };

        this.integrantesService.generarGrupos(requestApp)
        .pipe(take(1))
        .subscribe((response: any) => {
            if (response.status == this._constante.RESPONSE_OK) {
                console.log("response", response);
                this.grupos = response.data;
            } else {
                //this.toastr.warning(response.message, 'Advertencia');
            }
            //this.globals.desactivarLoading();
        });

        //console.log("...generar grupos");
        //this.grupos = this.grupostmp;
    }
}
