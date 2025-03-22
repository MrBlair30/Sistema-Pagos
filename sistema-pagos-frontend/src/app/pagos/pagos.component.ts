import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EstudianteService } from '../services/estudiante/estudiante.service';
import { Pago } from '../model/estudiantes.model';

@Component({
  selector: 'app-pagos',
  standalone: false,
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent implements OnInit{

  public pagos!: Array<Pago>;
  public dataSource!: MatTableDataSource<Pago>;
  public displayedColumns: string[] = ['id', 'cantidad', 'fecha', 'tipo', 'estado', 'nombre'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private estudianteService:EstudianteService){

  }  
  ngOnInit(): void {
    this.estudianteService.getAllPagos().subscribe(
      data => {
        this.pagos = data;
        console.log(this.pagos);
        this.dataSource = new MatTableDataSource(this.pagos);  
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    )

  }



}
