import * as CONFIG from "~src/config";
import T from "~src/text";
import { P, Preferences } from "~src/preferences";

function foobar(i: number): HTMLElement {
    const div = document.createElement("div");
    div.classList.add(CONFIG.CLASS.foobar);
    div.textContent = T.foobars.content(i);
    return div;
}

export default (e: { mainDiv: HTMLElement }) => {
    const n = Preferences.get(P.foobars._.number);
    const h2 = document.createElement("h2");
    const prefix = document.createTextNode(T.foobars.info(n));
    const link = document.createElement("a");
    link.textContent = T.foobars.more;
    link.href = "javascript:void(0)";
    link.addEventListener("click", () => {
        Preferences.set(P.foobars._.number, n + 1);
        location.reload();
    });
    h2.appendChild(prefix);
    h2.appendChild(link);
    e.mainDiv.appendChild(h2);

    for (let i = 1; i <= n; i++) {
        document.body.appendChild(foobar(i));
    }
}
