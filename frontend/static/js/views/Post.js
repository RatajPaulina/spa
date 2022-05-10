import Page from "./Page.js"

export default class extends Page {
    constructor(params) {
        super(params);

        this.setTitle("Post");
    }

    async getHtml() {
        return `
            <h1>Post</h1>
        `;
    }
}