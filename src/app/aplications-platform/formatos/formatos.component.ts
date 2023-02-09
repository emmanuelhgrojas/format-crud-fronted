import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DataTable } from 'simple-datatables';
import { LANGUAGE_DATATABLE } from 'src/app/core/constants/languages-datatables';
import { MENSAJES_APP } from 'src/app/core/constants/mensajes-app';
import { GeneralModel } from 'src/app/core/models/general.model';
import { ConfiguracionFormatoService } from 'src/app/core/services/configuracion-formato/configuracion-formato.service';
import { FunctionsGlobalsService } from 'src/app/core/services/functionsGlobals/functionsglobals.service';
import Swal from 'sweetalert2';


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-formatos',
  templateUrl: './formatos.component.html',
  styleUrls: ['./formatos.component.css']
})
export class FormatosComponent implements OnInit {

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  public dataTable!: DataTable;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  datatableElement: DataTableDirective;
  dtInstance: DataTables.Api;

  public urlApi: string = this.generalModel.urlApi || "";


  
  constructor( private router: Router, private generalModel: GeneralModel, private http: HttpClient, 
    private modalService: NgbModal, 
    private functionsGlobalsService: FunctionsGlobalsService,
    private configuracionFormatoService:ConfiguracionFormatoService) { }
    
  ngOnInit(): void {

    const that = this;
    this.dtOptions = {
      paging: true,
        ordering: true,
        info: true,
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthChange : true,
      serverSide: true,
      processing: true,
      language: LANGUAGE_DATATABLE,
      destroy:true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(this.urlApi + 'formato/', dataTablesParameters, {}).subscribe(resp => {
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: resp.data,
            });
          });
      },
      drawCallback: function(settings) {
      },
      columns: [
        { title: "pais", data: 'formatoPaisResidencia' }, 
        { title: "nacionalidad", data: 'formatoNacionalidad' }, 
        { title: "sexo", data: 'formatoSexo' },
        { title: "edad", data: 'formatoEdad' },
        { 
          title: "Acciones", defaultContent: "<button type='button' title='Editar Formato' alt='Editar Formato' class='form btn btn-success btn-xs mr-1 editarFormato'><i class='feather icon-edit'></i></button>"+
          "<button type='button' title='Eliminar Formato' alt='Eliminar Formato' class='form btn btn-danger btn-xs eliminarFormato'><i class='feather icon-trash'></i></button>",
          
          createdCell: function(cell: any, cellData: any, rowData: any, rowIndex: any, colIndex: any) {
            $(cell).find('.editarFormato').click(function() {
              that.router.navigate(['/formato', rowData.viajeId]);     
            });
            $(cell).find('.eliminarFormato').click(function() {
              that.eliminarFormato(rowData, that);
            });
          }
        }   
      ]
    };    
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(0);  
  }

  rerender(): void {
    try {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
         dtInstance.ajax.reload();
      });
    } catch (err) {
      console.log(err);
    }
  }

  eliminarFormato(rowData: any, that: any){
    Swal.fire({
      title: '¿Desea eliminar el formato?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        that.functionsGlobalsService.showMessageRequest(2, "", "", 0, "");
        that.configuracionFormatoService.eliminarFormatoPorId(rowData.viajeId).subscribe({ next: (responseRequest: any) => {       
            that.functionsGlobalsService.closeAlertRequest();               
            that.functionsGlobalsService.showMessageRequest(1, MENSAJES_APP.tituloAlerta || "", responseRequest.message || "", responseRequest.status, null);
            if(responseRequest.status == 200){   
              that.rerender();
            }else{}
          }, error: (responseRequestError: any) => { 
            that.functionsGlobalsService.closeAlertRequest();
            if(responseRequestError){        
              that.functionsGlobalsService.showMessageErrorAlert("ngOnInit()", "eliminarFormatoPorId()", responseRequestError);
            }                
          }, complete: () => { 
            //this.functionsGlobalsService.closeAlertRequest();     
          } 
        }); 
      } 
    })
  }

  nuevoFormato(){
    this.router.navigate(['/formato']);
  }
}
