import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/nouislider.ts',
    output: [
        {
            file: 'dist/nouislider.js',
            format: 'es',
            name: 'noUiSlider',
            exports: 'named'
        },
    ],
    plugins: [typescript()],
};
