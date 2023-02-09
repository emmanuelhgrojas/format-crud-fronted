import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { FunctionsGlobalsService } from 'src/app/core/services/functionsGlobals/functionsglobals.service';
import { ListaSelector } from 'src/app/core/interfaces/lista-selector/lista-selector-interface';
import { ActivatedRoute } from '@angular/router';
import { ConfiguracionFormatoService } from 'src/app/core/services/configuracion-formato/configuracion-formato.service';
import { MENSAJES_APP } from 'src/app/core/constants/mensajes-app';
import { FormatoDTO } from 'src/app/core/models/configuracion-formato/configuracion-formato.model';
import { CODES_HTTP_API } from 'src/app/core/constants/codes-http';


@Component({
  selector: 'app-configuration-form',
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.css']
})
export class ConfigurationFormComponent implements OnInit {

  public formato: UntypedFormGroup = new UntypedFormGroup({});
  public formConQuienViajaCualSoloLectura: boolean = true;
  public formCantidadPersonasViaje: boolean = true;
  public formMotivoViaje: boolean = true;
  public formatoPaqueteTuristicoOchoCualSoloLectura: boolean = true;
  public formatoPaqueteTuristicoNueveCualSOloLectura: boolean = true;
  public formatoComoOrganizoViajeSoloLectura = true;
  
  public listaGeneros: Array<ListaSelector> = [{label: "Seleccione", value: ""}, {label: "Masculino", value: "M"}, {label: "Femenino", value: "F"}];
  public listaConfirmacion: Array<ListaSelector> = [{label: "Seleccione", value: ""}, {label: "Si", value: "si"}, {label: "No", value: "no"}];

  public listaConQuienViaja: Array<ListaSelector> = [
    {label: "Seleccione", value: ""}, 
    {label: "Solo", value: "solo"}, 
    {label: "Familia", value: "familia"},
    {label: "Compañeros de trabajo y/o estudio", value: "companeros"},
    {label: "Amigos", value: "amigos"},
    {label: "Otros", value: "otros"},
  ];
  public listaMotivoViaje: Array<ListaSelector> = [
    {label: "Seleccione", value: ""}, 
    {label: "1 .Visita a familiares o amigos", value: "1"}, 
    {label: "2. Vacaciones (recreación, ocio, sol y playa)", value: "2"},
    {label: "3. Compras ", value: "3"},
    {label: "4. Turismo Cultural	", value: "4"},
    {label: "5. Asistencia a eventos artísticos y/o deportivos destino", value: "5"},
    {label: "6. Estudio y/o formación", value: "6"},
    {label: "7. Tratamiento de salud y belleza", value: "7"},
    {label: "8. Religioso", value: "8"},
    {label: "9. Asistencia a Congresos, Seminarios convenciones", value: "9"},
    {label: "10. Trabajo remunerado en destino  ", value: "10"},
    {label: "11. Trabajo o negocios (no remunerado en destino)", value: "11"},
    {label: "12. Participación en eventos artísticos y/o deportivos", value: "12"},
    {label: "13. Tránsito", value: "13"},
    {label: "14. Otro. ¿Cual?", value: "cual"},
  ];

  constructor(private route : ActivatedRoute,
    private formBuilder: FormBuilder,
    private configuracionFormatoService: ConfiguracionFormatoService,
    private functionsGlobalsService: FunctionsGlobalsService,) { }

  ngOnInit(): void {
    const viajeId: any = this.route.snapshot.paramMap.get("viajeId")
    if(viajeId){
      this.cargarInformacionFormato(viajeId);
    }
    this.formato = this.formBuilder.group({
      formatoPaisResidencia: ['', Validators.compose([Validators.required])],
      formatoNacionalidad: ['', Validators.compose([Validators.required])],
      formatoSexo: ['', Validators.compose([Validators.required])],
      formatoEdad: ['', Validators.compose([Validators.required])],
      formatoConQuienViaja: ['', Validators.compose([Validators.required])],
      formatoConQuienViajaCual: [''],
      formatoCantidadPersonasViaje: [''],
      formatoMotivoViaje: [''],
      formatoMotivoViajeCual: [''],
      formatoComoOrganizoViajeUno: [''],
      formatoComoOrganizoViajeDos: [''],
      formatoComoOrganizoViajeTres: [''],
      formatoComoOrganizoViajeCuatro: [''],
      formatoComoOrganizoViajeCinco: [''],
      formatoPaqueteTuristicoUno: [''],
      formatoPaqueteTuristicoDos: [''],
      formatoPaqueteTuristicoTres: [''],
      formatoPaqueteTuristicoCuatro: [''],
      formatoPaqueteTuristicoCinco: [''],
      formatoPaqueteTuristicoSeis: [''],
      formatoPaqueteTuristicoSiete: [''],
      formatoPaqueteTuristicoOcho: [''],
      formatoPaqueteTuristicoNueve: [''],
      formatoPaqueteTuristicoOchoCual: [''],
      formatoPaqueteTuristicoNueveCual: [''],
      formatoPagadoPorUstedValorUno: ['', Validators.compose([Validators.required])],
      formatoPagadoPorUstedTipoMonedaUno: ['', Validators.compose([Validators.required])],
      formatoTercerosNoValorUno: ['', Validators.compose([Validators.required])],
      formatoTercerosNoTipoMonedaUno: ['', Validators.compose([Validators.required])],
      formatoTercerosSiValorUno: ['', Validators.compose([Validators.required])],
      formatoTercerosSiTipoMonedaUno: ['', Validators.compose([Validators.required])],
      formatoparaCuantasPersonasUno: ['', Validators.compose([Validators.required])],
      formatoPagadoPorUstedValorDos: ['', Validators.compose([Validators.required])],
      formatoPagadoPorUstedEdadDos: ['', Validators.compose([Validators.required])],
      formatoTercerosNoValorDos: ['', Validators.compose([Validators.required])],
      formatoTercerosNoTipoMonedaDos: ['', Validators.compose([Validators.required])],
      formatoTercerosSiValorDos: ['', Validators.compose([Validators.required])],
      formatoTercerosSiTipoMonedaDos: ['', Validators.compose([Validators.required])],
      formatoparaCuantasPersonasDos: ['', Validators.compose([Validators.required])],
      formatoPaisNumNocheViviendaPropiaUno: ['', Validators.compose([Validators.required])],
      formatoPaisNumNocheHotelUno: ['', Validators.compose([Validators.required])],
      formatoPaisNumNocheViviendaFamiliarUno: ['', Validators.compose([Validators.required])],
      formatoPaisNumNocheViviendaAlquilerUno: ['', Validators.compose([Validators.required])],
      formatoPaisNumNocheOtraViviendaUno: ['', Validators.compose([Validators.required])],
      formatoHuboGastosUno: [''],
      formatoHuboGastosDos: [''],
      viajeId: [''],
    });
    this.formato.get("formatoSexo")?.setValue(""); 
    this.formato.get("formatoConQuienViaja")?.setValue(""); 
    this.formato.get("formatoMotivoViaje")?.setValue(""); 

    this.formato.controls['formatoConQuienViaja'].valueChanges.subscribe(formatoConQuienViaja => {
      this.formConQuienViajaCualSoloLectura = true;
      this.formCantidadPersonasViaje = false;
      this.formato.get("formatoConQuienViajaCual")?.setValue(""); 
      if(formatoConQuienViaja == "otros"){
        this.formConQuienViajaCualSoloLectura = false;
      }else if(formatoConQuienViaja == "solo"){
        this.formCantidadPersonasViaje = true;
      }
    });
    this.formato.controls['formatoMotivoViaje'].valueChanges.subscribe(formatoMotivoViaje => {
      this.formMotivoViaje = true;
      this.formato.get("formatoMotivoViajeCual")?.setValue(""); 
      if(formatoMotivoViaje == "cual"){
        this.formMotivoViaje = false;
      }
    });
    
  }

  changeMotivoViaje(motivoViaje: any){
    this.formatoComoOrganizoViajeSoloLectura = false;
    if(motivoViaje == 1){
      this.formatoComoOrganizoViajeSoloLectura = true;
    }    
  }

  changePaqueteTuristicoNueve(event: any){
    this.formatoPaqueteTuristicoNueveCualSOloLectura = true;
    this.formato.get("formatoPaqueteTuristicoNueveCual")?.setValue(""); 
    if(event.target.checked){
      this.formatoPaqueteTuristicoNueveCualSOloLectura = false;
    }
  }

  changePaqueteTuristicoOcho(event: any){
    this.formatoPaqueteTuristicoOchoCualSoloLectura = true;
    this.formato.get("formatoPaqueteTuristicoOchoCual")?.setValue(""); 
    if(event.target.checked){
      this.formatoPaqueteTuristicoOchoCualSoloLectura = false;
    }
  }
  

  
  guardarFormato(formato :FormGroup){
    let listaErrores: Array<string> = new Array();

    if(listaErrores.length == 0){
      let formatoDTO: FormatoDTO = new FormatoDTO();
      formatoDTO.viajeId= formato?.value?.viajeId;
      formatoDTO.formatoPaisResidencia= formato?.value?.formatoPaisResidencia;
      formatoDTO.formatoNacionalidad= formato?.value?.formatoNacionalidad;
      formatoDTO.formatoSexo= formato?.value?.formatoSexo;
      formatoDTO.formatoEdad= formato?.value?.formatoEdad;
      formatoDTO.formatoConQuienViaja= formato?.value?.formatoConQuienViaja;
      formatoDTO.formatoConQuienViajaCual= formato?.value?.formatoConQuienViajaCual;
      formatoDTO.formatoCantidadPersonasViaje= formato?.value?.formatoCantidadPersonasViaje;
      formatoDTO.formatoMotivoViaje= formato?.value?.formatoMotivoViaje;
      formatoDTO.formatoMotivoViajeCual= formato?.value?.formatoMotivoViajeCual;
      formatoDTO.formatoComoOrganizoViajeUno= formato?.value?.formatoComoOrganizoViajeUno;
      formatoDTO.formatoComoOrganizoViajeDos= formato?.value?.formatoComoOrganizoViajeDos;
      formatoDTO.formatoComoOrganizoViajeTres= formato?.value?.formatoComoOrganizoViajeTres;
      formatoDTO.formatoComoOrganizoViajeCuatro= formato?.value?.formatoComoOrganizoViajeCuatro;
      formatoDTO.formatoComoOrganizoViajeCinco= formato?.value?.formatoComoOrganizoViajeCinco;
      formatoDTO.formatoPaqueteTuristicoUno= formato?.value?.formatoPaqueteTuristicoUno;
      formatoDTO.formatoPaqueteTuristicoDos= formato?.value?.formatoPaqueteTuristicoDos;
      formatoDTO.formatoPaqueteTuristicoTres= formato?.value?.formatoPaqueteTuristicoTres;
      formatoDTO.formatoPaqueteTuristicoCuatro= formato?.value?.formatoPaqueteTuristicoCuatro;
      formatoDTO.formatoPaqueteTuristicoCinco= formato?.value?.formatoPaqueteTuristicoCinco;
      formatoDTO.formatoPaqueteTuristicoSeis= formato?.value?.formatoPaqueteTuristicoSeis;
      formatoDTO.formatoPaqueteTuristicoSiete= formato?.value?.formatoPaqueteTuristicoSiete;
      formatoDTO.formatoPaqueteTuristicoOcho= formato?.value?.formatoPaqueteTuristicoOcho;
      formatoDTO.formatoPaqueteTuristicoNueve= formato?.value?.formatoPaqueteTuristicoNueve;
      formatoDTO.formatoPaqueteTuristicoOchoCual= formato?.value?.formatoPaqueteTuristicoOchoCual;
      formatoDTO.formatoPaqueteTuristicoNueveCual= formato?.value?.formatoPaqueteTuristicoNueveCual;
      formatoDTO.formatoPagadoPorUstedValorUno= formato?.value?.formatoPagadoPorUstedValorUno;
      formatoDTO.formatoPagadoPorUstedTipoMonedaUno= formato?.value?.formatoPagadoPorUstedTipoMonedaUno;
      formatoDTO.formatoTercerosNoValorUno= formato?.value?.formatoTercerosNoValorUno;
      formatoDTO.formatoTercerosNoTipoMonedaUno= formato?.value?.formatoTercerosNoTipoMonedaUno;
      formatoDTO.formatoTercerosSiValorUno= formato?.value?.formatoTercerosSiValorUno;
      formatoDTO.formatoTercerosSiTipoMonedaUno= formato?.value?.formatoTercerosSiTipoMonedaUno;
      formatoDTO.formatoparaCuantasPersonasUno= formato?.value?.formatoparaCuantasPersonasUno;
      formatoDTO.formatoPagadoPorUstedValorDos= formato?.value?.formatoPagadoPorUstedValorDos;
      formatoDTO.formatoPagadoPorUstedEdadDos= formato?.value?.formatoPagadoPorUstedEdadDos;
      formatoDTO.formatoTercerosNoValorDos= formato?.value?.formatoTercerosNoValorDos;
      formatoDTO.formatoTercerosNoTipoMonedaDos= formato?.value?.formatoTercerosNoTipoMonedaDos;
      formatoDTO.formatoTercerosSiValorDos= formato?.value?.formatoTercerosSiValorDos;
      formatoDTO.formatoTercerosSiTipoMonedaDos= formato?.value?.formatoTercerosSiTipoMonedaDos;
      formatoDTO.formatoparaCuantasPersonasDos = formato?.value?.formatoparaCuantasPersonasDos;
      formatoDTO.formatoPaisNumNocheViviendaPropiaUno= formato?.value?.formatoPaisNumNocheViviendaPropiaUno;
      formatoDTO.formatoPaisNumNocheHotelUno= formato?.value?.formatoPaisNumNocheHotelUno;
      formatoDTO.formatoPaisNumNocheViviendaFamiliarUno= formato?.value?.formatoPaisNumNocheViviendaFamiliarUno;
      formatoDTO.formatoPaisNumNocheViviendaAlquilerUno= formato?.value?.formatoPaisNumNocheViviendaAlquilerUno;
      formatoDTO.formatoPaisNumNocheOtraViviendaUno= formato?.value?.formatoPaisNumNocheOtraViviendaUno;
      formatoDTO.formatoHuboGastosUno= formato?.value?.formatoHuboGastosUno;
      formatoDTO.formatoHuboGastosDos= formato?.value?.formatoHuboGastosDos;
      formatoDTO.formatoEstado= formato?.value?.viajeId;
      
      this.functionsGlobalsService.showMessageRequest(2, "", "", 0, "");
      this.configuracionFormatoService.guardarInformarcionFormato(formatoDTO).subscribe({next: (responseRequest) => {       
          this.functionsGlobalsService.closeAlertRequest();               
          this.functionsGlobalsService.showMessageRequest(1, MENSAJES_APP.tituloAlerta || "", responseRequest.message || "", responseRequest.status, null);
          if(responseRequest.status == 200){   
            this.formato.reset();
          }
        }, error: (responseRequestError) => { 
          this.functionsGlobalsService.closeAlertRequest();
          if(responseRequestError){        
            this.functionsGlobalsService.showMessageErrorAlert("guardarFormato()", "guardarInformarcionFormato()", responseRequestError);
          }                
        }, complete: () => { 
          //this.functionsGlobalsService.closeAlertRequest();     
        } 
      });
    }else{
      this.functionsGlobalsService.showMessageRequest(1, MENSAJES_APP.tituloAlerta || "", listaErrores[0] || "", CODES_HTTP_API.CODE_HTTP_BAD_REQUEST, null);
    }
  }

  cargarInformacionFormato(viajeId: string){
    this.functionsGlobalsService.showMessageRequest(2, "", "", 0, "");
    this.configuracionFormatoService.consultarFormatoPorId(viajeId).subscribe({ next: (responseRequest) => {       
        this.functionsGlobalsService.closeAlertRequest();               
        if(responseRequest.status == 200){   
          let nuevoFormato = responseRequest.result;
          this.formato.reset();
          this.formato.controls['formatoPaisResidencia'].setValue(nuevoFormato.formatoPaisResidencia);
          this.formato.controls['formatoNacionalidad'].setValue(nuevoFormato.formatoNacionalidad);
          this.formato.controls['formatoSexo'].setValue(nuevoFormato.formatoSexo);
          this.formato.controls['formatoEdad'].setValue(nuevoFormato.formatoEdad);
          this.formato.controls['formatoConQuienViaja'].setValue(nuevoFormato.formatoConQuienViaja);
          this.formato.controls['formatoConQuienViajaCual'].setValue(nuevoFormato.formatoConQuienViajaCual);
          this.formato.controls['formatoCantidadPersonasViaje'].setValue(nuevoFormato.formatoCantidadPersonasViaje);
          this.formato.controls['formatoMotivoViaje'].setValue(nuevoFormato.formatoMotivoViaje);
          this.formato.controls['formatoMotivoViajeCual'].setValue(nuevoFormato.formatoMotivoViajeCual);
          this.formato.controls['formatoComoOrganizoViajeUno'].setValue(nuevoFormato.formatoComoOrganizoViajeUno);
          this.formato.controls['formatoComoOrganizoViajeDos'].setValue(nuevoFormato.formatoComoOrganizoViajeDos);
          this.formato.controls['formatoComoOrganizoViajeTres'].setValue(nuevoFormato.formatoComoOrganizoViajeTres);
          this.formato.controls['formatoComoOrganizoViajeCuatro'].setValue(nuevoFormato.formatoComoOrganizoViajeCuatro);
          this.formato.controls['formatoComoOrganizoViajeCinco'].setValue(nuevoFormato.formatoComoOrganizoViajeCinco);
          this.formato.controls['formatoPaqueteTuristicoUno'].setValue(nuevoFormato.formatoPaqueteTuristicoUno);
          this.formato.controls['formatoPaqueteTuristicoDos'].setValue(nuevoFormato.formatoPaqueteTuristicoUno);
          this.formato.controls['formatoPaqueteTuristicoTres'].setValue(nuevoFormato.formatoPaqueteTuristicoTres);
          this.formato.controls['formatoPaqueteTuristicoCuatro'].setValue(nuevoFormato.formatoPaqueteTuristicoCuatro);
          this.formato.controls['formatoPaqueteTuristicoCinco'].setValue(nuevoFormato.formatoPaqueteTuristicoCinco);
          this.formato.controls['formatoPaqueteTuristicoSeis'].setValue(nuevoFormato.formatoPaqueteTuristicoSeis);
          this.formato.controls['formatoPaqueteTuristicoSiete'].setValue(nuevoFormato.formatoPaqueteTuristicoSiete);
          this.formato.controls['formatoPaqueteTuristicoOcho'].setValue(nuevoFormato.formatoPaqueteTuristicoOcho);
          this.formato.controls['formatoPaqueteTuristicoNueve'].setValue(nuevoFormato.formatoPaqueteTuristicoNueve);
          this.formato.controls['formatoPaqueteTuristicoOchoCual'].setValue(nuevoFormato.formatoPaqueteTuristicoOchoCual);
          this.formato.controls['formatoPaqueteTuristicoNueveCual'].setValue(nuevoFormato.formatoPaqueteTuristicoNueveCual);
          this.formato.controls['formatoPagadoPorUstedValorUno'].setValue(nuevoFormato.formatoPagadoPorUstedValorUno);
          this.formato.controls['formatoPagadoPorUstedTipoMonedaUno'].setValue(nuevoFormato.formatoPagadoPorUstedTipoMonedaUno);
          this.formato.controls['formatoTercerosNoValorUno'].setValue(nuevoFormato.formatoTercerosNoValorUno);
          this.formato.controls['formatoTercerosNoTipoMonedaUno'].setValue(nuevoFormato.formatoTercerosNoTipoMonedaUno);
          this.formato.controls['formatoTercerosSiValorUno'].setValue(nuevoFormato.formatoTercerosSiValorUno);
          this.formato.controls['formatoTercerosSiTipoMonedaUno'].setValue(nuevoFormato.formatoTercerosSiTipoMonedaUno);
          this.formato.controls['formatoparaCuantasPersonasUno'].setValue(nuevoFormato.formatoparaCuantasPersonasUno);
          this.formato.controls['formatoPagadoPorUstedValorDos'].setValue(nuevoFormato.formatoPagadoPorUstedValorDos);
          this.formato.controls['formatoPagadoPorUstedEdadDos'].setValue(nuevoFormato.formatoPagadoPorUstedEdadDos);
          this.formato.controls['formatoTercerosNoValorDos'].setValue(nuevoFormato.formatoTercerosNoValorDos);
          this.formato.controls['formatoTercerosNoTipoMonedaDos'].setValue(nuevoFormato.formatoTercerosNoTipoMonedaDos);
          this.formato.controls['formatoTercerosSiValorDos'].setValue(nuevoFormato.formatoTercerosSiValorDos);
          this.formato.controls['formatoTercerosSiTipoMonedaDos'].setValue(nuevoFormato.formatoTercerosSiTipoMonedaDos);
          this.formato.controls['formatoparaCuantasPersonasDos'].setValue(nuevoFormato.formatoparaCuantasPersonasDos);
          this.formato.controls['formatoPaisNumNocheViviendaPropiaUno'].setValue(nuevoFormato.formatoPaisNumNocheViviendaPropiaUno);
          this.formato.controls['formatoPaisNumNocheHotelUno'].setValue(nuevoFormato.formatoPaisNumNocheHotelUno);
          this.formato.controls['formatoPaisNumNocheViviendaFamiliarUno'].setValue(nuevoFormato.formatoPaisNumNocheViviendaFamiliarUno);
          this.formato.controls['formatoPaisNumNocheViviendaAlquilerUno'].setValue(nuevoFormato.formatoPaisNumNocheViviendaAlquilerUno);
          this.formato.controls['formatoPaisNumNocheOtraViviendaUno'].setValue(nuevoFormato.formatoPaisNumNocheOtraViviendaUno);
          this.formato.controls['formatoHuboGastosUno'].setValue(nuevoFormato.formatoHuboGastosUno);
          this.formato.controls['formatoHuboGastosDos'].setValue(nuevoFormato.formatoHuboGastosDos);
          this.formato.controls['viajeId'].setValue(nuevoFormato.viajeId);
        }else{
          this.functionsGlobalsService.showMessageRequest(1, MENSAJES_APP.tituloAlerta || "", responseRequest.message || "", responseRequest.status, null);
        }
      }, error: (responseRequestError) => { 
        this.functionsGlobalsService.closeAlertRequest();
        if(responseRequestError){        
          this.functionsGlobalsService.showMessageErrorAlert("cargarInformacionFormato()", "consultarFormatoPorId()", responseRequestError);
        }                
      }, complete: () => { 
        //this.functionsGlobalsService.closeAlertRequest();     
      } 
    });      
  }
  
}
