package com.sistemapagos;
import java.time.LocalDate;
import java.util.UUID;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.sistemapagos.entities.Estudiante;
import com.sistemapagos.entities.Pago;
import com.sistemapagos.enums.PagoStatus;
import com.sistemapagos.enums.TipoPago;
import com.sistemapagos.repositorios.EstudianteRepositorio;
import com.sistemapagos.repositorios.PagoRepositorio;

@SpringBootApplication
public class SistemaPagosBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SistemaPagosBackendApplication.class, args);		
	}

	// Método que se ejecuta seguidamente después de que inicia el programa
	/*@Bean
	CommandLineRunner runner(EstudianteRepositorio estudianteRepositorio, PagoRepositorio pagoRepositorio){
		return args -> {
			// Creamos 4 estudiantes
			estudianteRepositorio.save(Estudiante.builder()
			.id(UUID.randomUUID().toString())
			.nombre("Blair")
			.apellido("Delgado")
			.codigo("12345")
			.programaId("SW1")
			.build()
			);

			estudianteRepositorio.save(Estudiante.builder()
			.id(UUID.randomUUID().toString())
			.nombre("Blas")
			.apellido("Cornejo")
			.codigo("23454")
			.programaId("SW2")
			.build()
			);

			estudianteRepositorio.save(Estudiante.builder()
			.id(UUID.randomUUID().toString())
			.nombre("Luis")
			.apellido("Hernandez")
			.codigo("09172")
			.programaId("SW1")
			.build()
			);

			estudianteRepositorio.save(Estudiante.builder()
			.id(UUID.randomUUID().toString())
			.nombre("Patricio")
			.apellido("Perez")
			.codigo("1258")
			.programaId("SW3")
			.build()
			);


			TipoPago tiposDePago[] = TipoPago.values();
			PagoStatus estadosDePago[] = PagoStatus.values();

			// Recorremos la lista de estudiantes para asignarles pagos a cada uno
			estudianteRepositorio.findAll().forEach(estudiante -> {
				for(int i = 0; i < 10; i++){ // Asignamos 10 pagos alealorios a los 4 estudiantes que creamos anteriormente
					int indexTP = (int) (Math.random()*tiposDePago.length);
					int indexEP = (int) (Math.random()*estadosDePago.length);
					Pago pago = Pago.builder()
					.cantidad((int) (Math.random()*10000))
					.tipoDePago(tiposDePago[indexTP])
					.estadoDePago(estadosDePago[indexEP])
					.fecha(LocalDate.now())
					.estudiante(estudiante)
					.build();
					pagoRepositorio.save(pago);
				}
				
			});
		};
	}
	*/

}
