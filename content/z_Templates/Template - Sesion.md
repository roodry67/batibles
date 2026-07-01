<%*
const sessionFolder = "02_Sesiones";
const files = app.vault.getMarkdownFiles()
  .filter(file => file.path.startsWith(sessionFolder + "/"));

const sessions = files
  .map(file => {
    const match = file.basename.match(/^S(\d{3})\b/);
    return match ? { num: Number(match[1]), file } : null;
  })
  .filter(Boolean);

const currentMatch = tp.file.title.match(/^S(\d{3})\s*-\s*(.*)$/);
const maxSession = sessions.reduce((max, session) => Math.max(max, session.num), 0);
const sessionNumber = currentMatch ? Number(currentMatch[1]) : maxSession + 1;
const sessionCode = `S${String(sessionNumber).padStart(3, "0")}`;

const rawTitle = currentMatch ? currentMatch[2] : tp.file.title;
let sessionTitle = (rawTitle || "").trim();
if (!sessionTitle || sessionTitle === sessionCode || /^untitled/i.test(sessionTitle)) {
  sessionTitle = await tp.system.prompt("Titulo de la sesion");
}
sessionTitle = (sessionTitle || "Sin titulo").trim();

const noteTitle = `${sessionCode} - ${sessionTitle}`;
const previous = sessions.find(session => session.num === sessionNumber - 1);
const previousRecap = previous ? `![[${previous.file.basename}#^summary]]` : "No hay sesion anterior registrada.";

await tp.file.rename(noteTitle);
-%>
---
tipo: sesion
sesion: <% sessionNumber %>
fecha_real: <% tp.date.now("YYYY-MM-DD") %>
fecha_ingame_inicio:
fecha_ingame_fin:
acto:
estado: borrador
resumen: ""
fuentes:
  -
participantes:
  -
lugares:
  -
tramas:
  -
tags:
  - sesion
---

# <% noteTitle %>

## Recap anterior

<% previousRecap %>

## Resumen

Resumen breve de la sesion. ^summary

## Log de sesion

## Notas rapidas durante partida

## Informacion obtenida

## NPCs presentes o mencionados

## Lugares

## Objetos, pistas y recursos

## Pistas y preguntas

## Tramas avanzadas

## Cambios para agenda

## Dudas

## Notas brutas asociadas
