import { Integrante } from "./integrante";

export class Grupo {
    nombre: string | undefined;
    integrantes: Integrante[] | undefined;
    totalPeso: number | undefined;
}