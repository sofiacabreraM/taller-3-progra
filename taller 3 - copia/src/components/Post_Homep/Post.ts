import './Top_container/TopContainer'
import { loadCss } from '../../utilidades/styles';
import styles from './post.css'
export default class Post extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``
        
        loadCss(this, styles)
       const Topcontainer= this.ownerDocument.createElement("app-topcontainer");
       this.shadowRoot?.appendChild(Topcontainer);

       const img = this.ownerDocument.createElement("img");
       img.src = "https://i.pinimg.com/564x/96/69/67/966967b8a715f50a892c238e464a4fd6.jpg";
       this.shadowRoot?.appendChild(img);
      
   
    }
}

customElements.define('app-post', Post);