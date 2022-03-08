var slidesImages = ["images/image1.jpg","images/image2.jpg","images/image3.jpg"];
var i = 0;
 function slide(){
    document.slideShow.src = slidesImages[i];
    if(i < slidesImages.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("slide()" , 1000);
    
}
slide();
