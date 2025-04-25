import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

export default {
	input: "src/Input.js", // Your component entry file
	output: {
		file: "dist/index.js",
		format: "cjs",
		exports: "named", // Named export, which works with commonJS
	},
	plugins: [
		resolve(), // Resolves node modules
		babel({
			presets: [
				"@babel/preset-env", // Converts modern JS to older version for compatibility
				"@babel/preset-react", // Transpiles JSX to JavaScript
			],
			exclude: "node_modules/**", // Don't transpile node_modules
			babelHelpers: "bundled", // Bundles Babel helpers inside the output file
		}),
	],
	external: ["react", "react-dom"], // These should not be bundled with your package
};
