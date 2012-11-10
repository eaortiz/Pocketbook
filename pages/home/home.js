(function () {
    "use strict";


    function fill_table() {
        WinJS.UI.processAll().then(function () {
            var tableBody = document.getElementById("myTableBody");
            var template = document.getElementById("myTemplate").winControl;

            topContent.forEach(function (item) {
                template.render(item, tableBody);
            });
        });
    }

    var namespacePublicMembers = { fill_table: fill_table };
    WinJS.Namespace.define("default", namespacePublicMembers);

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            fill_table();
        }
    });
})();
