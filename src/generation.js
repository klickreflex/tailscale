import Color from 'color';

export function generateColorShades(baseColor, spread) {
    const color = Color(baseColor);
    const white = Color('#ffffff');
    const black = Color('#000000');

    const blackMultiplier = (spread[0] / 100) / 4;
    const whiteMultiplier = (spread[1] / 100) / 4;
    const multipliers = {
        100: whiteMultiplier * 4,
        200: whiteMultiplier * 3,
        300: whiteMultiplier * 2,
        400: whiteMultiplier * 1,
        500: null,
        600: blackMultiplier * 1,
        700: blackMultiplier * 2,
        800: blackMultiplier * 3,
        900: blackMultiplier * 4,
    };

    const shades = { };
    for (const shade of Object.keys(multipliers)) {
        const multiplier = multipliers[shade];
        if (multiplier === null) {
            shades[shade] = baseColor;
        } else if (multiplier > 0) {
            shades[shade] = color.mix(white, multiplier).hex();
        } else {
            shades[shade] = color.mix(black, Math.abs(multiplier)).hex();
        }
    }

    return shades;
}

export function generateTailwindConfig(colorName, shades) {
    const config = [];
    config.push(`${colorName}: {`);

    for (const shade of Object.keys(shades)) {
        config.push(`    ${shade}: '${shades[shade]}',`);
    }

    config.push('}');
    return config.join('\n');
}
