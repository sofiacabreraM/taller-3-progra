import styles from '..post.css'
export default class Topcontainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot) this.shadowRoot.innerHTML = ""
      
       
        const container = this.ownerDocument.createElement("div");
        container.classList.add("Top-container");
        
        const img = this.ownerDocument.createElement("img");
        img.src = "https://i.pinimg.com/564x/7c/45/ba/7c45ba5ca65584ba6f410ad8e4008e28.jpg";
        img.classList.add("img_usrerPost");
        container.appendChild(img);
        
        const h1 = this.ownerDocument.createElement("h1");
        h1.classList.add("User_name");
        h1.textContent = "Maria_Camila";
        container.appendChild(h1);
        
        const h6 = this.ownerDocument.createElement("h6");
        h6.classList.add("Time_post");
        h6.textContent = "6 min";
        container.appendChild(h6);
        
        const h2 = this.ownerDocument.createElement("h2");
        h2.classList.add("Points_menu");
        h2.textContent = "...";
        container.appendChild(h2);
        
        this.shadowRoot?.appendChild(container);
        
    }
}

customElements.define('app-topcontainer', Topcontainer);