var playerSign;
var queueActions=0;
var globalPlayer1=[];
var globalPlayer2=[];
var winArray=[[0,1,2],[3,4,5],[0,4,8],[2,4,6],[6,7,8],[0,3,6],[1,4,7],[2,5,8]].sort();
//var winArray=[[0,1,2]].sort();
var newArr=[];
var tArr=[];
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
		//console.log(winArray);
		
		//console.log(this.classList);
		if(queueActions%2==0){
			if(this.classList==""){
			$(this).addClass("circle");
			//checkWinner("span","circle");
			globalPlayer1.push($("span").index(this));
			
			$("li:eq('0')").addClass("red");
			$("li:eq('1')").addClass("gray");
			$("li:eq('0')").removeClass("gray");
			$("li:eq('1')").removeClass("red");
			queueActions++;	
			
			checkWinner();
			}else{
			
			}
		}else{
			if(this.classList==""){
			$(this).addClass("cross");
			globalPlayer2.push($("span").index(this));
			
			$("li:eq('1')").addClass("red");
			$("li:eq('0')").addClass("gray");
			$("li:eq('1')").removeClass("gray");
			$("li:eq('0')").removeClass("red");
			queueActions++;
			
			checkWinner();
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

function checkWinner(){
tArr=globalPlayer1;

 if(tArr.length==3){
	 compareArrayQuick(tArr,winArray);
  }else if(tArr.length>=4){
    console.log("Hardcore Function");
    var filteredArr=tArr.map(function(x){
		console.log(x+"xxxxxxxxxx");
    var theX=winArray.forEach(function(d){
      var theHyperX=d.map(function(f){
        //console.log(f+"ffffffff");
        if(x==f){
          newArr.push(f);
          //console.log(newArr.length+"-------------");
          //console.log(newArr+"full this is array");
        }
      });
    
    //console.log(newArr.toString()+"yyyyyyyy");
    //console.log(tArr.toString()+"ppppppppp");
    compareArrayQuick(newArr,winArray)
    /**************************************
    if(newArr.toString()==tArr.toString()){
        console.log("Winner");
		}else{
        console.log("Looser");
	}
	**************************************/
    });
   
	});
		
  }
/*********************************************	
	//console.log(arr1);
	//console.log(arr2);
	var tArr=[];
	var ddd=0;
	for(var a=0;a<=arr2.length-1;a++){
		var dd=0;
		if(arr2[a]>=1){
			//console.log(parseInt(arr1[a]));
			
			dd+=parseInt(arr1[a]);
			tArr.push(dd);
			//console.log(tArr);
			//console.log(typeof(tArr));
		}
		ddd+=dd;
		console.log(tArr.toString()+"------------");
		
		var filteredArr=tArr.find(function(element){
				var comparedThree=winArray.find(function(subElement){
					if(element==subElement){
						console.log("COMPARED");//COMPARED
						return subElement;
					}
				});
				console.log(comparedThree+"COMPARED+comparedThree");//COMPARED
		});
		for(var x=0;x<=winArray.length-1;x++){
			//console.log(winArray[x].toString());
			console.log(tArr.toString()+"------------");
			if(tArr.toString()==winArray[x].toString()){
			
			//console.log(typeof(tArr));
			//console.log("Winner is Mister TODD");
			}
		}
		
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
	console.log(x);*********************************/
}
function compareArrayQuick(userArr,dataArr){
	 console.log("les 3-----------------");
	   for(var shortWay=0;shortWay<=winArray.length-1;shortWay++){
		   console.log(shortWay+"ooooooooooooo");
		   //var compA=tArr.toString();
		   //var compB=winArray[shortWay].toString();
		   var compA=userArr.toString();
		   var compB=dataArr[shortWay].toString();
		   //console.log(compA);
		   //console.log(compB);
			if(compA==compB){
			console.log("Winner Short");
			return true;
			}else{
				
			}
		}
}
