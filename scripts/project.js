//search-result.js

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host{
      display: block
    }
    #main{
        position: relative;
        width: 100%;
        display: flex;
    }

    #main>:first-child{
    }

    #main>:last-child{
        display: flex;
        position: absolute;
        top:0;
        left:50%;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        height: 100%;
    }
    #main>:last-child.left{
      left:0;
      right:50%;
    }

    #image{
        min-height: 340px;
        min-width: 600px;
        max-height: 340px;
        max-width: 600px;
        border-radius: 5px;
    }

    #image.left{
        margin-left: auto;
    }

    #title{
        font-size: 27px !important;
        font-weight: 700;
        color: #B0BAD6;
        text-align: right;
    }

    #title.left{
      text-align: left;
    }

    #details{
        color: #B0BAD6;
        background: #151F2B;
        border-radius: 5px;
        font-size: 0.8em;
        text-align: right;
        padding: 1.5em 3em;
    }
    #details.left{
      text-align: left;
    }

    #skills{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 2em;
      color: #80A4ED;
      font-size: 0.9em;
    }
    #skills.left{
      justify-content: flex-start;
    }

    #links{
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }
    #links.left{
      justify-content: flex-start;
    }
    #links a:hover{
      cursor: pointer;
    }
    #links a.blocked{
      cursor: not-allowed;
    }

    #tint{
      position: absolute;
      top: 0;
      left: 0;
      min-height: 340px;
      min-width: 600px;
      max-height: 340px;
      max-width: 600px;
      background: #5A9F8B;
      opacity: 0.72;
      border-radius: 5px;
      transition: 0.5s;
    }
    #tint.left{
      left: auto;
      right: 0
    }

    #tint:hover{
      opacity: 0;
    }
  </style>
  <div id="main">
    <img src="" alt="Project Image" id="image">
    <div id="tint"></div>
    <div>
        <div id="title"></div>
        <div id="details"></div>
        <div id="skills"></div>
        <div id="links">
            <a id="github"><img src="./images/github2.svg"></a>
            <a id="external"><img src="./images/external.svg"></a>
        </div>
    </div>
  </div>
`;

class Project extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));

  }

  static get observedAttributes() {
    return ['title', 'details', 'github', 'external', 'image', 'skills', 'left'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, newValue)
    if(name === "left"){
      this.shadowRoot.getElementById("image").classList.add("left")
      this.shadowRoot.getElementById("main").lastElementChild.classList.add("left")
      this.shadowRoot.getElementById("title").classList.add("left")
      this.shadowRoot.getElementById("details").classList.add("left")
      this.shadowRoot.getElementById("skills").classList.add("left")
      this.shadowRoot.getElementById("links").classList.add("left")
      this.shadowRoot.getElementById("tint").classList.add("left")
    }
    if(name === "title"){
        this.shadowRoot.getElementById("title").innerText = newValue
    }
    else if(name === "image"){
      console.log(newValue)
      this.shadowRoot.getElementById("image").src = newValue
    }
    else if(name === "details"){
        this.shadowRoot.getElementById("details").innerHTML = newValue
    }
    else if(name === "skills"){
        this.shadowRoot.getElementById("skills").innerHTML = newValue
    }
    else if(name === "github"){
        if(!newValue === "not allowed"){
          this.shadowRoot.getElementById("github").href = newValue
          this.shadowRoot.getElementById("github").alt = "Sorry company's policy can't show you the code"
        }
        else{
          this.shadowRoot.getElementById("github").classList.add("blocked")
        }
    }
    else if(name === "external"){
        this.shadowRoot.getElementById("external").href = newValue
    }
    
  }
}

window.customElements.define('my-project', Project);