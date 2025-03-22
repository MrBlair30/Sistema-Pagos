import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TipoDePago } from '../model/estudiantes.model';
import { EstudianteService } from '../services/estudiante/estudiante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-pago',
  standalone: false,
  templateUrl: './nuevo-pago.component.html',
  styleUrl: './nuevo-pago.component.css'
})
export class NuevoPagoComponent implements OnInit{

  public formGroup!: FormGroup;
  public estudianteCodigo!: string;
  public tiposDePagos: string[] = [];
  public pdfFileUrl!: string;


  constructor(private activatedRoute:ActivatedRoute, private fb:FormBuilder, private estudianteService:EstudianteService){    
  }
  ngOnInit(): void {
    this.estudianteCodigo = this.activatedRoute.snapshot.params['codigo'];

    /*for(let elt in TipoDePago){
      let value = TipoDePago[elt];
      if(value == 'string'){
        this.tiposDePagos.push(value);
      }
    }*/
   this.tiposDePagos = Object.keys(TipoDePago).filter(key => isNaN(Number(key)));
    console.log(this.tiposDePagos);

    this.formGroup = this.fb.group({
      fecha: ['', Validators.required],
      cantidad: ['', Validators.required],
      tipoDePago: ['', Validators.required],
      codigoEstudiante: [this.estudianteCodigo, Validators.required],
      fileSource: ['', Validators.required],
      fileName: ['', Validators.required]
    });
  }

  selectFile(event:any){
    if(event.target.files.length > 0){
      let file = event.target.files[0];
      if(file.type === 'application/pdf'){
        this.formGroup.patchValue({
          fileSource: file,
          fileName: file.name
        });
        this.pdfFileUrl = window.URL.createObjectURL(file)
      }else{
        Swal.fire({
          title: "Error",
          text: "El archivo debe ser un pdf",
          icon: "error"
        });
      }
      
    }
  }

  public guardarPago():void{
    let date = new Date(this.formGroup.value.fecha);
    let fechaFormateada = date.toISOString().split('T')[0];

    let formData = new FormData();
    formData.set('fecha',fechaFormateada);
    formData.set('cantidad',this.formGroup.value.cantidad);
    formData.set('tipoDePago',this.formGroup.value.tipoDePago);
    formData.set('codigoEstudiante',this.formGroup.value.codigoEstudiante);
    formData.set('file',this.formGroup.value.fileSource);
    console.log(formData);

    this.estudianteService.guardarPago(formData).subscribe(
      data =>{
        Swal.fire({
          title: "Pago Guardado",
          text: "El pago ha sido guardado con exito",
          icon: "success"
        })
      },
      error => {
        Swal.fire({
          title: "Error",
          text: "Ha ocurrido un error al guardar el pago",
          icon: "error"
        })
      }
    )
  }

}
