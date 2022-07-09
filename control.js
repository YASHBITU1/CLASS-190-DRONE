AFRAME.registerComponent("control",{
    schema:{
        speedOfRotation:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key=="ArrowRight"){
                this.data.speedOfRotation+=0.12
            }
            if(e.key=="ArrowLeft"){
                this.data.speedOfRotation-=0.12
            }
        }) 
       },
       tick:function(){
        var cityRotation = this.el.getAttribute("rotation")
        cityRotation.y+=this.data.speedOfRotation
        this.el.setAttribute("rotation",{x:cityRotation.x,y:cityRotation.y,z:cityRotation.z})


       }
})
AFRAME.registerComponent("dronecontrol",{
    schema:{
        speedOfRotation:{type:"number",default:0},
        areaPosition:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            this.data.areaPosition = this.el.getAttribute("position")
            var dronePosition = this.data.areaPosition
            this.data.speedOfRotation = this.el.getAttribute("rotation")
            var droneRotation=this.data.speedOfRotation
            if(e.key=="ArrowDown"){
                if(droneRotation.x){
                    droneRotation.x+=0.5
                dronePosition.y-=0.1
                this.el.setAttribute("position",{x:dronePosition.x,y:dronePosition.y,z:dronePosition.z})
                this.el.setAttribute("rotation",{x:droneRotation.x,y:droneRotation.y,z:droneRotation.z})
                }
                
            }
            if(e.key=="ArrowUp"){
                if(droneRotation.x<3){
                    droneRotation.x-=0.5
                dronePosition.y+=0.1
                this.el.setAttribute("position",{x:dronePosition.x,y:dronePosition.y,z:dronePosition.z})
                this.el.setAttribute("rotation",{x:droneRotation.x,y:droneRotation.y,z:droneRotation.z})
            }
                
            }
            if(e.key=="ArrowLeft"){
                droneRotation.y+=0.5
                this.el.setAttribute("rotation",{x:droneRotation.x,y:droneRotation.y,z:droneRotation.z})
            }
            if(e.key=="ArrowRight"){
                droneRotation.y-=0.5
                this.el.setAttribute("rotation",{x:droneRotation.x,y:droneRotation.y,z:droneRotation.z})
            }
            if(e.key=="w"){
                dronePosition.z-=0.1
                this.el.setAttribute("position",{x:dronePosition.x,y:dronePosition.y,z:dronePosition.z})
            }
            if(e.key=="s"){
                dronePosition.z+=0.1
                this.el.setAttribute("position",{x:dronePosition.x,y:dronePosition.y,z:dronePosition.z})
            }
            if(e.key=="a"){
                dronePosition.x-=0.1
                this.el.setAttribute("position",{x:dronePosition.x,y:dronePosition.y,z:dronePosition.z})
            }
            if(e.key=="d"){
                dronePosition.x+=0.1
                this.el.setAttribute("position",{x:dronePosition.x,y:dronePosition.y,z:dronePosition.z})
            }

        })
    },
})