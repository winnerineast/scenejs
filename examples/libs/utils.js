function mouseOrbitUtility(scene) {


// Get handles to scene nodes

    var xeyeNode = scene.getNode("xeye");
    var yeyeNode = scene.getNode("yeye");

// Rotate with mouse drags

    var lastX;
    var lastY;
    var dragging = false;

    var newInput = false;
    var xeye = 0;
    var yeye = 0;

    var canvas = scene.getCanvas();

    function mouseDown(event) {
        lastX = event.clientX;
        lastY = event.clientY;
        dragging = true;
    }

    function touchStart(event) {
        lastX = event.targetTouches[0].clientX;
        lastY = event.targetTouches[0].clientY;
        dragging = true;
    }

    function mouseUp() {
        dragging = false;
    }

    function touchEnd() {
        dragging = false;
    }

    function mouseMove(event) {
        var posX = event.clientX;
        var posY = event.clientY;
        actionMove(posX, posY);
    }

    function touchMove(event) {
        var posX = event.targetTouches[0].clientX;
        var posY = event.targetTouches[0].clientY;
        actionMove(posX, posY);
    }

    function actionMove(posX, posY) {
        if (dragging) {

            xeye += (posX - lastX) * 0.5;
            yeye += (posY - lastY) * 0.5;

            lastX = posX;
            lastY = posY;

            xeyeNode.set("angle", xeye);
            yeyeNode.set("angle", yeye);
        }
    }

    canvas.addEventListener('mousedown', mouseDown, true);
    canvas.addEventListener('mousemove', mouseMove, true);
    canvas.addEventListener('mouseup', mouseUp, true);
    canvas.addEventListener('touchstart', touchStart, true);
    canvas.addEventListener('touchmove', touchMove, true);
    canvas.addEventListener('touchend', touchEnd, true);
}


function mousePanLookatUtility(scene) {

// Get handles to scene nodes

    var lookatNode = scene.getNode("lookat");    

// Pan with mouse drags

    var lastX;
    var lastY;
    var dragging = false;

    var xeye = 0;
    var yeye = 0;

    var canvas = scene.getCanvas();

    function mouseDown(event) {
        lastX = event.clientX;
        lastY = event.clientY;
        dragging = true;
    }

    function touchStart(event) {
        lastX = event.targetTouches[0].clientX;
        lastY = event.targetTouches[0].clientY;
        dragging = true;
    }

    function mouseUp() {
        dragging = false;
    }

    function touchEnd() {
        dragging = false;
    }

    function mouseMove(event) {
        var posX = event.clientX;
        var posY = event.clientY;
        actionMove(posX, posY);
    }

    function touchMove(event) {
        var posX = event.targetTouches[0].clientX;
        var posY = event.targetTouches[0].clientY;
        actionMove(posX, posY);
    }

    function actionMove(posX, posY) {
        if (dragging) {

            xeye += (posX - lastX) * 0.5;
            yeye += (posY - lastY) * 0.5;

            lastX = posX;
            lastY = posY;

            lookatNode.set({
                eye: { x: xeye, y: yeye }
            });
        }
    }

    canvas.addEventListener('mousedown', mouseDown, true);
    canvas.addEventListener('mousemove', mouseMove, true);
    canvas.addEventListener('mouseup', mouseUp, true);
    canvas.addEventListener('touchstart', touchStart, true);
    canvas.addEventListener('touchmove', touchMove, true);
    canvas.addEventListener('touchend', touchEnd, true);
}