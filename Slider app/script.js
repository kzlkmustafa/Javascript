var models = [
    {
        name : 'Bisiklet 1',
        image: 'img/bicycle1.jpg',
        link : 'bisikletcibaba1.com',
    },
    {
        name : 'Bisiklet 2',
        image: 'img/bicycle2.jpg',
        link : 'bisikletcibaba2.com',
    },
    {
        name : 'Bisiklet 3',
        image: 'img/bicycle3.jpg',
        link : 'bisikletcibaba3.com',
    },
    {
        name : 'Bisiklet 4',
        image: 'img/bicycle4.jpg',
        link : 'bisikletcibaba4.com',
    },
    {
        name : 'Bisiklet 5',
        image: 'img/bicycle5.jpg',
        link : 'bisikletcibaba5.com',
    },
]

var index = 0;

var slaytCount = models.length;

var settings={
    duration : '1000',
    random : false
};

var interval;

init(settings);


document.querySelector('.fa-circle-arrow-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-circle-arrow-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
});
    
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
});
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings){
    //setTimeout da kullanılabilirdi ama time out başlar ve durur.
    //setInterval ise clearInterval ile durdurulmadığı sürece devam eder.
    var prev;
    interval = setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random()*(slaytCount-1)); 
            }while(index == prev);
            prev = index;
        }else{
            if(slaytCount == index +1){
                index=-1;
            }
            index++;
            showSlide(index);
            console.log(index);
        }
        showSlide(index);
    },settings.duration);

};


function showSlide(i){

    index  = i;
    if(i<0){
        index = slaytCount - 1;
    }
    if(i > (slaytCount-1)){
        index = 0
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href',models[index].link);
}
