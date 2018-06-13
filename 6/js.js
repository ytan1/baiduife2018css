var bottom = document.getElementsByClassName('bottom')[0];
var full = document.getElementsByClassName('full')[0];
bottom.onclick = function(e){
    var target = e.target || e.which;
    if(target.classList.contains('thumbnail')){
        var id = target.id;
        var num = id.match(/(\d)$/)[1];
        if(num !== null){
            var slide = document.getElementById('no'+num);
            if(slide === full.lastElementChild){
                return;
            }
            
            full.appendChild(slide);

            //check if the slide has the animation class, if so remove and add, if not add
            if(!slide.classList.contains('showpic'+num)){
                slide.classList.toggle('showpic'+num);
            }else{
                slide.classList.toggle('showpic'+num);
                slide.classList.toggle('showpic'+num);
            }
            

             console.log(slide.className);


        }
    }
}