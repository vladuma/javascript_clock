function setTime(){
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  // console.log(seconds, minutes, hours);

  var arrows = [
    {
      arrow: 'hour',
      angle: (hours * 30)
    },
    {
      arrow: 'minute',
      angle: (minutes * 6)
    },
    {
      arrow: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // console.log(arrows);
  var test = document.getElementById('test-id')
  console.log(test);
  for (var i = 0; i < arrows.length; i++) {
    var elements = document.getElementsByClassName(arrows[i].arrow);

    for (var j = 0; j < elements.length; j++) {
      elements[j].style.transform = 'rotateZ(' + arrows[i].angle + 'deg)';
      elements[j].style.webkitTransform = 'rotateZ(' + arrows[i].angle + 'deg)';
      console.log(elements[j], arrows[i].angle);

      // if (arrows[i].arrow === 'minute') {
      //       elements[j].parentNode.setAttribute('data-second-angle', arrows[i + 1].angle);
      //     }
    }
  }
}
setTime();
