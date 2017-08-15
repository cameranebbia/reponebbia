var anim;

console.log("INIT");

var elem = document.getElementById('bodymovin')
var animationParams = {
    container: elem,
    renderer: 'html',
    loop: true,
    autoplay: true,
    rendererSettings: {
        progressiveLoad:false
    },
    animationData: animData
};
anim = bodymovin.loadAnimation(animationParams);



console.log("LOADED");
