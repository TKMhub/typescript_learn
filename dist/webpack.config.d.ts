export let entry: string;
export namespace output {
    let filename: string;
    let path: string;
}
export let devtool: string;
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
