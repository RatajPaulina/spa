import page from "./Page.js"

export default class extends page {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome!</h1>
            <p>
            <br>1. Test this page using cypress.io
            <br>2. Try to put them in the docker
            </p>
            <p>
              <a href="https://www.docker.com/">Docker</a>
            </p>
        `;
    }
}