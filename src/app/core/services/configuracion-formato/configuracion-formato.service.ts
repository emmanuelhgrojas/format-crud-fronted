import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../../interfaces/response-api-interface.';
import { FormatoDTO } from '../../models/configuracion-formato/configuracion-formato.model';
import { GeneralModel } from '../../models/general.model';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionFormatoService {
  public urlApiPro: string = this.generalModel.urlApi || "";
  public endPointBase: string = "formato";
  public endPointConsultarFormatoPorId: string = this.endPointBase + "/";
  public endPointGuardarInformacionFormato: string = this.endPointBase + "/guardar";

  constructor(
    private _httpClient: HttpClient,
    private generalModel: GeneralModel) { }

    consultarFormatoPorId(vajeId: string): Observable<ResponseApi> {
      return this._httpClient.get<ResponseApi>(this.urlApiPro + this.endPointConsultarFormatoPorId + vajeId);
    }

    guardarInformarcionFormato(formatoModel: FormatoDTO): Observable<ResponseApi> {
      return this._httpClient.post<ResponseApi>(this.urlApiPro + this.endPointGuardarInformacionFormato, formatoModel);
    }


    eliminarFormatoPorId(viajeId: string): Observable<ResponseApi> {
    return this._httpClient.delete<ResponseApi>(this.urlApiPro + this.endPointBase + "/" + viajeId);
  }
}
