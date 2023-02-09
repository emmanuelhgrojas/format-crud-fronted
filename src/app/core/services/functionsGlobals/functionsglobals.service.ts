//Import Libraries Interns
import { Injectable } from '@angular/core';

//Import Libraries Externs
import Swal, { SweetAlertIcon } from 'sweetalert2'
import { MENSAJES_APP } from '../../constants/mensajes-app';
import { ObjectArchivo } from '../../models/objeto-archivo.model';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class FunctionsGlobalsService {

        sweetAlert: any;
        codeSuccess: number = 200;
        codeError: number = 400;
        codeWarning: number = 20;
        codeInfo: number = 21;
        codeQuestion: number = 22;

        constructor() { }


        closeAlertRequest(){
                Swal.close();
        }

        showListErrorsMessageRequest(message: string): string {
                let listErrors: Array<string> = [];
                let newMessage = '';
                if(message) {
                        listErrors = message.split(";");
                        (listErrors).map((error, index) => {
                                let separatorError = (index < (listErrors.length - 1)) ? ', ' : '';
                                newMessage += error + separatorError;
                        });
                }
                return newMessage;
        }

        async encodeFileToBase64(event: any) {
                try {
                        let listaArchivos: Array<any> = [];
                        let archivos = event.target.files;
                        if (archivos && archivos.length > 0) {
                                await Promise.all(Array.from(archivos).map(async (file, key) => {
                                        listaArchivos.push(await this.leerArchivo(file));
                                }));
                                return listaArchivos;
                        }
                        return null;
                } catch (e: any) {
                        console.warn(e.message)
                        return null;
                }
        }

        obtenerInformacionArchivo(archivo: any) {
                let objectArchivo: ObjectArchivo = new ObjectArchivo();
                objectArchivo.formatoArchivo = (archivo.name).split(".").pop();
                objectArchivo.nombreArchivo = ((archivo.name).replace(objectArchivo.formatoArchivo, "")).replace(".", "");
                objectArchivo.nombreArchivo = objectArchivo.nombreArchivo.replace(new RegExp(" ", "g"), "_");
                objectArchivo.tipoArchivo = archivo.type;
                objectArchivo.tamanoArchivo = archivo.size;
                return objectArchivo;
        }

        async leerArchivo(fileEvent: any) {
                return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(fileEvent);
                        reader.onload = (e) => {
                                resolve((<string>reader.result).split(','));
                        };
                        reader.onerror = () => {
                                reject(new Error('Unable to read..'));
                        };
                });
        }

        showConfirmationMessageRequest(){

        }

        showMessageRequest(typeMessage: number, title: string, message: string, stateRequest: number, callback: any){
                title = (title) ? title : 'Procesando Petición';
                message = (message) ? message : 'Por favor espere...';
                typeMessage = (typeMessage) ? typeMessage : 1;
                callback = (callback) ? callback : () => {};
                let state: SweetAlertIcon = 'error';
                switch(stateRequest){
                        case this.codeSuccess:
                                state = 'success';
                                break;
                        case this.codeError:
                        case 404:
                        case 409:
                                state = 'error';
                                break;
                        case this.codeWarning:
                                state = 'warning';
                                break;
                        case this.codeInfo:
                                state = 'info';
                                break;
                        case this.codeQuestion:
                                state = 'question';
                                break;
                        default:
                                state = 'error';
                                break;
                }

                if(typeMessage == 1){
                        Swal.fire(title, message, state).then(() => { callback(); });
                }else if(typeMessage == 2){                 
                        Swal.fire({
                        title: title,
                        showConfirmButton: false,
                        text: message,
                        imageUrl: './assets/images/spinners/spinner-v1_1.gif',
                        imageWidth: 80,
                        imageHeight: 80,
                        imageAlt: 'Loading...',
                        allowOutsideClick: false,
                        });
                }
        }

        showMessageConsole(mensaje: string, typeMessage: string) {
                switch (typeMessage) {
                        case 'warn':
                                console.warn(mensaje);
                                break;
                }
        }

        showMessageErrorAlert(metodoPrincipal: string, metodoPeticion: string, responseRequestError: any) {
                let mensajeError = (responseRequestError.name == "HttpErrorResponse") ? MENSAJES_APP.errorConnectionRefusedServer : MENSAJES_APP.errorServidor; 
                this.showMessageRequest(1, MENSAJES_APP.tituloError, mensajeError, responseRequestError.status, null);
                this.showMessageConsole(MENSAJES_APP.errorServidor + " MetodoPrincipal => ["+ metodoPrincipal +"] MetodoPeticion => ["+ metodoPeticion +"]", "warn");
        }

        

        completarObjetoFecha(objetoFecha: number){
                return (objetoFecha < 10) ? 0 + objetoFecha : objetoFecha;                
        }

        formatearNgbDatepickerToFecha(fechaNgbDateStruct: NgbDateStruct){
                let monthFull = this.completarObjetoFecha(fechaNgbDateStruct.month);
                let dateFull = this.completarObjetoFecha(fechaNgbDateStruct.day);
                return fechaNgbDateStruct.year + "-" + monthFull + "-" + dateFull;
        }



        completarObjetoFechaString(objetoFecha: number){
                return (objetoFecha < 10) ? "0" + objetoFecha : objetoFecha;                
        }

        formatearNgbDatepickerToFechaString(fechaNgbDateStruct: NgbDateStruct){
                let monthFull = this.completarObjetoFechaString(fechaNgbDateStruct.month).toString();
                let dateFull = this.completarObjetoFechaString(fechaNgbDateStruct.day).toString();
                return fechaNgbDateStruct.year + "-" + monthFull + "-" + dateFull;
        }

        formatearFechaToNgbDatepicker(fechaString:string){
                const fechaDate: Date = new Date(fechaString);
                let monthFull = this.completarObjetoFecha(fechaDate.getMonth()+1);
                let dateFull = this.completarObjetoFecha(fechaDate.getDate());
                return { "year": fechaDate.getFullYear(), "month": monthFull, "day": dateFull }
        }

        formatearFecha(fecha: Date){
                const dt = new Date(fecha);
                const padL = (nr: any, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);            
                return `${dt.getFullYear()}-${padL(dt.getMonth()+1)}-${padL(dt.getDate())}`;
        }

        formatearFechaConHora(fecha: Date){
                const dt = new Date(fecha);
                const padL = (nr: any, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);            
                return `${
                        padL(dt.getMonth()+1)}/${
                        padL(dt.getDate())}/${
                        dt.getFullYear()} ${
                        padL(dt.getHours())}:${
                        padL(dt.getMinutes())}:${
                        padL(dt.getSeconds())}`;
        }

        manageExcelFile(response: any, fileName: string): void{
                console.log(response);
                console.log(response.type);
                const dataType = response.type;
                const binaryData = [];
                binaryData.push(response);
                const filePath = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}))
                const downloadLink = document.createElement('a');
                downloadLink.href = filePath;
                downloadLink.setAttribute('download', fileName);
                document.body.appendChild(downloadLink);
                downloadLink.click();
        }

        convertirBase64aFile(tipo:any, base64:any, fileName:any) {
                let linkSource = "";
                if (tipo === 'docx') {
                        linkSource = 'data:application/msword;base64,' + base64;
                } else if (tipo === 'pdf') {
                        linkSource = 'data:application/octet-stream;base64,' + base64;
                }
                const downloadLink = document.createElement('a');
                downloadLink.href = linkSource;
                downloadLink.download = fileName;
                downloadLink.click();
        }
}
