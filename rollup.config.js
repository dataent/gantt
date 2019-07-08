import sass from 'rollup-plugin-sass';
import uglify from 'rollup-plugin-uglify';
import merge from 'deepmerge';

const dev = {
    input: 'src/index.js',
    output: {
        name: 'Gantt',
        file: 'dist/dataent-gantt.js',
        format: 'iife'
    },
    plugins: [
        sass({
            output: 'dist/dataent-gantt.css'
        })
    ]
};
const prod = merge(dev, {
    output: {
        file: 'dist/dataent-gantt.min.js'
    },
    plugins: [uglify()]
});

export default [dev, prod];
