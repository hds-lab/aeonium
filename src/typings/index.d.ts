/// <reference path="./semantic-ui-react.d.ts" />
/// <reference path="../../node_modules/semantic-ui-react/dist/commonjs/index.d.ts" />
/// <reference path="../../node_modules/semantic-ui-react/index.d.ts" />

interface NodeModule {
    hot: any;
}

interface NodeRequire {
    <T>(path: string): T;
}
