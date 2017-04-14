import { ModuleA } from "./ModuleA";
import { bake } from './shake';

bake();


// console.log(new ModuleA().toString());
// console.log(new ModuleA("Nshen").toString());
window.onload = () => {
    const element = document.createElement('div');
    element.innerHTML = new ModuleA("Nshen").toString();
    document.body.appendChild(element);


    const imgInfo: ImageInfo = require<ImageInfo>("./images/girl.jpg");
    console.log(imgInfo);

    let img = new Image(imgInfo.width, imgInfo.height);
    img.src = imgInfo.src;

    document.body.appendChild(img);

    // console.log(img);
    // console.log(1111111111111111);
    // document.createi

};

