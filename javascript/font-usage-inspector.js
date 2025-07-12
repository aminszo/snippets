/**
 * Inspect font usage across the page.
 * Logs all font families used in a web page along with their respective font weights.
 *
 * tags: fonts, debugging, dom, css
 * source: original
 */

const fontUsage = {};

document.querySelectorAll('*').forEach(el => {
    const style = getComputedStyle(el);
    const family = style.fontFamily;
    const weight = style.fontWeight;

    if (!fontUsage[family]) {
        fontUsage[family] = new Set();
    }

    fontUsage[family].add(weight);
});

// Log result
for (const [family, weights] of Object.entries(fontUsage)) {
    console.log(`${family}: ${[...weights].join(', ')}`);
}