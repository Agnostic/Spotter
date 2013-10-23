var headerView = Ti.UI.createView({ layout: 'horizontal', height: Ti.UI.SIZE });
var image = Ti.UI.createImageView({
  image: 'http://www.smallbizio.com/wp-content/uploads/2013/08/summer_party.jpg',
  width: 50,
  left: 5,
  top: 5
});
headerView.add(image);

var info_view = Ti.UI.createView();
$.addClass(info_view, 'place_info');
headerView.add(info_view);

var l_name = Ti.UI.createLabel({ text: 'Fiestas Mazatlán' });
$.addClass(l_name, 'place_name');
info_view.add(l_name);

var l_description = Ti.UI.createLabel({
  text: 'Todas las fiestas de mazatlán en un solo grupo, desde cumpleaños hasta festivales.'
});
$.addClass(l_description, 'place_description full_description');
info_view.add(l_description);

$.detailWin.add(headerView);

var tab = Titanium.UI.iOS.createTabbedBar({
  labels:['People', 'Spots'],
  backgroundColor:'#336699',
  top:10,
  style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
  height:25,
  index: 0,
  width:Ti.UI.FILL
});
$.detailWin.add(tab);

var peopleView = Ti.UI.createScrollView({
  layout: 'vertical',
  top:5,
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  width: Ti.UI.FILL,
  height: 370
});

var spotsView = Ti.UI.createScrollView({
  layout: 'vertical',
  height: 0,
  top:0,
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  width: Ti.UI.FILL
});

var people = [
  {
    name: 'Gilberto Avalos',
    image: 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-ash2/543485_10150827206391157_56336608_n.jpg',
    status: 'Aquí esperando la fiesta!'
  },
  {
    name: 'Jasiby Gezabel',
    image: 'https://scontent-a-sjc.xx.fbcdn.net/hphotos-ash4/303382_455622941132519_1616266618_n.jpg',
    status: 'Viendo TV'
  },
  {
    name: 'Filiberto Galarza',
    image: 'https://scontent-a-sjc.xx.fbcdn.net/hphotos-frc1/317262_10150857723750062_164630235_n.jpg',
    status: 'Frikeando...'
  },
  {
    name: 'Gilberto Avalos',
    image: 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-ash2/543485_10150827206391157_56336608_n.jpg',
    status: 'Aquí esperando la fiesta!'
  },
  {
    name: 'Jasiby Gezabel',
    image: 'https://scontent-a-sjc.xx.fbcdn.net/hphotos-ash4/303382_455622941132519_1616266618_n.jpg',
    status: 'Viendo TV'
  },
  {
    name: 'Filiberto Galarza',
    image: 'https://scontent-a-sjc.xx.fbcdn.net/hphotos-frc1/317262_10150857723750062_164630235_n.jpg',
    status: 'Frikeando...'
  },
  {
    name: 'Gilberto Avalos',
    image: 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-ash2/543485_10150827206391157_56336608_n.jpg',
    status: 'Aquí esperando la fiesta!'
  },
  {
    name: 'Jasiby Gezabel',
    image: 'https://scontent-a-sjc.xx.fbcdn.net/hphotos-ash4/303382_455622941132519_1616266618_n.jpg',
    status: 'Viendo TV'
  },
  {
    name: 'Filiberto Galarza',
    image: 'https://scontent-a-sjc.xx.fbcdn.net/hphotos-frc1/317262_10150857723750062_164630235_n.jpg',
    status: 'Frikeando...'
  },
  {
    name: 'Gilberto Avalos',
    image: 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-ash2/543485_10150827206391157_56336608_n.jpg',
    status: 'Aquí esperando la fiesta!'
  },
  {
    name: 'Jasiby Gezabel',
    image: 'https://scontent-a-sjc.xx.fbcdn.net/hphotos-ash4/303382_455622941132519_1616266618_n.jpg',
    status: 'Viendo TV'
  },
  {
    name: 'Filiberto Galarza',
    image: 'https://scontent-a-sjc.xx.fbcdn.net/hphotos-frc1/317262_10150857723750062_164630235_n.jpg',
    status: 'Frikeando...'
  }
];

var spots = [
  {
    name: 'Fiesta 1',
    image: 'https://cdn1.iconfinder.com/data/icons/ballicons-free/128/map-.png',
    status: 'Aquí esperando la fiesta!'
  },
  {
    name: 'Otra fiesta',
    image: 'https://cdn1.iconfinder.com/data/icons/ballicons-free/128/map-.png',
    status: 'Aquí esperando la fiesta!'
  },
  {
    name: 'Cumple de fulano',
    image: 'https://cdn1.iconfinder.com/data/icons/ballicons-free/128/map-.png',
    status: 'Aquí esperando la fiesta!'
  }
];

var createItems = function(items, target){
  _.each(items, function(item){
    var person = Ti.UI.createView({
      top: 5,
      layout: 'horizontal',
      width: Ti.UI.FILL,
      height: Ti.UI.SIZE
    });
    target.add(person);

    var person_image = Ti.UI.createImageView({
      width: 40,
      height: 40,
      top: 5,
      left: 10,
      borderRadius: 20,
      image: item.image
    });
    person.add(person_image);

    var person_labels = Ti.UI.createView({
      top: 3,
      left: 10,
      layout: 'horizontal',
      width: Ti.UI.FILL,
      height: Ti.UI.SIZE
    });
    person.add(person_labels);

    var person_name = Ti.UI.createLabel({
      width: Ti.UI.FILL,
      height: Ti.UI.SIZE,
      font: {
        fontSize: 12
      },
      text: item.name
    });
    person_labels.add(person_name);

    var person_status = Ti.UI.createLabel({
      color: "#555",
      top: 2,
      width: Ti.UI.SIZE,
      height: Ti.UI.SIZE,
      font: {
        fontSize: 10
      },
      text: item.status
    });
    person_labels.add(person_status);

    var separator = Ti.UI.createView({
      top: 7,
      width: "100%",
      height: "1px",
      backgroundColor: "#008FD5"
    });
    person.add(separator);
  });
};

$.detailWin.add(peopleView);
$.detailWin.add(spotsView);

createItems(people, peopleView);
createItems(spots, spotsView);

var rightNavView = Titanium.UI.createView({
    top : 0,
    left : 50,
    height : 44,
    backgroundColor: 'transparent',
    width : 100
});
// var pin_btn = Titanium.UI.createButton({
//     top : 8,
//     right : -6,
//     height : 30,
//     width : 30,
//     backgroundImage : '/map_pin.png'
// });
var user_btn = Titanium.UI.createButton({
  top : 8,
  // right : 30,
  right: 0,
  height : 30,
  width : 30,
  backgroundImage : '/add_user.png'
});
//rightNavView.add(pin_btn);
rightNavView.add(user_btn);
$.detailWin.rightNavButton = rightNavView;

tab.addEventListener('click', function(e){
  if(e.index === 1){
    peopleView.height = 0;
    spotsView.height = 370;
  } else {
    peopleView.height = 370;
    spotsView.height = 0;
  }
});