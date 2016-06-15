// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c', {});
windowWidth = window.innerWidth ;
windowHeight = window.innerHeight;
canvas.setWidth(windowWidth);
canvas.setHeight(windowHeight);


// add image to canvas
canvas.renderAll();
// ADD EYES
$('#bodyRed').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/red.svg', function(oImg) {
    oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyOrange').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/orange.svg', function(oImg) {
  oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyYellow').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/yellow.svg', function(oImg) {
  oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyGreen').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/green.svg', function(oImg) {
  oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyBlue').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/blue.svg', function(oImg) {
  oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyBrown').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/brown.svg', function(oImg) {
  oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});


$('#bodyTeal').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/teal.svg', function(oImg) {
  oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyIndigo').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/indigo.svg', function(oImg) {
  oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyTan').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/tan.svg', function(oImg) {
  oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyPurple').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/purple.svg', function(oImg) {
  oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});


$('#bodyRainbow').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/rainbow.svg', function(oImg) {
  oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyBlack').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/black.svg', function(oImg) {
  oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyCoral').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/coral.svg', function(oImg) {
  oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#bodyPeach').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/peach.svg', function(oImg) {
  oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});


$('#bodyPink').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterBodies/pink.svg', function(oImg) {
  oImg.scale(3.5);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});







// ADD EYES
$('#eyes1').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterEyes/eyes1.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#eyes2').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterEyes/eyes2.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#eyes3').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterEyes/eyes3.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#eyes4').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterEyes/eyes4.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#eyes5').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterEyes/eyes5.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#eyes6').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterEyes/eyes6.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

// ADD MOUTHS
$('#mouth1').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterMouths/mouth1.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#mouth2').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterMouths/mouth2.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#mouth3').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterMouths/mouth3.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#mouth4').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterMouths/mouth4.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#mouth5').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterMouths/mouth5.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#mouth6').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterMouths/mouth6.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});
// end - adding images to canvas



// ADD EXTRAS LIKE HORNS AND HATS
$('#horn1').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/horns1.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#horn2').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/horns2.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#tiara').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/tiara.png', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#pinkFancyHat').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/pinkFancyHat.png', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#pirateHat').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/pirateHat.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#cowboyHat').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/cowboyHat.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#beard1').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/beard1.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#beard2').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/beard2.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});
$('#moustache1').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/moustache1.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});
$('#moustache2').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/moustache2.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});
$('#moustache3').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/moustache3.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

$('#moustache4').click(function() {
  var image1 = new fabric.Image.fromURL('https://s3-us-west-2.amazonaws.com/monsterimages/monsterHeadAccessories/moustache4.svg', function(oImg) {
  oImg.scale(1.0);
    canvas.add(oImg);
  },{
    hasControls: true,
    hasBorders: false,
  })
});

// end - add extras




// save file to new window

    // function saveFile() {

    // var trsvg = canvas.toSVG();
    //   window.open(document.querySelector('canvas').toDataURL());
    // }

    //     document.querySelector('button').addEventListener('click', saveFile, false);










    
    function saveFile() {
      window.open(document.querySelector('canvas').toDataURL());
    }
    //--------

    function handleFileSelect(evt) {
      //make canvas
      var canvasWidth = 500;
      var canvasHeight = 500;
      var file = evt.target.files[0];
      
      //image upload
      reader.onload = function(fileObject) {
        var data = fileObject.target.result;
        
        // Create an image object
        var image = new Image();
        image.onload = function() {
          
          window.imageSrc = this;
          redrawMeme(window.imageSrc, null, null);
        }
        
        // Set image data to background image.
        image.src = data;
        console.log(fileObject.target.result);
      };
      reader.readAsDataURL(file)
    }
    // var file = document.querySelector("#file");
    // file.onchange = handleFileSelect;

        document.querySelector('button').addEventListener('click', saveFile, false);













// // add bodies to bkgd of canvas

// function chooseBody(el) {
//   var useThisId = el.getAttribute('id');
//   var monsterBox = document.getElementsByClassName('dropzone');
//   monsterBox = monsterBox[0];
//   monsterBox.id = '';
//   monsterBox.id = useThisId;
// }

// // end - adding bodies to bkgd