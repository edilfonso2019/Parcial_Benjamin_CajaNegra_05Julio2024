# Técnica de Caja Negra: Tabla de Decisión

**Objetivo:** Probar diferentes combinaciones de condiciones para asegurar que el sistema maneje correctamente las decisiones lógicas.

## Caso de Prueba: Agregar Motos al Carrito de Compras

| Caso | Condiciones a Evaluar                     | Entrada                        | Acción                          | Resultado Esperado                                              |
|------|------------------------------------------|--------------------------------|---------------------------------|------------------------------------------------------------------|
| 1    | Usuario autenticado                      | Moto seleccionada              | Hacer clic en "Agregar al carrito" | La moto se agrega al carrito y se muestra un mensaje de confirmación. |
| 2    | Usuario no autenticado                   | Moto seleccionada              | Hacer clic en "Agregar al carrito" | El sistema redirige al usuario a la página de inicio de sesión.  |
| 3    | Moto no seleccionada                     | Cualquier usuario              | Hacer clic en "Agregar al carrito" | El sistema muestra un mensaje de error indicando que debe seleccionar una moto. |
| 4    | Moto agotada en inventario               | Usuario autenticado            | Hacer clic en "Agregar al carrito" | El sistema muestra un mensaje de error indicando que la moto está agotada. |
| 5    | Usuario autenticado, pero carrito lleno  | Moto seleccionada              | Hacer clic en "Agregar al carrito" | El sistema muestra un mensaje de error indicando que el carrito está lleno. |
