package com.sistemapagos.controladores;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sistemapagos.entities.*;
import com.sistemapagos.enums.*;
import com.sistemapagos.repositorios.*;
import com.sistemapagos.services.PagoService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class PagoController {

    @Autowired
    private EstudianteRepositorio estudianteRepositorio;
    
    @Autowired
    private PagoRepositorio pagoRepositorio;

    @Autowired
    private PagoService pagoService;



    // Métodos para estudiantes
    @GetMapping("/estudiantes")
    public List<Estudiante> listarEstudiantes(){
        return estudianteRepositorio.findAll();
    }

    @GetMapping("/estudiantes/{codigo}")
    public Estudiante listarEstudiantePorCodigo(@PathVariable String codigo){
        return estudianteRepositorio.findByCodigo(codigo);
    }

    @GetMapping("/estudiantesPorPrograma")
    public List<Estudiante> listarEstudiantesPorPrograma(@RequestParam String programaId){
        return estudianteRepositorio.findByProgramaId(programaId);
    }


    // Métodos para pagos
    @GetMapping("/pagos")
    public List<Pago> listarPagos(){
        return pagoRepositorio.findAll();
    }

    @GetMapping("/pagos/{id}")
    public Pago listarPagoPorId(@PathVariable Long id){
        return pagoRepositorio.findById(id).get();
    }

    @GetMapping("/estudiante/{codigo}/pagos")
    public List<Pago> listarPagosPorEstudiante(@PathVariable String codigo){
        return pagoRepositorio.findByEstudianteCodigo(codigo);
    }

    @GetMapping("/pagosPorEstado")
    public List<Pago> listarPagosPorEstado(@RequestParam PagoStatus estado){
        return pagoRepositorio.findByEstadoDePago(estado);
    }

    @GetMapping("/pagosPorTipo")
    public List<Pago> listarPorTipoDePago(@RequestParam TipoPago tipoPago){
        return pagoRepositorio.findByTipoDePago(tipoPago);
    }
    
    @PutMapping("pagos/{id}/actualizarEstadoPago")
    public Pago actualizarEstadoPago(@RequestParam PagoStatus estado, @PathVariable Long id){
        return pagoService.actualizarEstadoPago(estado, id);
    }       
    
    @PostMapping(path = "/pagos", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Pago guardarPago(@RequestParam MultipartFile file, double cantidad, TipoPago tipoDePago, LocalDate fecha, String codigoEstudiante) throws IOException{
        return pagoService.guardarPago(file, cantidad, tipoDePago, fecha, codigoEstudiante);
    }

    @GetMapping(value = "/archivoDePago/{id}", produces = MediaType.APPLICATION_PDF_VALUE)
    public byte[] listarArchivoPorId(@PathVariable Long id) throws IOException{
        return pagoService.getArchivoPorId(id);
    }

}
