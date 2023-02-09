import { ObjectArchivo } from "../objeto-archivo.model";

export class ConfiguracionFormatoModel{
    cofoId: string;
	cofoEstado: string;
	cofoFecha: any;
	cofoFormato: string;
	cofoKey: string;
	cofoValue: string;
    cofoValueLogo: string;
    objetoLogo: ObjectArchivo;

    constructor(cofoId: string,  
     cofoEstado: string,  
     cofoFecha: any,
     cofoFormato: string,  
     cofoKey: string,  
     cofoValue: string, cofoValueLogo: string, objetoLogo: ObjectArchivo){
        this.cofoId =  cofoId; 
        this.cofoEstado =  cofoEstado; 
        this.cofoFecha = cofoFecha;
        this.cofoFormato =  cofoFormato; 
        this.cofoKey =  cofoKey; 
        this.cofoValue =  cofoValue; 
        this.cofoValueLogo = cofoValueLogo;
        this.objetoLogo = objetoLogo;
    }

    
}


export class FormatoDTO{
	viajeId: string;
	formatoPaisResidencia: string;
	formatoNacionalidad: string;
	formatoSexo: string;
	formatoEdad: number;
	formatoConQuienViaja: string;
	formatoConQuienViajaCual: string;
	formatoCantidadPersonasViaje: string;
	formatoMotivoViaje: string;
	formatoMotivoViajeCual: string;
	formatoComoOrganizoViajeUno: string;
	formatoComoOrganizoViajeDos: string;
	formatoComoOrganizoViajeTres: string;
	formatoComoOrganizoViajeCuatro: string;
	formatoComoOrganizoViajeCinco: string;
	formatoPaqueteTuristicoUno: string;
	formatoPaqueteTuristicoDos: string;
	formatoPaqueteTuristicoTres: string;
	formatoPaqueteTuristicoCuatro: string;
	formatoPaqueteTuristicoCinco: string;
	formatoPaqueteTuristicoSeis: string;
	formatoPaqueteTuristicoSiete: string;
	formatoPaqueteTuristicoOcho: string;
	formatoPaqueteTuristicoNueve: string;
	formatoPaqueteTuristicoOchoCual: string;
	formatoPaqueteTuristicoNueveCual: string;
	formatoPagadoPorUstedValorUno: number;
	formatoPagadoPorUstedTipoMonedaUno: string;
	formatoTercerosNoValorUno: number;
	formatoTercerosNoTipoMonedaUno: string;
	formatoTercerosSiValorUno: number;
	formatoTercerosSiTipoMonedaUno: string;
	formatoparaCuantasPersonasUno: number;
	formatoPagadoPorUstedValorDos: number;
	formatoPagadoPorUstedEdadDos: number;
	formatoTercerosNoValorDos: number;
	formatoTercerosNoTipoMonedaDos: string;
	formatoTercerosSiValorDos: number;
	formatoTercerosSiTipoMonedaDos: string;
	formatoparaCuantasPersonasDos: number;
	formatoPaisNumNocheViviendaPropiaUno: number;
	formatoPaisNumNocheHotelUno: number;
	formatoPaisNumNocheViviendaFamiliarUno: number;
	formatoPaisNumNocheViviendaAlquilerUno: number;
	formatoPaisNumNocheOtraViviendaUno: number;
	formatoHuboGastosUno: string;
	formatoHuboGastosDos: string;
	formatoEstado: string;
    
    constructor(){

            this.viajeId= "";
	        this.formatoPaisResidencia= "";
            this.formatoNacionalidad= "";
            this.formatoSexo= "";
            this.formatoEdad= 0;
            this.formatoConQuienViaja= "";
            this.formatoConQuienViajaCual= "";
            this.formatoCantidadPersonasViaje= "";
            this.formatoMotivoViaje= "";
            this.formatoMotivoViajeCual= "";
            this.formatoComoOrganizoViajeUno= "";
            this.formatoComoOrganizoViajeDos= "";
            this.formatoComoOrganizoViajeTres= "";
            this.formatoComoOrganizoViajeCuatro= "";
            this.formatoComoOrganizoViajeCinco= "";
            this.formatoPaqueteTuristicoUno= "";
            this.formatoPaqueteTuristicoDos= "";
            this.formatoPaqueteTuristicoTres= "";
            this.formatoPaqueteTuristicoCuatro= "";
            this.formatoPaqueteTuristicoCinco= "";
            this.formatoPaqueteTuristicoSeis= "";
            this.formatoPaqueteTuristicoSiete= "";
            this.formatoPaqueteTuristicoOcho= "";
            this.formatoPaqueteTuristicoNueve= "";
            this.formatoPaqueteTuristicoOchoCual= "";
            this.formatoPaqueteTuristicoNueveCual= "";
            this.formatoPagadoPorUstedValorUno= 0;
            this.formatoPagadoPorUstedTipoMonedaUno= "";
            this.formatoTercerosNoValorUno= 0;
            this.formatoTercerosNoTipoMonedaUno= "";
            this.formatoTercerosSiValorUno= 0;
            this.formatoTercerosSiTipoMonedaUno= "";
            this.formatoparaCuantasPersonasUno= 0;
            this.formatoPagadoPorUstedValorDos= 0;
            this.formatoPagadoPorUstedEdadDos= 0;
            this.formatoTercerosNoValorDos= 0;
            this.formatoTercerosNoTipoMonedaDos= "";
            this.formatoTercerosSiValorDos= 0;
            this.formatoTercerosSiTipoMonedaDos= "";
            this.formatoparaCuantasPersonasDos = 0;
            this.formatoPaisNumNocheViviendaPropiaUno= 0;
            this.formatoPaisNumNocheHotelUno= 0;
            this.formatoPaisNumNocheViviendaFamiliarUno= 0;
            this.formatoPaisNumNocheViviendaAlquilerUno= 0;
            this.formatoPaisNumNocheOtraViviendaUno= 0;
            this.formatoHuboGastosUno= "";
            this.formatoHuboGastosDos= "";
            this.formatoEstado= "";

    }

}
