//toggle button
$('.js-toggle').on('click', function(){
	$('.map-base').toggleClass('active');
});


//initialization of speech recognition starts here
const artyom = new Artyom();
var commands = [
 {
	 indexes:["打开地图"],
	 action:function() {
		 $('.map-base').addClass('active');
	 }
 }, {
	 indexes:["关闭地图"],
	 action:function() {
		 $('.map-base').removeClass('active');
	 }
 }
]

artyom.addCommands(commands);

function startContinuousArtyom(){
    artyom.fatality();

    setTimeout(function(){
         artyom.initialize({
            lang:"zh-CN",
            continuous:true,
            listen:true, 
            speed:1
        }).then(function(){
            console.log("Ready to work !");
        });
    },250);
}

startContinuousArtyom();