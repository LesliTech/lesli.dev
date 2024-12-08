class LesliBrowserComponent extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow DOM for encapsulation
        const shadow = this.attachShadow({ mode: 'open' });

        // Define the HTML content with a slot for inner content
        shadow.innerHTML = `
            <style>
                .lesli-component-browser {
                    border-radius: 10px;
                    border: 1px solid lesli-css-color(silver, 300);
                    margin: 2rem auto 0;
                    width: 100%;
                    max-width: 900px;
                }
                .lesli-component-browser img {
                    border-radius: 0 0 9px 9px;
                }
                .lesli-component-browser .lesli-browser-toolbar {
                    border-radius: 9px 9px 0 0;
                    display: flex;
                    padding: 0.6rem;
                    align-items: center;
                    justify-content: space-around;
                    background-color: #e6ecef;
                }
                .lesli-component-browser .lesli-browser-toolbar .lesli-browser-arrows .icon, .lesli-component-browser .lesli-browser-toolbar .lesli-browser-settings .icon {
                    height: 1.8rem;
                    width: 1.8rem;
                    background-color: white;
                }
                .lesli-component-browser .lesli-browser-toolbar .lesli-browser-controls {
                    line-height: 1;
                    margin-left: 0.6rem;
                }
                .lesli-component-browser .lesli-browser-toolbar .lesli-browser-controls span {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    display: inline-block;
                }
                .lesli-component-browser .lesli-browser-toolbar .lesli-browser-controls span:nth-child(1) {
                    background-color: #ff8585;
                }
                .lesli-component-browser .lesli-browser-toolbar .lesli-browser-controls span:nth-child(3) {
                    background-color: #74ed94;
                }
                .lesli-component-browser .lesli-browser-toolbar .lesli-browser-controls span:nth-child(2) {
                    background-color: #ffd071;
                    margin: auto 8px;
                }
                .lesli-component-browser .lesli-browser-toolbar .lesli-browser-arrows {
                    line-height: 1;
                    margin-left: 1rem;
                }
                .lesli-component-browser .lesli-browser-toolbar .lesli-browser-arrows .icon i {
                    font-size: 1.8rem;
                    color: lesli-css-color(silver);
                }
                .lesli-component-browser .lesli-browser-toolbar .lesli-browser-address {
                    flex-grow: 1;
                    font-size: 14px;
                    margin-left: 1rem;
                    border-radius: 2px;
                    letter-spacing: 2px;
                    padding: 0 0.6rem;
                    background-color: white;
                    font-family: Arial, Helvetica, sans-serif;
                    color: lesli-css-color(silver, 700);
                }
                .lesli-component-browser .lesli-browser-toolbar .lesli-browser-address p {
                    text-align: left;
                    margin: 0;
                }
                .lesli-component-browser .lesli-browser-toolbar .lesli-browser-address p span {
                    color: lesli-css-color(lime, 700);
                }
                .lesli-component-browser .lesli-browser-toolbar .lesli-browser-settings {
                    margin-left: 1rem;
                    margin-right: 0.6rem;
                }
                .lesli-component-browser .lesli-browser-toolbar .lesli-browser-settings .icon i {
                    font-size: 1rem;
                    color: lesli-css-color(silver);
                }
            </style>
            <div class="lesli-component-browser">
                <div class="lesli-browser-toolbar">
                    <div class="lesli-browser-controls">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="lesli-browser-arrows">
                        <span class="icon">
                            <i class="ri-arrow-left-s-line"></i>
                        </span>
                        <span class="icon">
                            <i class="ri-arrow-right-s-line"></i>
                        </span>
                    </div>
                    <div class="lesli-browser-address">
                        <p>
                            <span class="icon is-small">
                                <i class="ri-lock-line"></i>
                            </span>
                            <span id="lesli-browser-address-input">hola</span>
                        </p>
                    </div>
                    <div class="lesli-browser-settings">
                        <span class="icon">
                            <i class="ri-equalizer-fill"></i>
                        </span>
                    </div>
                </div>
                <slot></slot>
            </div>
        `;
    }

    connectedCallback() {
        const url = this.getAttribute('url') || '';
        const el = this.shadowRoot.getElementById('lesli-browser-address-input');
        el.innerText = "https://www.lesli.dev/".concat(url);
    }
}

// Define the custom element
customElements.define('lesli-browser', LesliBrowserComponent);
