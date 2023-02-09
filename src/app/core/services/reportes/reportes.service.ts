import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReporteExcel } from '../../interfaces/Reportes/reportes-interface';
import { ResponseApi } from '../../interfaces/response-api-interface.';
import { GeneralModel } from '../../models/general.model';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  public urlApiPro: string = this.generalModel.urlApi || "";
  public endPointBase: string = "reportes";
  public endPointReporteExcel: string = this.endPointBase + "/excel/";

  constructor(private _httpClient: HttpClient, private generalModel: GeneralModel) { }


  generarReporteExcel(reporteExcel: ReporteExcel): Observable<any> {
    return this._httpClient.get(this.urlApiPro + this.endPointReporteExcel + reporteExcel.fechaInicial + "/" + reporteExcel.fechaFinal);
  }
}
