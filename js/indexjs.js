function showExperiencePage(pageNumber) {
    const pages = document.querySelectorAll('.experience-page[id^="experience-page"]');
    pages.forEach(page => page.style.display = 'none'); // 隱藏所有經歷頁面

    const selectedPage = document.getElementById(`experience-page-${pageNumber}`);
    if (selectedPage) {
    selectedPage.style.display = 'block'; // 顯示選中的頁面
    }
}

function showAwardPage(pageNumber) {
    // 取得所有的 .experience-page2 頁面
    const pages = document.querySelectorAll('.experience-page2');

    // 隱藏所有頁面
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // 顯示選中的頁面
    const selectedPage = document.getElementById(`award-page-${pageNumber}`);
    if (selectedPage) {
    selectedPage.style.display = 'block';
    }
}