import Page from "./Page.js"


export default class extends Page {
    constructor(params) {
        super(params);

        this.setTitle("List");
    }

    async getHtml() {
        return `
            <h1>List</h1>

            <table class="table-sortable">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dom</td>
                <td>35</td>
                <td>Web Developer</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Rebecca</td>
                <td>29</td>
                <td>Teacher</td>
              </tr>
              <tr>
                <td>3</td>
                <td>John</td>
                <td>30</td>
                <td>Civil Engineer</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Andre</td>
                <td>20</td>
                <td>Dentist</td>
              </tr>
            </tbody>
          </table>
          <script src="./static/js/tablesort.js"></script>

          <p>Click the button to display an alert box.</p>

            <button onclick="myFunction()">Try it</button>

        `;

    }
}