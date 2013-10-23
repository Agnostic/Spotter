function Controller() {
    function openGroup() {
        $.contenido.title = "Fiestas Mazatlán";
        $.contenido.setRightNavButton(detailBtn);
        menuButton.fireEvent("click");
    }
    function getLocation() {
        Ti.Geolocation.getCurrentPosition(function(e) {
            var region = {
                latitude: e.coords.latitude,
                longitude: e.coords.longitude,
                animate: true,
                latitudeDelta: .015,
                longitudeDelta: .015
            };
            $.map.setLocation(region);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.sideScreen = Ti.UI.createWindow({
        statusBarStyle: Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
        backgroundColor: "#008FD5",
        translucent: false,
        barColor: "#008FD5",
        tintColor: "#ffffff",
        navTintColor: "#ffffff",
        layout: "horizontal",
        top: 30,
        left: 0,
        width: 200,
        id: "sideScreen"
    });
    $.__views.sideScreen && $.addTopLevelView($.__views.sideScreen);
    $.__views.search = Ti.UI.createSearchBar({
        id: "search",
        barColor: "#008FD5",
        showCancel: "false",
        width: Ti.UI.FILL,
        left: "0",
        height: "34",
        top: "0",
        borderColor: "#008FD5"
    });
    $.__views.sideScreen.add($.__views.search);
    $.__views.searchContainer = Ti.UI.createScrollView({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "searchContainer"
    });
    $.__views.sideScreen.add($.__views.searchContainer);
    $.__views.__alloyId0 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        id: "__alloyId0"
    });
    var __alloyId1 = [];
    __alloyId1.push($.__views.__alloyId0);
    openGroup ? $.__views.__alloyId0.addEventListener("click", openGroup) : __defers["$.__views.__alloyId0!click!openGroup"] = true;
    $.__views.__alloyId2 = Ti.UI.createImageView({
        image: "http://www.smallbizio.com/wp-content/uploads/2013/08/summer_party.jpg",
        width: "50",
        left: "5",
        top: "15",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        top: 10,
        layout: "vertical",
        left: 7,
        width: Ti.UI.FILL,
        height: 80,
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        left: 0,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        top: 0,
        font: {
            fontSize: 12
        },
        text: "Fiestas Mazatlán",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        textAlign: "left",
        left: 0,
        ellipsize: true,
        width: 130,
        height: 40,
        top: 0,
        font: {
            fontSize: 10
        },
        color: "#333",
        text: "Todas las fiestas de Mazatlán en un solo grupo, desde cumpleaños hasta festivales.",
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 10
        },
        color: "#008FD5",
        text: "25 personas",
        id: "__alloyId6"
    });
    $.__views.__alloyId3.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        id: "__alloyId7"
    });
    __alloyId1.push($.__views.__alloyId7);
    openGroup ? $.__views.__alloyId7.addEventListener("click", openGroup) : __defers["$.__views.__alloyId7!click!openGroup"] = true;
    $.__views.__alloyId8 = Ti.UI.createImageView({
        image: "http://www.mrstyleking.com/wp-content/uploads/2013/07/partygay.jpg",
        width: "50",
        left: "5",
        top: "15",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        top: 10,
        layout: "vertical",
        left: 7,
        width: Ti.UI.FILL,
        height: 80,
        id: "__alloyId9"
    });
    $.__views.__alloyId7.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        left: 0,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        top: 0,
        font: {
            fontSize: 12
        },
        text: "Fiestas Culiacán",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        textAlign: "left",
        left: 0,
        ellipsize: true,
        width: 130,
        height: 40,
        top: 0,
        font: {
            fontSize: 10
        },
        color: "#333",
        text: "Fiestas en Culiacán.",
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 10
        },
        color: "#008FD5",
        text: "12 personas",
        id: "__alloyId12"
    });
    $.__views.__alloyId9.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        id: "__alloyId13"
    });
    __alloyId1.push($.__views.__alloyId13);
    openGroup ? $.__views.__alloyId13.addEventListener("click", openGroup) : __defers["$.__views.__alloyId13!click!openGroup"] = true;
    $.__views.__alloyId14 = Ti.UI.createImageView({
        image: "/nopicture.png",
        width: "50",
        left: "5",
        top: "15",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        top: 10,
        layout: "vertical",
        left: 7,
        width: Ti.UI.FILL,
        height: 80,
        id: "__alloyId15"
    });
    $.__views.__alloyId13.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        left: 0,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        top: 0,
        font: {
            fontSize: 12
        },
        text: "Grupo de Amigos",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        textAlign: "left",
        left: 0,
        ellipsize: true,
        width: 130,
        height: 40,
        top: 0,
        font: {
            fontSize: 10
        },
        color: "#333",
        text: "Aquí estamos varios amigos en el mismo grupo.",
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 10
        },
        color: "#008FD5",
        text: "18 personas",
        id: "__alloyId18"
    });
    $.__views.__alloyId15.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        layout: "horizontal",
        id: "__alloyId19"
    });
    __alloyId1.push($.__views.__alloyId19);
    openGroup ? $.__views.__alloyId19.addEventListener("click", openGroup) : __defers["$.__views.__alloyId19!click!openGroup"] = true;
    $.__views.__alloyId20 = Ti.UI.createImageView({
        image: "/nopicture.png",
        width: "50",
        left: "5",
        top: "5",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        top: 10,
        layout: "vertical",
        left: 7,
        width: Ti.UI.FILL,
        height: 80,
        id: "__alloyId21"
    });
    $.__views.__alloyId19.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        left: 0,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        top: 0,
        font: {
            fontSize: 12
        },
        text: "Convenciones",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        textAlign: "left",
        left: 0,
        ellipsize: true,
        width: 130,
        height: 40,
        top: 0,
        font: {
            fontSize: 10
        },
        color: "#333",
        text: "Conferencias gratuitas de cualquier tema, bla bla y más bla bla bla bla pero bien pasado de lanza",
        id: "__alloyId23"
    });
    $.__views.__alloyId21.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 10
        },
        color: "#008FD5",
        text: "5 personas",
        id: "__alloyId24"
    });
    $.__views.__alloyId21.add($.__views.__alloyId24);
    $.__views.table_groups = Ti.UI.createTableView({
        separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
        data: __alloyId1,
        id: "table_groups"
    });
    $.__views.searchContainer.add($.__views.table_groups);
    $.__views.searchWin = Ti.UI.createWindow({
        statusBarStyle: Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
        backgroundColor: "#fff",
        translucent: false,
        barColor: "#008FD5",
        tintColor: "#ffffff",
        navTintColor: "#ffffff",
        layout: "horizontal",
        top: 30,
        right: -200,
        width: 200,
        id: "searchWin"
    });
    $.__views.searchWin && $.addTopLevelView($.__views.searchWin);
    $.__views.menuContainer = Ti.UI.createScrollView({
        id: "menuContainer",
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    });
    $.__views.searchWin.add($.__views.menuContainer);
    $.__views.contenido = Ti.UI.createWindow({
        statusBarStyle: Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
        backgroundColor: "white",
        translucent: false,
        barColor: "#008FD5",
        tintColor: "#ffffff",
        navTintColor: "#ffffff",
        layout: "horizontal",
        width: "100%",
        title: "Spotter",
        moving: false,
        axis: 0,
        id: "contenido"
    });
    var __alloyId25 = [];
    $.__views.map = Ti.Map.createView({
        annotations: __alloyId25,
        id: "map",
        regionFit: "true",
        userLocation: "true",
        ns: Ti.Map,
        animate: "true",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    });
    $.__views.contenido.add($.__views.map);
    $.__views.navWindow = Ti.UI.iOS.createNavigationWindow({
        backgroundColor: "#008FD5",
        width: 320,
        window: $.__views.contenido,
        id: "navWindow"
    });
    $.__views.navWindow && $.addTopLevelView($.__views.navWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var detailBtn = Ti.UI.createButton({
        title: "Detail"
    });
    var menuButton = Ti.UI.createButton({
        title: "Groups",
        toggle: false
    });
    $.contenido.setLeftNavButton(menuButton);
    detailBtn.addEventListener("click", function() {
        var detailWin = Alloy.createController("groupDetail").getView();
        $.navWindow.openWindow(detailWin);
    });
    menuButton.addEventListener("click", function(e) {
        $.navWindow.right = 0;
        if (true === e.source.toggle) {
            $.navWindow.animate({
                left: 0,
                duration: 400,
                curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
            });
            e.source.toggle = false;
        } else {
            $.navWindow.animate({
                left: 200,
                duration: 400,
                curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
            });
            e.source.toggle = true;
        }
    });
    $.contenido.addEventListener("touchstart", function(e) {
        e.source.axis = parseInt(e.x, 10);
    });
    $.contenido.addEventListener("touchmove", function(e) {
        var coordinates = parseInt(e.globalPoint.x, 10) - e.source.axis;
        (coordinates > 20 || -20 > coordinates) && (e.source.moving = true);
        if (true === e.source.moving && 200 >= coordinates && coordinates >= 0) {
            $.navWindow.animate({
                left: coordinates,
                duration: 20
            });
            $.navWindow.left = coordinates;
        }
    });
    $.contenido.addEventListener("touchend", function(e) {
        e.source.moving = false;
        if ($.navWindow.left >= 75 && 200 > $.navWindow.left) {
            $.navWindow.animate({
                left: 200,
                duration: 300
            });
            menuButton.toggle = true;
        } else {
            $.navWindow.animate({
                left: 0,
                duration: 300
            });
            menuButton.toggle = false;
        }
    });
    Titanium.Geolocation.purpose = "Recieve User Location";
    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
    Titanium.Geolocation.distanceFilter = 10;
    Ti.Geolocation.addEventListener("location", function() {
        getLocation();
    });
    $.sideScreen.open();
    $.navWindow.open();
    __defers["$.__views.__alloyId0!click!openGroup"] && $.__views.__alloyId0.addEventListener("click", openGroup);
    __defers["$.__views.__alloyId7!click!openGroup"] && $.__views.__alloyId7.addEventListener("click", openGroup);
    __defers["$.__views.__alloyId13!click!openGroup"] && $.__views.__alloyId13.addEventListener("click", openGroup);
    __defers["$.__views.__alloyId19!click!openGroup"] && $.__views.__alloyId19.addEventListener("click", openGroup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;