AFRAME.registerComponent("obstacle",{
    init:function(){
        for (let i = 1; i < 15; i++) {
            var id = `rocket${i}`
            var X = Math.random()*30+-15
            var Y = Math.random()*5+-2
            var Z = Math.random()*30+-15
            
            var Position = {x:X,y:Y,z:Z}
            this.createRocket(id,Position)
            var duration = 300
        var timerele = document.querySelector("#time")
        this.startTimer(duration,timerele)
        }
    },
    createRocket(id,Position){
        var rocketel = document.createElement("a-entity")
        rocketel.setAttribute("id",id)
        rocketel.setAttribute("position",Position)
        rocketel.setAttribute("gltf-model",src="./rocket/scene.gltf")
        rocketel.setAttribute("animation-mixer",{})
        rocketel.setAttribute("scale",{x:0.03,y:0.03,z:0.03})
        rocketel.setAttribute("collision",{elementId:`#${id}`})
        rocketel.setAttribute("static-body",{shape:"sphere",sphereRadius:5})
        var scene = document.querySelector("#background")
        scene.appendChild(rocketel)


    },
    startTimer:function(duration,timerele){
        var mins ;
        var secs
        setInterval(() => {
            if(duration>=0){
                mins = parseInt(duration/60)
                secs = parseInt(duration%60)
                if(mins<10){
                    mins = "0"+mins
                }
                if(secs<10){
                    secs = "0"+secs
                }
                timerele.setAttribute("text",{value:mins+":"+secs})
                duration-=1
            }
        }, 1000);
    },
})