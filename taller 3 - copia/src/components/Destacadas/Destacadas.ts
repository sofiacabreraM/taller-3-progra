import { loadCss } from '../../utilidades/styles';
import styles from './Destacadas.css'
export default class Destacadas extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        
    
        
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, styles)
        const img = this.ownerDocument.createElement("img");
        img.src = "https://i.pinimg.com/564x/99/87/11/998711ad0d1feb2e201f3690edf2ae41.jpg";
        img.classList.add("img_destacadas");
        this.shadowRoot?.appendChild(img);

        const img1 = this.ownerDocument.createElement("img");
        img1.classList.add("img_destacadas");
        img1.src = "https://i.pinimg.com/564x/af/43/59/af4359d825a64070df92961c14e83d37.jpg";
        this.shadowRoot?.appendChild(img1);

        const img2 = this.ownerDocument.createElement("img");
        img2.classList.add("img_destacadas");
        img2.src = "https://i.pinimg.com/564x/d6/00/49/d600490f20fd8ef23c3bcea1f4f158d8.jpg";
        this.shadowRoot?.appendChild(img2);

        const img3 = this.ownerDocument.createElement("img");
        img3.classList.add("img_destacadas");
        img3.src = "https://i.pinimg.com/564x/a3/13/82/a31382c7a9334a7b9ee1c2754608f5d1.jpg";
        this.shadowRoot?.appendChild(img3);

        const img4 = this.ownerDocument.createElement("img");
        img4.classList.add("img_destacadas");
        img4.src = "https://i.pinimg.com/564x/fa/03/99/fa03996787453f56c7215c6fd916877f.jpg";
        this.shadowRoot?.appendChild(img4);

        const img5 = this.ownerDocument.createElement("img");
        img5.classList.add("img_destacadas");
        img5.src = "https://i.pinimg.com/564x/7c/45/ba/7c45ba5ca65584ba6f410ad8e4008e28.jpg";
        this.shadowRoot?.appendChild(img5);

        const img6 = this.ownerDocument.createElement("img");
        img6.classList.add("img_destacadas");
        img6.src = "https://i.pinimg.com/564x/f9/06/6c/f9066c6f1d9dda177587c759a240cb96.jpg";
        this.shadowRoot?.appendChild(img6);

        const img7 = this.ownerDocument.createElement("img");
        img7.classList.add("img_destacadas");
        img7.src = "https://i.pinimg.com/564x/af/43/59/af4359d825a64070df92961c14e83d37.jpg";
        this.shadowRoot?.appendChild(img7);

        const img8 = this.ownerDocument.createElement("img");
        img8.classList.add("img_destacadas");
        img8.src = "https://i.pinimg.com/564x/d6/00/49/d600490f20fd8ef23c3bcea1f4f158d8.jpg";
        this.shadowRoot?.appendChild(img8);
      
    }
}

customElements.define('app-destacadas', Destacadas);