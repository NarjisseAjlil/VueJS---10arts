// js - app.js

import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";



import Arts from "./arts.js";
import Header from "./header.js";
import Footer from "./footer.js";
 
 
 

const URL_ARTS = "https://api.atontour.org/v3/sujets/arts/?key=VH5VA";
 


createApp({
    components: {
        Arts,
    },

    template: `<div>
    <Arts url="${URL_ARTS}"></Arts>
    </div>`,

}).mount("#app");


createApp({
    components: {
      Header,
    },
    template: `
          <nav>
              <Header url="${URL_ARTS}"></Header>
          </nav>`,
  }).mount("#header-content");
  


createApp({
    components: {
      Footer,
    },
    template: `
          <nav>
              <Footer url="${URL_ARTS}"></Footer>
          </nav>`,
  }).mount("#footer");
  

 



