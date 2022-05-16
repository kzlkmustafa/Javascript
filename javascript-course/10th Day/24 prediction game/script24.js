//exercise loops 

/*
    Demo Loops : Sayı Tahmin Oyunu

    1-10 arası rastgele sayı üretilen bir sayıyı
    aşağı yukarı ifadeleri ile buldurmaya çalışın.

    **puanlama yapın.
    **kullanıcı kaç kerede bileceğini belirtebilsin.
*/

var hak,can;
var tahmin,sayac =0;
var sayi = Math.floor((Math.random()*10)+1);
can = Number(prompt("kaç kerede bileceksiniz"));
hak = can;


while(hak>0){
    hak--;
    sayac++
    tahmin = Number(prompt("Bir sayı giriniz"));

    if(sayi == tahmin){
        alert(`Tebrikler ${sayac} defada bildiniz. Puanın : ${Math.floor(100-(100/can)*(sayac-1))} ;D`);
        break;
    }else if(sayi>tahmin){
        alert("yukarı");
    }else{
        alert("aşağı");
    }
};
if(hak==0){
    alert("hakkınız Tükendi. Puanın : 0   );")
}

