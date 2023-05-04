
export default class Dashboard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render()
    }
    render(){  
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;

       
            const Destacadas = this.ownerDocument.createElement('app-destacadas');
            const nav = this.ownerDocument.createElement("app-nav");
            const Post = this.ownerDocument.createElement("app-post");
            this.shadowRoot?.appendChild(Post);
            this.shadowRoot?.appendChild(nav);
            this.shadowRoot?.appendChild(Destacadas);
        }
    
}

customElements.define('app-dashboard', Dashboard);