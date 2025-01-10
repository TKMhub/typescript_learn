import { CleanWebpackPlugin } from "clean-webpack-plugin";
export let mode: string;
export let entry: string;
export namespace output {
    let filename: string;
    let path: string;
}
export namespace module {
    let rules: {
        test: RegExp;
        use: string;
        exclude: RegExp;
    }[];
}
export namespace resolve {
    let extensions: string[];
}
export let plugins: CleanWebpackPlugin[];
