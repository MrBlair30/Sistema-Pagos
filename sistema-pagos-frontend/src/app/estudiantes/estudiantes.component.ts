import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../model/estudiantes.model';
import { MatTableDataSource } from '@angular/material/table';
import { EstudianteService } from '../services/estudiante/estudiante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  standalone: false,
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent implements OnInit{

  public estudiantes!: Array<Estudiante>;
  public EstudianteDataSource!: MatTableDataSource<Estudiante>;
  public displayedColumns: string[] = ['id','nombre','apellido','codigo','programaId','pagosEstudiante'];

  constructor(private estudianteService:EstudianteService, private router:Router){
  }
  ngOnInit(): void {
    this.estudianteService.getAllEstudiantes().subscribe(
      data => {
        this.estudiantes = data;
        this.EstudianteDataSource = new MatTableDataSource(this.estudiantes);
      },
      error => {
        console.log(error);
      }
    )
  }

  public pagosDelEstudiante(estudiante:Estudiante):void{
    this.router.navigateByUrl(`admin/estudiante-detalles/${estudiante.codigo}`);
  } 

}
