function upDate(element) {
    var previewPic = element.src;
    var altText = element.alt;

    console.log("Mouse over event triggered");
    console.log("Alt: " + altText);
    console.log("Source: " + previewPic);

    document.getElementById('image').innerHTML = altText;
    document.getElementById('image').style.backgroundImage = "url('" + previewPic + "')";
}

function undo() {
    console.log("Mouse out event triggered");

    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    document.getElementById('image').style.backgroundImage = "url('')";
}

var thumbnail = document.getElementById('previewPic');
thumbnail.addEventListener('mouseover', function() {
    upDate(thumbnail);
});

thumbnail.addEventListener('mouseout', function() {
    undo();
});
