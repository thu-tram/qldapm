// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> Trang chủ</a></li><li class="chapter-item expanded affix "><li class="part-title">Phần 1</li><li class="chapter-item expanded "><a href="phan-1/ban-chat-cua-mot-du-an.html"><strong aria-hidden="true">2.</strong> Bản chất của dự án phần mềm</a></li><li class="chapter-item expanded "><a href="phan-1/de-quan-ly-mot-du-an-phan-mem.html"><strong aria-hidden="true">3.</strong> Để quản lý một dự án phần mềm</a></li><li class="chapter-item expanded affix "><li class="part-title">Phần 2</li><li class="chapter-item expanded "><a href="phan-2/chon-mo-hinh-sdlc.html"><strong aria-hidden="true">4.</strong> Chọn mô hình SDLC</a></li><li class="chapter-item expanded "><a href="phan-2/project-planning.html"><strong aria-hidden="true">5.</strong> Work Breakdown Structure (WBS), Milestones và Critical Path</a></li><li class="chapter-item expanded "><a href="phan-2/estimate-cost-and-manage-risks.html"><strong aria-hidden="true">6.</strong> Estimating Cost and Managing Risk</a></li><li class="chapter-item expanded affix "><li class="part-title">Phần 3</li><li class="chapter-item expanded "><a href="phan-3/quan-ly-team-va-giao-tiep.html"><strong aria-hidden="true">7.</strong> Quản lý Team và vấn đề giao tiếp</a></li><li class="chapter-item expanded "><a href="phan-3/dam-bao-chat-luong.html"><strong aria-hidden="true">8.</strong> Đảm bảo chất lượng</a></li><li class="chapter-item expanded affix "><li class="part-title">Phần 4</li><li class="chapter-item expanded "><a href="phan-4/closure.html"><strong aria-hidden="true">9.</strong> Closure</a></li><li class="chapter-item expanded affix "><li class="part-title">Practice</li><li class="chapter-item expanded "><a href="practice/gantt-chart.html"><strong aria-hidden="true">10.</strong> Gantt Chart</a></li><li class="chapter-item expanded "><a href="practice/quality-checklist.html"><strong aria-hidden="true">11.</strong> Quality Checklist</a></li><li class="chapter-item expanded "><a href="practice/risk-matrix.html"><strong aria-hidden="true">12.</strong> Risk Matrix</a></li><li class="chapter-item expanded "><a href="practice/wbs.html"><strong aria-hidden="true">13.</strong> WBS</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
