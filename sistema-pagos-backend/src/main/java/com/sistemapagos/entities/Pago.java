package com.sistemapagos.entities;

import java.time.LocalDate;

import com.sistemapagos.enums.PagoStatus;
import com.sistemapagos.enums.TipoPago;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pago {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate fecha;

    private double cantidad;

    private TipoPago tipoDePago;

    private PagoStatus estadoDePago;

    private String file;

    @ManyToOne
    private Estudiante estudiante;

}
