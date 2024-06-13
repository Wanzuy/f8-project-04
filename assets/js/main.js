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

const dots = $$(".review__dot");
const reviewlist = $(".review__list");
const reviewItems = $$(".review-item");
const btnright = $(".btn-right");
const btnleft = $(".btn-left");
const leng = reviewItems.length;
let current = 0;

const handleChang = () => {
    if (current == leng - 1) {
        current = 0;
        reviewlist.style.transform = `translateX(0)`;
        $(".review__dot.review__dot--active").classList.remove(
            "review__dot--active"
        );
        dots[current].classList.add("review__dot--active");
    } else {
        current++;
        reviewlist.style.transform = `translateX(-${current * 100}%)`;
        $(".review__dot.review__dot--active").classList.remove(
            "review__dot--active"
        );
        dots[current].classList.add("review__dot--active");
        console.log(current);
    }
};

btnright.addEventListener("click", () => {
    handleChang();
});

btnleft.addEventListener("click", () => {
    if (current == 0) {
        current = leng - 1;
        reviewlist.style.transform = `translateX(-${current * 100}%)`;
        $(".review__dot.review__dot--active").classList.remove(
            "review__dot--active"
        );
        dots[current].classList.add("review__dot--active");
    } else {
        current--;
        reviewlist.style.transform = `translateX(-${current * 100}%)`;
        $(".review__dot.review__dot--active").classList.remove(
            "review__dot--active"
        );
        dots[current].classList.add("review__dot--active");
    }
});
