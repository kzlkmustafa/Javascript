//functions

function yasHesapla (dogumYili){
    return 2022-dogumYili;
}

//let val = yasHesapla(1998);
//console.log(val);


function EmekliligeKalan(dogumYili,isim) {
    let yas = yasHesapla(dogumYili);
    let Emeklilik = 65- yas;
    if(Emeklilik>0){
        console.log(`${isim} Emeklilik yaşınıza ${Emeklilik} yıl kaldı.`);
    }else{
        console.log(`Zaten Emekli olmalısınız`);
    }
}

let val2 = EmekliligeKalan(2000, "Mehmet");
