function loader(selector, isShown) {
    const loader = document.querySelector(selector);
    if (!loader) {
        throw new Error('Elem is not found');
    }
    if (isShown) {
        loader.style.display = 'block';
    }
    else {
        loader.style.display = 'none';
    }
}
export { loader };
