//09/03/2019
var _0x7504=["","\x73\x68\x6F\x77","\x23\x6D\x61\x69\x6E\x5F\x62\x6F\x64\x79\x5F\x63\x6F\x6C\x31\x5F\x70\x72\x6F\x63\x65\x73\x73","\x50","\x74\x65\x78\x74","\x23\x63\x6F\x75\x6E\x74","\x68\x69\x64\x65","\x23\x61\x6C\x65\x72\x74\x43\x6C\x65\x61\x72","\x30","\x70\x75\x73\x68","\x6C\x65\x6E\x67\x74\x68","\x3C\x64\x69\x76\x20\x69\x64\x3D\x27\x74\x61\x62\x6C\x65\x5F\x63\x68\x69\x70\x73\x5F\x70\x6C\x61\x79\x65\x72\x27\x3E\x3C\x2F\x64\x69\x76\x3E","\x68\x74\x6D\x6C","\x23\x31\x2D","\x23","\x2D","\x63\x6C\x69\x63\x6B","\x23\x63\x6C\x6B\x50\x6C\x61\x79\x65\x72","\x42","\x31","\x3C\x64\x69\x76\x20\x69\x64\x3D\x27\x74\x61\x62\x6C\x65\x5F\x63\x68\x69\x70\x73\x5F\x62\x61\x6E\x6B\x65\x72\x27\x3E\x3C\x2F\x64\x69\x76\x3E","\x23\x63\x6C\x6B\x42\x61\x6E\x6B\x65\x72","\x3C\x64\x69\x76\x20\x69\x64\x3D\x27\x74\x61\x62\x6C\x65\x5F\x63\x68\x69\x70\x73\x5F\x74\x69\x65\x27\x3E\x3C\x2F\x64\x69\x76\x3E","\x23\x37\x2D","\x23\x63\x6C\x6B\x54\x69\x65","\x23\x62\x74\x6E\x43\x6C\x65\x61\x72","\x72\x65\x70\x6C\x61\x63\x65","\x73\x70\x6C\x69\x74","\x73\x70\x6C\x69\x63\x65","\x66\x61\x64\x65\x49\x6E","\x2E\x62\x74\x5F\x62\x61\x63\x6B\x73\x70\x61\x63\x65","\x2E\x2F\x70\x6F\x72\x74\x61\x6C\x2E\x70\x68\x70\x3F\x67\x65\x74\x43\x72\x65\x64\x69\x74","\x2E\x2F\x70\x6F\x72\x74\x61\x6C\x2E\x70\x68\x70\x3F\x75\x73\x65\x43\x72\x65\x64\x69\x74","\x2E\x63\x72\x65\x64\x69\x74\x5F\x6E\x75\x6D","\x67\x65\x74","\x66\x61\x64\x65\x4F\x75\x74","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\u0E40\u0E04\u0E23\u0E14\u0E34\u0E15\u0E02\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E19\u0E2B\u0E21\u0E14\u0E41\u0E25\u0E49\u0E27\u0E04\u0E30","\x23\x63\x72\x65\x64\x69\x74","\x6C\x6F\x67","\x72\x6F\x77\x3A","\x20\x43\x6F\x6C\x73\x3A","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x67\x72\x61\x70\x68\x5F\x75\x70\x27\x3E\x3C\x2F\x64\x69\x76\x3E\x20","\x23\x67\x72\x61\x70\x68\x5F","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x67\x72\x61\x70\x68\x5F\x64\x6F\x77\x6E\x27\x3E\x3C\x2F\x64\x69\x76\x3E\x20","\x23\x72\x65\x73\x75\x6C\x74\x5F\x64\x69\x72\x65\x63\x74\x69\x6F\x6E\x5F\x70\x72\x6F\x63\x65\x73\x73","\x23\x72\x65\x73\x75\x6C\x74\x5F\x64\x69\x72\x65\x63\x74\x69\x6F\x6E\x5F\x75\x70","\x23\x72\x65\x73\x75\x6C\x74\x5F\x64\x69\x72\x65\x63\x74\x69\x6F\x6E\x5F\x64\x6F\x77\x6E","\x54","\x32"];var StatClick=_0x7504[0];var stat=_0x7504[0];var anarr=[];var resultWin=[];var resultTie=0;$(_0x7504[2])[_0x7504[1]]();var choose=[];var row=1;var col=0;var over=0;var count=1;var lastId=_0x7504[0];var postiion=[];var lastCk;

document.getElementById("clkPlayer").addEventListener("click", () => {
	rotateChips().then(clickPlayer())
}, false);
document.getElementById("clkBanker").addEventListener("click", () => {
	rotateChips().then(clickBanker())
}, false);
document.getElementById("clkTie").addEventListener("click", () => {
	rotateChips().then(clickTie())
}, false);

$(_0x7504[25])[_0x7504[16]](function(){$(_0x7504[5])[_0x7504[4]](0);count= 1;$(_0x7504[2])[_0x7504[1]]();test_resultProcessT();choose= [];for(i= 1;i<= 6;i++){for(j= 1;j<= 31;j++){$(_0x7504[14]+ j+ _0x7504[15]+ i)[_0x7504[12]](_0x7504[0])}};row= 1;col= 0;postiion= []});$(_0x7504[30])[_0x7504[16]](function(){if(postiion!= null){try{$(postiion[postiion[_0x7504[10]]- 1])[_0x7504[12]](_0x7504[0]);var _0xa7dbxe=postiion[postiion[_0x7504[10]]- 1];_0xa7dbxe= _0xa7dbxe[_0x7504[26]](_0x7504[14],_0x7504[0]);_0xa7dbxe= _0xa7dbxe[_0x7504[27]](_0x7504[15]);count= postiion[_0x7504[10]]- 1;$(_0x7504[5])[_0x7504[4]](count++);if(count<= 0){count= 1};postiion[_0x7504[28]](-1,1);choose[_0x7504[28]](-1,1);var _0xa7dbxe=postiion[postiion[_0x7504[10]]- 1];_0xa7dbxe= _0xa7dbxe[_0x7504[26]](_0x7504[14],_0x7504[0]);_0xa7dbxe= _0xa7dbxe[_0x7504[27]](_0x7504[15]);col= _0xa7dbxe[1];row= _0xa7dbxe[0];alertBackspace()}catch(e){$(_0x7504[5])[_0x7504[4]](0);count= 1;$(_0x7504[2])[_0x7504[1]]();test_resultProcessT();choose= [];for(i= 1;i<= 6;i++){for(j= 1;j<= 31;j++){$(_0x7504[14]+ j+ _0x7504[15]+ i)[_0x7504[12]](_0x7504[0])}};row= 1;col= 0;postiion= []}}else {$(_0x7504[5])[_0x7504[4]](0);count= 1;$(_0x7504[2])[_0x7504[1]]();test_resultProcessT();choose= [];for(i= 1;i<= 6;i++){for(j= 1;j<= 31;j++){$(_0x7504[14]+ j+ _0x7504[15]+ i)[_0x7504[12]](_0x7504[0])}};row= 1;col= 0;postiion= []};$(_0x7504[2])[_0x7504[29]]()});var betNow;function Calculate(){result = true;if(choose.length==1){row=0;col++;};$.ajaxSetup({async: false});test_resultPlayerOff();var _0xa7dbx11=_0x7504[0];for(var _0xa7dbx12=0;_0xa7dbx12< choose[_0x7504[10]];_0xa7dbx12++){if(choose[_0xa7dbx12]!= _0x7504[0]&& choose[_0xa7dbx12]!= null){_0xa7dbx11+= choose[_0xa7dbx12]}};if(choose[_0x7504[10]]> 2){$[_0x7504[34]](_0x7504[31],function(_0xa7dbx13){credit = document.getElementById("credit");credit.value=_0xa7dbx13;if(_0xa7dbx13>= 0){$[_0x7504[34]](_0x7504[32],function(_0xa7dbx13){$(_0x7504[33])[_0x7504[4]](_0xa7dbx13);randomNumber();});$(_0x7504[2])[_0x7504[35]](500);var _0xa7dbx14=Math[_0x7504[37]](Math[_0x7504[36]]()* 3)+ 1;if(_0xa7dbx14== 1){test_resultPlayer();resultStatGraph[_0x7504[9]](0);setGraph()}else {test_resultBanker();resultStatGraph[_0x7504[9]](1);setGraph();}}else {alert(_0x7504[38]);$(_0x7504[39])[_0x7504[4]](_0x7504[8]);$.ajaxSetup({async: true});result = false;}})};$.ajaxSetup({async: true});return result;}var resultStatGraph=[];var clickChoose;var graphCols=1;var graphRows=1;var graphWin=0;var graphLost=0;function setGraph(){console[_0x7504[40]](resultStatGraph);if(resultStatGraph[_0x7504[10]]> 1){if(resultStatGraph[resultStatGraph[_0x7504[10]]- 2]== clickChoose){console[_0x7504[40]](_0x7504[41]+ graphRows+ _0x7504[42]+ graphCols);$(_0x7504[44]+ graphRows+ _0x7504[15]+ graphCols)[_0x7504[12]](_0x7504[43]);graphRows++;graphCols++;graphWin++}else {graphRows--;console[_0x7504[40]](_0x7504[41]+ graphRows+ _0x7504[42]+ graphCols);if(graphRows== 0){graphRows=  -1};$(_0x7504[44]+ graphRows+ _0x7504[15]+ graphCols)[_0x7504[12]](_0x7504[45]);graphCols++;graphLost++};$(_0x7504[46])[_0x7504[6]]();$(_0x7504[47])[_0x7504[6]]();$(_0x7504[48])[_0x7504[6]]();if(graphWin>= graphLost){$(_0x7504[47])[_0x7504[1]]()}else {$(_0x7504[48])[_0x7504[1]]()}}else {$(_0x7504[46])[_0x7504[1]]()}}

function clickPlayer() {
	var timeOut = 0;
	setTimeout(function() {
	clickChoose= 0;lastCk= _0x7504[3];$(_0x7504[5])[_0x7504[4]](count++);$(_0x7504[7])[_0x7504[6]]();choose[_0x7504[9]](_0x7504[8]);if(!Calculate()){return false;};/*if(choose[choose[_0x7504[10]]- 1]== choose[choose[_0x7504[10]]- 2]|| choose[choose[_0x7504[10]]- 2]== _0x7504[0]){*/row++;if(row> 8){row= 1;col++;$(_0x7504[13]+ col)[_0x7504[12]](_0x7504[11]);over++;lastId= _0x7504[13]+ col;postiion[_0x7504[9]](lastId)}else {$(_0x7504[14]+ row+ _0x7504[15]+ col)[_0x7504[12]](_0x7504[11]);lastId= _0x7504[14]+ row+ _0x7504[15]+ col;postiion[_0x7504[9]](lastId)}/*}else {row= 1;col++;$(_0x7504[14]+ row+ _0x7504[15]+ col)[_0x7504[12]](_0x7504[11]);over= 0;lastId= _0x7504[14]+ row+ _0x7504[15]+ col;postiion[_0x7504[9]](lastId)};*/if(col> 31){col= 1;for(i= 1;i<= 31;i++){$(_0x7504[14]+ row+ _0x7504[15]+ i)[_0x7504[12]](_0x7504[0])};lastId= _0x7504[0];postiion= []}
	}, timeOut);
}

function clickBanker() {
	var timeOut = 0;
	setTimeout(function() {
	clickChoose= 1;lastCk= _0x7504[18];$(_0x7504[5])[_0x7504[4]](count++);$(_0x7504[7])[_0x7504[6]]();choose[_0x7504[9]](_0x7504[19]);if(!Calculate()){return false;};/*if(choose[choose[_0x7504[10]]- 1]== choose[choose[_0x7504[10]]- 2]|| choose[choose[_0x7504[10]]- 2]== _0x7504[0]){*/row++;if(row> 8){row= 1;col++;$(_0x7504[13]+ col)[_0x7504[12]](_0x7504[20]);over++;lastId= _0x7504[13]+ col;postiion[_0x7504[9]](lastId)}else {$(_0x7504[14]+ row+ _0x7504[15]+ col)[_0x7504[12]](_0x7504[20]);lastId= _0x7504[14]+ row+ _0x7504[15]+ col;postiion[_0x7504[9]](lastId)}/*}else {row= 1;col++;$(_0x7504[14]+ row+ _0x7504[15]+ col)[_0x7504[12]](_0x7504[20]);over= 0;lastId= _0x7504[14]+ row+ _0x7504[15]+ col;postiion[_0x7504[9]](lastId)}*/;if(col> 31){col= 1;lastId= _0x7504[0];for(i= 1;i<= 31;i++){$(_0x7504[14]+ row+ _0x7504[15]+ i)[_0x7504[12]](_0x7504[0])};postiion= []}
	}, 500);
}

function clickTie() {
	var timeOut = 0;
	setTimeout(function() {
	clickChoose= 2;lastCk= _0x7504[49];$(_0x7504[5])[_0x7504[4]](count++);$(_0x7504[7])[_0x7504[6]]();choose[_0x7504[9]](_0x7504[50]);if(!Calculate()){return false;};/*if(choose[choose[_0x7504[10]]- 1]== choose[choose[_0x7504[10]]- 2] || choose[choose[_0x7504[10]]- 2]== _0x7504[0]){*//*col= 1;*/row++;if(row> 8){row= 1;col++;$(_0x7504[13]+ col)[_0x7504[12]](_0x7504[22]);over++;lastId= _0x7504[13]+ col;postiion[_0x7504[9]](lastId)/*col++;$(_0x7504[23]+ col)[_0x7504[12]](_0x7504[22]);over++;lastId= _0x7504[23]+ col;postiion[_0x7504[9]](lastId)*/}else {$(_0x7504[14]+ row+ _0x7504[15]+ col)[_0x7504[12]](_0x7504[22]);lastId= _0x7504[14]+ row+ _0x7504[15]+ col;postiion[_0x7504[9]](lastId)}/*}else {/*row++;row= 1;col++;$(_0x7504[14]+ row+ _0x7504[15]+ col)[_0x7504[12]](_0x7504[22]);lastId= _0x7504[14]+ row+ _0x7504[15]+ col;postiion[_0x7504[9]](lastId)}*/;if(col> 31){col= 1;lastId= _0x7504[0];for(i= 1;i<= 31;i++){$(_0x7504[14]+ row+ _0x7504[15]+ i)[_0x7504[12]](_0x7504[0])};postiion= []}
	}, timeOut);
}