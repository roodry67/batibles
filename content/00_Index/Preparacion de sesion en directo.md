---
tipo: indice
estado: activo
tags:
  - indice
  - sesion
  - directo
---

# Preparacion de sesion en directo

## Antes de empezar

- Crear la sesion con QuickAdd: `Sesion`.
- Comprobar que el numero `S###` se ha calculado bien.
- Comprobar que `## Recap anterior` embebe el resumen de la sesion anterior.
- Dejar abierta la nota nueva y tomar apuntes principalmente en `## Log de sesion` o `## Notas rapidas durante partida`.

## Durante la sesion

Cuando aparezca algo nuevo, usar QuickAdd desde la nota de sesion activa:

- `NPC`: crea la nota en `03_Personajes/NPCs` e inserta el link.
- `Lugar`: crea la nota en `04_Lugares` e inserta el link.
- `Faccion`: crea la nota en `05_Facciones` e inserta el link.
- `Criatura`: crea la nota en `09_Criaturas` e inserta el link.
- `Objeto`: crea la nota en `08_Objetos_y_Magia` e inserta el link.
- `Lore`: crea la nota en `10_Lore_e_Historia` e inserta el link.

Las notas creadas asi quedan marcadas con `TODO: ACTUALIZAR tras la sesion.` para poder localizarlas despues.

## Despues de la sesion

Pedir a Codex:

> actualiza el vault con la ultima sesion

Codex debe:

- Leer la ultima sesion completa.
- Procesar las notas nuevas marcadas con `TODO: ACTUALIZAR tras la sesion.`
- Propagar informacion a NPCs, lugares, facciones, objetos, criaturas, tramas, agenda y pistas.
- Actualizar [[Agenda actual]] y [[Pistas y preguntas]].
- Preguntar antes de borrar informacion relevante, fusionar notas, cerrar tramas o decidir identidades dudosas.
- Pasar auditoria de enlaces al final.

## Comandos utiles de revision

- Ver que hay que rellenar: buscar `TODO: ACTUALIZAR tras la sesion.`
- Consultar estado de partida: [[Estado actual de la campaña]]
- Consultar agenda: [[Agenda actual]]
- Consultar dudas abiertas: [[Pistas y preguntas]]
- Consultar sesiones: [[Log de sesiones]]

## Criterio

Durante la partida prima capturar el dato y crear el enlace. La redaccion buena viene despues, siguiendo el [[Protocolo de consolidacion de notas]].
