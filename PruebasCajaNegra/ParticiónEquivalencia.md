# Técnica de Caja Negra: Participación de Equivalencia

**Objetivo:** Probar diferentes clases de datos para asegurar que el sistema maneje de manera consistente entradas similares.

| Caso de Prueba | Descripción                               | Entrada                                                    | Acción                                      | Resultado Esperado                                               |
|----------------|-------------------------------------------|------------------------------------------------------------|---------------------------------------------|-------------------------------------------------------------------|
| 1              | Clase Válida                              | Nombre y apellido válidos                                   | Registrar en el formulario de registro      | El sistema acepta y registra los datos correctamente.             |
| 2              | Clase Inválida (Límite Inferior)          | Nombre o apellido vacío                                     | Intentar registrar en el formulario        | El sistema muestra un mensaje de error indicando campos obligatorios. |
| 3              | Clase Inválida (Límite Superior)          | Nombre o apellido extremadamente largo que excede el límite de caracteres | Intentar registrar en el formulario        | El sistema muestra un mensaje de error indicando límite de caracteres excedido. |
| 4              | Clase Inválida (Formato Incorrecto)       | Ingresar caracteres especiales en lugar de letras            | Intentar registrar en el formulario        | El sistema muestra un mensaje de error indicando formato de entrada incorrecto. |
