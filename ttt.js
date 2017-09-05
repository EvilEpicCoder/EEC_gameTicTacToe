var playerSign;
var queueActions=0;
var globalIndexMatrix=[];
var globalHitMatrix=[];
$(document).ready(function(){
	//console.log($('div.row'));
	//console.log($("div.row:eq("+0+"):nth-child(1)").html());
	/***
	for(var i=0;i<=$("span").length-1;i++){
		$("span:eq("+i+")").click(function(){
		$(this).addClass("cross");
		console.log(this.classList);
		});
	}
	****/
	$("span").click(function(){
		checkWinner(globalIndexMatrix,globalHitMatrix);
		console.log(this.classList);
		if(queueActions%2==0){
			if(this.classList==""){
			$(this).addClass("circle");
			//checkWinner("span","circle");
			globalIndexMatrix.push($("span").index(this));
			globalHitMatrix.push(1);
			
			$("li:eq('0')").addClass("red");
			$("li:eq('1')").addClass("gray");
			$("li:eq('0')").removeClass("gray");
			$("li:eq('1')").removeClass("red");
			queueActions++;	
			}else{
			
			}
		}else{
			if(this.classList==""){
			$(this).addClass("cross");
			globalIndexMatrix.push($("span").index(this));
			globalHitMatrix.push(0);
			
			$("li:eq('1')").addClass("red");
			$("li:eq('0')").addClass("gray");
			$("li:eq('1')").removeClass("gray");
			$("li:eq('0')").removeClass("red");
			queueActions++;	
			}else{
			
			}
		}
		
		
		
		
	//globalHitMatrix.findIndex(isBigEnough);
		//console.log();
		//console.log(this.classList);
	});
	/**$("span").click(function(event){
		//x.target.addClass("cross");
		var target = event.target;
		target.addClass("circle");
		
	});
	* ***/
	//console.log($("span:eq("+0+")"));
});
var ddd=0;
function checkWinner(arr1,arr2){
	
	console.log(arr1);
	console.log(arr2);
	var dd=0;
	for(var a=0;a<=arr2.length-1;a++){
		
		if(arr2[a]>=1){
			//console.log(parseInt(arr1[a]));
			dd+=parseInt(arr1[a]);
			
		}
		ddd+=dd;
		console.log(ddd+"HERE");
	}
	//return mNum;
	
	/***console.log($(elementName).classList);
	console.log(className);
	var x=[];
	for(var total=0;total<=$(elementName).length-1;total++){
		if($(elementName).classList==className){
			x.push("1");
		}else{
			x.push("0");
		}
	}
	console.log(x);*///
}
