var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function changeUrl(urlPage, nameOfPage) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const newUrl = urlPage.startsWith('/') ? urlPage : `/${urlPage}`;
        window.history.pushState(null, nameOfPage, newUrl);
        try {
            const response = yield fetch(newUrl);
            if (!response.ok)
                throw new Error("Ошибка загрузки страницы");
            const text = yield response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, "text/html");
            const newContent = (_a = doc.querySelector("#container")) === null || _a === void 0 ? void 0 : _a.innerHTML;
            if (!newContent)
                throw new Error("Не найден контейнер с контентом");
            document.getElementById("container").innerHTML = newContent;
        }
        catch (error) {
            console.error("Ошибка загрузки:", error);
        }
    });
}
function linkHandler(selector) {
    const links = document.querySelectorAll(selector);
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const url = link.getAttribute("href");
            if (!url) {
                console.error("Ссылка не содержит href");
                return;
            }
            const cleanedUrl = url.replace(/^(\.\/|\.\.\/)/, '');
            changeUrl(cleanedUrl, document.title);
        });
    });
}
export { linkHandler };
