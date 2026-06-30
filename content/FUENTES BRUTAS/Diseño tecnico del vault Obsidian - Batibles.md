\# Diseño técnico del vault Obsidian \- Batibles

Estado: especificación técnica v0.1.  
Objetivo: definir cómo construir, usar y mantener un vault de Obsidian para la campaña Batibles a partir de todas las fuentes generadas en ChatGPT.  
Destinatarios: Javi y Codex en VS Code.

\#\# 1\. Propósito del vault

El vault debe convertir la información de campaña en un sistema consultable, enlazado y ampliable. La finalidad no es escribir una novela de campaña, sino construir una base de conocimiento útil para jugar, preparar decisiones, recordar pistas y consultar relaciones entre personajes, lugares, objetos y tramas.

El diseño se basa en una idea principal: las sesiones son la columna vertebral cronológica. Las demás notas —personajes, NPCs, lugares, objetos, facciones, criaturas y tramas— se construyen a partir de lo que aparece en esas sesiones y de las notas temáticas.

El vault debe permitir responder preguntas como:

\- ¿Qué ocurrió en una sesión concreta?  
\- ¿Cuándo apareció por primera vez \[\[Bastian Blade\]\]?  
\- ¿Qué sabemos de \[\[Firkraag\]\]?  
\- ¿Qué pistas hay sobre \[\[Orosul\]\]?  
\- ¿Qué tramas están abiertas ahora mismo?  
\- ¿Qué sabemos con certeza, qué es hipótesis y qué queda en duda?  
\- ¿Qué deberíamos hacer en la próxima partida?

\#\# 2\. Filosofía de uso

El vault debe actuar como una segunda memoria de la campaña. No debe intentar sustituir el juego ni forzar una estructura demasiado rígida. Tiene que permitir tres usos principales:

1\. Consultar sesiones: reconstruir qué pasó, cuándo pasó y qué entidades aparecieron.  
2\. Consultar entidades: abrir la nota de un NPC, lugar, objeto o facción y ver lo que se sabe de él.  
3\. Consultar tramas abiertas: saber qué misterios, misiones, hipótesis y próximos pasos siguen vivos.

Cada nota debe estar escrita con criterio de jugador: suficiente detalle para recordar la campaña, pero sin llenar el vault de ruido táctico irrelevante.

\#\# 3\. Fuentes iniciales

Codex debe trabajar a partir de fuentes exportadas o copiadas localmente. No debe inventar contenido ni reconstruir la campaña de memoria.

Fuentes principales generadas hasta ahora:

1\. Log maestro de sesiones \- Batibles  
URL: https://docs.google.com/document/d/1lp5kXuwQODUiWIz-etOAooUV3taKN-zMeefZg6\_m-8I/edit?usp=drivesdk  
Uso: fuente principal para crear las notas de sesión.

2\. Log cronológico procesado \- Cuaderno pareja  
URL: https://docs.google.com/document/d/1VmjtmGnAclulfMPlK1XtLlGexnojoy2GvdeeKruxEus/edit?usp=drivesdk  
Uso: fuente de fechas, cronología y auditoría.

3\. Notas temáticas procesadas \- Cuaderno Javi  
URL: https://docs.google.com/document/d/1QWNFWcpD1ScOs4dSBd0v4jlFv6abroNDa0GSFnV28Ec/edit?usp=drivesdk  
Uso: fuente para enriquecer notas de NPCs, lugares, tramas, objetos y facciones.

4\. Documentos de arcos, que deben revisarse antes de la versión definitiva:  
\- Arco 0 \- Introducción.  
\- Arco 1 \- Archenbridge y la torre de Quamara.  
\- Arco 2 \- Picos del Trueno, vampiros y regreso.  
\- Arco 3 \- Ashabenford y Cormanthor.

Antes de ejecutar Codex, exportar o copiar estas fuentes a una carpeta local dentro del vault:

11\_Notas\_brutas/Fuentes/

Ejemplo:

\- Log maestro de sesiones \- Batibles.md  
\- Log cronologico cuaderno pareja.md  
\- Notas tematicas cuaderno Javi.md  
\- Arco 0 \- fuente.md  
\- Arco 1 \- fuente.md  
\- Arco 2 \- fuente.md  
\- Arco 3 \- fuente.md

\#\# 4\. Regla fundamental para Codex

Codex debe actuar como constructor del vault, no como narrador creativo.

Debe leer las fuentes, extraer entidades, crear notas, enlazar wikilinks y organizar información. No debe inventar motivaciones, escenas, nombres, relaciones ni consecuencias que no aparezcan en las fuentes.

Si una información está clara, debe escribirla como información confirmada.

Si una información es sospecha del grupo, debe marcarla como hipótesis.

Si una información está dudosa, debe ponerla en una sección de dudas.

Si hay ambigüedad de sesión, debe usar “asignación aproximada” en la nota correspondiente.

\#\# 5\. Nombres canónicos actuales

Usar estos nombres canónicos salvo que el usuario corrija después:

\- \[\[Bram\]\]  
\- \[\[Lysara\]\]  
\- \[\[Alan Aldiz\]\]  
\- \[\[Lasarferis\]\]  
\- \[\[Drakesh\]\]  
\- \[\[Figarus\]\]  
\- \[\[Daron\]\]  
\- \[\[Izzy\]\]  
\- \[\[Salyriam\]\]  
\- \[\[Firkraag\]\]  
\- \[\[Arasyl\]\]  
\- \[\[Malazuth\]\]  
\- \[\[Váriuk\]\]  
\- \[\[Brevo\]\]  
\- \[\[Truizzen\]\]  
\- \[\[Quamara\]\]  
\- \[\[Walter Elias\]\]  
\- \[\[Bastian Blade\]\]  
\- \[\[Kazar\]\]  
\- \[\[Endrek\]\]  
\- \[\[Leonora\]\]  
\- \[\[Darvan\]\]  
\- \[\[Cilethor\]\]  
\- \[\[Tens\]\]  
\- \[\[Sofía\]\]  
\- \[\[Óscar\]\]  
\- \[\[Orosul\]\]  
\- \[\[Peitán\]\]  
\- \[\[Neera Kumar\]\]  
\- \[\[Alberic\]\]  
\- \[\[Liktan\]\]

Correcciones explícitas:

\- Kazar no es vampiro; es nigromante.  
\- Endrek es la grafía correcta del primo de Lasarferis.  
\- Leonora tiene rango de Dragón y en su capa pone “Valor”.  
\- Brevo es el líder de la arboleda.  
\- Truizzen es el drow vinculado a Quamara.  
\- Váriuk es el semiorco retirado, antiguo compañero de Malazuth.  
\- El conocimiento de Transmutación del alma podría encontrarse en Myth Drannor.  
\- Óscar murió expuesto al sol.

\#\# 6\. Estructura de carpetas recomendada

Crear esta estructura dentro del vault:

Batibles Vault/  
  00\_Index/  
    Inicio.md  
    Timeline maestro.md  
    Estado actual de la campaña.md  
    Dudas pendientes.md  
    Glosario de nombres.md  
    Próximos pasos.md

  01\_Arcos/  
    Arco 0 \- Introducción.md  
    Arco 1 \- Archenbridge y la torre de Quamara.md  
    Arco 2 \- Picos del Trueno, vampiros y regreso.md  
    Arco 3 \- Ashabenford y Cormanthor.md

  02\_Sesiones/  
    2023-12-09 \- S001 \- Tilverton.md  
    2023-12-23 \- S002 \- Altaluna y templo de Oghma.md  
    2024-01-13 \- S003 \- Templo de Oghma.md  
    ...

  03\_Personajes/  
    PJs/  
      Bram.md  
      Lysara.md  
      Alan Aldiz.md  
      Lasarferis.md  
      Drakesh.md  
      Figarus.md  
    NPCs/  
      Daron.md  
      Izzy.md  
      Salyriam.md  
      Bastian Blade.md  
      Firkraag.md  
      Leonora.md  
      Malazuth.md  
      Kazar.md  
      ...

  04\_Lugares/  
    Tilverton.md  
    Altaluna.md  
    Archenbridge.md  
    Ashabenford.md  
    Cormanthor.md  
    Myth Drannor.md  
    Picos del Trueno.md  
    Pozos de Cobre.md  
    Selgaunt.md  
    Cayo de la Bruma.md  
    ...

  05\_Facciones/  
    Draconia.md  
    los Dragones.md  
    la Inquisición.md  
    Le Black.md  
    Zhentarim.md  
    Culto del Dragón.md  
    Magos Rojos de Thay.md  
    Arpistas.md  
    Caballeros de la Niebla.md  
    ...

  06\_Tramas\_y\_Open\_Loops/  
    Trama \- Arasyl en Cormanthor.md  
    Trama \- Firkraag.md  
    Trama \- Bastian Blade.md  
    Trama \- Familia Le Black.md  
    Trama \- Vampiros de Archenbridge.md  
    Trama \- Orosul.md  
    Trama \- Endrek y Lasarferis.md  
    Trama \- Profecía del dragón blanco y el dragón rojo.md  
    Trama \- Transmutación del alma.md  
    Trama \- Ashabenford y Caballeros de la Niebla.md  
    ...

  07\_Agenda/  
    Agenda actual.md  
    Próximas acciones por lugar.md  
    Waiting for.md

  08\_Objetos\_y\_Magia/  
    Deck of Many Things.md  
    Brújula de Arasyl.md  
    Demonomicon.md  
    Libro derivado del Demonomicon.md  
    Máscara blanca de Tiamat.md  
    Reloj de Lasarferis.md  
    Lágrima de Aurin.md  
    Transmutación del alma.md  
    madera férrea.md  
    ...

  09\_Criaturas/  
    Auronborax.md  
    baelnorn.md  
    draegloth.md  
    dragones.md  
    sagas.md  
    vampiros.md  
    pegasos.md  
    ...

  10\_Lore\_e\_Historia/  
    Profecía del dragón blanco y el dragón rojo.md  
    Llama del espíritu.md  
    Historia de los Le Black.md  
    Guerra previa en los Valles.md  
    Oráculos de la Inquisición.md  
    Coronación de Salyriam.md

  11\_Notas\_brutas/  
    Fuentes/  
      Log maestro de sesiones \- Batibles.md  
      Log cronologico cuaderno pareja.md  
      Notas tematicas cuaderno Javi.md  
      Arco 0 \- fuente.md  
      Arco 1 \- fuente.md  
      Arco 2 \- fuente.md  
      Arco 3 \- fuente.md

  z\_Templates/  
    Template \- Sesion.md  
    Template \- Arco.md  
    Template \- PJ.md  
    Template \- NPC.md  
    Template \- Lugar.md  
    Template \- Faccion.md  
    Template \- Trama.md  
    Template \- Objeto.md  
    Template \- Criatura.md  
    Template \- Lore.md

\#\# 7\. Plugins de Obsidian recomendados

Instalar pocos plugins al principio. La prioridad es que el vault sea limpio y funcional.

\#\#\# 7.1. Core plugins de Obsidian

Activar:

\- Templates: para insertar plantillas de sesión, NPC, trama, lugar, objeto, etc.  
\- Backlinks: para ver qué notas apuntan a una entidad.  
\- Graph view: útil visualmente, pero no debe dirigir el diseño.  
\- Canvas: opcional para mapas de relaciones o conspiraciones.  
\- Daily notes: opcional; no necesario si las sesiones ya están fechadas.

\#\#\# 7.2. Community plugins prioritarios

1\. Dataview  
Uso: crear listas automáticas de sesiones, NPCs, tramas abiertas, agenda y dudas.  
Instalar desde el principio si se quiere usar YAML de forma potente.

2\. Omnisearch  
Uso: búsqueda mejorada dentro del vault.  
Recomendado si el vault crece mucho.

3\. Advanced Tables  
Uso: edición cómoda de tablas Markdown.  
Opcional, pero útil.

4\. Templater  
Uso: plantillas más avanzadas que Templates.  
No instalar al principio si se quiere mantener simple. Instalar si se quiere automatizar nombres, fechas y propiedades.

5\. QuickAdd  
Uso: crear rápidamente sesiones, NPCs o tramas desde comandos.  
Segunda fase, no necesario al principio.

\#\#\# 7.3. Plugins opcionales para segunda fase

\- Leaflet: mapas interactivos si se quiere usar mapa de Faerûn.  
\- Fantasy Calendar: calendario in-game si se decide formalizar el calendario.  
\- Timelines / Obsidian Timeline: visualizar acontecimientos.  
\- Excalidraw: mapas mentales, relaciones, esquemas.

No instalar Leaflet, Fantasy Calendar ni Timelines hasta que el vault textual esté estable.

\#\# 8\. Convenciones de nombres de archivos

\#\#\# 8.1. Sesiones

Formato:

YYYY-MM-DD \- S\#\#\# \- Título breve.md

Ejemplo:

2023-12-09 \- S001 \- Tilverton.md  
2023-12-23 \- S002 \- Altaluna y templo de Oghma.md  
2024-12-01 \- S016 \- Asalto a la torre de Quamara.md

Reglas:

\- Usar fecha real al inicio para ordenar por explorador de archivos.  
\- Usar S\#\#\# con tres dígitos.  
\- Título breve, sin exceso de detalle.  
\- Si el número exacto de sesión no es seguro, mantener la numeración reconstruida del log maestro y marcar en YAML \`estado: reconstruida\`.

\#\#\# 8.2. Tramas

Formato:

Trama \- Nombre.md

Ejemplo:

Trama \- Firkraag.md  
Trama \- Bastian Blade.md  
Trama \- Arasyl en Cormanthor.md

\#\#\# 8.3. Personajes

Usar nombre canónico simple:

Bram.md  
Bastian Blade.md  
Leonora.md  
Kazar.md

Si hay alias o grafías antiguas, usar YAML \`aliases\`.

Ejemplo:

aliases:  
  \- Lunora  
  \- Leonora de Ashabenford

\#\#\# 8.4. Lugares, facciones, objetos y criaturas

Usar nombre canónico:

Ashabenford.md  
Caballeros de la Niebla.md  
Demonomicon.md  
Auronborax.md

\#\# 9\. YAML / propiedades estándar

Usar propiedades YAML sencillas. No sobrecargar.

Campos comunes:

\- tipo  
\- estado  
\- aliases  
\- tags  
\- fuentes  
\- primera\_aparicion  
\- ultima\_actualizacion

Estados sugeridos:

\- confirmada  
\- abierta  
\- cerrada  
\- muerta  
\- desaparecida  
\- presuntamente\_muerta  
\- incompleta  
\- hipotesis  
\- duda

\#\# 10\. Plantillas Markdown

\#\#\# 10.1. Template \- Sesion.md

\---  
tipo: sesión  
sesion:   
fecha\_real:   
fecha\_ingame\_inicio:   
fecha\_ingame\_fin:   
arco:   
estado: borrador  
fuentes:  
  \-   
participantes:  
  \-   
lugares:  
  \-   
tramas:  
  \-   
tags:  
  \- sesión  
\---

\# S000 \- Título de la sesión

\#\# Resumen

\#\# Log de sesión

\#\# NPCs presentes o mencionados

\#\# Lugares

\#\# Objetos, pistas y recursos

\#\# Tramas avanzadas

\#\# Open loops creados o actualizados

\#\# Dudas

\#\# Notas brutas asociadas

\#\#\# 10.2. Template \- NPC.md

\---  
tipo: npc  
estado:   
aliases:  
  \-   
facciones:  
  \-   
relacion\_con\_grupo:   
primera\_aparicion:   
ultima\_aparicion:   
tramas:  
  \-   
tags:  
  \- npc  
\---

\# Nombre del NPC

\#\# Resumen

\#\# Estado actual

\#\# Información confirmada

\#\# Hipótesis

\#\# Relaciones

\#\# Apariciones

\#\# Tramas asociadas

\#\# Dudas

\#\#\# 10.3. Template \- PJ.md

\---  
tipo: pj  
jugador:   
estado: activo  
clase:   
tramas:  
  \-   
primera\_aparicion:   
tags:  
  \- pj  
\---

\# Nombre del PJ

\#\# Resumen

\#\# Trasfondo relevante

\#\# Estado actual

\#\# Relaciones importantes

\#\# Tramas personales

\#\# Objetos relevantes

\#\# Apariciones clave

\#\# Dudas

\#\#\# 10.4. Template \- Lugar.md

\---  
tipo: lugar  
region:   
controlado\_por:   
estado:   
aliases:  
  \-   
primera\_aparicion:   
tramas:  
  \-   
tags:  
  \- lugar  
\---

\# Nombre del lugar

\#\# Resumen

\#\# Descripción

\#\# Gobierno / control

\#\# Historia conocida

\#\# Lugares internos

\#\# NPCs asociados

\#\# Eventos ocurridos aquí

\#\# Tramas asociadas

\#\# Dudas

\#\#\# 10.5. Template \- Faccion.md

\---  
tipo: facción  
estado:   
aliases:  
  \-   
miembros:  
  \-   
tramas:  
  \-   
tags:  
  \- facción  
\---

\# Nombre de la facción

\#\# Resumen

\#\# Objetivos conocidos

\#\# Miembros conocidos

\#\# Aliados

\#\# Enemigos

\#\# Apariciones

\#\# Tramas asociadas

\#\# Dudas

\#\#\# 10.6. Template \- Trama.md

\---  
tipo: trama  
estado: abierta  
prioridad: media  
personajes:  
  \-   
lugares:  
  \-   
primera\_aparicion:   
ultima\_actualizacion:   
tags:  
  \- trama  
\---

\# Trama \- Nombre

\#\# Resumen

\#\# Estado actual

\#\# Información confirmada

\#\# Hipótesis

\#\# Cronología

\#\# NPCs implicados

\#\# Lugares implicados

\#\# Objetos implicados

\#\# Próximas acciones posibles

\#\# Dudas

\#\#\# 10.7. Template \- Objeto.md

\---  
tipo: objeto  
estado:   
poseedor\_actual:   
aliases:  
  \-   
primera\_aparicion:   
tramas:  
  \-   
tags:  
  \- objeto  
\---

\# Nombre del objeto

\#\# Resumen

\#\# Descripción

\#\# Propiedades conocidas

\#\# Historia

\#\# Poseedores

\#\# Apariciones

\#\# Tramas asociadas

\#\# Dudas

\#\#\# 10.8. Template \- Criatura.md

\---  
tipo: criatura  
estado:   
aliases:  
  \-   
primera\_aparicion:   
tramas:  
  \-   
tags:  
  \- criatura  
\---

\# Nombre de criatura

\#\# Resumen

\#\# Rasgos conocidos

\#\# Apariciones

\#\# Relación con tramas

\#\# Dudas

\#\#\# 10.9. Template \- Arco.md

\---  
tipo: arco  
estado:   
fecha\_ingame\_inicio:   
fecha\_ingame\_fin:   
sesiones:  
  \-   
tramas:  
  \-   
tags:  
  \- arco  
\---

\# Arco X \- Título

\#\# Resumen

\#\# Sesiones incluidas

\#\# Eventos principales

\#\# NPCs relevantes

\#\# Lugares relevantes

\#\# Tramas abiertas o cerradas

\#\# Cambios de continuidad

\#\# Dudas

\#\# 11\. Notas índice recomendadas

\#\#\# 11.1. Inicio.md

Debe ser el dashboard principal.

Contenido recomendado:

\- Enlaces a arcos.  
\- Enlace a Agenda actual.  
\- Enlace a Timeline maestro.  
\- Enlace a Dudas pendientes.  
\- Tramas abiertas prioritarias.  
\- Próxima sesión / situación actual.

\#\#\# 11.2. Timeline maestro.md

Debe listar las sesiones en orden y, opcionalmente, una tabla con:

\- Fecha real.  
\- Fecha in-game.  
\- Sesión.  
\- Arco.  
\- Resumen breve.

Si se usa Dataview, se puede generar automáticamente a partir de las notas de sesión.

\#\#\# 11.3. Estado actual de la campaña.md

Debe responder rápidamente:

\- ¿Dónde está el grupo?  
\- ¿Qué día es in-game?  
\- ¿Cuál es el objetivo inmediato?  
\- ¿Qué amenazas principales están activas?  
\- ¿Qué NPCs son relevantes ahora?

\#\#\# 11.4. Agenda actual.md

Separar acciones concretas de lore.

Ejemplo:

\#\# Próximas acciones

\- Entrar en la arboleda de \[\[Cormanthor\]\].  
\- Averiguar qué está haciendo \[\[Arasyl\]\].  
\- Conseguir \[\[madera férrea\]\] para \[\[Leonora\]\].  
\- Investigar por qué los druidas no ayudan con las cosechas.

\#\# Waiting for

\- Posible contacto con \[\[Tens\]\] mediante carta en taberna de \[\[Archenbridge\]\].  
\- Más información sobre \[\[Kazar\]\].  
\- Oportunidad de investigar \[\[Myth Drannor\]\] por \[\[Transmutación del alma\]\].

\#\# 12\. Flujo de trabajo durante la campaña

\#\#\# Antes de una sesión

1\. Abrir \[\[Estado actual de la campaña\]\].  
2\. Abrir \[\[Agenda actual\]\].  
3\. Revisar las tramas activas más relevantes.  
4\. Crear una nueva nota de sesión desde Template \- Sesion.md.  
5\. Rellenar fecha real, fecha in-game y arco si se conocen.

\#\#\# Durante una sesión

Tomar notas rápidas en la nota de sesión, no intentar escribir notas perfectas.

Priorizar:

\- NPCs nuevos.  
\- Lugares nuevos.  
\- Objetos o pistas.  
\- Decisiones importantes.  
\- Información que cambia una trama.  
\- Fechas in-game.  
\- Consecuencias.

\#\#\# Después de una sesión

1\. Limpiar el log de sesión.  
2\. Añadir wikilinks a NPCs, lugares, objetos y tramas.  
3\. Crear notas nuevas si no existen.  
4\. Actualizar tramas abiertas.  
5\. Actualizar Agenda actual.  
6\. Añadir dudas a Dudas pendientes.

\#\# 13\. Reglas para cruzar información

Cuando una entidad aparece en una sesión, enlazarla siempre.

Ejemplo:

En vez de: “hablamos con Daron”.  
Usar: “hablamos con \[\[Daron\]\]”.

Cuando una sesión avance una trama, añadir la trama en la sección “Tramas avanzadas”.

Ejemplo:

\- \[\[Trama \- Firkraag\]\]: Bram descubre que puede contactar con Firkraag mediante meditación.

Cuando una nota de NPC tenga información de varias fuentes, no copiar todo literalmente. Sintetizar por secciones:

\- Resumen.  
\- Estado actual.  
\- Información confirmada.  
\- Hipótesis.  
\- Apariciones.  
\- Tramas asociadas.

\#\# 14\. Uso de Dataview

Dataview no es obligatorio para empezar, pero el vault debe prepararse para usarlo.

Ejemplo de consulta para Timeline maestro:

\`\`\`dataview  
TABLE fecha\_real, fecha\_ingame\_inicio, arco, resumen  
FROM "02\_Sesiones"  
SORT fecha\_real ASC  
\`\`\`

Ejemplo de consulta para tramas abiertas:

\`\`\`dataview  
TABLE prioridad, ultima\_actualizacion  
FROM "06\_Tramas\_y\_Open\_Loops"  
WHERE estado \= "abierta"  
SORT prioridad ASC  
\`\`\`

Ejemplo de consulta para NPCs desaparecidos:

\`\`\`dataview  
TABLE facciones, ultima\_aparicion  
FROM "03\_Personajes/NPCs"  
WHERE estado \= "desaparecida"  
\`\`\`

Para que estas consultas funcionen, las propiedades YAML deben mantenerse consistentes.

\#\# 15\. Lista inicial mínima de notas a crear

Codex debe crear primero estas notas. No hace falta que sean perfectas; deben quedar enlazadas y listas para ampliarse.

\#\#\# Arcos

\- \[\[Arco 0 \- Introducción\]\]  
\- \[\[Arco 1 \- Archenbridge y la torre de Quamara\]\]  
\- \[\[Arco 2 \- Picos del Trueno, vampiros y regreso\]\]  
\- \[\[Arco 3 \- Ashabenford y Cormanthor\]\]

\#\#\# PJs

\- \[\[Bram\]\]  
\- \[\[Lysara\]\]  
\- \[\[Alan Aldiz\]\]  
\- \[\[Lasarferis\]\]  
\- \[\[Drakesh\]\]  
\- \[\[Figarus\]\]

\#\#\# NPCs prioritarios

\- \[\[Daron\]\]  
\- \[\[Izzy\]\]  
\- \[\[Salyriam\]\]  
\- \[\[Firkraag\]\]  
\- \[\[Arasyl\]\]  
\- \[\[Bastian Blade\]\]  
\- \[\[Malazuth\]\]  
\- \[\[Leonora\]\]  
\- \[\[Kazar\]\]  
\- \[\[Endrek\]\]  
\- \[\[Orosul\]\]  
\- \[\[Tens\]\]  
\- \[\[Sofía\]\]  
\- \[\[Óscar\]\]  
\- \[\[Liandrale Le Black\]\]  
\- \[\[Ellendrale Le Black\]\]  
\- \[\[Váriuk\]\]  
\- \[\[Brevo\]\]  
\- \[\[Quamara\]\]  
\- \[\[Truizzen\]\]  
\- \[\[Walter Elias\]\]

\#\#\# Lugares prioritarios

\- \[\[Tilverton\]\]  
\- \[\[Altaluna\]\]  
\- \[\[templo de Oghma\]\]  
\- \[\[Archenbridge\]\]  
\- \[\[Picos del Trueno\]\]  
\- \[\[Pozos de Cobre\]\]  
\- \[\[Cayo de la Bruma\]\]  
\- \[\[Selgaunt\]\]  
\- \[\[Ashabenford\]\]  
\- \[\[Cormanthor\]\]  
\- \[\[Myth Drannor\]\]

\#\#\# Facciones prioritarias

\- \[\[Draconia\]\]  
\- \[\[los Dragones\]\]  
\- \[\[la Inquisición\]\]  
\- \[\[Le Black\]\]  
\- \[\[Zhentarim\]\]  
\- \[\[Culto del Dragón\]\]  
\- \[\[Magos Rojos de Thay\]\]  
\- \[\[Arpistas\]\]  
\- \[\[Caballeros de la Niebla\]\]

\#\#\# Tramas prioritarias

\- \[\[Trama \- Firkraag\]\]  
\- \[\[Trama \- Arasyl en Cormanthor\]\]  
\- \[\[Trama \- Bastian Blade\]\]  
\- \[\[Trama \- Familia Le Black\]\]  
\- \[\[Trama \- Vampiros de Archenbridge\]\]  
\- \[\[Trama \- Orosul\]\]  
\- \[\[Trama \- Endrek y Lasarferis\]\]  
\- \[\[Trama \- Profecía del dragón blanco y el dragón rojo\]\]  
\- \[\[Trama \- Transmutación del alma\]\]  
\- \[\[Trama \- Ashabenford y Caballeros de la Niebla\]\]

\#\#\# Objetos y magia prioritarios

\- \[\[Deck of Many Things\]\]  
\- \[\[Brújula de Arasyl\]\]  
\- \[\[Demonomicon\]\]  
\- \[\[Libro derivado del Demonomicon\]\]  
\- \[\[Máscara blanca de Tiamat\]\]  
\- \[\[Reloj de Lasarferis\]\]  
\- \[\[Lágrima de Aurin\]\]  
\- \[\[Transmutación del alma\]\]  
\- \[\[madera férrea\]\]  
\- \[\[ungüento de eternidad\]\]

\#\# 16\. Reglas de alias

Usar YAML aliases para grafías antiguas, errores de dictado o nombres alternativos.

Ejemplos:

\#\#\# Leonora.md

aliases:  
  \- Lunora  
  \- señora de Ashabenford

\#\#\# Truizzen.md

aliases:  
  \- Tracen  
  \- Trizzen  
  \- drow de Quamara

\#\#\# Váriuk.md

aliases:  
  \- Bario  
  \- semiorco retirado

\#\#\# Kazar.md

aliases:  
  \- Cazar

\#\#\# Endrek.md

aliases:  
  \- Endrec  
  \- primo de Lasarferis

\#\# 17\. Tratamiento de dudas

Toda duda debe aparecer en una de estas formas:

1\. En la sección “Dudas” de la nota afectada.  
2\. En 00\_Index/Dudas pendientes.md.  
3\. En la nota de trama correspondiente si afecta a una línea argumental.

No borrar dudas hasta que el usuario las confirme.

Ejemplo:

\- Confirmar si \[\[París Le Black\]\] se escribe así.  
\- Confirmar si \[\[Tens\]\] se escribe así.  
\- Confirmar si \[\[madera férrea\]\] sustituye por completo a “madera oscura”.

\#\# 18\. Prompt operativo para Codex

Copiar este bloque en Codex cuando las fuentes estén exportadas dentro del proyecto local.

\---

Quiero que construyas un vault de Obsidian para la campaña de D\&D “Batibles”. No inventes contenido. Usa únicamente las fuentes Markdown o texto que están en \`11\_Notas\_brutas/Fuentes/\`.

Objetivo: crear una estructura de carpetas, plantillas y notas iniciales enlazadas con wikilinks, siguiendo el documento \`Diseño tecnico del vault Obsidian \- Batibles.md\`.

Tareas:

1\. Crea la estructura de carpetas indicada:  
   \- 00\_Index  
   \- 01\_Arcos  
   \- 02\_Sesiones  
   \- 03\_Personajes/PJs  
   \- 03\_Personajes/NPCs  
   \- 04\_Lugares  
   \- 05\_Facciones  
   \- 06\_Tramas\_y\_Open\_Loops  
   \- 07\_Agenda  
   \- 08\_Objetos\_y\_Magia  
   \- 09\_Criaturas  
   \- 10\_Lore\_e\_Historia  
   \- 11\_Notas\_brutas/Fuentes  
   \- z\_Templates

2\. Crea las plantillas Markdown en \`z\_Templates/\` usando las plantillas del documento de diseño.

3\. Lee \`Log maestro de sesiones \- Batibles.md\` y crea una nota por cada sesión en \`02\_Sesiones/\`. Respeta el formato:  
   \`YYYY-MM-DD \- S\#\#\# \- Título breve.md\`.

4\. Cada nota de sesión debe incluir:  
   \- YAML con tipo, sesion, fecha\_real, fecha\_ingame\_inicio, fecha\_ingame\_fin, arco, estado, fuentes, participantes, lugares y tramas.  
   \- Resumen.  
   \- Log de sesión.  
   \- NPCs presentes o mencionados.  
   \- Lugares.  
   \- Objetos, pistas y recursos.  
   \- Tramas avanzadas.  
   \- Open loops creados o actualizados.  
   \- Dudas.

5\. Crea notas iniciales para PJs, NPCs, lugares, facciones, objetos, criaturas y tramas mencionados en el diseño. No tienen que estar perfectas, pero deben tener estructura, resumen y enlaces a sus apariciones.

6\. Usa wikilinks para todas las entidades importantes. Por ejemplo: \[\[Bram\]\], \[\[Firkraag\]\], \[\[Bastian Blade\]\], \[\[Ashabenford\]\], \[\[Demonomicon\]\], \[\[Trama \- Firkraag\]\].

7\. Usa aliases en YAML para grafías antiguas o erróneas. Ejemplos:  
   \- \[\[Kazar\]\] debe tener alias “Cazar”.  
   \- \[\[Endrek\]\] debe tener alias “Endrec”.  
   \- \[\[Leonora\]\] debe tener alias “Lunora”.  
   \- \[\[Truizzen\]\] debe tener aliases “Tracen” y “Trizzen”.

8\. Separa información confirmada, hipótesis y dudas. No conviertas hipótesis del grupo en hechos confirmados.

9\. Conserva todos los documentos fuente en \`11\_Notas\_brutas/Fuentes/\`. No los borres ni los reescribas.

10\. Crea \`00\_Index/Inicio.md\` como dashboard principal con enlaces a:  
    \- Timeline maestro.  
    \- Estado actual de la campaña.  
    \- Agenda actual.  
    \- Arcos.  
    \- Tramas abiertas prioritarias.  
    \- Dudas pendientes.

11\. Crea \`00\_Index/Timeline maestro.md\` con una lista ordenada de sesiones y, si es posible, una consulta Dataview.

12\. Crea \`07\_Agenda/Agenda actual.md\` con las próximas acciones conocidas:  
    \- Entrar en la arboleda de \[\[Cormanthor\]\].  
    \- Averiguar qué está haciendo \[\[Arasyl\]\].  
    \- Conseguir \[\[madera férrea\]\] para \[\[Leonora\]\].  
    \- Investigar por qué los druidas han dejado de ayudar con las cosechas.  
    \- Mantener como posibilidad futura investigar \[\[Myth Drannor\]\] por \[\[Transmutación del alma\]\].

13\. Antes de terminar, revisa que no haya notas huérfanas importantes y que las entidades prioritarias tengan backlinks desde sesiones o tramas.

14\. No cambies nombres canónicos salvo que estén indicados como alias. Los nombres canónicos actuales incluyen: \[\[Firkraag\]\], \[\[Truizzen\]\], \[\[Váriuk\]\], \[\[Kazar\]\], \[\[Endrek\]\], \[\[Brevo\]\], \[\[Leonora\]\].

Entrega final:

\- Lista de carpetas creadas.  
\- Lista de notas creadas.  
\- Lista de dudas detectadas.  
\- Lista de entidades con alias.  
\- Lista de posibles problemas o sesiones incompletas.

\---

\#\# 19\. Orden recomendado de trabajo a partir de ahora

1\. Revisar y corregir los cuatro documentos de arcos uno a uno.  
2\. Exportar o copiar fuentes finales a Markdown.  
3\. Ejecutar Codex con el prompt operativo.  
4\. Abrir el vault en Obsidian.  
5\. Revisar que las sesiones estén bien enlazadas.  
6\. Revisar NPCs prioritarios: \[\[Bastian Blade\]\], \[\[Firkraag\]\], \[\[Daron\]\], \[\[Leonora\]\], \[\[Kazar\]\], \[\[Endrek\]\], \[\[Arasyl\]\].  
7\. Revisar tramas abiertas.  
8\. Añadir plugins gradualmente.

\#\# 20\. Resultado esperado

El resultado inicial no debe ser un vault perfecto, sino un vault navegable, coherente y ampliable.

La primera versión debe permitir:

\- Buscar cualquier NPC importante.  
\- Ver sus apariciones.  
\- Ver en qué sesiones se habló de una trama.  
\- Tener una agenda actual clara.  
\- Mantener dudas visibles.  
\- Poder seguir añadiendo notas después de cada partida.

Fin de la especificación técnica v0.1.  
