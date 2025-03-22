import { Component, OnInit, ViewChild } from '@angular/core';
import { EstudianteService } from '../services/estudiante/estudiante.service';
import { Pago } from '../model/estudiantes.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estudiante-detalles',
  standalone: false,
  templateUrl: './estudiante-detalles.component.html',
  styleUrl: './estudiante-detalles.component.css'
})
export class EstudianteDetallesComponent implements OnInit{

  public pagos!: Array<Pago>;
  public dataSource!: MatTableDataSource<Pago>;
  public displayedColumns: string[] = ['id', 'cantidad', 'fecha', 'tipo', 'estado', 'nombre'];
  public estudianteCodigo!: string;

  constructor(private estudianteService:EstudianteService, private activatedRoute:ActivatedRoute, private router:Router){    
  }
  ngOnInit(): void {
    this.estudianteCodigo = this.activatedRoute.snapshot.params['codigo'];        
    this.estudianteService.getPagosPorEstudiante(this.estudianteCodigo).subscribe(
      data => {
        this.pagos = data;
        console.log(this.pagos);
        this.dataSource = new MatTableDataSource(this.pagos);
      },
      error => {
        console.log(error);
      }
    )
  }

  public agregarPago():void{
    this.router.navigateByUrl(`/admin/nuevo-pago/${this.estudianteCodigo}`);
  }

}
