import { loadCss } from '../../utilidades/styles';
import styles from './Nav.css'
import { Home, Favorite, Notifications, Message, Save } from '@material-ui/icons';


export enum AttributeButton {
    "btn_text" = "btn_text"
}

export default class Nav extends HTMLElement{
    btn_text?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeButton, null> = {
            btn_text: null
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(
        propName: AttributeButton,
        oldValue: unknown,
        newValue: string
    ){
        switch (propName){
            default:
            this[propName] = newValue;
            break;
        }
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }
    

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, styles)
        const barsearch = this.ownerDocument.createElement("input");
        barsearch.classList.add("bar-search");
        barsearch.setAttribute("placeholder", "Search");


        const notificationsIcon = document.createElement('div');
        notificationsIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" class="icon"><path fill="currentColor" d="${Notifications}" /></svg>`;
        notificationsIcon.classList.add("not_icon");
        this.shadowRoot?.appendChild(notificationsIcon);
      
        
        
        const btn1= this.ownerDocument.createElement("button");
        btn1.classList.add("btn");
        btn1.textContent = ("Icon_Notifications")
        
        const btn2 = this.ownerDocument.createElement("button");
        btn2.classList.add("btn");
        btn2.textContent = ("Icon_Messages")
        
        
        
        this.shadowRoot?.appendChild(barsearch);
        this.shadowRoot?.appendChild(btn1);
         this.shadowRoot?.appendChild(btn2);

        
        const button = this.ownerDocument.createElement('button');
        button.innerText = `${this.btn_text}`;
        button.addEventListener('click', () => {
            button.innerText = "add photo"
        })
        this.shadowRoot?.appendChild(button);
      
    }

}

customElements.define('app-nav', Nav);