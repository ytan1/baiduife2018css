var btn = document.getElementById('div2');
var div1 = document.getElementById('div1');
var inside = document.getElementById('inside');
btn.onclick = function(){
    inside.classList.toggle('expanding');
    div1.classList.toggle('blue')
    btn.classList.add('graybackground');
    setTimeout(function(){
        this.classList.remove('graybackground');
    }.bind(this), 20);
}
