import Page from "./Page.js"

export default class extends Page {
    constructor(params) {
        super(params);

        this.setTitle("Form");
    }

    async getHtml() {
        return `
            <h1>Form</h1>

            <br>Name
            <input type="text" class="input_name" value="Name">
            <br>Surname
            <input type="text" class="input_surname" value="Surname">
            <br>Age
            <input type="text" class="input_age" value="Age">
            <br><label for="cars">Choose Your car:</label>              
            <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
             <option value="audi">Audi</option>
            </select>
            
        
            <div class="resizer">
            <input type="file" class="resizer__file">
            <div class="dimensions">
              <input type="text" class="resizer__input resizer__input--width" value="0">
              x
              <input type="text" class="resizer__input resizer__input--height" value="0">
              <label>
                <input type="checkbox" class="resizer__aspect" checked>
                Keep Aspect Ratio
              </label>
            </div>
            <br><button onclick="window.open('http://localhost:3000/post')">Save</button>
            <canvas class="resizer__canvas" width="500" height="500"></canvas>
          </div>
          <div>
     
         

        `;
    }
}