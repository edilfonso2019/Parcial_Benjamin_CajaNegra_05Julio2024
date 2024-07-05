## Caso de Prueba: Estado de Transición al Agregar Motos al Carrito de Compras

Diagrama de transición de estado

En el diagrama, cada vez que el usuario intenta agregar una moto al carrito, se evalúa el estado actual del carrito y la acción realizada.

Tabla de transición de estado

| Estado Inicial                 | Acción                                 | Estado Final                             | Resultado Esperado                                                                        |
| ------------------------------ | -------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| Start: Carrito vacío           | Hacer clic en "Agregar al carrito"     | S1) Moto agregada al carrito             | El sistema muestra un mensaje de confirmación y la moto se agrega al carrito.             |
| S1: Moto agregada al carrito   | Hacer clic en "Agregar al carrito"     | S2) Agregar otra moto al carrito         | El sistema agrega la segunda moto al carrito sin eliminar la primera.                     |
| S2) Carrito con varias motos   | Hacer clic en "Eliminar" para una moto | S3)Eliminar una moto del carrito         | El sistema elimina la moto seleccionada del carrito y muestra un mensaje de confirmación. |
| S4) Usuario no autenticado     | Intentar agregar una moto al carrito   | S5) Redirige al usuario a iniciar sesión | El sistema redirige al usuario a la página de inicio de sesión.                           |
| S6) Moto agotada en inventario | Intentar agregar al carrito            | S6) Muestra un mensaje de error          | El sistema muestra un mensaje de error indicando que la moto está agotada.                |
