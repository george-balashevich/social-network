function profileTabsHandler(selector, tabSelector) {
    const tabLinks = document.querySelectorAll(selector);
    const tabContent = document.querySelectorAll(tabSelector);
    if (tabLinks.length === 0) {
        console.error('err');
    }
    if (tabContent.length === 0) {
        console.error('err');
    }
    tabLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            tabContent.forEach(tab => tab.style.display = 'none');
            tabLinks.forEach(link => link.classList.remove('active'));
            tabContent[index].style.display = 'block';
            link.classList.add('active');
        });
    });
}
export { profileTabsHandler };
