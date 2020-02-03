/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nlet data = [\n  {\n    cat: \"San Francisco\",\n    name: \"SE 1\",\n    value: 1,\n    icon: \"../img/san_francisco.svg\",\n    desc: \"what it dodo babeeee\"\n  },\n  {\n    cat: \"San Francisco\",\n    name: \"SE 2\",\n    value: 2,\n    icon: \"../img/san_francisco.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"San Francisco\",\n    name: \"SE 3\",\n    value: 3,\n    icon: \"../img/san_francisco.svg\",\n    desc: \"fniafnajnsjnaoinosnfsngosingsns fn;anfjanfjanfjanjanakjnjasfnjkafnjanajnnajfnafnanjkfnanfnakjfnak;nfjknjkanfjkanakn;fjkagnjf nfosng sngos;n osngangsjngsjngs ijanf bfiahbfaifbnaijnfjka njafnbajkfnajkfnbajfnajkfnajkfnskjj sfjkfns jbnjkfkafnskj.fnbskjfnbs.kjs\"\n  },\n  {\n    cat: \"San Francisco\",\n    name: \"SE 4\",\n    value: 4,\n    icon: \"../img/san_francisco.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Los Angeles\",\n    name: \"SE 1\",\n    value: 1,\n    icon: \"../img/los_angeles.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Los Angeles\",\n    name: \"SE 2\",\n    value: 2,\n    icon: \"../img/los_angeles.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Los Angeles\",\n    name: \"SE 3\",\n    value: 3,\n    icon: \"../img/los_angeles.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"New York\",\n    name: \"SE 1\",\n    value: 1,\n    icon: \"../img/new_york.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"New York\",\n    name: \"SE 2\",\n    value: 2,\n    icon: \"../img/new_york.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Seattle\",\n    name: \"Se 3\",\n    value: 1,\n    icon: \"../img/seattle.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Seattle\",\n    name: \"SE 1\",\n    value: 2,\n    icon: \"../img/seattle.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Seattle\",\n    name: \"SE 1\",\n    value: 3,\n    icon: \"../img/seattle.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Dallas\",\n    name: \"SE 1\",\n    value: 1,\n    icon: \"../img/dallas.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Dallas\",\n    name: \"SE 1\",\n    value: 2,\n    icon: \"../img/dallas.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Miami\",\n    name: \"SE 1\",\n    value: 1,\n    icon: \"../img/miami.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Miami\",\n    name: \"SE 1\",\n    value: 3,\n    icon: \"../img/miami.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Chicago\",\n    name: \"SE 1\",\n    value: 1,\n    icon: \"../img/chicago.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Chicago\",\n    name: \"SE 1\",\n    value: 2,\n    icon: \"../img/chicago.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Chicago\",\n    name: \"SE 1\",\n    value: 3,\n    icon: \"../img/chicago.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Philadelphia\",\n    name: \"SE 1\",\n    value: 1,\n    icon: \"../img/philadelphia.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Philadelphia\",\n    name: \"SE 1\",\n    value: 2,\n    icon: \"../img/philadelphia.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Philadelphia\",\n    name: \"SE 1\",\n    value: 4,\n    icon: \"../img/philadelphia.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Philadelphia\",\n    name: \"SE 1\",\n    value: 3,\n    icon: \"../img/philadelphia.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"San Diego\",\n    name: \"SE 1\",\n    value: 1,\n    icon: \"../img/san_diego.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"San Diego\",\n    name: \"SE 1\",\n    value: 2,\n    icon: \"../img/san_diego.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"San Diego\",\n    name: \"SE 1\",\n    value: 3,\n    icon: \"../img/san_diego.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Boston\",\n    name: \"SE 1\",\n    value: 1,\n    icon: \"../img/boston.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Boston\",\n    name: \"SE 1\",\n    value: 2,\n    icon: \"../img/boston.svg\",\n    desc: \"\"\n  },\n  {\n    cat: \"Boston\",\n    name: \"SE 1\",\n    value: 3,\n    icon: \"../img/boston.svg\",\n    desc: \"\"\n  }\n];\n\n\n\nmodule.exports = data;\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_0__);\n// javascript \n\n\n\n\nfunction code() {\n\n  let svg = d3.select(\"svg\");\n  let width = document.body.clientWidth; // get width in pixels\n  let height = +svg.attr(\"height\");\n  let centerX = width * 0.5;\n  let centerY = height * 0.5;\n  let strength = .05;\n  let focusedNode;\n\n  let format = d3.format(\",d\");\n\n  // let scaleColor = d3.scaleOrdinal(d3.schemeSet3);\n  let scaleColor = d3.scaleOrdinal(d3.schemePastel2);\n\n  // use pack to calculate radius of the circle\n  let pack = d3\n    .pack()\n    .size([width, height])\n    .padding(1.5);\n\n  let forceCollide = d3.forceCollide(d => d.r + 1);\n\n  // use the force\n  let simulation = d3\n    .forceSimulation()\n    // .force('link', d3.forceLink().id(d => d.id))\n    .force(\"charge\", d3.forceManyBody())\n    .force(\"collide\", forceCollide)\n    // .force('center', d3.forceCenter(centerX, centerY))\n    .force(\"x\", d3.forceX(centerX).strength(strength))\n    .force(\"y\", d3.forceY(centerY).strength(strength));\n\n  // reduce number of circles on mobile screen due to slow computation\n  if (\n    \"matchMedia\" in window &&\n    window.matchMedia(\"(max-device-width: 767px)\").matches\n  ) {\n    data = _data__WEBPACK_IMPORTED_MODULE_0___default.a.filter(el => {\n      return el.value >= 50;\n    });\n  }\n\n  let root = d3.hierarchy({ children: _data__WEBPACK_IMPORTED_MODULE_0___default.a }).sum(d => d.value);\n\n  // we use pack() to automatically calculate radius conveniently only\n  // and get only the leaves\n  let nodes = pack(root)\n    .leaves()\n    .map(node => {\n      console.log(\"node:\", node.x, (node.x - centerX) * 2);\n      const data = node.data;\n      return {\n        x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement\n        y: centerY + (node.y - centerY) * 3,\n        r: 0, // for tweening\n        radius: node.r, //original radius\n        id: data.cat,\n        // + \".\" + data.name.replace(/\\s/g, \"-\"),\n        cat: data.cat,\n        name: data.name,\n        value: data.value,\n        icon: data.icon,\n        desc: data.desc\n      };\n    });\n  simulation.nodes(nodes).on(\"tick\", ticked);\n\n  // svg.style(\"background-color\", \"white\");\n  let node = svg\n    .selectAll(\".node\")\n    .data(nodes)\n    .enter()\n    .append(\"g\")\n    .attr(\"class\", \"node\")\n    .attr(\"id\", d => d.cat)\n    .call(\n      d3\n        .drag()\n        .on(\"start\", d => {\n          if (!d3.event.active) simulation.alphaTarget(2).restart();\n          d.fx = d.x;\n          d.fy = d.y;\n        })\n        .on(\"drag\", d => {\n          d.fx = d3.event.x;\n          d.fy = d3.event.y;\n        })\n        .on(\"end\", d => {\n          if (!d3.event.active) simulation.alphaTarget(0);\n          d.fx = null;\n          d.fy = null;\n        })\n    );\n\n  node\n    .append(\"circle\")\n    .attr(\"r\", 0)\n    .style(\"fill\", d => scaleColor(d.cat))\n    .attr(\"id\", d => d.cat)\n    .style(\"opacity\", 0.5)\n    .transition()\n    .duration(8000)\n    .ease(d3.easeElasticOut)\n    .tween(\"circleIn\", d => {\n      let i = d3.interpolateNumber(0, d.radius);\n      return t => {\n        d.r = i(t);\n        simulation.force(\"collide\", forceCollide);\n      };\n    });\n\n  node\n    .append(\"clipPath\")\n    .attr(\"id\", d => `clip-${d.id}`)\n    .append(\"use\")\n    .attr(\"xlink:href\", d => `#${d.id}`);\n\n  // display text as circle icon\n  node\n    .filter(d => !String(d.icon).includes(\"img/\"))\n    .append(\"text\")\n    .classed(\"node-icon\", true)\n    .attr(\"clip-path\", d => `url(#clip-${d.id})`)\n    .selectAll(\"tspan\")\n    .data(d => d.icon.split(\";\"))\n    .enter()\n    .append(\"tspan\")\n    .attr(\"x\", 0)\n    .attr(\"y\", (d, i, nodes) => 13 + (i - nodes.length / 2 - 0.5) * 10)\n    .text(name => name);\n\n  // display image as circle icon\n  node\n    .filter(d => String(d.icon).includes(\"img/\"))\n    .append(\"image\")\n    .classed(\"node-icon\", true)\n    .attr(\"fill\", d => `url(#clip-${d.id})`)\n    .attr(\"xlink:href\", d => d.icon)\n    .attr(\"x\", d => -d.radius * 0.7)\n    .attr(\"y\", d => -d.radius * 0.7)\n    .attr(\"height\", d => d.radius * 2 * 0.7)\n    .attr(\"width\", d => d.radius * 2 * 0.7);\n\n  node.append(\"title\").text(d => d.cat + \"::\" + d.name + \"\\n\" + format(d.value));\n\n\n  let legendOrdinal = d3\n    .legendColor()\n    .scale(scaleColor)\n    .shape(\"rect\");\n    \n  \n  let legend = svg\n    .append(\"g\")\n    .classed(\"legend-color\", true)\n    .attr(\"text-anchor\", \"start\")\n    .attr(\"transform\", \"translate( 100, 200 )\")\n    .style(\"font-size\", \"18px\")\n    .style(\"font-weight\", \"thin\")\n    .style(\"fill\", \"whitesmoke\")\n    .call(legendOrdinal)\n\n  document.addEventListener('DOMContentLoaded', () => {\n    document.querySelectorAll(\".legendCells > g\").forEach((el, idx) => {\n      el.setAttribute('id', el.textContent)\n    });\n  })\n\n\n    let clicked = \"\";\n\n    // d3.selectAll('legend')\n    //   .on('click', function(d) {\n    //     d3.selectAll(\".node\").filter(function(e){\n    //       if ( d.color !== e.color) \n    //       return e.species !== d.color\n    //     })\n    //   })\n\n    // d3.selectAll(\".\"+ d.cat).style(\"visibility\", \"hidden\")\n    \n    console.log(d3.selectAll('.legend'))\n    console.log(d3.selectAll('.cell'))\n\n    \n    // style(\"opacity\", 1)\n\n    // if (clicked !== d.cat) {\n    //   d3.selectAll(\".noe\")\n    //     .filter(function (e) {\n    //       return e.species !== d.cat;\n    //     })\n    //     .style(\"opacity\", 0.1)\n    //   clicked = d\n    // }\n    // else {\n    //   clicked = \"\"\n\n  \n  \n\n\n\n\n    // legend.append(\"text\")\n    //   .attr(\"x\", width - 24)\n    //   .attr(\"y\", 9)\n    //   .attr(\"dy\", \".35em\")\n    //   .style(\"text-anchor\", \"end\")\n    //   .text(function (d) { return d; });\n\n  // let sizeScale = d3\n  //   .scaleOrdinal()\n  //   .domain([''])\n  //   .range([5, 10]);\n\n  // let legendSize = d3\n  //   .legendSize()\n  //   .scale(sizeScale)\n  //   .shape(\"circle\")\n  //   .shapePadding(10)\n  //   .labelAlign(\"end\");\n\n  // let legend2 = svg\n  //   .append(\"g\")\n  //   .classed(\"legend-size\", true)\n  //   .attr(\"text-anchor\", \"start\")\n  //   .attr(\"transform\", \"translate(150, 25)\")\n  //   .style(\"font-size\", \"12px\")\n  //   .call(legendSize);\n    \n  //------------------------------------------------------------------------------\n  //small circle in the bubble\n\n  let infoBox = node\n    .append(\"foreignObject\")\n    .classed(\"circle-overlay hidden\", true)\n    .attr(\"x\", -350 * 0.5 * 0.8)\n    .attr(\"y\", -350 * 0.5 * 0.8)\n    .attr(\"height\", 350 * 0.8)\n    .attr(\"width\", 350 * 0.8)\n    .append(\"xhtml:div\")\n    .classed(\"circle-overlay__inner\", true);\n\n  infoBox\n    .append(\"h2\")\n    .classed(\"circle-overlay__title\", true)\n    .text(d => d.name);\n\n  infoBox\n    .append(\"p\")\n    .classed(\"circle-overlay__body\", true)\n    .html(d => d.desc)\n\n\n\n  node.on(\"click\", currentNode => {\n    d3.event.stopPropagation();\n    console.log(\"currentNode\", currentNode);\n    let currentTarget = d3.event.currentTarget; // the <g> el\n\n    if (currentNode === focusedNode) {\n      // no focusedNode or same focused node is clicked\n      return;\n    }\n    let lastNode = focusedNode;\n    focusedNode = currentNode;\n\n    simulation.alphaTarget(0.2).restart();\n    // hide all circle-overlay\n    d3.selectAll(\".circle-overlay\").classed(\"hidden\", true);\n    d3.selectAll(\".node-icon\").classed(\"node-icon--faded\", false).style(\"opacity\", 0.8);;\n\n    // don't fix last node to center anymore\n    if (lastNode) {\n      lastNode.fx = null;\n      lastNode.fy = null;\n      node\n        .filter((d, i) => i === lastNode.index)\n        .transition()\n        .duration(100)\n        .ease(d3.easePolyOut)\n        .tween(\"circleOut\", () => {\n          let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);\n          return t => {\n            lastNode.r = irl(t);\n          };\n        })\n        .on(\"interrupt\", () => {\n          lastNode.r = lastNode.radius;\n        });\n    }\n\n    // if (!d3.event.active) simulation.alphaTarget(0.5).restart();\n\n    d3.transition()\n      .duration(1000)\n      .ease(d3.easePolyOut)\n      .tween(\"moveIn\", () => {\n        console.log(\"tweenMoveIn\", currentNode);\n        let ix = d3.interpolateNumber(currentNode.x, centerX);\n        let iy = d3.interpolateNumber(currentNode.y, centerY);\n        let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);\n        return function(t) {\n          // console.log('i', ix(t), iy(t));\n          currentNode.fx = ix(t);\n          currentNode.fy = iy(t);\n          currentNode.r = ir(t);\n          simulation.force(\"collide\", forceCollide);\n        };\n      })\n      .on(\"end\", () => {\n        simulation.alphaTarget(0);\n        let $currentGroup = d3.select(currentTarget);\n        $currentGroup.select(\".circle-overlay\").classed(\"hidden\", false);\n        $currentGroup\n          .select(\".node-icon\")\n          .classed(\"node-icon--faded\", true)\n          .style(\"opacity\", 0);\n      })\n      .on(\"interrupt\", () => {\n        console.log(\"move interrupt\", currentNode);\n        currentNode.fx = null;\n        currentNode.fy = null;\n        simulation.alphaTarget(0);\n      });\n  });\n\n  // blur\n  d3.select(document).on(\"click\", () => {\n    let target = d3.event.target;\n    // check if click on document but not on the circle overlay\n    if (!target.closest(\"#circle-overlay\") && focusedNode) {\n      focusedNode.fx = null;\n      focusedNode.fy = null;\n      simulation.alphaTarget(0.2).restart();\n      d3.transition()\n        .duration(100)\n        .ease(d3.easePolyOut)\n        .tween(\"moveOut\", function() {\n          console.log(\"tweenMoveOut\", focusedNode);\n          let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);\n          return function(t) {\n            focusedNode.r = ir(t);\n            simulation.force(\"collide\", forceCollide);\n          };\n        })\n        .on(\"end\", () => {\n          focusedNode = null;\n          simulation.alphaTarget(0);\n        })\n        .on(\"interrupt\", () => {\n          simulation.alphaTarget(0);\n        });\n\n      // hide all circle-overlay\n      d3.selectAll(\".circle-overlay\").classed(\"hidden\", true);\n      d3.selectAll(\".node-icon\")\n        .classed(\"node-icon--faded\", false)\n        .style(\"opacity\", 0.8);\n    }\n  });\n\n  function ticked() {\n    node\n      .attr(\"transform\", d => `translate(${d.x},${d.y})`)\n      .select(\"circle\")\n      .attr(\"r\", d => d.r);\n  }\n\n    //Container for the gradients\n  var defs = svg.append(\"defs\");\n\n  //Filter for the outside glow\n  var filter = defs.append(\"filter\")\n      .attr(\"id\",\"glow\");\n  filter.append(\"feGaussianBlur\")\n      .attr(\"stdDeviation\",\"3.5\")\n      .attr(\"result\",\"coloredBlur\");\n  var feMerge = filter.append(\"feMerge\");\n  feMerge.append(\"feMergeNode\")\n      .attr(\"in\",\"coloredBlur\");\n  feMerge.append(\"feMergeNode\")\n      .attr(\"in\",\"SourceGraphic\");\n\n  d3.selectAll(\".node\").style(\"filter\", \"url(#glow)\");\n  \n}\n\nmain.innerHTML = code();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });