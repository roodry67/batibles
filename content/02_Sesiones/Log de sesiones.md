---
tipo: indice
tags:
  - indice
  - sesiones
---

# Log de sesiones

Indice completo de sesiones. Para la cronologia curada de eventos importantes dentro de la historia, ver [[Timeline maestro]].

```dataview
TABLE WITHOUT ID
  file.link AS "Sesion",
  sesion AS "#",
  fecha_real AS "Fecha real",
  fecha_ingame_inicio AS "Fecha ingame",
  acto AS "Acto",
  resumen AS "Resumen"
FROM "02_Sesiones"
WHERE tipo = "sesion"
SORT sesion ASC
```
