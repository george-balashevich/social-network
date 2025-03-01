function showTab(selector) {
    const contentToShow = document.querySelectorAll(selector);
    contentToShow[0].style.display = 'block';
}
function hideTabs(selector) {
    const contentToHide = document.querySelectorAll(selector);
    contentToHide.forEach(elem => {
        elem.style.display = 'none';
    });
}
export { showTab, hideTabs };
