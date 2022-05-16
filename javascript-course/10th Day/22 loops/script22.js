//loops

//for loop

for (let i=0; i<10; i++){

    if(i==3){
        console.log("en sevdiğim rakam");
        continue; //3 sayısını tekrar yazmaz kod tekrarını iptal eder
    }

    if(i==6){
        console.log("en sevmediğim rakam");
        break; //yukarıda continue ile kod tekrarını engelledi(3 sayısını iki defa yazmadı) break ise döngüyü durdurur. yani 7 rakamı yazılamaz
    }

    console.log(i);
}


//while loop


 i=0;
while (i<10){
    console.log(i);
    i++;
}

//do-while loop

 i=0;
do{
    console.log(i);
    i++;
}while(i<10)





let sonuc=4
for (let i=10;i>0;i--){
    if(i%2==0){
        sonuc*=i;
    }
    console.log(sonuc);
}

console.log(sonuc);



for (let i=0; i<100; i++){
    for (let j=0; j<10; j++){
        console.log(`i: ${i} j:${j}`);
    }
}

