function preload(){
img=loadImage("images.jpg")
}
function setup(){
can=createCanvas(400 ,400)
can.center()
v=createCapture(VIDEO)
v.hide()
posenet=ml5.poseNet(v,obj)
posenet.on('pose' , check)
}
function check(results){
if (results.length>0){
console.log(results)
console.log("x value=" + results[0].pose.nose.x)
console.log("y value=" + results[0].pose.nose.y)
}
}
function obj(){
console.log("model loaded!")
}
function draw(){
image(v,0,0,400,400)
}
function snap(){
save('nn.png')
}