#target photoshop

app.preferences.rulerUnits = Units.PIXELS;

var backgroundC = new SolidColor();

    backgroundC.rgb.red = 255;

    backgroundC.rgb.green = 255;

    backgroundC.rgb.blue = 255;

    backgroundColor = backgroundC;

   

var doc = activeDocument

doc.resizeCanvas(Math.max(doc.width,doc.height),Math.max(doc.width,doc.height))