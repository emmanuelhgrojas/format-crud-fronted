export class UsuarioModel{
    usuaId: string;
	usuaEmail: string;
	usuaEstado: string;
	usuaFecha: string;
	usuaPassword: string;
	usuaUsername: string;
	usuaNombres: string;
	usuaApellidos: string;
    rolId: string;

    constructor(){
        this.usuaId = "";
        this.usuaEmail = "";
        this.usuaEstado = "";
        this.usuaFecha = "";
        this.usuaPassword = "";
        this.usuaUsername = "";
        this.usuaNombres = "";
        this.usuaApellidos = "";
        this.rolId = "";
    }
}