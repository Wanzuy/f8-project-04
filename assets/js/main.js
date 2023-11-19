const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab__item");
const tabcontents = $$(".tab__content-item");

tabs.forEach((tab, index) => {
    const tabcontent = tabcontents[index];

    tab.onclick = function () {
        $(".tab__item.tab__item--active").classList.remove("tab__item--active");
        $(".tab__content-item.tab__content-item--active").classList.remove(
            "tab__content-item--active"
        );
        this.classList.add("tab__item--active");
        tabcontent.classList.add("tab__content-item--active");
    };
});
