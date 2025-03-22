package com.sistemapagos.entities;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Estudiante {

    @Id
    private String id;

    private String nombre;

    private String apellido;
    @Column(unique = true)
    private String codigo;

    private String programaId;

    private String foto;

}
