// function isiOS7Plus(){
//   // iOS-specific test
//   if (Titanium.Platform.name == 'iPhone OS')
//   {
//     var version = Titanium.Platform.version.split(".");
//     var major = parseInt(version[0],10);

//     // Can only test this support on a 3.2+ device
//     if (major >= 7)
//     {
//       return true;
//     }
//   }
//   return false;
// }

// var iOS7 = isIOS7Plus();
// var theTop = iOS7 ? 20 : 0;

var detailBtn = Ti.UI.createButton({
    title:'Detail'
});

var menuButton = Ti.UI.createButton({
    title:'Groups',
    toggle:false
});
$.contenido.setLeftNavButton(menuButton);

function openGroup(){
  $.contenido.title = "Fiestas Mazatlán";
  $.contenido.setRightNavButton(detailBtn);
  menuButton.fireEvent('click');
}

detailBtn.addEventListener('click', function(){
  var detailWin = Alloy.createController('groupDetail').getView();
  $.navWindow.openWindow(detailWin);
});

/* Menu Toggle */
menuButton.addEventListener('click', function(e){
    // If the menu is opened
    $.navWindow.right = 0;
    if(e.source.toggle === true){
        $.navWindow.animate({
            left:0,
            duration:400,
            curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        e.source.toggle = false;
    }
    // If the menu isn't opened
    else{
        $.navWindow.animate({
            left:200,
            duration:400,
            curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        e.source.toggle  = true;
    }
});

$.contenido.addEventListener('touchstart', function(e){
    // Get starting horizontal position
    e.source.axis = parseInt(e.x, 10);
});

$.contenido.addEventListener('touchmove', function(e){
    // Subtracting current position to starting horizontal position
    var coordinates = parseInt(e.globalPoint.x, 10) - e.source.axis;
    // Detecting movement after a 20px shift
    if(coordinates > 20 || coordinates < -20){
        e.source.moving = true;
    }
    // Locks the window so it doesn't move further than allowed
    if(e.source.moving === true && coordinates <= 200 && coordinates >= 0){
        // This will smooth the animation and make it less jumpy
        $.navWindow.animate({
            left:coordinates,
            duration:20
        });
        // Defining coordinates as the final left position
        $.navWindow.left = coordinates;
    }
});

$.contenido.addEventListener('touchend', function(e){
    // No longer moving the window
    e.source.moving = false;
    if($.navWindow.left >= 75 && $.navWindow.left < 200){
        // Repositioning the window to the right
        $.navWindow.animate({
            left:200,
            duration:300
        });
        menuButton.toggle = true;
    }else{
        // Repositioning the window to the left
        $.navWindow.animate({
            left:0,
            duration:300
        });
        menuButton.toggle = false;
    }
});
/* End Menu Toggle */

Titanium.Geolocation.purpose = "Recieve User Location";
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;

// Set Distance filter. This dictates how often an event fires based on the distance the device moves. This value is in meters.
Titanium.Geolocation.distanceFilter = 10;

function getLocation(){
  //Get the current position and set it to the mapview
  Ti.Geolocation.getCurrentPosition(function(e){
    var region = {
        latitude: e.coords.latitude,
        longitude: e.coords.longitude,
        animate:true,
        latitudeDelta:0.015,
        longitudeDelta:0.015
    };
    $.map.setLocation(region);
  });
}

Ti.Geolocation.addEventListener('location',function(){
  getLocation();
});

$.sideScreen.open();
$.navWindow.open();
// $.searchWin.open();