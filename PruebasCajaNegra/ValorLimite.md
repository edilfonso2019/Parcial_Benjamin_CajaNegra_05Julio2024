# Técnica de Caja Negra: Análisis de Valor Límite

**Objetivo:** Probar los límites y valores cercanos a los límites para identificar errores que podrían estar presentes en los bordes de los rangos.

| Caso de Prueba | Descripción                               | Entrada                                                    | Acción                                      | Resultado Esperado                                               |
|----------------|-------------------------------------------|------------------------------------------------------------|---------------------------------------------|-------------------------------------------------------------------|
| 1              | Límite Inferior                            | Valor mínimo permitido                                     | Ingresar el valor mínimo permitido         | El sistema procesa correctamente el valor mínimo sin errores.       |
| 2              | Justo por Encima del Límite Inferior       | Valor justo superior al límite inferior                     | Ingresar un valor justo superior           | El sistema procesa correctamente el valor sin errores.               |
| 3              | Límite Superior                            | Valor máximo permitido                                     | Ingresar el valor máximo permitido         | El sistema procesa correctamente el valor máximo sin errores.       |
| 4              | Justo por Debajo del Límite Superior       | Valor justo inferior al límite superior                     | Ingresar un valor justo inferior           | El sistema procesa correctamente el valor sin errores.               |
| 5              | Dentro del Rango Válido                    | Valor dentro del rango válido                              | Ingresar un valor dentro del rango válido  | El sistema procesa correctamente el valor sin errores.               |
| 6              | Límite Inferior Inválido                   | Valor inferior al límite mínimo permitido                   | Ingresar un valor inferior al límite       | El sistema muestra un mensaje de error indicando valor fuera de límite. |
| 7              | Límite Superior Inválido                   | Valor superior al límite máximo permitido                   | Ingresar un valor superior al límite       | El sistema muestra un mensaje de error indicando valor fuera de límite. |
