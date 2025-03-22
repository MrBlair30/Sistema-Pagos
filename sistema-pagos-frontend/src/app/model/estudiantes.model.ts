export interface Estudiante{
    id:string,
    codigo:string,
    nombre:string,
    apellido:string,
    programaId:string,
    foto:string
}

export interface Pago{
    id:number,
    fecha:string,
    cantidad:number,
    tipoDePago:TipoDePago,
    estadoDePago:EstadoDePago,
    file:string,
    estudiante:Estudiante
}

export enum TipoDePago{
    EFECTIVO = 0,
    CHEQUE = 1,
    TRANSFERENCIA = 2,
    DEPOSITO = 3
}

export enum EstadoDePago{
    CREADO = 0,
    VALIDADO = 1,
    RECHAZADO = 2
}