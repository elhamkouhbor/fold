import{u as a,j as e,h as r,t as n,i as c,b as t,B as s}from"./index-BQ9P46sJ.js";const l=`MIT License

Copyright (c) 2026 Pradeep Siddappa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

Generated output: die-line files you create with this software (PDF, SVG, DXF
exports) belong to you. Use them for personal or commercial work; no
attribution is required.
`,d=`# Third-Party Notices

## Die Cut Studio

This application is based on Die Cut Studio at commit \`3584baa4ac5d1e213a92a79b60622564518955ec\`, copyright (c) 2026 Pradeep Siddappa, licensed under the MIT License. The full license is retained in [LICENSE](LICENSE).

## Design references

The following repositories were inspected as design references only; no source was incorporated in Phases 0–3:

- packbox \`3b1b33e34500e1fe615dbfe2d486e818696c0c78\` (MIT)
- OpenBox3D \`d4c6ff6ee6f06cd53671facc42d49d941c8e6934\` (MIT)
- dieline-to-3d-box \`70f56ebb51b92da094bdfb56923c67831c447480\` (no identifiable reuse license; conceptual reference only)

## Khronos PBR Neutral tone mapping

\`src/ui/import/neutralToneMapping.ts\` implements the Khronos PBR Neutral tone-mapping formula
(KhronosGroup/ToneMapping, Apache-2.0), as also shipped in three.js r162+ (MIT) as \`NeutralToneMapping\`.

## Development-only dependencies

- linkedom (ISC) — DOM implementation used only by tests and \`scripts/inspect-svg\` so the browser SVG import pipeline runs under Node. Not bundled into the app.
- playwright-core 1.55.0 (Apache-2.0) — headless-browser driver for \`npm run test:browser\`. Not bundled into the app.

## Phase 2 geometry

\`src/import/normalizeGeometry.ts\` and \`src/import/svgToPanelGraph.ts\` are original code. The half-edge face walk follows the same public technique as Die Cut Studio's MIT \`src/core/fold/panelize.ts\` (clockwise-neighbour rule); no code from dieline-to-3d-box was used.
`,h=[{name:"React / React DOM",license:"MIT",note:t("user interface")},{name:"three.js",license:"MIT",note:t("3D rendering (incl. OrbitControls, RoomEnvironment examples)")}];function u({onNavigate:o}){return a(),e.jsxs("div",{className:"about-page",children:[e.jsxs("header",{className:"about-head",children:[e.jsx("button",{className:"link-btn",onClick:()=>o("/"),"aria-label":n("Back to the studio"),children:e.jsx(r,{})}),e.jsxs("span",{className:"about-actions",children:[e.jsx(c,{className:"btn"}),e.jsx("button",{className:"btn",onClick:()=>o("/"),children:n("Back to studio")})]})]}),e.jsxs("main",{className:"about-main",children:[e.jsx("h1",{children:n("About {name}",{name:s.name})}),e.jsx("p",{className:"lead",children:n(s.description)}),e.jsxs("section",{className:"about-card",children:[e.jsx("h2",{children:n("Privacy")}),e.jsx("p",{children:n("Everything happens in this browser tab. Your SVG files and projects are never uploaded: there is no server, no account, no analytics and no AI service. Projects are saved as {ext} files on your own device.",{ext:s.projectExtension})})]}),e.jsxs("section",{className:"about-card",children:[e.jsx("h2",{children:n("What the 3D preview is (and is not)")}),e.jsx("p",{children:n("Folds are rigid rotations about the detected creases. Automatic proposals are geometric heuristics with stated confidence. The preview does not check collisions, glue, locks or real board thickness, so always confirm a physical sample.")})]}),e.jsxs("section",{className:"about-card",id:"licenses",children:[e.jsx("h2",{children:n("Open-source licenses")}),e.jsx("p",{children:n("{name} is built on Die Cut Studio (MIT). Its license notice is reproduced below as the license requires.",{name:s.name})}),e.jsx("pre",{className:"license-text",lang:"en",children:l}),e.jsx("h3",{children:n("Libraries in this application")}),e.jsx("ul",{children:h.map(i=>e.jsxs("li",{children:[e.jsx("b",{children:i.name})," — ",i.license," (",n(i.note),")"]},i.name))}),e.jsx("h3",{children:n("Third-party notices")}),e.jsx("pre",{className:"license-text",lang:"en",children:d})]}),e.jsx("p",{className:"muted",children:n("Version {v}",{v:s.version})})]})]})}export{u as AboutPage};
