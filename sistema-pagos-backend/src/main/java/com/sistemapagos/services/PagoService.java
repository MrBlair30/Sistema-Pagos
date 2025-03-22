package com.sistemapagos.services;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.sistemapagos.entities.*;
import com.sistemapagos.enums.PagoStatus;
import com.sistemapagos.enums.TipoPago;
import com.sistemapagos.repositorios.EstudianteRepositorio;
import com.sistemapagos.repositorios.PagoRepositorio;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PagoService{
    
    @Autowired
    private PagoRepositorio pagoRepositorio;

    @Autowired
    private EstudianteRepositorio estudianteRepositorio;




    
    // Método para crear un archivo dentro de un directorio (también creado) el cual contiene los datos del pago y se guarda el pago
    public Pago guardarPago(MultipartFile file, double cantidad, TipoPago tipoDePago, LocalDate fecha, String codigoEstudiante) throws IOException{
        // Ruta de la carpeta donde se guardará el pago
        Path rutaCarpeta = Paths.get(System.getProperty("user.home"), "enset-data","pagos");

        if(!Files.exists(rutaCarpeta)){// Si el directorio/carpeta no existe, se crea
            Files.createDirectories(rutaCarpeta);// Se crea el directorio
        }

        String nombreArchivo = UUID.randomUUID().toString();// Nombre aleatorio para el archivo con números del 1 a F(Hex)

        // Ruta donde se creará el archivo
        Path rutaArchivo = Paths.get(System.getProperty("user.home"),"enset-data","pagos",nombreArchivo+".pdf");

        // Con file.getInputStream() se optienen los datos del pago de la petición HTTP
        // Se copian los datos recibidos del pago con la solicitud HTTP al nuevo archivo creado (nombreArchivo/rutaArchivo)
        Files.copy(file.getInputStream(), rutaArchivo);

        Estudiante estudiante = estudianteRepositorio.findByCodigo(codigoEstudiante);//Se obtiene el estudiante por su id

        Pago pago = Pago.builder()// el builder() es como usar un constructor tradicional, pero este es mas flexible y legible
            .tipoDePago(tipoDePago)
            .cantidad(cantidad)
            .estadoDePago(PagoStatus.CREADO)
            .fecha(fecha)
            .estudiante(estudiante)
            .file(rutaArchivo.toUri().toString())
            .build();


        return pagoRepositorio.save(pago);// Retorna el archivo y lo guarda
    }






 
    
    // Método para obtener el archivo de pago generado, por el ID del Pago
    public byte[] getArchivoPorId(Long id) throws IOException{
        Pago pago = pagoRepositorio.findById(id).get();// Se obtiene el pago por su ID

        return Files.readAllBytes(Path.of(URI.create(pago.getFile())));
    }








    // Método para actualizar el estado de un pago realizado
    public Pago actualizarEstadoPago(PagoStatus estadoNuevo, Long pagoId){
        Pago pago = pagoRepositorio.findById(pagoId).get();// Obtenemos el pago a través de su ID
        pago.setEstadoDePago(estadoNuevo);// Actualizamos el estado del pago obtenido

        return pagoRepositorio.save(pago);// Retornamos y guardamos el pago con su nuevo estado
    }

}
