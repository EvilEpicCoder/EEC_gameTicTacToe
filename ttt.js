var playerSignSide;
var queueActions=0;
var globalPlayer1=[];
var globalPlayer2=[];
var winArray=[[0,1,2],[3,4,5],[0,4,8],[2,4,6],[6,7,8],[0,3,6],[1,4,7],[2,5,8]].sort();
var newArr=[];
var tArr=[];
var globalCounter=0;
var boolComputer=false;
var boolPlayerFirst=true;
var boolPlayerZero=true;
var boolGameRunning=true;
var gameplayMode=0;
var magikX;
var totalTurns=0;

$(document).ready(function(){
	magikX=Math.floor(Math.random() * (8 - 0)) + 0;
	$("#Gameplay").val(0);
	$("#Gameplay").change(function(){
		gameplayMode=$("#Gameplay").val();
		//console.log(gameplayMode+"-----------------------------------------------");
	});
	$(".btn").click(function(){
		clearAll(true);
	});
	//if(boolGameRunning==false){
		
	//}else{
		//-----------------------------game Running-------------
	$("span").click(function(){
		
		if(queueActions%2==0){
			if(this.classList==""&&boolGameRunning==true){
			$(this).addClass("circle");
			totalTurns++;
			globalPlayer1.push($("span").index(this));
			$("li:eq('0')").addClass("red");
			$("li:eq('1')").addClass("gray");
			$("li:eq('0')").removeClass("gray");
			$("li:eq('1')").removeClass("red");
			queueActions++;
			checkWinner(globalPlayer1,"Zero");
			if(gameplayMode>0&&boolGameRunning==true){
			smartComputer();
			
			}
		}
		}else{
			if(gameplayMode==0){
				if(this.classList==""&&boolGameRunning==true){
				$(this).addClass("cross");
				totalTurns++;
				globalPlayer2.push($("span").index(this));
			
				$("li:eq('1')").addClass("red");
				$("li:eq('0')").addClass("gray");
				$("li:eq('1')").removeClass("gray");
				$("li:eq('0')").removeClass("red");
				queueActions++;
				checkWinner(globalPlayer2,"Cross");
				
							
			}
		}
		
		}
		
		});
		
		//}//-------------------------game Running End section
});

function checkWinner(player,playerSign){
tArr=player;
 if(tArr.length==3){
	 compareArrayQuick(tArr,winArray,playerSign);
  }else if(tArr.length>=4){
    //console.log("Hardcore Function");
      for(var i=0;i<=winArray.length-1;i++){
		 for(var k=0;k<=winArray[i].length-1;k++){
			 //console.log(winArray[i][k]+"winArray"+"["+i+"]"+"["+k+"]"+"-----"+tArr);
			  if(tArr.includes(winArray[i][k])==true){
			  globalCounter++;
				//console.log(globalCounter+"globalCounter------------------------");
				}
		 }
		 if(globalCounter>=3){
			 //console.log("Hardcore Winner"+playerSign);
			if(playerSign=="Zero"){
				$("li:eq(0)").append(" Winner");
				boolGameRunning=false;
				alert("Winner Zero");
				xflag=100;
			}else{
				$("li:eq(1)").append(" Winner");
				boolGameRunning=false;
				alert("Winner Cross");
				xflag=100;
			}
			
		 }
		globalCounter=0;
		  
		 //for ---
	  }
	  
  }
  
}

function compareArrayQuick(userArr,dataArr,playerSign){
	 //console.log(userArr+"userArr");
	 //console.log(dataArr+"dataArr");
	   for(var shortWay=0;shortWay<=winArray.length-1;shortWay++){
		   //console.log(shortWay+"ooooooooooooo");
		  
		   var compA=userArr.toString();
		   var compB=dataArr[shortWay].toString();

			if(compA==compB){
			console.log("Winner Short"+playerSign);
			if(playerSign=="Zero"){
				$("li:eq(0)").append(" Winner");
				boolGameRunning=false;
				alert("Winner Zero");
				
			}else{
				$("li:eq(1)").append(" Winner");
				boolGameRunning=false;
				alert("Winner Cross");
			}
			
			}
		}
}
function clearAll(param){
	if(param==true){
		var playerSignSide;
queueActions=0;
globalPlayer1=[];
globalPlayer2=[];
winArray=[[0,1,2],[3,4,5],[0,4,8],[2,4,6],[6,7,8],[0,3,6],[1,4,7],[2,5,8]].sort();
newArr=[];
tArr=[];
globalCounter=0;
boolComputer=false;
boolPlayerFirst=true;
boolPlayerZero=true;
boolGameRunning=true;
gameplayMode=0;
magikX=0;
		boolGameRunning=true;
		$("span").removeClass("circle cross");
		$("li:eq(0)").text("Player 1 (Zero)");
		$("li:eq(1)").text("Player 2 (Coss)");
		$("#Gameplay").val(0);
	}
boolGameRunning==true;
}

function smartComputer(){
	magikX=Math.floor(Math.random() * (8 - 0)) + 0;
	if($("span:eq("+magikX+")").hasClass("circle")==true||$("span:eq("+magikX+")").hasClass("cross")==true){
	smartComputer();
	}else{
	//console.log(magikX+"computer thinking");
	globalPlayer2.push(magikX);
	$("span:eq("+magikX+")").addClass("cross");
	queueActions++;
	checkWinner(globalPlayer2,"Cross");
	totalTurns++;
	}
}
