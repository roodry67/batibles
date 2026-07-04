import { existsSync, readFileSync, writeFileSync } from "fs"
import { join } from "path"

const root = process.cwd()

function patchFile(relativePath, replacements) {
  const filePath = join(root, relativePath)
  if (!existsSync(filePath)) {
    throw new Error(`Patch target not found: ${relativePath}`)
  }

  let text = readFileSync(filePath, "utf-8")
  for (const { from, to } of replacements) {
    if (text.includes(to)) continue
    if (!text.includes(from)) {
      console.warn(`Patch marker not found, assuming already patched: ${relativePath}`)
      continue
    }
    text = text.replace(from, to)
  }

  writeFileSync(filePath, text)
}

patchFile(".quartz/plugins/bases-page/dist/index.js", [
  {
    from: `function extractBaseBlock(raw) {
  const lines = raw.split("\\n");
  let start = -1;
  for (let i2 = 0; i2 < lines.length; i2 += 1) {
    const trimmed = (lines[i2] ?? "").trim();
    if (!trimmed.startsWith("\`\`\`")) continue;
    const lang = trimmed.slice(3).trim();
    if (lang === "base") {
      start = i2 + 1;
      break;
    }
  }
  if (start === -1) return null;
  let end = -1;
  for (let i2 = start; i2 < lines.length; i2 += 1) {
    if ((lines[i2] ?? "").trim().startsWith("\`\`\`")) {
      end = i2;
      break;
    }
  }
  if (end === -1) return null;
  return lines.slice(start, end).join("\\n");
}`,
    to: `function extractSupportedBlock(raw) {
  const lines = raw.split("\\n");
  let start = -1;
  let lang = "";
  for (let i2 = 0; i2 < lines.length; i2 += 1) {
    const trimmed = (lines[i2] ?? "").trim();
    if (!trimmed.startsWith("\`\`\`")) continue;
    lang = trimmed.slice(3).trim();
    if (lang === "base" || lang === "leaflet") {
      start = i2 + 1;
      break;
    }
  }
  if (start === -1) return null;
  let end = -1;
  for (let i2 = start; i2 < lines.length; i2 += 1) {
    if ((lines[i2] ?? "").trim().startsWith("\`\`\`")) {
      end = i2;
      break;
    }
  }
  if (end === -1) return null;
  return {
    lang,
    content: lines.slice(start, end).join("\\n")
  };
}`,
  },
  {
    from: `function parseBasesData(raw) {
  const block = extractBaseBlock(raw);
  const content = block ?? raw;
  let data;`,
    to: `function parseLeafletData(raw) {
  const config = {};
  for (const line of raw.split("\\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf(":");
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim();
    if (key) config[key] = value;
  }
  const image = normalizeLeafletImage(config.image);
  if (!image) return null;
  return {
    views: [
      {
        type: "leaflet-map",
        name: "Mapa",
        mapName: config.id,
        image,
        height: parseLeafletNumber(config.height),
        minZoom: parseLeafletNumber(config.minZoom),
        maxZoom: parseLeafletNumber(config.maxZoom),
        defaultZoom: parseLeafletNumber(config.defaultZoom),
        zoomDelta: parseLeafletNumber(config.zoomDelta),
        scale: parseLeafletNumber(config.scale),
        unit: config.unit
      }
    ]
  };
}
function normalizeLeafletImage(value) {
  if (!value) return void 0;
  const wikilink = value.match(/^\\[\\[([^\\]|]+)(?:\\|[^\\]]+)?\\]\\]$/);
  return wikilink ? wikilink[1] : value;
}
function parseLeafletNumber(value) {
  if (!value) return void 0;
  const direct = Number(value);
  if (Number.isFinite(direct)) return direct;
  const matches = Array.from(value.matchAll(/-?\\d+(?:\\.\\d+)?/g));
  const last = matches.at(-1)?.[0];
  if (!last) return void 0;
  const parsed = Number(last);
  return Number.isFinite(parsed) ? parsed : void 0;
}
function parseBasesData(raw, language = "base") {
  const block = extractSupportedBlock(raw);
  const content = block?.content ?? raw;
  const lang = block?.lang ?? language;
  if (lang === "leaflet") {
    return parseLeafletData(content);
  }
  let data;`,
  },
  {
    from: `                replaceIndex,
                replaceParent
              } = findBaseCodeblock(node, index2, parent);`,
    to: `                replaceIndex,
                replaceParent,
                language
              } = findBaseCodeblock(node, index2, parent);`,
  },
  {
    from: `              const basesData = parseBasesData(rawText);`,
    to: `              const basesData = parseBasesData(rawText, language);`,
  },
  {
    from: `    replaceIndex: index2 ?? 0,
    replaceParent: parent
  };`,
    to: `    replaceIndex: index2 ?? 0,
    replaceParent: parent,
    language: ""
  };`,
  },
  {
    from: `    const code = findCodeChild(node);
    if (code && isBaseLanguage(code)) {
      return {
        codeElement: code,
        replaceNode: node,
        replaceIndex: index2 ?? 0,
        replaceParent: parent
      };`,
    to: `    const code = findCodeChild(node);
    const language = code ? getSupportedLanguage(code) : "";
    if (code && language) {
      return {
        codeElement: code,
        replaceNode: node,
        replaceIndex: index2 ?? 0,
        replaceParent: parent,
        language
      };`,
  },
  {
    from: `      const code = findCodeChild(pre);
      if (code && isBaseLanguage(code)) {
        return {
          codeElement: code,
          replaceNode: node,
          replaceIndex: index2 ?? 0,
          replaceParent: parent
        };`,
    to: `      const code = findCodeChild(pre);
      const language = code ? getSupportedLanguage(code) : "";
      if (code && language) {
        return {
          codeElement: code,
          replaceNode: node,
          replaceIndex: index2 ?? 0,
          replaceParent: parent,
          language
        };`,
  },
  {
    from: `function isBaseLanguage(code) {
  const classNames = code.properties?.className ?? [];
  if (classNames.includes("language-base")) return true;
  if (code.properties?.dataLanguage === "base") return true;
  return false;
}`,
    to: `function getSupportedLanguage(code) {
  const classNames = code.properties?.className ?? [];
  for (const className of classNames) {
    if (className === "language-base") return "base";
    if (className === "language-leaflet") return "leaflet";
  }
  const dataLanguage = code.properties?.dataLanguage;
  if (dataLanguage === "base" || dataLanguage === "leaflet") return dataLanguage;
  return "";
}`,
  },
])

patchFile(".quartz/plugins/quartz-leaflet-bases-plugin/dist/index.js", [
  {
    from: `import { viewRegistry, transformLink } from '@quartz-community/bases-page';
import { jsx } from 'preact/jsx-runtime';`,
    to: `import { viewRegistry, transformLink } from '@quartz-community/bases-page';
import { jsx } from 'preact/jsx-runtime';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';`,
  },
  {
    from: `  markerColour: "#21409a",
  markerIcon: "lucide:circle-small"
};`,
    to: `  markerColour: "#21409a",
  markerIcon: "lucide:circle-small",
  shapeColour: "#3388ff"
};`,
  },
  {
    from: `var getString = (value) => typeof value === "string" && value.trim().length > 0 ? value : void 0;`,
    to: `var getString = (value) => typeof value === "string" && value.trim().length > 0 ? value : void 0;
var isShapeData = (value) => {
  if (!isRecord(value)) return false;
  if (typeof value.type !== "string") return false;
  if (value.vertices !== void 0 && !Array.isArray(value.vertices)) return false;
  return true;
};
var loadObsidianLeafletShapes = (mapName) => {
  if (!mapName) return [];
  const dataPath = join(process.cwd(), "content", ".obsidian", "plugins", "obsidian-leaflet-plugin", "data.json");
  if (!existsSync(dataPath)) return [];
  try {
    const raw = readFileSync(dataPath, "utf-8");
    const data = JSON.parse(raw);
    if (!isRecord(data) || !Array.isArray(data.mapMarkers)) return [];
    const mapData = data.mapMarkers.find((entry) => isRecord(entry) && entry.id === mapName);
    if (!isRecord(mapData) || !Array.isArray(mapData.shapes)) return [];
    return mapData.shapes.filter(isShapeData);
  } catch {
    return [];
  }
};`,
  },
  {
    from: `  const filteredMarkers = markers.filter((marker) => {
    if (mapName) return !marker.mapName || marker.mapName === mapName;
    return marker.mapName === void 0;
  });
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    "div",
    {
      class: "leaflet-map",
      "data-src": imageSource,`,
    to: `  const filteredMarkers = markers.filter((marker) => {
    if (mapName) return !marker.mapName || marker.mapName === mapName;
    return marker.mapName === void 0;
  });
  const shapes = loadObsidianLeafletShapes(mapName);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    "div",
    {
      class: "leaflet-map",
      "data-map-name": mapName,
      "data-src": imageSource,`,
  },
  {
    from: `      "data-unit": unit,
      "data-enable-copy-tool": pluginOptions.enableCopyTool ?? false,
      children: filteredMarkers.map((marker) => /* @__PURE__ */ jsx(
        "div",
        {
          class: "leaflet-marker",
          "data-name": marker.name,
          "data-link": marker.link,
          "data-coordinates": marker.coordinates,
          "data-icon": marker.icon ?? DEFAULTS.markerIcon,
          "data-colour": marker.colour ?? DEFAULTS.markerColour,
          "data-min-zoom": marker.minZoom ?? minZoom
        }
      ))
    }`,
    to: `      "data-unit": unit,
      "data-enable-copy-tool": pluginOptions.enableCopyTool ?? false,
      children: [
        ...filteredMarkers.map((marker) => /* @__PURE__ */ jsx(
        "div",
        {
          class: "leaflet-marker",
          "data-name": marker.name,
          "data-link": marker.link,
          "data-coordinates": marker.coordinates,
          "data-icon": marker.icon ?? DEFAULTS.markerIcon,
          "data-colour": marker.colour ?? DEFAULTS.markerColour,
          "data-min-zoom": marker.minZoom ?? minZoom
        }
      )),
        ...shapes.map((shape) => /* @__PURE__ */ jsx(
          "div",
          {
            class: "leaflet-shape",
            "data-type": shape.type,
            "data-color": shape.color ?? DEFAULTS.shapeColour,
            "data-points": JSON.stringify(shape.vertices?.filter((vertex) => typeof vertex.lat === "number" && typeof vertex.lng === "number").map((vertex) => [vertex.lat, vertex.lng]) ?? [])
          }
        ))
      ]
    }`,
  },
  {
    from: `.map(t=>parseInt(t));if(!P(n))`,
    to: `.map(t=>Number(t));if(!P(n))`,
  },
  {
    from: `function A(e){let n=e.querySelectorAll("div.leaflet-marker"),t=[];return n.forEach(o=>{Z(o.dataset)&&t.push(o.dataset),o.remove()}),t}function I(e)`,
    to: `function A(e){let n=e.querySelectorAll("div.leaflet-marker"),t=[];return n.forEach(o=>{Z(o.dataset)&&t.push(o.dataset),o.remove()}),t}function B(e){return!(!M(e)||!e.type||!e.color||!e.points)}function G(e){let n=e.querySelectorAll("div.leaflet-shape"),t=[];return n.forEach(o=>{B(o.dataset)&&t.push(o.dataset),o.remove()}),t}function I(e)`,
  },
  {
    from: `t(g,v),n.on("zoomend",()=>t(g,v))}var c=class`,
    to: `t(g,v),n.on("zoomend",()=>t(g,v))}function q(e,n,t){let[o,i]=e;if(o>=0&&i>=0&&(o>10||i>10)&&o<=n.naturalHeight&&i<=n.naturalWidth)return e;let a=2**t;return[Math.abs(o)*a,i*a]}function V(e,n,t){let o=JSON.parse(e);return Array.isArray(o)?o.filter(P).map(i=>q(i,n,t)):[]}function W(e,n,t,o){let i=V(e.points,t,o);if(i.length===0)return;let a={color:e.color,weight:4,opacity:1};e.type==="polygon"?L.polygon(i,a).addTo(n):e.type==="polyline"&&L.polyline(i,a).addTo(n)}var c=class`,
  },
  {
    from: `t(g,v),n.on("zoomend",()=>t(g,v))}function V(e){let n=JSON.parse(e);return Array.isArray(n)?n.filter(P):[]}function W(e,n){let t=V(e.points);if(t.length===0)return;let o={color:e.color};e.type==="polygon"?L.polygon(t,o).addTo(n):e.type==="polyline"&&L.polyline(t,o).addTo(n)}var c=class`,
    to: `t(g,v),n.on("zoomend",()=>t(g,v))}function q(e,n,t){let[o,i]=e;if(o>=0&&i>=0&&(o>10||i>10)&&o<=n.naturalHeight&&i<=n.naturalWidth)return e;let a=2**t;return[Math.abs(o)*a,i*a]}function V(e,n,t){let o=JSON.parse(e);return Array.isArray(o)?o.filter(P).map(i=>q(i,n,t)):[]}function W(e,n,t,o){let i=V(e.points,t,o);if(i.length===0)return;let a={color:e.color,weight:4,opacity:1};e.type==="polygon"?L.polygon(i,a).addTo(n):e.type==="polyline"&&L.polyline(i,a).addTo(n)}var c=class`,
  },
  {
    from: `t(g,v),n.on("zoomend",()=>t(g,v))}function q(e,n){let[t,o]=e;if(t>=0&&o>=0&&t<=n.naturalHeight&&o<=n.naturalWidth)return e;return[(90-t)/180*n.naturalHeight,(o+180)/360*n.naturalWidth]}function V(e,n){let t=JSON.parse(e);return Array.isArray(t)?t.filter(P).map(o=>q(o,n)):[]}function W(e,n,t){let o=V(e.points,t);if(o.length===0)return;let i={color:e.color,weight:4,opacity:1};e.type==="polygon"?L.polygon(o,i).addTo(n):e.type==="polyline"&&L.polyline(o,i).addTo(n)}var c=class`,
    to: `t(g,v),n.on("zoomend",()=>t(g,v))}function q(e,n,t){let[o,i]=e;if(o>=0&&i>=0&&(o>10||i>10)&&o<=n.naturalHeight&&i<=n.naturalWidth)return e;let a=2**t;return[Math.abs(o)*a,i*a]}function V(e,n,t){let o=JSON.parse(e);return Array.isArray(o)?o.filter(P).map(i=>q(i,n,t)):[]}function W(e,n,t,o){let i=V(e.points,t,o);if(i.length===0)return;let a={color:e.color,weight:4,opacity:1};e.type==="polygon"?L.polygon(i,a).addTo(n):e.type==="polyline"&&L.polyline(i,a).addTo(n)}var c=class`,
  },
  {
    from: `async function $(e,n){let t=e.dataset;if(!R(t))return;let o=await N(t.src);e.style.aspectRatio=(o.naturalWidth/o.naturalHeight).toString();let i=[[0,0],[o.naturalHeight,o.naturalWidth]],a=L.map(e,{crs:L.CRS.Simple,maxBounds:i,minZoom:parseFloat(t.minZoom),maxZoom:parseFloat(t.maxZoom),zoomSnap:.01,zoomDelta:parseFloat(t.zoomDelta)}),s=H(),l=new s({enableCopyTool:t.enableCopyTool==="true"});return l.addTo(a),l.updateSettings(t),L.imageOverlay(t.src,i).addTo(a),a.fitBounds(i),n.map(p=>F(p,a)),a.setZoom(parseFloat(t.defaultZoom)),a}`,
    to: `async function $(e,n,t){let o=e.dataset;if(!R(o))return;let i=await N(o.src);e.style.aspectRatio=(i.naturalWidth/i.naturalHeight).toString();let a=[[0,0],[i.naturalHeight,i.naturalWidth]],s=L.map(e,{crs:L.CRS.Simple,maxBounds:a,minZoom:parseFloat(o.minZoom),maxZoom:parseFloat(o.maxZoom),zoomSnap:.01,zoomDelta:parseFloat(o.zoomDelta)}),l=H(),p=new l({enableCopyTool:o.enableCopyTool==="true"});p.addTo(s),p.updateSettings(o),L.imageOverlay(o.src,a).addTo(s),s.fitBounds(a),n.map(g=>F(g,s));let y=parseFloat(o.defaultZoom);return t.map(g=>W(g,s,i,y)),s.setZoom(y),s}`,
  },
  {
    from: `async function $(e,n,t){let o=e.dataset;if(!R(o))return;let i=await N(o.src);e.style.aspectRatio=(i.naturalWidth/i.naturalHeight).toString();let a=[[0,0],[i.naturalHeight,i.naturalWidth]],s=L.map(e,{crs:L.CRS.Simple,maxBounds:a,minZoom:parseFloat(o.minZoom),maxZoom:parseFloat(o.maxZoom),zoomSnap:.01,zoomDelta:parseFloat(o.zoomDelta)}),l=H(),p=new l({enableCopyTool:o.enableCopyTool==="true"});return p.addTo(s),p.updateSettings(o),L.imageOverlay(o.src,a).addTo(s),s.fitBounds(a),n.map(y=>F(y,s)),t.map(y=>W(y,s)),s.setZoom(parseFloat(o.defaultZoom)),s}`,
    to: `async function $(e,n,t){let o=e.dataset;if(!R(o))return;let i=await N(o.src);e.style.aspectRatio=(i.naturalWidth/i.naturalHeight).toString();let a=[[0,0],[i.naturalHeight,i.naturalWidth]],s=L.map(e,{crs:L.CRS.Simple,maxBounds:a,minZoom:parseFloat(o.minZoom),maxZoom:parseFloat(o.maxZoom),zoomSnap:.01,zoomDelta:parseFloat(o.zoomDelta)}),l=H(),p=new l({enableCopyTool:o.enableCopyTool==="true"});p.addTo(s),p.updateSettings(o),L.imageOverlay(o.src,a).addTo(s),s.fitBounds(a),n.map(g=>F(g,s));let y=parseFloat(o.defaultZoom);return t.map(g=>W(g,s,i,y)),s.setZoom(y),s}`,
  },
  {
    from: `async function $(e,n,t){let o=e.dataset;if(!R(o))return;let i=await N(o.src);e.style.aspectRatio=(i.naturalWidth/i.naturalHeight).toString();let a=[[0,0],[i.naturalHeight,i.naturalWidth]],s=L.map(e,{crs:L.CRS.Simple,maxBounds:a,minZoom:parseFloat(o.minZoom),maxZoom:parseFloat(o.maxZoom),zoomSnap:.01,zoomDelta:parseFloat(o.zoomDelta)}),l=H(),p=new l({enableCopyTool:o.enableCopyTool==="true"});return p.addTo(s),p.updateSettings(o),L.imageOverlay(o.src,a).addTo(s),s.fitBounds(a),n.map(y=>F(y,s)),t.map(y=>W(y,s,i)),s.setZoom(parseFloat(o.defaultZoom)),s}`,
    to: `async function $(e,n,t){let o=e.dataset;if(!R(o))return;let i=await N(o.src);e.style.aspectRatio=(i.naturalWidth/i.naturalHeight).toString();let a=[[0,0],[i.naturalHeight,i.naturalWidth]],s=L.map(e,{crs:L.CRS.Simple,maxBounds:a,minZoom:parseFloat(o.minZoom),maxZoom:parseFloat(o.maxZoom),zoomSnap:.01,zoomDelta:parseFloat(o.zoomDelta)}),l=H(),p=new l({enableCopyTool:o.enableCopyTool==="true"});p.addTo(s),p.updateSettings(o),L.imageOverlay(o.src,a).addTo(s),s.fitBounds(a),n.map(g=>F(g,s));let y=parseFloat(o.defaultZoom);return t.map(g=>W(g,s,i,y)),s.setZoom(y),s}`,
  },
  {
    from: `for(let n of Array.from(e)){let t=A(n),o=await $(n,t);window.addCleanup(()=>z(o))}`,
    to: `for(let n of Array.from(e)){let t=A(n),o=G(n),i=await $(n,t,o);window.addCleanup(()=>z(i))}`,
  },
])

console.log("Patched Quartz Leaflet compatibility.")
