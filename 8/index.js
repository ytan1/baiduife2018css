var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'canvas',
    loop: true,
    autoplay: true,
    path: 'data.json'
})


animation.goToAndStop(239, true)
// animation.destroy()
window.setTimeout(function(){
    animation.destroy()
    var animation2 = bodymovin.loadAnimation({
        container: document.getElementById('bm'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'data.json'
    })
},4000)
