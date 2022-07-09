AFRAME.registerComponent("collision",{
    schema:{
        elementId:{type:"string",default:"#rocket1"}
    },
    update:function(){
        this.checkCollision(this.data.elementId)
    },
    checkCollision:function(elementId){
        var element = document.querySelector(elementId)
        console.log("check collision")
        element.addEventListener("collide",(e)=>{
          
            if(elementId.includes("#rocket")){
                console.log(elementId+"collision")
            }
        })

    }

})