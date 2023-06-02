
document.addEventListener("DOMContentLoaded", () => {

    const copyButtonLabel = "Copy Code";


    // use a class selector if available
    let blocks = document.querySelectorAll("pre");


    blocks.forEach((block) => {
        // only add button if browser supports Clipboard API
        if (navigator.clipboard) {
        let button = document.createElement("button");

        button.classList.add("button", "is-small", "is-ghost")
        button.innerHTML = '<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg></span>'
        //button.innerText = copyButtonLabel;
        block.appendChild(button);

        button.addEventListener("click", async () => {
            await copyCode(block, button);
        });
        }
    });

    async function copyCode(block, button) {
        let code = block.querySelector("code");
        let text = code.innerText;

        await navigator.clipboard.writeText(text);

        // visual feedback that task is completed
        button.innerText = "Code Copied";

        setTimeout(() => {
            button.innerText = copyButtonLabel;
        }, 700);
    }

});
