let qr=document.getElementById("imgBox");
let qrImg=document.getElementById("qrImage");
let input=document.getElementById("input");
function GenerateQR(){
    qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ input.value;
    qr.classList.add("show-image");
    input.value="";
}