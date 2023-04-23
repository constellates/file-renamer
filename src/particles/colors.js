// primary
// secondary
// success
// danger
// warning
// info

function shades(color, divisions) {
  const step = 255 / (divisions - 1);
  const smallest = Math.min(color.r, color.g, color.b);
  const offset = {
    r: color.r - smallest,
    g: color.g - smallest,
    b: color.b - smallest,
  };
  const values = ['rgb(0,0,0)'];

  for (let i = 1; i < divisions; i++) {
    const value = Math.round(i * step);
    const shade = `rgb(${Math.min(offset.r + value, 255)}, ${Math.min(offset.g + value, 255)}, ${Math.min(offset.b + value, 255)})`;
    values.push(shade);
  }

  return values;
}

const grey = shades({ r: 10, g: 10, b: 10 }, 52);

export {
  grey,
};
