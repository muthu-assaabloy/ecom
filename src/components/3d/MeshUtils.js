import * as THREE from "three";
import { BaseUnits } from "./BaseUnits";
const arrowGap = 2;
const createLine = function (start, end, color) {
  const material = new THREE.LineBasicMaterial({ color: color, linewidth: 5 });
  const points = [];
  points.push(start);
  points.push(end);

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  return new THREE.Line(geometry, material);
};
const createLineDashed = function (points, color) {
  const material = new THREE.LineDashedMaterial({
    color: color,
    dashSize: 1,
    gapSize: 0.5,
  });
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  let line = new THREE.Line(geometry, material);
  line.computeLineDistances();
  return line;
};
const textMapCreate = function (
  text,
  color,
  fontstyle,
  Textwidth,
  textHeight = null
) {
  var bitmap = document.createElement("canvas");
  var g = bitmap.getContext("2d");
  if (Textwidth) {
    if (textHeight) {
      bitmap.width = textHeight * 2;
      bitmap.height = Textwidth * 2;
    } else {
      bitmap.width = Textwidth * 2;
      bitmap.height = Textwidth * 2;
    }
  } else {
      bitmap.width = 512;
      bitmap.height = 512;
  }
  g.font = "Bold 70px Arial";
  if (fontstyle) g.font = fontstyle;
  g.fillStyle = color;
  g.textAlign = "center";
  g.fillText(text, bitmap.width / 2, bitmap.height / 2 + 20);
  g.strokeStyle = color;
  g.strokeText(text, bitmap.width / 2, bitmap.height / 2 + 20);

  var texture = new THREE.Texture(bitmap);
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  // bitmap.dispose();
  return texture;
};
const textMapCreateLabel = function (text, color, fontstyle, Textwidth) {
  var bitmap = document.createElement("canvas");
  var g = bitmap.getContext("2d");
  if (Textwidth) {
    bitmap.width = Textwidth * 2;
    bitmap.height = Textwidth * 2;
  } else {
    bitmap.width = 64;
    bitmap.height = 64;
  }
  g.font = "Bold 70px Arial";
  if (fontstyle) g.font = fontstyle;
  g.fillStyle = color;
  g.textAlign = "center";
  g.fillText(text, bitmap.width / 2, bitmap.height / 2);
  g.strokeStyle = color;
  g.strokeText(text, bitmap.width / 2, bitmap.height / 2);

  var texture = new THREE.Texture(bitmap);
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  return texture;
};
const textMapCreateRound = function (text, color) {
  var bitmap = document.createElement("canvas");
  var g = bitmap.getContext("2d");
  bitmap.width = 512;
  bitmap.height = 512;

  g.fillStyle = "#157fcc";
  g.beginPath();
  g.arc(256, 260, 256, 0, 2 * Math.PI);
  g.fill();

  g.font = "Bold 256px Arial";
  g.fillStyle = color;
  g.textAlign = "center";
  g.fillText(text, 256, 330);
  g.strokeStyle = color;
  g.strokeText(text, 256, 330);

  var texture = new THREE.Texture(bitmap);
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  return texture;
};
const DrawCurve = function (
  location,
  startAngle,
  step,
  numstep,
  length,
  width
) {
  let curve = [];

  for (let i = 1; i < numstep; i++) {
    let angle = toRadians(startAngle);
    let x = Math.cos(angle) * length;
    let y = Math.sin(angle) * width;
    x += location.x;
    y += location.y;
    curve.push([x, y]);
    startAngle += step;
    if (startAngle >= 360) startAngle = 0;
  }

  return curve;
};
const toRadians = function (angle) {
  return angle * (Math.PI / 180);
};
const convertFeetInch = function (inches) {
  if (isValidMeasurement(inches)) return inches;
  let units = new BaseUnits();
  units.setValue(Number(inches * 3200));
  return units.toFeetInchesDisplay();
};
const convertInch = function (inches) {
  if (isValidMeasurement(inches)) return inches;
  let units = new BaseUnits();
  units.setValue(Number(inches * 3200));
  return units.toInchesDisplay();
};
const isValidMeasurement = function (_input) {
  let input = _input.toString();
  // Split the input string by space to get individual parts
  const parts = input.trim().split(" ");

  // Check if there are exactly two parts and they represent feet and inches
  if (parts.length === 2) {
    const feetPart = parts[0];
    const inchesPart = parts[1];

    // Check if feet part is a valid number followed by a single quote
    if (feetPart.endsWith("'") && !isNaN(feetPart.slice(0, -1))) {
      // Check if inches part is in valid format (fraction or decimal followed by double quote)
      if (inchesPart.endsWith('"')) {
        const inchesValue = inchesPart.slice(0, -1);

        // Check if inches part is a valid fraction or decimal
        if (!isNaN(inchesValue) || isValidFraction(inchesValue)) {
          return true; // Valid measurement format
        }
      }
    } else if (!feetPart.endsWith("'") && inchesPart.endsWith('"')) {
      const inchesValue = inchesPart.slice(0, -1);

      // Check if inches part is a valid fraction or decimal
      if (!isNaN(inchesValue) || isValidFraction(inchesValue)) {
        return true; // Valid measurement format
      }
    }
  } else if (parts.length === 1 && parts[0].endsWith('"')) {
    const inchesValue = parts[0].slice(0, -1);

    // Check if inches part is a valid fraction or decimal
    if (!isNaN(inchesValue) || isValidFraction(inchesValue)) {
      return true; // Valid measurement format
    }
  }

  return false; // Not a valid measurement format
};
const isValidFraction = function (input) {
  // Split the input string by '/'
  const parts = input.split("/");

  // Check if there are exactly two parts and they are valid numbers
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    // const numerator = parseInt(parts[0], 10); // Convert numerator to integer
    const denominator = parseInt(parts[1], 10); // Convert denominator to integer

    // Check if denominator is not zero
    return denominator !== 0;
  }

  return false; // Not a valid fraction format
};
// const checkMeasurementString = function (_input) {
//   let input = _input.toString();
//   // Check for an optional hyphen followed by optional whitespace
//   const trimmedInput = input.trim(); // Remove leading and trailing whitespace
//   const hasHyphenWhitespace =
//     trimmedInput.startsWith("-") || trimmedInput.endsWith("-");

//   // Check for feet or inches
//   const hasFeet = trimmedInput.includes("feet") || trimmedInput.includes("ft.");
//   const hasInches =
//     trimmedInput.includes("inch") || trimmedInput.includes("in.");

//   // Check for digits and fractions
//   const hasDigits = /\d/.test(input);
//   const hasFractions = hasFraction(input);
//   console.log(input, hasFractions);
//   // Check for decimals
//   const hasDecimals = hasDecimal(input);

//   // Check for single quote
//   const hasSingleQuote = input.includes("'");

//   // Check for double quote
//   const hasDoubleQuote = input.includes('"');

//   // Final check combining all conditions
//   const isValidMeasurement =
//     (hasHyphenWhitespace || hasDigits || hasFractions || hasDecimals) &&
//     (hasFeet || hasInches) &&
//     (hasSingleQuote || hasDoubleQuote);

//   return isValidMeasurement;
// };
// const hasDecimal = function (input) {
//   // Split the input string by '.' to check for decimal parts
//   const parts = input.split(".");

//   // Check if there are exactly two parts and they are valid numbers
//   if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
//     // Check if the decimal is valid (e.g., not multiple dots, leading/trailing dots)
//     return parts[0] !== "" || parts[1] !== "";
//   }

//   return false; // Not a valid decimal format
// };
// const hasFraction = function (input) {
//   // Split the input string by '/'
//   const parts = input.split("/");
//   if (parts.length === 2) return true;
//   // Check if there are exactly two parts and they are valid numbers
//   if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
//     // const numerator = parseFloat(parts[0]);
//     const denominator = parseFloat(parts[1]);

//     // Check if the fraction is valid (denominator is not zero)
//     return denominator !== 0;
//   }

//   return false; // Not a valid fraction format
// };
// const isFeetInch = function (input) {
//   const regex =
//     /(?:-[ \t]*)?((?:\d+(?:\.\d*)?|(?:\d+[ \t]+)?\d+[ \t]*\/[ \t]*\d+)[ \t]*(?:[']|feet|ft\.?)(?:[ \t]*(?:-[ \t]*)?(?:\d+(?:\.\d*)?|(?:\d+[ \t]+)?\d+[ \t]*\/[ \t]*\d+)[ \t]*(?:["]|inch(?:es)?|in\.?))?|(?:\d+(?:\.\d*)?|(?:\d+[ \t]+)?\d+[ \t]*\/[ \t]*\d+)[ \t]*(?:["]|inch(?:es)?|in\.?))/;

//   const testString = input.toString();
//   const match = testString.match(regex);

//   if (match) {
//     return true;
//   } else {
//     return false;
//   }
//   // return /(?:-[ \t]*)?((?:\d+(?:\.\d*)?|(?:\d+[ \t]+)?\d+[ \t]*\/[ \t]*\d+)[ \t]*(?:[']|feet|ft\.?)(?:[ \t]*(?:-[ \t]*)?(?:\d+(?:\.\d*)?|(?:\d+[ \t]+)?\d+[ \t]*\/[ \t]*\d+)[ \t]*(?:["]|inch(?:es)?|in\.?))?|(?:\d+(?:\.\d*)?|(?:\d+[ \t]+)?\d+[ \t]*\/[ \t]*\d+)[ \t]*(?:["]|inch(?:es)?|in\.?))/.test(
//   //   input.toString()
//   // );
// };
const createLable = function (position, text, color, scale = 16) {
  const texturemap = textMapCreateRound(text, color);
  const textMaterial = new THREE.SpriteMaterial({
    map: texturemap,
    alphaTest: 0.1,
    transparent: true,
    side: THREE.FrontSide,
  });

  const textMesh = new THREE.Sprite(textMaterial);
  textMesh.position.set(position.x, position.y, position.z);
  textMesh.scale.set(scale, scale, scale);
  textMesh.name = "textmesh";
  return textMesh;
};
const createDimensionLine2 = function (
  start,
  end,
  color,
  scale = 16,
  textValue,
  capHeight = 1,
  xnegate,
  ynegate
) {
  let measurement = new THREE.Group();
  let line = createLine(start, end, color);
  measurement.add(line);

  let dir1 = end.clone().sub(start).normalize();

  const length = start.clone().distanceTo(end);

  // let dir2 = start.clone().sub(end).normalize();
  // let capHeight = 1.5;
  // let text = convertFeetInch(length);
  let textDim = convertFeetInch(length);
  if (textValue) textDim = textValue;
  // let fontstyle = "72px Arial";
  const Dimtexturemap = textMapCreate(textDim, color);

  const textDimMaterial = new THREE.SpriteMaterial({
    map: Dimtexturemap,
    alphaTest: 0.3,
    transparent: true,
    side: THREE.FrontSide,
    name: textDim,
  });
  const textDimMesh = new THREE.Sprite(textDimMaterial);
  var scalemat = new THREE.Matrix4().makeScale(scale, scale, scale);
  textDimMesh.applyMatrix4(scalemat);
  // textMesh.scale.set(scale, scale, scale);
  textDimMesh.name = "textmesh";
  const origintext = start.clone().add(dir1.clone().multiplyScalar(length / 2));
  let transmat = new THREE.Matrix4().makeTranslation(
    origintext.x,
    origintext.y + capHeight * 2,
    origintext.z
  );
  if (Math.round(Math.abs(dir1.y)) === 1) {
    transmat = new THREE.Matrix4().makeTranslation(
      origintext.x + (xnegate ? capHeight * 2 : -(capHeight * 2)),
      origintext.y,
      origintext.z
    );
  } else if (ynegate) {
    transmat = new THREE.Matrix4().makeTranslation(
      origintext.x,
      origintext.y - capHeight * 2,
      origintext.z
    );
  }
  textDimMesh.applyMatrix4(transmat);
  // textMesh.position.set(origintext.x, origintext.y, origintext.z);
  if (Math.round(Math.abs(dir1.y)) === 1) {
    textDimMesh.material.rotation = Math.PI / 2;
  }

  measurement.add(textDimMesh);
  if (Math.round(Math.abs(dir1.y)) === 1) {
    let lineleft = createLine(
      new THREE.Vector3(start.x - capHeight, start.y, start.z),
      new THREE.Vector3(start.x + capHeight, start.y, start.z),
      color
    );
    measurement.add(lineleft);
    let lineright = createLine(
      new THREE.Vector3(end.x - capHeight, end.y, end.z),
      new THREE.Vector3(end.x + capHeight, end.y, end.z),
      color
    );
    measurement.add(lineright);
  } else {
    let lineleft = createLine(
      new THREE.Vector3(start.x, start.y - capHeight, start.z),
      new THREE.Vector3(start.x, start.y + capHeight, start.z),
      color
    );
    measurement.add(lineleft);
    let lineright = createLine(
      new THREE.Vector3(end.x, end.y - capHeight, end.z),
      new THREE.Vector3(end.x, end.y + capHeight, end.z),
      color
    );
    measurement.add(lineright);
  }
  return measurement;
};
const createDimensionLine = function (
  start,
  end,
  color,
  scale = 16,
  textValue,
  offsetY = 3.5
) {
  let measurement = new THREE.Group();
  let line = createLine(start, end, color);
  measurement.add(line);

  let dir1 = end.clone().sub(start).normalize();

  const length = start.clone().distanceTo(end);

  // let dir2 = start.clone().sub(end).normalize();

  let text = convertFeetInch(length);
  if (textValue) text = textValue;
  const texturemap = textMapCreate(text, color);
  const textMaterial = new THREE.SpriteMaterial({
    map: texturemap,
    alphaTest: 0.3,
    transparent: true,
    side: THREE.FrontSide,
  });

  const textMesh = new THREE.Sprite(textMaterial);
  var scalemat = new THREE.Matrix4().makeScale(scale, scale, scale);
  textMesh.applyMatrix4(scalemat);
  // textMesh.scale.set(scale, scale, scale);
  textMesh.name = "textmesh";
  const origintext = start.clone().add(dir1.clone().multiplyScalar(length / 2));
  var transmat = new THREE.Matrix4().makeTranslation(
    origintext.x,
    origintext.y + offsetY,
    origintext.z
  );
  textMesh.applyMatrix4(transmat);

  if (dir1.y === 1) {
    textMesh.position.set(origintext.x, origintext.y, origintext.z);
    textMesh.material.rotation = Math.PI / 2;
  }

  measurement.add(textMesh);
  let lineleft = createLine(
    new THREE.Vector3(start.x, start.y - 1, start.z),
    new THREE.Vector3(start.x, start.y + 1, start.z),
    color
  );
  measurement.add(lineleft);
  let lineright = createLine(
    new THREE.Vector3(end.x, end.y - 1, end.z),
    new THREE.Vector3(end.x, end.y + 1, end.z),
    color
  );
  measurement.add(lineright);
  return measurement;
};
const createDimensionLineText = function (
  start,
  end,
  color,
  scale = 16,
  textValue,
  negative,
  offset,
  isBold,
  manualText = "",
  isForSave
) {
  let measurement = new THREE.Group();
  let line = createLine(start, end, color);
  measurement.add(line);
  let capHeight = 0.15;
  let dir1 = end.clone().sub(start).normalize();

  const length = start.clone().distanceTo(end);

  // let dir2 = start.clone().sub(end).normalize();

  let textDim = convertFeetInch(length);
  if (manualText !== "") textDim = manualText;
  let fontstyle = "50px sans-serif ";
  if (isBold) fontstyle = "Bold 50px sans-serif ";
  if(isForSave) fontstyle= "90 px sans-serif ";
  if(isBold && isForSave) fontstyle= "90 px sans-serif ";
  const Dimtexturemap = textMapCreate(
    negative ? "-" + textDim : textDim,
    color,
    fontstyle
  );
  const textDimMaterial = new THREE.SpriteMaterial({
    map: Dimtexturemap,
    alphaTest: 0.3,
    transparent: true,
    side: THREE.FrontSide,
    name: negative ? "-" + textDim : textDim,
  });
  // textDimMaterial.sizeAttenuation = false;
  const textDimMesh = new THREE.Sprite(textDimMaterial);
  var scalemat = new THREE.Matrix4().makeScale(scale, scale, scale);
  textDimMesh.applyMatrix4(scalemat);
  // textMesh.scale.set(scale, scale, scale);
  textDimMesh.name = "textmesh";
  textDimMesh.SpriteScale = true;
  textDimMesh.baseSpriteScale = 1;
  const texturemap = textMapCreate(textValue, color, fontstyle);
  const textMaterial = new THREE.SpriteMaterial({
    map: texturemap,
    alphaTest: 0.3,
    transparent: true,
    side: THREE.FrontSide,
    name: textValue,
  });

  // textMaterial.sizeAttenuation = false;
  const textLabelMesh = new THREE.Sprite(textMaterial);
  textLabelMesh.SpriteScale = true;
  textLabelMesh.baseSpriteScale = 1;
  textLabelMesh.applyMatrix4(scalemat);
  // textMesh.scale.set(scale, scale, scale);
  textLabelMesh.name = "textmesh";
  const origintext = start.clone().add(dir1.clone().multiplyScalar(length / 2));
  let transmat = new THREE.Matrix4().makeTranslation(
    origintext.x,
    origintext.y + capHeight * 2,
    origintext.z
  );
  if (Math.round(Math.abs(dir1.y)) === 1) {
    let xoff = capHeight * 3;
    if (offset) xoff = offset - 0.1;
    transmat = new THREE.Matrix4().makeTranslation(
      origintext.x + xoff,
      origintext.y,
      origintext.z
    );
  }
  textLabelMesh.applyMatrix4(transmat);
  textDimMesh.applyMatrix4(transmat);
  // textMesh.position.set(origintext.x, origintext.y, origintext.z);
  if (Math.round(Math.abs(dir1.y)) === 1) {
    textLabelMesh.material.rotation = Math.PI / 2;
    textDimMesh.material.rotation = Math.PI / 2;
  }

  // measurement.add(textMesh);
  if (Math.round(Math.abs(dir1.y)) === 1) {
    let lineleft = createLine(
      new THREE.Vector3(start.x - capHeight, start.y, start.z),
      new THREE.Vector3(start.x + capHeight, start.y, start.z),
      color
    );
    measurement.add(lineleft);
    let lineright = createLine(
      new THREE.Vector3(end.x - capHeight, end.y, end.z),
      new THREE.Vector3(end.x + capHeight, end.y, end.z),
      color
    );
    measurement.add(lineright);
  } else {
    let lineleft = createLine(
      new THREE.Vector3(start.x, start.y - capHeight, start.z),
      new THREE.Vector3(start.x, start.y + capHeight, start.z),
      color
    );
    measurement.add(lineleft);
    let lineright = createLine(
      new THREE.Vector3(end.x, end.y - capHeight, end.z),
      new THREE.Vector3(end.x, end.y + capHeight, end.z),
      color
    );
    measurement.add(lineright);
  }

  return { measurement, Label: textLabelMesh, Dim: textDimMesh };
};
const createText = function (text, color, scale, fontstyle, Textwidth) {
  const texturemap = textMapCreate(text, color, fontstyle, Textwidth);
  const textMaterial = new THREE.SpriteMaterial({
    map: texturemap,
    alphaTest: 0.3,
    transparent: true,
    side: THREE.FrontSide,
  });

  const textMesh = new THREE.Sprite(textMaterial);
  if (Textwidth)
    textMesh.scale.set(Textwidth / 10, Textwidth / 10, Textwidth / 10);
  else textMesh.scale.set(scale, scale, scale);
  textMesh.name = "textmesh";
  return textMesh;
};
const createDimension = function (start, end, color, scale = 16) {
  let measurement = new THREE.Group();
  let dir1 = end.clone().sub(start).normalize();

  const length = start.clone().distanceTo(end);
  const origin1 = start
    .clone()
    .add(dir1.clone().multiplyScalar(length / 2 + arrowGap * 2));
  const hex = color;

  const arrowHelper = new THREE.ArrowHelper(
    dir1,
    origin1,
    length / 2 - arrowGap * 2,
    hex,
    1.0,
    1.0
  );
  measurement.add(arrowHelper);
  let dir2 = start.clone().sub(end).normalize();
  const origin2 = end
    .clone()
    .add(dir2.clone().multiplyScalar(length / 2 + arrowGap * 2));
  const arrowHelper2 = new THREE.ArrowHelper(
    dir2,
    origin2,
    length / 2 - arrowGap * 2,
    hex,
    1.0,
    1.0
  );
  measurement.add(arrowHelper2);
  const text = convertFeetInch(length);
  const texturemap = textMapCreate(text, color);
  const textMaterial = new THREE.SpriteMaterial({
    map: texturemap,
    alphaTest: 0.3,
    transparent: true,
    side: THREE.FrontSide,
  });

  const textMesh = new THREE.Sprite(textMaterial);
  textMesh.scale.set(scale, scale, scale);
  textMesh.name = "textmesh";
  const origintext = end.clone().add(dir2.clone().multiplyScalar(length / 2));
  textMesh.position.set(origintext.x, origintext.y, origintext.z);
  if (Math.round(dir1.y) === 1) textMesh.material.rotation = Math.PI / 2;
  measurement.add(textMesh);
  return measurement;
};
export {
  createLine,
  createLineDashed,
  createDimensionLineText,
  createText,
  createLable,
  textMapCreate,
  createDimension,
  DrawCurve,
  toRadians,
  convertFeetInch,
  convertInch,
  createDimensionLine,
  textMapCreateRound,
  createDimensionLine2,
  textMapCreateLabel,
};
