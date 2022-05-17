//Demo : Function

var hesapA = {
    ad : "Sena Turan",
    hesapNo : "12345678",
    bakiye : 2000,
    ekHesap : 1000
}

var hesapB={
    ad : "Mehmet Durmaz",
    hesapNo : "87654321",
    bakiye : 3000,
    ekHesap : 2000
}

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);
    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye - miktar;
        console.log(`paranızı para bölmesinden alabilirsiniz`);
    }else {
        var toplam = hesap.bakiye + hesap.ekHesap;
        if (toplam>=miktar){
            if(confirm("Ek hesbınızı kullanmak istermisiniz")){
                console.log("paranızı alabilirsiniz");
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekhesap = hesap.ekhesap - ekhesap;
            }else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır.`);
            }
        }else{
            console.log("üzgünüz bakiye yetersiz");
        }
    };
};

paraCek(hesapA,2000);
paraCek(hesapA,500);



