declare interface NodeModule {
    hot: any;
}

declare module "*.css" {
    const content: any;
    export default content;
}
