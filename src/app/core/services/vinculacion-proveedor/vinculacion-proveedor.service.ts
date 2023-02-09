import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../../interfaces/response-api-interface.';
import { AprobarProveedorDTO } from '../../models/aprobar-proveedor/aprobar-proveedor.model';
import { RegitroPersonaJuridicaModel } from '../../models/form-persona-juridica/registro-persona-juridica.model';
import { RegitroPersonaNaturalModel } from '../../models/form-persona-natural/registro-persona-natural.model';
import { GeneralModel } from '../../models/general.model';

@Injectable({
  providedIn: 'root'
})
export class VinculacionProveedorService {
  public urlApiPro: string = this.generalModel.urlApi || "";
  public endPointBase: string = "vinculacion-proveedor";
  public endPointVinculacionProveedorNatural: string = this.endPointBase + "/natural";
  public endPointVinculacionProveedorJuridico: string = this.endPointBase + "/juridico";
  public endPointAprobarProveedor: string = this.endPointBase + "/proveedores/aprobar";
  public endPointPasaraSupervisor: string = this.endPointBase + "/proveedores/pasar-supervisor";
  public endPointConsultarFormPena: string = this.endPointBase + "/ver-formulario/";
  public endPointConsultarFormPeju: string = this.endPointBase + "/ver-formulario/";
  public endPointVerPDF: string = this.endPointBase + "/ver-pdf/";


   constructor(
    private _httpClient: HttpClient,
    private generalModel: GeneralModel
  ) { }

  registroProveedorNatural(regitroPersonaNaturalModel: RegitroPersonaNaturalModel): Observable<ResponseApi> {
    return this._httpClient.post<ResponseApi>(this.urlApiPro + this.endPointVinculacionProveedorNatural, regitroPersonaNaturalModel);
  }

  registroProveedorJuridico(regitroPersonaJuridicoDTO: RegitroPersonaJuridicaModel): Observable<ResponseApi> {
    return this._httpClient.post<ResponseApi>(this.urlApiPro + this.endPointVinculacionProveedorJuridico, regitroPersonaJuridicoDTO);
  }

  aprobarProveedor(proveedor: AprobarProveedorDTO): Observable<ResponseApi> {
    return this._httpClient.post<ResponseApi>(this.urlApiPro + this.endPointAprobarProveedor, proveedor);
  }

  pasaraSupervisor(proveedor: AprobarProveedorDTO): Observable<ResponseApi> {
    return this._httpClient.post<ResponseApi>(this.urlApiPro + this.endPointPasaraSupervisor, proveedor);
  }

  cargarInformacionFormularioPena(tipoFormulario: string, viprId: string): Observable<ResponseApi> {
    return this._httpClient.get<ResponseApi>(this.urlApiPro + this.endPointConsultarFormPena +  tipoFormulario + "/" +  viprId);
  }

  cargarInformacionFormularioPeju(tipoFormulario: string, viprId: string): Observable<ResponseApi> {
    return this._httpClient.get<ResponseApi>(this.urlApiPro + this.endPointConsultarFormPeju +  tipoFormulario + "/" +  viprId);
  }

  descargarArchivoPDF(tipoFormulario: string, viprId: string): Observable<ResponseApi> {
    return this._httpClient.get<ResponseApi>(this.urlApiPro + this.endPointVerPDF +  tipoFormulario + "/" +  viprId);
  }
}
