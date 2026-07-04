---
tipo: protocolo
icon: LiClipboardCheck
iconColor: "#64748b"
estado: activo
tags:
  - protocolo
  - vault
---

# Protocolo de consolidacion de notas

Este protocolo sirve para convertir una nota incompleta, generada de forma automatica o marcada con `TODO`, en una nota util de consulta para la campana. La idea es que Codex no use solo la informacion escrita en la propia nota, sino que revise todo el vault organizado para recoger y propagar la informacion relevante.

## Cuándo usarlo

Usar este protocolo cuando el usuario pida cosas como:

- "haz lo propio con la nota de X"
- "consolida la nota de X"
- "revisa X siguiendo el protocolo"
- "rellena esta nota a partir del vault"

## Objetivo

- Redactar la nota objetivo como una nota canonica y util.
- Integrar la informacion del `TODO` escrito por el usuario.
- Buscar menciones de la nota objetivo en sesiones, tramas, personajes, lugares, facciones, objetos, criaturas y agenda.
- Distinguir hechos confirmados, hipotesis, rumores y dudas.
- Propagar solo la informacion necesaria a notas conectadas.
- Dejar pistas y preguntas en las notas de agenda cuando haya asuntos jugables abiertos.

## Regla principal

El protocolo esta orientado a añadir y consolidar informacion, no a borrar contenido narrativo.

Codex puede eliminar contenido no sustantivo:

- `TODO` ya integrado.
- Placeholders vacios de plantilla.
- Secciones de `Apariciones` y `Tramas asociadas` si ya no aportan valor y la informacion ha sido consolidada en el cuerpo de la nota.
- Bullets vacios o restos mecanicos de generacion.

Codex debe preguntar antes de:

- Borrar informacion relevante.
- Fusionar notas.
- Renombrar notas.
- Eliminar notas.
- Cerrar tramas.
- Crear nuevas tramas importantes.
- Decidir identidades dudosas.
- Sobrescribir una interpretacion antigua cuando pueda convivir con una nueva como hipotesis o rumor.

`FUENTES BRUTAS` se puede consultar, pero no editar salvo instruccion explicita.

## Flujo de trabajo

1. Leer la nota objetivo completa.

   Revisar frontmatter, resumen, informacion confirmada, hipotesis, dudas, apariciones, tramas asociadas y cualquier `TODO` escrito por el usuario.

2. Buscar menciones en el vault organizado.

   Usar busqueda textual para localizar enlaces y menciones por nombre, alias y variantes de escritura. Priorizar:

   - `02_Sesiones`
   - `03_Personajes`
   - `04_Lugares`
   - `05_Facciones`
   - `06_Tramas_y_Open_Loops`
   - `07_Agenda`
   - `08_Objetos_y_Magia`
   - `09_Criaturas`
   - `10_Lore_e_Historia`
   - `00_Index` y `01_Actos` si ayudan a entender contexto

3. Consultar fuentes brutas solo como apoyo.

   Si el vault organizado no basta o hay contradicciones, leer los documentos relevantes de `FUENTES BRUTAS`, especialmente arcos, log maestro y notas tematicas. No modificar esos documentos.

4. Extraer informacion por categorias.

   Separar:

   - Hechos confirmados.
   - Versiones de personajes.
   - Rumores.
   - Hipotesis del grupo.
   - Dudas abiertas.
   - Relaciones importantes.
   - Consecuencias jugables.

5. Reescribir la nota objetivo.

   La estructura puede adaptarse al tipo de nota, pero normalmente funciona:

   - `## Resumen`
   - `## Estado actual` si aplica.
   - `## Informacion confirmada`
   - `## Relaciones` si es personaje, faccion u objeto.
   - `## Cronologia` o `## Pasado` si la historia importa.
   - `## Hipotesis`
   - `## Dudas`

   Evitar que la nota sea solo una lista de apariciones. La nota debe contar que sabemos y para que sirve.

6. Integrar el `TODO`.

   Todo lo que el usuario haya escrito como `TODO` debe incorporarse al cuerpo de la nota si encaja. Una vez integrado, borrar el `TODO` de esa nota.

7. Propagar informacion pertinente.

   Actualizar otras notas solo con lo necesario para que el grafo tenga sentido. No aplicar el protocolo completo a cada nota conectada salvo que el usuario lo pida.

   Ejemplos:

   - En un NPC conectado, añadir una relacion breve.
   - En un lugar, añadir el hecho historico o politico relevante.
   - En una faccion, añadir pertenencias, conflictos o responsabilidades.
   - En un objeto, añadir quien lo tiene, para que sirve o quien lo busca.
   - En una trama, convertir la informacion en preguntas y proximas acciones.

8. Actualizar agenda y pistas.

   Si la informacion abre o aclara algo jugable, actualizar:

   - `07_Agenda/Agenda actual.md`
   - `07_Agenda/Pistas y preguntas.md`

   Las tramas deben quedar para asuntos que haya que seguir jugando, no como simples contenedores de informacion.

9. Revisar enlaces.

   Corregir enlaces rotos creados durante la edicion. Si la auditoria detecta enlaces rotos antiguos o ajenos al trabajo, mencionarlos en el resumen final sin arreglarlos salvo que sea una correccion mecanica clara y segura.

10. Resumir el resultado.

   Al terminar, Codex debe indicar:

   - Nota principal consolidada.
   - Notas conectadas actualizadas.
   - Dudas o decisiones pendientes.
   - Resultado de la auditoria de enlaces.

## Criterio de propagacion

No todas las notas conectadas necesitan una reescritura completa. La propagacion debe ser ligera y util:

- Añadir contexto minimo para no perder la relacion.
- Evitar duplicar textos largos.
- Mantener las notas secundarias listas para una futura consolidacion.
- Si una nota secundaria queda claramente pendiente, se puede dejar una duda o una frase de contexto, pero no inventar informacion.

## Criterio para apariciones y tramas asociadas

Las secciones `Apariciones` y `Tramas asociadas` son utiles mientras una nota esta vacia, porque indican de donde sacar informacion. Cuando la nota ya queda consolidada:

- Se pueden eliminar si ya no aportan valor.
- La informacion importante debe estar integrada en el cuerpo.
- Las sesiones relevantes pueden conservarse como enlaces dentro de hechos concretos, no como lista mecanica.

## Tono de redaccion

- Claro, directo y consultable durante la partida.
- Separar bien lo confirmado de lo dudoso.
- No convertir rumores en hechos.
- No ocultar contradicciones: si dos versiones pueden ser utiles, conservar ambas indicando su origen.
- Evitar sobrecargar una nota con todo el historial si basta con una sintesis jugable.

## Comando mental

Cuando el usuario diga "haz lo propio con X", aplicar este protocolo a la nota `X`.
