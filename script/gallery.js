const parent = document.getElementById("imgContainer");
const as = parent.querySelectorAll("a");

for (let i = 0; i < as.length; i++) {
    as[i].href = "/gallery/" + as[i].dataset.image;
    if ("ext" in as[i].dataset) as[i].href += as[i].dataset.ext;
    else as[i].href += ".png";
    let srcstr = "<img src=\"/previews/" + as[i].dataset.image;
    if ("extprev" in as[i].dataset) srcstr += as[i].dataset.extprev;
    else srcstr += ".webp"
    srcstr += "\">";
    as[i].innerHTML = srcstr;
}
