package com.sistemapagos.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistemapagos.entities.Estudiante;

@Repository
public interface EstudianteRepositorio extends JpaRepository<Estudiante, String>{

    Estudiante findByCodigo(String codigo);

    List<Estudiante> findByProgramaId(String programaId);

}
