package com.sistemapagos.DTOs;

import java.time.LocalDate;

import com.sistemapagos.enums.TipoPago;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PagoDTO {
    
    private double cantidad;
    private TipoPago tipoDePago;
    private LocalDate fecha;
    private String codigoEstudiante;

}