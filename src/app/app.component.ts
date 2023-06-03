import { Component } from '@angular/core';
import { take } from 'rxjs';
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

    integrantes: any = [
        { idIntegrante: 1, nombre: "Persona 1", asistencia: true },
        { idIntegrante: 2, nombre: "Persona 2", asistencia: false },
        { idIntegrante: 3, nombre: "Persona 3", asistencia: false },
        { idIntegrante: 4, nombre: "Persona 4", asistencia: false }
    ];

    grupos: any = [];

    grupostmp: any = [
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

    ];

    constructor(private integrantesService: IntegrantesService) {
        this.cargarInicial();
    }

    cargarInicial() {
        this.integrantesService.getIntegrantes()
        .pipe(take(1))
        .subscribe((response: any) => {
            if (response.status == this._constante.RESPONSE_OK) {
                console.log("response", response);

                /*console.log("response", response);

                this.paginacion.total = response.data.total;
                this.displayedColumns = ['ruc', 'razonSocial', 'representante', 'deEstado', 'fechaRegistro', 'obs', 'opcion'];
                this.dataSource = new MatTableDataSource<CasillaTitularEntidad>(response.data.datos);*/
            } else {
                //this.toastr.warning(response.message, 'Advertencia');
            }
            //this.globals.desactivarLoading();
        });        
    }


    onGuardarAsistencia() {
        console.log("...guardando asistencia");
    }

    onCheckValue(event: any) {
        let checkvalue = event.target.checked;

        this.integrantes.forEach((x: any) => {
            x.asistencia = checkvalue
        });

    }

    onGenerarGrupos() {
        console.log("...generar grupos");
        this.grupos = this.grupostmp;
    }
}
