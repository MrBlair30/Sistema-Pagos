package com.sistemapagos.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistemapagos.entities.Pago;
import com.sistemapagos.enums.PagoStatus;
import com.sistemapagos.enums.TipoPago;

@Repository
public interface PagoRepositorio extends JpaRepository<Pago, Long>{
    
    List<Pago> findByEstudianteCodigo(String estudianteCodigo);

    List<Pago> findByEstadoDePago(PagoStatus pagoStatus);

    List<Pago> findByTipoDePago(TipoPago tipoPago);

}