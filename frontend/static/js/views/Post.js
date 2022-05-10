import Page from "./Page.js"

export default class extends Page {
    constructor(params) {
        super(params);

        this.setTitle("Post");
    }

    async getHtml() {
        return `
            <h1>Bravo success, you've saved the data</h1>
            
        `;
    }
}