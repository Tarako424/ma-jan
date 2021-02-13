

var tehai = [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0];
var tehaiall = [];
var tehaiAll2 = [];
var mentu1 = [];
var mentu2 = [];
var mentu3 = [];
var mentu4 = [];
var wait = [];
var tehai2 =[];
var up = [];
var waitUp = [];
let fu = 20;
let kokusikan = [];
let tumo = "no";

let hai = 
[{name: "一萬",no: 1,type: "yt",haino: 1,yakuhai:"no",color: "manzu"},
{name: "二萬",no: 2,type: "tt",haino: 2,yakuhai:"no",color: "manzu"},
{name: "三萬",no: 3,type: "tt",haino: 3,yakuhai:"no",color: "manzu"},
{name: "四萬",no: 4,type: "tt",haino: 4,yakuhai:"no",color: "manzu"},
{name: "五萬",no: 5,type: "tt",haino: 5,yakuhai:"no",color: "manzu"},
{name: "六萬",no: 6,type: "tt",haino: 6,yakuhai:"no",color: "manzu"},
{name: "七萬",no: 7,type: "tt",haino: 7,yakuhai:"no",color: "manzu"},
{name: "八萬",no: 8,type: "tt",haino: 8,yakuhai:"no",color: "manzu"},
{name: "九萬",no: 9,type: "yt",haino: 9,yakuhai:"no",color: "manzu"},
{name: "一索",no: 11,type: "yt",haino: 1,yakuhai:"no",color: "sozu"},
{name: "二索",no: 12,type: "tt",haino: 2,yakuhai:"no",color: "sozu"},
{name: "三索",no: 13,type: "tt",haino: 3,yakuhai:"no",color: "sozu"},
{name: "四索",no: 14,type: "tt",haino: 4,yakuhai:"no",color: "sozu"},
{name: "五索",no: 15,type: "tt",haino: 5,yakuhai:"no",color: "sozu"},
{name: "六索",no: 16,type: "tt",haino: 6,yakuhai:"no",color: "sozu"},
{name: "七索",no: 17,type: "tt",haino: 7,yakuhai:"no",color: "sozu"},
{name: "八索",no: 18,type: "tt",haino: 8,yakuhai:"no",color: "sozu"},
{name: "九索",no: 19,type: "yt",haino: 9,yakuhai:"no",color: "sozu"},
{name: "一筒",no: 21,type: "yt",haino: 1,yakuhai:"no",color: "pinzu"},
{name: "二筒",no: 22,type: "tt",haino: 2,yakuhai:"no",color: "pinzu"},
{name: "三筒",no: 23,type: "tt",haino: 3,yakuhai:"no",color: "pinzu"},
{name: "四筒",no: 24,type: "tt",haino: 4,yakuhai:"no",color: "pinzu"},
{name: "五筒",no: 25,type: "tt",haino: 5,yakuhai:"no",color: "pinzu"},
{name: "六筒",no: 26,type: "tt",haino: 6,yakuhai:"no",color: "pinzu"},
{name: "七筒",no: 27,type: "tt",haino: 7,yakuhai:"no",color: "pinzu"},
{name: "八筒",no: 28,type: "tt",haino: 8,yakuhai:"no",color: "pinzu"},
{name: "九筒",no: 29,type: "yt",haino: 9,yakuhai:"no",color: "pinzu"},
{name: "東",no: 30,type: "yt",haino: 11,yakuhai:"no",color: "zihai"},
{name: "南",no: 31,type: "yt",haino: 12,yakuhai:"no",color: "zihai"},
{name: "西",no: 32,type: "yt",haino: 13,yakuhai:"no",color: "zihai"},
{name: "北",no: 33,type: "yt",haino: 14,yakuhai:"no",color: "zihai"},
{name: "白",no: 34,type: "yt",haino: 15,yakuhai:"yes",color: "zihai"},
{name: "發",no: 35,type: "yt",haino: 16,yakuhai:"yes",color: "zihai"},
{name: "中",no: 36,type: "yt",haino: 17,yakuhai:"yes",color: "zihai"}]

$(".hai").click(function() {
  index = $(".hai").index(this);
  
});
$(".kokusiBtn").click(function() {
  sessionStorage.setItem("kokusi","1")
  sessionStorage.setItem("titoi","0")
  window.location.href = "./kokusi.html";
})
$(".titoiBtn").click(function() {
  sessionStorage.setItem("kokusi","0")
  sessionStorage.setItem("titoi","1")
  window.location.href = "./titoi.html";
})
$(".normalBtn").click(function() {
  sessionStorage.setItem("kokusi","0")
  sessionStorage.setItem("titoi","0")
  window.location.href = "./index.html";
})

let modalItems = {
  syupai1: [{id: 'syupai1'},{class: 'syu1',name:'順子'},{class: 'ti1',name:'チー'},{class: 'anko',name: '暗刻'},{class: 'minko',name: '明刻'},{class: 'ankan', name: '暗槓'},{class: 'minkan',name:'明槓'},{class: 'tanki dn',name: '単騎'},{class: 'syabo dn',name: 'シャボ'},{class: 'pen1 dn',name: 'ペンチャン'},{class: 'kantya1 dn',name: 'カンチャン'},{class: 'jt dn',name: '雀頭'}],
  syupai27: [{id: 'syupai27'},{class: 'syu27',name:'順子'},{class: 'ti27',name:'チー'},{class: 'anko',name: '暗刻'},{class: 'minko',name: '明刻'},{class: 'ankan', name: '暗槓'},{class: 'minkan',name:'明槓'},{class: 'tanki dn',name: '単騎'},{class: 'syabo dn',name: 'シャボ'},{class: 'rya27 dn',name: '両面'},{class: 'kantya27 dn',name: 'カンチャン'},{class: 'jt dn',name: '雀頭'}],
  syupai8: [{id: 'syupai8'},{class: 'syu8',name:'順子'},{class: 'ti8',name:'チー'},{class: 'anko',name: '暗刻'},{class: 'minko',name: '明刻'},{class: 'ankan', name: '暗槓'},{class: 'minkan',name:'明槓'},{class: 'tanki dn',name: '単騎'},{class: 'syabo dn',name: 'シャボ'},{class: 'rya8 dn',name: '両面'},{class: 'jt dn',name: '雀頭'}],
  syupai9: [{id: 'syupai9'},{class: 'syu9',name:'順子'},{class: 'ti9',name:'チー'},{class: 'anko',name: '暗刻'},{class: 'minko',name: '明刻'},{class: 'ankan', name: '暗槓'},{class: 'minkan',name:'明槓'},{class: 'tanki dn',name: '単騎'},{class: 'syabo dn',name: 'シャボ'},{class: 'pen9 dn',name: 'ペンチャン'},{class: 'kantya9 dn',name: 'カンチャン'},{class: 'jt dn',name: '雀頭'}],
  zihai: [{id: 'zihai'},{class: 'anko',name: '暗刻'},{class: 'minko',name: '明刻'},{class: 'ankan',name: '暗槓'},{class: 'minkan',name: '明槓'},{class: 'tanki dn',name: '単騎'},{class: 'syabo dn',name: 'シャボ'},{class: 'jt dn',name: '雀頭'}]
}

if(sessionStorage.getItem("kokusi") == "1") {
  $(".hai").click(function() {
    if($("#hai1").val().length == 0) {
      $("#hai1").val(hai[index].name);
      tehai[hai[index].no] += 1;
      tehaiall.push(hai[index]);
    } else if($("#hai2").val().length == 0) {
      $("#hai2").val(hai[index].name);
      tehai[hai[index].no] += 1;
      tehaiall.push(hai[index]);
    } else if($("#hai3").val().length == 0) {
      $("#hai3").val(hai[index].name);
      tehai[hai[index].no] += 1;
      tehaiall.push(hai[index]);
    } else if($("#hai4").val().length == 0) {
      $("#hai4").val(hai[index].name);
      tehai[hai[index].no] += 1;
      tehaiall.push(hai[index]);
    } else if($("#hai5").val().length == 0) {
      $("#hai5").val(hai[index].name);
      tehai[hai[index].no] += 1;
      tehaiall.push(hai[index]);
    } else if($("#hai6").val().length == 0) {
      $("#hai6").val(hai[index].name);
      tehai[hai[index].no] += 1;
      tehaiall.push(hai[index]);
    } else if($("#hai7").val().length == 0) {
      $("#hai7").val(hai[index].name);
      tehai[hai[index].no] += 1;
      tehaiall.push(hai[index]);
    } else if($("#hai8").val().length == 0) {
      $("#hai8").val(hai[index].name);
      tehai[hai[index].no] += 1;
      tehaiall.push(hai[index]);
    } else if($("#hai9").val().length == 0) {
      $("#hai9").val(hai[index].name);
      tehai[hai[index].no] += 1;
      tehaiall.push(hai[index]);
    } else if($("#hai10").val().length == 0) {
      $("#hai10").val(hai[index].name);
      tehai[hai[index].no] += 1;
      tehaiall.push(hai[index]);
    } else if($("#hai11").val().length == 0) {
      $("#hai11").val(hai[index].name);
      tehai[hai[index].no] += 1;
      tehaiall.push(hai[index]);
    } else if($("#hai12").val().length == 0) {
      $("#hai12").val(hai[index].name);
      tehai[hai[index].no] += 1;
      tehaiall.push(hai[index]);
    } else if($("#hai13").val().length == 0) {
      $("#hai13").val(hai[index].name);
      tehai[hai[index].no] += 1;
      tehaiall.push(hai[index]);
      kokusikan = tehai.slice();
    } else if($("#hai14").val().length == 0) {
      $("#hai14").val(hai[index].name);
      tehai[hai[index].no] += 1;
      tehaiall.push(hai[index]);
    }
  })
}
if(sessionStorage.getItem("titoi") == "1") {
  $(".hai").click(function() {
    if($("#toitu1").val().length == 0) {
      $("#toitu1").val(hai[index].name + hai[index].name);
      tehai[hai[index].no] += 2;
      tehaiall.push(hai[index]);
    } else if($("#toitu2").val().length == 0) {
      $("#toitu2").val(hai[index].name + hai[index].name);
      tehai[hai[index].no] += 2;
      tehaiall.push(hai[index]);
    } else if($("#toitu3").val().length == 0) {
      $("#toitu3").val(hai[index].name + hai[index].name);
      tehai[hai[index].no] += 2;
      tehaiall.push(hai[index]);
    } else if($("#toitu4").val().length == 0) {
      $("#toitu4").val(hai[index].name + hai[index].name);
      tehai[hai[index].no] += 2;
      tehaiall.push(hai[index]);
    } else if($("#toitu5").val().length == 0) {
      $("#toitu5").val(hai[index].name + hai[index].name);
      tehai[hai[index].no] += 2;
      tehaiall.push(hai[index]);
    } else if($("#toitu6").val().length == 0) {
      $("#toitu6").val(hai[index].name + hai[index].name);
      tehai[hai[index].no] += 2;
      tehaiall.push(hai[index]);
    } else if($("#toitu7").val().length == 0) {
      $("#toitu7").val(hai[index].name);
      $("#toitu8").val(hai[index].name);
      tehai[hai[index].no] += 2;
      tehaiall.push(hai[index] + hai[index]);
    }
  })
}

$(document).ready(() =>  {
  for (let item in modalItems) {
    let items = '';
    let modalId = '';
    for (let obj of modalItems[item]) {
      if(obj.name) {

        items += `
        <div data-dismiss="modal" class="modal-body ${obj.class}">
        <label>${obj.name}</label>
        </div>
        `
      }
      if(obj.id) {
        modalId += obj.id

      }
      
    }
    $('#modal-wrapper').append(`
    <div class="modal fade" id="${modalId}" tabiindex"-1" role="dialog" aria-labelledby="basicModal" aria-hidden="ture">
    <div class="modal-dialog">
    <div class="modal-content">
    ${items}
    </div>
    </div>
    </div>
    `);
  }
   ryanmen = "no";
   tumo = "no";
   countanko = 0;
   agari = false;
   countkantu = 0;
  $(".modal-body").click(function() {
    if($(this).hasClass("syu1")) {
    result = hai[index].name + hai[index+1].name + hai[index+2].name;
    tehai[hai[index].no] += 1;
    tehai[hai[index+1].no] += 1;
    tehai[hai[index+2].no] += 1;
    hai1 = hai[index]
    hai2 = hai[index+1]
    hai3 = hai[index+2]
    number = 1;
    // console.log($("#sparrow-head"))
    if($("#sparrow-head").val().length !== 0) {
      $(".pen9").attr('id','pen9');
      $(".kantya27").attr('id','kantya27');
      $(".kantya9").attr('id','kantya9');
      $(".rya27").attr('id','rya27');
      $(".rya8").attr('id','rya8');
    }
  } else if($(this).hasClass("syu27")) {
    result = hai[index].name + hai[index+1].name + hai[index+2].name;
    tehai[hai[index].no] += 1;
    tehai[hai[index+1].no] += 1;
    tehai[hai[index+2].no] += 1;
    hai1 = hai[index]
    hai2 = hai[index+1]
    hai3 = hai[index+2]
    number = 1;
    if($("#sparrow-head").val().length !== 0) {
      $(".pen1").attr('id','pen1');
      $(".pen9").attr('id','pen9');
      $(".kantya1").attr('id','kantya1');
      $(".kantya9").attr('id','kantya9');
      $(".rya8").attr('id','rya8');
    }
  } else if($(this).hasClass("syu8")) {
    result = hai[index-1].name + hai[index].name + hai[index+1].name;
    tehai[hai[index].no] += 1;
    tehai[hai[index+1].no] += 1;
    tehai[hai[index-1].no] += 1;
    hai1 = hai[index]
    hai2 = hai[index+1]
    hai3 = hai[index-1]
    number = 1;
    if($("#sparrow-head").val().length !== 0) {
      $(".pen1").attr('id','pen1');
      $(".pen9").attr('id','pen9');
      $(".kantya1").attr('id','kantya1');
      $(".kantya27").attr('id','kantya27');
      $(".kantya9").attr('id','kantya9');
      $(".rya27").attr('id','rya27');
    }
  } else if($(this).hasClass("syu9")) {
    result = hai[index-2].name + hai[index-1].name + hai[index].name;
    tehai[hai[index].no] += 1;
    tehai[hai[index-1].no] += 1;
    tehai[hai[index-2].no] += 1;
    hai1 = hai[index]
    hai2 = hai[index-1]
    hai3 = hai[index-2]
    number = 1;
    if($("#sparrow-head").val().length !== 0) {
      $(".pen1").attr('id','pen1');
      $(".kantya1").attr('id','kantya1');
      $(".kantya27").attr('id','kantya27');
      $(".rya8").attr('id','rya8');
      $(".rya27").attr('id','rya27');
    }
  } else if ($(this).hasClass("ti1")) {
    result = hai[index].name + hai[index+1].name + hai[index+2].name + "(鳴き)";
    tehai[hai[index].no] += 1;
    tehai[hai[index+1].no] += 1;
    tehai[hai[index+2].no] += 1;
    hai1 = hai[index]
    hai2 = hai[index+1]
    hai3 = hai[index+2]
    number = 1;
    if($("#sparrow-head").val().length !== 0) {
      $(".pen9").attr('id','pen9');
      $(".kantya27").attr('id','kantya27');
      $(".kantya9").attr('id','kantya9');
      $(".rya27").attr('id','rya27');
      $(".rya8").attr('id','rya8');
    }
    $("#mentu1").addClass("cry");
  } else if ($(this).hasClass("ti27")) {
    result = hai[index].name + hai[index+1].name + hai[index+2].name + "(鳴き)";
    tehai[hai[index].no] += 1;
    tehai[hai[index+1].no] += 1;
    tehai[hai[index+2].no] += 1;
    hai1 = hai[index]
    hai2 = hai[index+1]
    hai3 = hai[index+2]
    number = 1;
    if($("#sparrow-head").val().length !== 0) {
      $(".pen1").attr('id','pen1');
      $(".pen9").attr('id','pen9');
      $(".kantya1").attr('id','kantya1');
      $(".kantya9").attr('id','kantya9');
      $(".rya8").attr('id','rya8');
    }
      $("#mentu1").addClass("cry");
  } else if($(this).hasClass("ti8")) {
    result = hai[index-1].name + hai[index].name + hai[index+1].name + "(鳴き)";
    tehai[hai[index].no] += 1;
    tehai[hai[index+1].no] += 1;
    tehai[hai[index-1].no] += 1;
    hai1 = hai[index]
    hai2 = hai[index+1]
    hai3 = hai[index-1]
    number = 1;
    if($("#sparrow-head").val().length !== 0) {
      $(".pen1").attr('id','pen1');
      $(".pen9").attr('id','pen9');
      $(".kantya1").attr('id','kantya1');
      $(".kantya27").attr('id','kantya27');
      $(".kantya9").attr('id','kantya9');
      $(".rya27").attr('id','rya27');
    }
    $("#mentu1").addClass("cry");
  } else if($(this).hasClass("ti9")) {
    result = hai[index-2].name + hai[index-1].name + hai[index].name + "(鳴き)";
    tehai[hai[index].no] += 1;
    tehai[hai[index-1].no] += 1;
    tehai[hai[index-2].no] += 1;
    hai1 = hai[index]
    hai2 = hai[index-1]
    hai3 = hai[index-2]
    number = 1;
    if($("#sparrow-head").val().length !== 0) {
      $(".pen1").attr('id','pen1');
      $(".kantya1").attr('id','kantya1');
      $(".kantya27").attr('id','kantya27');
      $(".rya8").attr('id','rya8');
      $(".rya27").attr('id','rya27');
    }
    $("#mentu1").addClass("cry");
  } else if ($(this).hasClass("anko")) {
    result = hai[index].name + hai[index].name + hai[index].name;
    tehai[hai[index].no] += 3;
    hai1 = hai[index]
    number =  3;
    countanko += 1;
    if (hai[index].type == "yt") {
      fu += 8;
    } else {
      fu += 4;
    };
  } else if ($(this).hasClass("minko")) {
    result = hai[index].name + hai[index].name + hai[index].name + "(鳴き)";
    tehai[hai[index].no] += 3;
    hai1 = hai[index]
    number =  3;
    if (hai[index].type == "yt") {
      fu += 4;
    } else {
      fu += 2;
    };
    $("#mentu1").addClass("cry");
  } else if ($(this).hasClass("ankan")) {
    result = hai[index].name + hai[index].name + hai[index].name + hai[index].name;
    tehai[hai[index].no] += 4;
    hai1 = hai[index]
    number =  4;
    countkantu += 1;
    countanko += 1;
    if (hai[index].type == "yt") {
      fu += 32;
    } else {
      fu += 16;
    }
  } else if ($(this).hasClass("minkan")) {
    result = hai[index].name + hai[index].name + hai[index].name + hai[index].name + "(鳴き)";
    tehai[hai[index].no] += 4;
    hai1 = hai[index]
    number =  4;
    countkantu += 1;
    if (hai[index].type == "yt") {
      fu += 16;
    } else {
      fu += 8;
    };
    $("#mentu1").addClass("cry");
  } else if($(this).hasClass("pen1")) {
    result = hai[index].name + hai[index+1].name;
    tehai[hai[index].no] += 1;
    tehai[hai[index+1].no] += 1;
    hai1 = hai[index]
    hai2 = hai[index+1]
    number = 1;
    fu += 2;
  } else if($(this).hasClass("pen9")) {
    result = hai[index-1].name + hai[index].name;
    tehai[hai[index].no] += 1;
    tehai[hai[index-1].no] += 1;
    hai1 = hai[index]
    hai2 = hai[index-1]
    number = 1;
    fu += 2;
  } else if($(this).hasClass("kantya1")) {
    result = hai[index].name + hai[index+2].name;
    tehai[hai[index].no] += 1;
    tehai[hai[index+2].no] +=1;
    hai1 = hai[index]
    hai2 = hai[index+2]
    number = 1;
    fu += 2;
  } else if($(this).hasClass("kantya9")) {
    result = hai[index-2].name + hai[index].name;
    tehai[hai[index].no] += 1;
    tehai[hai[index-2].no] +=1;
    hai1 = hai[index]
    hai2 = hai[index-2]
    number = 1;
    fu += 2;
  } else if($(this).hasClass("rya27")) {
    result = hai[index].name + hai[index+1].name;
    tehai[hai[index].no] += 1;
    tehai[hai[index+1].no] += 1;
    hai1 = hai[index]
    hai2 = hai[index+1]
    number = 1;
    ryanmen = "yes";
  } else if($(this).hasClass("rya8")) {
    result = hai[index-1].name + hai[index].name;
    tehai[hai[index-1].no] += 1;
    tehai[hai[index].no] += 1;
    hai1 = hai[index]
    hai2 = hai[index-1]
    number = 1;
    ryanmen = "yes";
  } else if($(this).hasClass("syabo")) {
    result = hai[index].name + hai[index].name;
    tehai[hai[index].no] += 2;
    hai1 = hai[index]
    number =  2;
    // $("#up").val(hai[index].name);
    // up[hai[index].no] += 1;
  } else if($(this).hasClass("tanki")) {
    result = hai[index].name;
    tehai[hai[index].no] +=1;
    hai1 = hai[index]
    number =  1;
    fu += 2;
    // $("#up").val(hai[index].name);
    // up[hai[index].no] += 1;
  } else if($(this).hasClass("jt")) {
    result = hai[index].name + hai[index].name;
    tehai[hai[index].no] += 2;
    hai1 = hai[index]
    number =  2;
  } else if($(this).hasClass("kantya27")) {
    result = hai[index].name + hai[index+2].name
    tehai[hai[index].no] += 1;
    tehai[hai[index+2].no] += 1;
    hai1 = hai[index]
    hai2 = hai[index+2]
    number = 1;
    fu += 2;
  };
  
  if ($("#mentu1").val().length == 0  ) {
    $("#mentu1").val(result);
    for(i=0; i<number; i++) {
      mentu1.push(hai1);
      tehaiall.push(hai1);
    }
    if(typeof hai2 != 'undefined') {
      mentu1.push(hai2);
      tehaiall.push(hai2);
    }
    if(typeof hai3 != 'undefined') {
      mentu1.push(hai3);
      tehaiall.push(hai3);
    }
    hai2 = undefined;
    hai3 = undefined;
  } else if ($("#mentu2").val().length == 0) {
    $("#mentu2").val(result);
    for(i=0; i<number; i++) {
      mentu2.push(hai1);
      tehaiall.push(hai1);
    }
    if(typeof hai2 != 'undefined') {
      mentu2.push(hai2);
      tehaiall.push(hai2);
    }
    if(typeof hai3 != 'undefined') {
      mentu2.push(hai3);
      tehaiall.push(hai3);
    }
    hai2 = undefined;
    hai3 = undefined;
  } else if ($("#mentu3").val().length == 0) {
    $("#mentu3").val(result);
    for(i=0; i<number; i++) {
      mentu3.push(hai1);
      tehaiall.push(hai1);
    }
    if(typeof hai2 != 'undefined') {
      mentu3.push(hai2);
      tehaiall.push(hai2);
    }
    if(typeof hai3 != 'undefined') {
      mentu3.push(hai3);
      tehaiall.push(hai3);
    }
    hai2 = undefined;
    hai3 = undefined;
    $(".jt").removeClass('dn');
  } else if ($("#sparrow-head").val().length == 0) {
    $("#sparrow-head").val(result);
    for(i=0; i<number; i++) {
      mentu4.push(hai1);
      tehaiall.push(hai1);
    }
    if(typeof hai2 != 'undefined') {
      mentu4.push(hai2);
      tehaiall.push(hai2);
    }
    if(typeof hai3 != 'undefined') {
      mentu4.push(hai3);
      tehaiall.push(hai3);
    }
    hai2 = undefined;
    hai3 = undefined;
    $(".jt").addClass('dn');
    $(".syu1").addClass('dn');
    $(".syu27").addClass('dn');
    $(".syu8").addClass('dn');
    $(".syu9").addClass('dn');
    $(".ti1").addClass('dn');
    $(".ti27").addClass('dn');
    $(".ti8").addClass('dn');
    $(".ti9").addClass('dn');
    $(".anko").addClass('dn');
    $(".minko").addClass('dn');
    $(".ankan").addClass('dn');
    $(".minkan").addClass('dn');
    $(".tanki").removeClass('dn');
    $(".syabo").removeClass('dn');
    $(".pen1").removeClass('dn');
    $(".pen9").removeClass('dn');
    $(".kantya1").removeClass('dn');
    $(".kantya27").removeClass('dn');
    $(".kantya9").removeClass('dn');
    $(".rya27").removeClass('dn');
    $(".rya8").removeClass('dn');
  } else if ($("#wait").val().length == 0) {
    $("#wait").val(result);
    for(i=0; i<number; i++) {
      wait.push(hai1);
      tehaiall.push(hai1);
      waitUp.push(hai1);
    }
    if(typeof hai2 != 'undefined') {
      wait.push(hai2);
      tehaiall.push(hai2);
      waitUp.push(hai2);
    }
    hai2 = undefined;
    hai3 = undefined;
    $(".tanki").addClass('dn');
    $(".syabo").addClass('dn');
    $(".pen1").addClass('dn');
    $(".pen9").addClass('dn');
    $(".kantya17").addClass('dn');
    $(".kantya9").addClass('dn');
    $(".rya27").addClass('dn');
    $(".rya8").addClass('dn');
    $(".hai").attr("data-target","#whatUp");
  } else if ($("#up").val().length == 0) {
    $("#up").val(hai[index].name);
    tehai2 = tehai.slice();
    tehaiAll2 = tehaiall.slice();
    tehai[hai[index].no] += 1;
      up.push(hai[index]);
      tehaiall.push(hai[index]);
      waitUp.push(hai[index]); 
      waitUp.sort(function(a,b) {
        if(a.haino > b.haino) {
          return 1;
        } else {
          return -1;
        }
      })
    if ($(this).hasClass("tumo")) {
      fu += 2;
      tumo = "yes";
    };
  }
});

if($("#mentu1").hasClass("cry")) {
  console.log("cry");
} else {
  fu += 10;
}

$(".btn-dark").click(function() {
  location.reload();
})

})
// 役カウント
let yaku = 0;
let yakuman = 0;
var count_value = 0;
let dora = 0;
// ページが読み込まれたら実行
window.onload = function() {
  
  // オブジェクトと変数の準備
  var count_disp = document.getElementById("disp_count");  
  var count_up_btn = document.getElementById("btn_count_up");
  var reset_btn = document.getElementById("btn_reset");
  // カウントアップボタンクリック処理
  count_up_btn.onclick = function (){
    if(count_value < 24) {
      count_value += 1;
      yaku += 1;
      count_disp.innerHTML = count_value;
    } else {
      count_value = 24;
      count_disp.innerHTML = count_value;
    }
    dora = count_value;
    String(dora);
  };

  // カウントアップボタンのマウスアップ処理
  count_up_btn.onmouseup = function() {
       count_up_btn.style.backgroundColor = "";
  }
  // リセットボタンのクリック処理
  reset_btn.onclick = function (){
       count_value = 0; count_disp.innerHTML = count_value;
  }
  // リセットボタンのマウスアップ処理
  reset_btn.onmouseup = function() {
       reset_btn.style.backgroundColor = "";
  }
  
};
// 風牌
let bakaze = "-";
$(".bakaze").change(function() {
  bakaze = $(this).val();
});
let jikaze = "-";
$(".jikaze").change(function() {
  jikaze = $(this).val();
});

$(".modal-open").click(function () {
  $(this).blur();
  if($("#modal-overlay")[0]) return false;
  $("body").append('<div id="modal-overlay"></div>');
  $("#modal-overlay").fadeIn("slow");
  function centeringModalSyncer(zenra) {
    var w = $(window).width();
    var h = $(window).height();
    var cw = $(zenra).outerWidth();
    var ch = $(zenra).outerHeight();
    var pxleft = ((w - cw)/2);
    var pxtop = ((h - ch)/2);
    $("#modal-content").css({"left": pxleft + "px"});
    $("#modal-content").css({"top": pxtop + "px"});
  }
  let total = tehai.reduce(function(sum,element) {
    return sum + element;
  },0);
  let counthai = false;
  for (let i = 0; i < 37; i++) {
    if (tehai[i] >= 5) {
      counthai = true;
      break;
    }
  }
  if ($(".up").val().length == 0) {
    agari = true;
  }
  // あがりかどうか
  if (total < 14 || counthai || agari) {
    centeringModalSyncer("#modal-content");
    $("#modal-content").append('<p>あがってません</p>');
    $("#modal-content").fadeIn("slow");
  } else if(sessionStorage.getItem("kokusi") == "1"){
    // 国士無双
    let kokusimusou = false;
    let kokusimusou13menmati = true;
      if(tehai[1] !== 0 && tehai[9] !== 0 && tehai[11] !== 0 && tehai[19] !== 0 && tehai[21] !== 0 && tehai[29] !== 0 && tehai[31] !== 0 && tehai[32] !== 0 && tehai[33] !== 0 && tehai[34] !== 0 && tehai[35] !== 0 && tehai[36] !== 0 && tehai[37] !== 0) {
        for(let i = 0; i < kokusikan.length; i++) {
          if(kokusikan[i] == 2) {
            kokusimusou13menmati = false;
          } 
        }
        kokusimusou = true;
        if(kokusimusou13menmati) {
          $("#modal-content").append(`
          <P>国士無双13面待ち</P>
          <P>ダブル役満</P>
          <P>親</P>
          <P>96000</P>
          <P>(32000)</P>
          <P>子</P>
          <P>64000</P>
          <P>(32000・16000)</P>
          `);
          yakuman += 2;
        } else if(kokusimusou) {
          $("#modal-content").append(`
          <P>国士無双</P>
          <P>役満</P>
          <P>親</P>
          <P>48000</P>
          <P>(16000)</P>
          <P>子</P>
          <P>32000</P>
          <P>(16000・8000)</P>
          `);
          yakuman += 1;
        } 
      } else {
        $("#modal-content").append('<P>あがってません</P>')
      }
      $("#modal-content").fadeIn("slow");
    centeringModalSyncer("#modal-content");
  } else {

    // 字一色
    let a = true;
    for(let i=0; i<30; i++){
      if(tehai[i] != 0){
        a = false;
        break;
      }
    }
    if(a){
      $("#modal-content").append(`
      <P>字一色</P>
      `);
      yakuman += 1;
    }
    
    // 大三元
    // 小三元
    let daisangen = true;
    let syousangen = true;
    for(let i=35; i<37; i++) {
      if(tehai[i] < 3) {
        daisangen = false;
        break;
      }
    }
    for(let i = 35; i < 37; i++) {
      if(tehai[i] == 0) {
        syousangen = false;
        break;
      }
    }
    if(daisangen) {
      $("#modal-content").append('<P>大三元</P>');
      yakuman += 1;
    } else if (sessionStorage.getItem("titoi") == "0" && sessionStorage.getItem("kokusi") == "0" && syousangen) {
      $("#modal-content").append('<P>小三元</P>');
      yaku += 2;
    }

    // 清老頭
    let tinroto = true;
    for(i=0; i < tehaiall.length; i++) {
      if(tehaiall[i]["haino"] == 2 || tehaiall[i]["haino"] == 3 || tehaiall[i]["haino"] == 4 || tehaiall[i]["haino"] == 5 || tehaiall[i]["haino"] == 6 || tehaiall[i]["haino"] == 7 || tehaiall[i]["haino"] == 8 || tehaiall[i]["color"] == "zihai") {
        tinroto = false;
        break;
      }
    }
    if(tinroto) {
      $("#modal-content").append('<P>清老頭</P>');
      yakuman += 1;
    }
    
    // 四槓子
    if(countkantu == 4) {
      $("#modal-content").append('<P>四槓子</P>');
      yakuman += 1;
    }
    
    // 四暗刻
    if(countanko == 3 && number == 2 && tumo == "yes") {
      $("#modal-content").append('<P>四暗刻</P>')
      yakuman += 1;
    }

    // 緑一色
    let ryuiso = true;
    for (i = 0; i < 10; i++) {
      if(tehai[i] >= 1) {
        ryuiso = false;
        break;
      }
    }
    for(i = 19; i < 35; i++) {
      if (tehai[i] >= 1) {
        ryuiso = false;
        break;
      }
    }
    for(i = 0; i < tehaiall.length; i++) {
      if(tehaiall[i]["name"] == "一索" || tehaiall[i]["name"] == "五索" || tehaiall[i]["name"] == "七索" || tehaiall[i]["name"] == "中" || tehaiall[i]["name"] == "白") {
        ryuiso = false;
        break;
      }
    }
    if(ryuiso) {
      $("#modal-content").append('<P>緑一色</P>');
      yakuman += 1;
    }

    // 純正九連宝燈
    
    let manjuntyu = true;
    let sojuntyu = true;
    let pinjuntyu = true;
    for  (let i = 2; i < 8; i++) {
      if(tehai2[i] !== 1) {
        manjuntyu = false;
        break;
      }
    }
    for (let i = 12; i < 18; i++) {
      if(tehai2[i] !== 1) {
        sojuntyu = false;
        break;
      }
    }
    for (let i = 22; i < 28; i++) {
      if(tehai2[i] !== 1) {
        pinjuntyu = false;
        break;
      }
    }
    let mantyu = true;
    let sotyu = true;
    let pintyu = true;
    for(let i = 2; i < 8; i++) {
      if(tehai[i] == 0) {
        mantyu = false;
        break;
      }
    }
    for(let i = 12; i < 18; i++) {
      if(tehai[i] == 0) {
        sotyu = false;
        break;
      }
    }
    for(let i = 22; i < 28; i++) {
      if(tehai[i] == 0) {
        pintyu = false;
        break;
      }
    }
    console.log(mantyu);
    console.log(sotyu);
    console.log(pintyu);
    if (tehai2[1] == 3 && manjuntyu && tehai2[9] == 3 || tehai2[11] == 3 && sojuntyu && tehai2[19] == 3 || tehai2[21] == 3 && pinjuntyu && tehai2[29] == 3) {
      $("#modal-content").append('<P>純正九連宝燈</P>');
      yakuman += 2;
    } else if (mantyu && tehai[1] >= 3 && tehai[9] >= 3 || sotyu && tehai[11] >= 3 && tehai[19] >= 3 || pintyu && tehai[21] >= 3 && tehai[29] >= 3) {
      $("#modal-content").append('<P>九連宝燈</P>');
      yakuman += 1;
    }



    // 四暗刻単騎
    if(countanko == 4) {
      $("#modal-content").append('<P>四暗刻単騎</P>')
      yakuman += 2;
    }

    // 大四喜
    // 小四喜
    let daisusi = true;
    let syoususi = true;
    for (let i=31; i<34; i++) {
      if(tehai[i] < 3) {
        daisusi = false;
        break;
      }
    }
    for(let i = 31; i<34; i++) {
      if(tehai[i] == 0) {
        syoususi = false;
        break;
      }
    }
    if(daisusi) {
      $("#modal-content").append('<P>大四喜</P>');
      yakuman += 2;
    } else if(syoususi) {
      $("#modal-content").append('<P>小四喜</P>');
      yakuman += 1;
    }


    if(yakuman == 0) {

      if($('[name="check1"]').prop('checked')) {
        yaku += 1;
        $("#modal-content").append('<P>立直</P>');
      }
      if($('[name="check2"]').prop('checked')) {
        yaku += 1;
        $("#modal-content").append('<P>一発</P>')
      }
      if($('[name="check3"]').prop('checked')) {
        yaku += 1;
        $("#mdoal-content").append('<P>面前清自摸和</P>')
      }
      if($('[name="check4"]').prop('checked')) {
        yaku += 1;
        $("#modal-content").append('<P>海底</P>')
      }
      if($('[name="check5"]').prop('checked')) {
        yaku += 1;
        $("#modal-content").append('<P>嶺上開花</P>')
      }
      if($('[name="check6"]').prop('checked')) {
        yaku += 1;
        $("#modal-content").append('<P>槍槓</P>')
      }
      if($('[name="check7"]').prop('checked')) {
        yaku += 2;
        $("#modal-content").append('<P>ダブル立直</P>')
      }

      // 平和
      let pinfu = true;
      if(mentu1[0] !== mentu1[1] && mentu2[0] !== mentu2[1] && mentu3[0] !== mentu3[1] && ryanmen == "yes" && !$("#mentu1").hasClass("cry") && mentu4[0].yakuhai == "no") {
        for(i = 0; i < mentu4.length; i++) {
          if(mentu4[i]["name"] == bakaze || mentu4[i]["name"] == jikaze) {
            pinfu = false;
            break;
          };
        };
        if(pinfu) {
          $("#modal-content").append('<P>平和</P>');
        yaku += 1;
        if(tumo == "yes") {
          fu = 20;
        } else {
          fu == 30;
        }
        }
      };
      
      // 面前清自摸和
      if(tumo == "yes"  && !$("#mentu1").hasClass("cry")) {
        $("#modal-content").append('<P>面前自摸</P>');
        yaku += 1;
      }
      
      // タンヤオ
      let tannyao = true;
      for(let i=0; i<tehaiall.length; i++) {
        if(tehaiall[i]['type'] == "yt") {
          tannyao = false;
          break;
      }
    }
    if(tannyao) {
      $("#modal-content").append('<P>タンヤオ</P>');
      yaku += 1;
    }
    
// 二盃口
let ryanpeko = true;
for(let i=0; i<37; i++) {
  if(tehai[i] !== 2 && tehai[i] !== 0) {
      ryanpeko = false;
      break;
  }
}
if(ryanpeko) {
  if(mentu1[0] !== mentu1[1] && mentu2[0] !== mentu2[1] && mentu3[0] !== mentu3[1] && mentu4[0] !== mentu4[1] && !$("#mentu1").hasClass("cry") || mentu1[0] !== mentu1[1] && mentu2[0] !== mentu2[1] && mentu3[0] !== mentu3[1] && number !== 2 && !$("#mentu1").hasClass("cry")) {
      $("#modal-content").append("<P>二盃口</P>");
      yaku += 3;
    }
    // 一盃口
  } else if (mentu1[0] !== mentu1[1] && mentu1[0] == mentu2[0] && mentu1[1] == mentu2[1] && mentu1[2] == mentu2[2] || mentu1[0] !== mentu1[1] && mentu1[0] == mentu3[0] && mentu1[1] == mentu3[1] && mentu1[2] == mentu3[2] || mentu1[0] !== mentu1[1] && mentu1[0] == mentu4[0] && mentu1[1] == mentu4[1] && mentu1[2] == mentu4[2] || mentu1[0] !== mentu1[1] && mentu1[0] == waitUp[0] && mentu1[1] == waitUp[1] && mentu1[2] == waitUp[2] || mentu2[0] !== mentu2[1] && mentu2[0] == mentu3[0] && mentu2[1] == mentu3[1] && mentu2[2] == mentu3[2] || mentu2[0] !== mentu2[1] && mentu2[0] == mentu4[0] && mentu2[1] == mentu4[1] && mentu2[2] == mentu4[2] || mentu2[0] !== mentu2[1] && mentu2[0] == waitUp[0] && mentu2[1] == waitUp[1] && mentu2[2] == waitUp[2] || mentu3[0] !== mentu3[1] && mentu4[0] == mentu3[0] && mentu4[1] == mentu3[1] && mentu4[2] == mentu3[2] || mentu3[0] !== mentu3[1] && mentu3[0] == waitUp[0] && mentu3[1] == waitUp[1] && mentu3[2] == waitUp[2] ) {
  if(!$("#mentu1").hasClass("cry")) {
    $("#modal-content").append('<P>一盃口</P>');
    yaku += 1;
  }
}



    // 役牌
    let countjikaze = 0;
    let countbakaze = 0;
    let counthaku = 0;
    let counthatu = 0;
    let counttyun = 0;
    for(i=0; i<tehaiall.length; i++) {
      if(tehaiall[i]['name'] == jikaze) {
        countjikaze += 1;
      }
      if(tehaiall[i]['name'] == bakaze) {
        countbakaze += 1;
      }
      if(tehaiall[i]['name'] == "白") {
        counthaku += 1;
      }
      if(tehaiall[i]['name'] == "發") {
        counthatu += 1;
      }
      if(tehaiall[i]['name'] == "中") {
        counttyun += 1;
      }
    }

    // 自風牌
    if(countjikaze >= 3) {
      $("#modal-content").append('<P>自風牌</P>');
      yaku += 1;
    }
    
    // 場風牌
    if(countbakaze >= 3) {
      $("#modal-content").append('<P>場風牌</P>');
      yaku += 1;
    }
    
    // 三元牌
    if(counthaku >= 3) {
      $("#modal-content").append("<P>白</P>");
      yaku += 1;
    }
    if(counthatu >= 3) {
      $("#modal-content").append("<P>發</P>");
      yaku += 1;
    }
    if(counttyun >= 3) {
      $("#modal-content").append("<P>中</P>");
      yaku += 1;
    }
    // トイトイ
    if (mentu1[1] == mentu1[2] && mentu2[1] == mentu2[2] && mentu3[1] == mentu3[2] && mentu4[1] == mentu4[2] && waitUp[0] == waitUp[1] && sessionStorage.getItem("titoi") == "0") {
          $("#modal-content").append("<P>対々和</P>");
          yaku += 2;
        }

        // 三暗刻
    if(countanko == 3 || countanko == 2 && number == 2 && tumo == "yes") {
      $("#modal-content").append("<P>三暗刻</P>");
      yaku += 2;
    }

      // 三槓子
    if(countkantu == 3) {
      $("#modal-content").append("<P>三槓子</P>");
      yaku += 2;
    }

    if($('[name="check5"]').prop('checked') && count_value >= 12) {
      $("#modal-content").append('<P>嶺上開花ドラ１２ゴリラ役満</P>')
    }

    // 混老頭
    let honroto = true;
    for(i = 0; i < tehaiall.length; i++) {
      if(tehaiall[i]["haino"] == 2 || tehaiall[i]["haino"] == 3 || tehaiall[i]["haino"] == 4 || tehaiall[i]["haino"] == 5 || tehaiall[i]["haino"] == 6 || tehaiall[i]["haino"] == 7 || tehaiall[i]["haino"] == 8 ) {
        honroto = false;
      }
    }
    if(honroto) {
      $("#modal-content").append('<P>混老頭</P>');
      yaku += 2;
    }

    // 清一色
    // 混一色
    let mantin = true;
    let sotin = true;
    let pintin = true;
    let manhon = true;
    let sohon = true;
    let pinhon = true;
    for(let i = 0; i < 9; i++) {
      if(tehai[i] !== 0) {
        sohon = false;
        pinhon = false;
        sotin = false;
        pintin = false;
        break;
      }
    }
    for(let i = 11; i < 19; i++) {
      if(tehai[i] !== 0) {
        manhon = false;
        pinhon = false;
        mantin = false;
        pintin = false;
        break;
      }
    }
    for(let i = 21; i < 29; i++) {
      if(tehai[i] !== 0) {
        manhon = false;
        sohon = false;
        mantin = false;
        sotin = false;
        break;
      }
    }
    for(let i = 31; i < 37; i++) {
      if(tehai[i] !== 0) {
        mantin = false;
        sotin = false;
        pintin = false;
        break;
      }
    }
   
    if(mantin || sotin || pintin) {
      $("#modal-content").append('<P>清一色</P>');
      if($("#mentu1").hasClass("cry")) {
        yaku += 5;
      } else {
        yaku += 6;
      }
    } else if (manhon || sohon || pinhon) {
      $("#modal-content").append('<P>混一色</P>');
      if($("#mentu1").hasClass("cry")) {
        yaku += 2;
      } else {
        yaku += 3;
      }
    }

    // 純全帯么九
    // 混全帯么九
    let m1Juntya = false;
    let m2Juntya = false;
    let m3Juntya = false;
    let m4Juntya = false;
    let waitUpJuntya = false;
    let m1Tya = false;
    let m2Tya = false;
    let m3Tya = false;
    let m4Tya = false;
    let waitUpTya = false;
    
    for (let i = 0; i < mentu1.length; i++) {
      if(mentu1[i]["haino"] == 1 || mentu1[i]["haino"] == 9) {
        m1Juntya = true;
        m1Tya = true;
        break;
      } else if (mentu1[i]["color"] == "zihai") {
        m1Tya = true;
        break;
      }
    }
    for (let i = 0; i < mentu2.length; i++) {
      if(mentu2[i]["haino"] == 1 || mentu2[i]["haino"] == 9) {
        m2Juntya = true;
        m2Tya = true;
        break;
      } else if (mentu2[i]["color"] == "zihai") {
        m2Tya = true;
        break;
      }
    }
    for (let i = 0; i < mentu3.length; i++) {
      if(mentu3[i]["haino"] == 1 || mentu3[i]["haino"] == 9) {
        m3Juntya = true;
        m3Tya = true;
        break;
      } else if (mentu3[i]["color"] == "zihai") {
        m3Tya = true;
        break;
      }
    }
    for (let i = 0; i < mentu4.length; i++) {
      if(mentu4[i]["haino"] == 1 || mentu4[i]["haino"] == 9) {
        m4Juntya = true;
        m4Tya = true;
        break;
      } else if (mentu4[i]["color"] == "zihai") {
        m4Tya = true;
        break;
      }
    }
    for (let i = 0; i < waitUp.length; i++) {
      if(waitUp[i]["haino"] == 1 || waitUp[i]["haino"] == 9) {
        waitUpJuntya = true;
        waitUpTya = true;
        break;
      } else if(waitUp[i]["color"] == "zihai") {
        waitUpTya = true;
        break;
      }
    }
    if(m1Juntya && m2Juntya && m3Juntya && m4Juntya && waitUpJuntya) {
      $("#modal-content").append('<P>純全帯么九</P>')
      if($("#mentu1").hasClass("cry")) {
        yaku += 2;
      } else {
        yaku += 3;
      }
    } else if(m1Tya && m2Tya && m3Tya && m4Tya && waitUpTya) {
      $("#modal-content").append('<P>混全帯么九</P>')
      if($("#mentu1").hasClass("cry")) {
        yaku += 1;
      } else {
        yaku += 2;
      }
    }

    // 三色同順
    if(mentu1[0] !== mentu1[1] && mentu2[0] !== mentu2[1] && mentu3[0] !== mentu3[1] && mentu1[0]["haino"] == mentu2[0]["haino"] && mentu1[0]["haino"] == mentu3[0]["haino"] && mentu1[0]["color"] !== mentu2[0]["color"] && mentu2[0]["color"] !== mentu3[0]["color"] && mentu1[0]["color"] !== mentu3[0]["color"] || mentu1[0] !== mentu1[1] && mentu2[0] !== mentu2[1] && mentu4[0] !== mentu4[1] && mentu1[0]["haino"] == mentu2[0]["haino"] && mentu1[0]["haino"] == mentu4[0]["haino"] && mentu1[0]["color"] !== mentu2[0]["color"] && mentu1[0]["color"] !== mentu4[0]["color"] && mentu2[0]["color"] == mentu4[0]["color"] || mentu1[0] !== mentu1[1] && mentu2[0] !== mentu2[1] && waitUp[0] !== waitUp[1] && mentu1[0]["haino"] == mentu2[0]["haino"] && mentu1[0]["haino"] == waitUp[0]["haino"] && mentu1[0]["color"] !== mentu2[0]["color"] && mentu1[0]["color"] !== waitUp[0]["color"] && mentu2[0]["color"] && waitUp[0]["color"] || mentu1[0] !== mentu1[1] && mentu3[0] !== mentu3[1] && mentu4[0] !== mentu4[1] && mentu1[0]["haino"] == mentu3[0]["haino"] && mentu1[0]["haino"] == mentu4[0]["haino"] && mentu1[0]["color"] !== mentu3[0]["color"] && mentu1[0]["color"] !== mentu4[0]["color"] && mentu3[0]["color"] !== mentu4[0]["color"] || mentu1[0] !== mentu1[1] && mentu3[0] !== mentu3[1] && waitUp[0] !== waitUp[1] && mentu1[0]["haino"] == mentu3[0]["haino"] && mentu1[0]["haino"] == waitUp[0]["haino"] && mentu1[0]["color"] !== mentu3[0]["color"] && mentu1[0]["color"] !== waitUp[0]["color"] && mentu3[0]["color"] !== waitUp[0]["color"] || mentu1[0] !== mentu1[1] && mentu4[0] !== mentu4[1] && waitUp[0] !== waitUp[1] && mentu1[0]["haino"] == mentu4[0]["haino"] && mentu1[0]["haino"] == waitUp[0]["haino"] && mentu1[0]["color"] !== mentu4[0]["color"] && mentu1[0]["color"] !== waitUp[0]["color"] && mentu4[0]["color"] !== waitUp[0]["color"] || mentu2[0]  !== mentu2[1] && mentu3[0] !== mentu3[1] && mentu4[0] !== mentu4[1] && mentu2[0]["haino"] == mentu3[0]["haino"] && mentu2[0]["haino"] == mentu4[0]["haino"] && mentu2[0]["color"] !== mentu3[0]["color"] && mentu2[0]["color"] !== mentu4[0]["color"] && mentu3[0]["color"] !== mentu4[0]["color"] || mentu2[0] !== mentu2[1] && mentu3[0] !== mentu3[1] && waitUp[0] !== waitUp[1] && mentu2[0]["haino"] == mentu3[0]["haino"] && mentu2[0]["haino"] == waitUp[0]["haino"] && mentu2[0]["color"] !== mentu3[0]["color"] && mentu2[0]["color"] !== waitUp[0]["color"] && mentu3[0]["color"] !== waitUp[0]["color"] || mentu2[0] !== mentu2[1] && mentu4[0] !== mentu4[1] && waitUp[0] !== waitUp[1] && mentu2[0]["haino"] == mentu4[0]["haino"] && mentu2[0]["haino"] == waitUp[0]["haino"] && mentu2[0]["color"] !== mentu4[0]["color"] && mentu2[0]["color"] !== waitUp[0]["color"] && mentu4[0]["color"] !== waitUp[0]["color"] || mentu3[0] !== mentu3[1] && mentu4[0] !== mentu4[1] && waitUp[0] !== waitUp[1] && mentu3[0]["haino"] == mentu4[0]["haino"] && mentu3[0]["haino"] == waitUp[0]["haino"] && mentu3[0]["color"] !== mentu4[0]["color"] && mentu3[0]["color"] !== waitUp[0]["color"] && mentu4[0]["color"] !== waitUp[0]["color"]) {
      $("#modal-content").append('<P>三色同順</P>')
      if($("#mentu1").hasClass("cry")) {
        yaku += 1;
      } else {
        yaku += 2;
      }
    }
    //  三色同刻
    if(mentu1.length > 0 && mentu1[0].hasOwnProperty("haino")) {
      if(mentu1[0] == mentu1[1] && mentu2[0] == mentu2[1] && mentu3[0] == mentu3[1] && mentu1[0]["haino"] == mentu2[0]["haino"] && mentu1[0]["haino"] == mentu3[0]["haino"] && mentu1[0]["color"] !== mentu2[0]["color"] && mentu2[0]["color"] !== mentu3[0]["color"] && mentu1[0]["color"] !== mentu3[0]["color"] || mentu1[0] == mentu1[1] &&  mentu2[0] == mentu2[1] &&  mentu4[0] == mentu4[1] && mentu1[0]["haino"] == mentu2[0]["haino"] && mentu1[0]["haino"] == mentu4[0]["haino"] && mentu1[0]["color"] !== mentu2[0]["color"] && mentu1[0]["color"] !== mentu4[0]["color"] && mentu2[0]["color"] == mentu4[0]["color"] || mentu1[0] == mentu1[1] &&  mentu2[0] == mentu2[1] &&  waitUp[0] == waitUp[1] && mentu1[0]["haino"] == mentu2[0]["haino"] && mentu1[0]["haino"] == waitUp[0]["haino"] && mentu1[0]["color"] !== mentu2[0]["color"] && mentu1[0]["color"] !== waitUp[0]["color"] && mentu2[0]["color"] && waitUp[0]["color"] || mentu1[0] == mentu1[1] &&  mentu3[0] == mentu3[1] &&  mentu4[0] == mentu4[1] && mentu1[0]["haino"] == mentu3[0]["haino"] && mentu1[0]["haino"] == mentu4[0]["haino"] && mentu1[0]["color"] !== mentu3[0]["color"] && mentu1[0]["color"] !== mentu4[0]["color"] && mentu3[0]["color"] !== mentu4[0]["color"] || mentu1[0] == mentu1[1] &&  mentu3[0] == mentu3[1] &&  waitUp[0] == waitUp[1] && mentu1[0]["haino"] == mentu3[0]["haino"] && mentu1[0]["haino"] == waitUp[0]["haino"] && mentu1[0]["color"] !== mentu3[0]["color"] && mentu1[0]["color"] !== waitUp[0]["color"] && mentu3[0]["color"] !== waitUp[0]["color"] || mentu1[0] == mentu1[1] &&  mentu4[0] == mentu4[1] &&  waitUp[0] == waitUp[1] && mentu1[0]["haino"] == mentu4[0]["haino"] && mentu1[0]["haino"] == waitUp[0]["haino"] && mentu1[0]["color"] !== mentu4[0]["color"] && mentu1[0]["color"] !== waitUp[0]["color"] && mentu4[0]["color"] !== waitUp[0]["color"] || mentu2[0]  == mentu2[1] &&  mentu3[0] == mentu3[1] &&  mentu4[0] == mentu4[1] && mentu2[0]["haino"] == mentu3[0]["haino"] && mentu2[0]["haino"] == mentu4[0]["haino"] && mentu2[0]["color"] !== mentu3[0]["color"] && mentu2[0]["color"] !== mentu4[0]["color"] && mentu3[0]["color"] !== mentu4[0]["color"] || mentu2[0] == mentu2[1] &&  mentu3[0] == mentu3[1] &&  waitUp[0] == waitUp[1] && mentu2[0]["haino"] == mentu3[0]["haino"] && mentu2[0]["haino"] == waitUp[0]["haino"] && mentu2[0]["color"] !== mentu3[0]["color"] && mentu2[0]["color"] !== waitUp[0]["color"] && mentu3[0]["color"] !== waitUp[0]["color"] || mentu2[0] == mentu2[1] &&  mentu4[0] == mentu4[1] &&  waitUp[0] == waitUp[1] && mentu2[0]["haino"] == mentu4[0]["haino"] && mentu2[0]["haino"] == waitUp[0]["haino"] && mentu2[0]["color"] !== mentu4[0]["color"] && mentu2[0]["color"] !== waitUp[0]["color"] && mentu4[0]["color"] !== waitUp[0]["color"] || mentu3[0] == mentu3[1] &&  mentu4[0] == mentu4[1] &&  waitUp[0] == waitUp[1] && mentu3[0]["haino"] == mentu4[0]["haino"] && mentu3[0]["haino"] == waitUp[0]["haino"] && mentu3[0]["color"] !== mentu4[0]["color"] && mentu3[0]["color"] !== waitUp[0]["color"] && mentu4[0]["color"] !== waitUp[0]["color"]) {
       $("#modal-content").append('<P>三色同刻</P>')
       yaku += 2;
     }
    }

    // 七対子
    if(sessionStorage.getItem("titoi") == "1") {
      $("#modal-content").append('<P>七対子</P>');
      yaku += 2;
    }

    // 一気通貫
    
    let ittuu = false;
    if(mentu1[0] !== mentu1[1] && mentu1[0]["name"] == "一萬" || mentu2[0] !== mentu2[1] && mentu2[0]["name"] == "一萬" || mentu3[0] !== mentu3[1] && mentu3[0]["name"] == "一萬" || waitUp[0] !== waitUp[1] && waitUp[0]["name"] == "一萬") {
      if(mentu1[0] !== mentu1[1] && mentu1[0]["name"] == "四萬" || mentu2[0] !== mentu2[1] && mentu2[0]["name"] == "四萬" || mentu3[0] !== mentu3[1] && mentu3[0]["name"] == "四萬" || waitUp[0] !== waitUp[1] && waitUp[0]["name"] == "四萬") {
        if(mentu1[0] !== mentu1[1] && mentu1[0]["name"] == "七萬" || mentu2[0] !== mentu2[1] && mentu2[0]["name"] == "七萬" || mentu3[0] !== mentu3[1] && mentu3[0]["name"] == "七萬" || waitUp[0] !== waitUp[1] && waitUp[0]["name"] == "七萬") {
          ittuu = true;
        }
      }
    }
    if(mentu1[0] !== mentu1[1] && mentu1[0]["name"] == "一索" || mentu2[0] !== mentu2[1] && mentu2[0]["name"] == "一索" || mentu3[0] !== mentu3[1] && mentu3[0]["name"] == "一索" || waitUp[0] !== waitUp[1] && waitUp[0]["name"] == "一索") {
      if(mentu1[0] !== mentu1[1] && mentu1[0]["name"] == "四索" || mentu2[0] !== mentu2[1] && mentu2[0]["name"] == "四索" || mentu3[0] !== mentu3[1] && mentu3[0]["name"] == "四索" || waitUp[0] !== waitUp[1] && waitUp[0]["name"] == "四索") {
        if(mentu1[0] !== mentu1[1] && mentu1[0]["name"] == "七索" || mentu2[0] !== mentu2[1] && mentu2[0]["name"] == "七索" || mentu3[0] !== mentu3[1] && mentu3[0]["name"] == "七索" || waitUp[0] !== waitUp[1] && waitUp[0]["name"] == "七索") {
          ittuu = true;
        }
      }
    }
    if(mentu1[0] !== mentu1[1] && mentu1[0]["name"] == "一筒" || mentu2[0] !== mentu2[1] && mentu2[0]["name"] == "一筒" || mentu3[0] !== mentu3[1] && mentu3[0]["name"] == "一筒" || waitUp[0] !== waitUp[1] && waitUp[0]["name"] == "一筒") {
      if(mentu1[0] !== mentu1[1] && mentu1[0]["name"] == "四筒" || mentu2[0] !== mentu2[1] && mentu2[0]["name"] == "四筒" || mentu3[0] !== mentu3[1] && mentu3[0]["name"] == "四筒" || waitUp[0] !== waitUp[1] && waitUp[0]["name"] == "四筒") {
        if(mentu1[0] !== mentu1[1] && mentu1[0]["name"] == "七筒" || mentu2[0] !== mentu2[1] && mentu2[0]["name"] == "七筒" || mentu3[0] !== mentu3[1] && mentu3[0]["name"] == "七筒" || waitUp[0] !== waitUp[1] && waitUp[0]["name"] == "七筒") {
          ittuu = true;
        }
      }
    }
    if(ittuu) {
      $("#modal-content").append('<P>一気通貫</P>');
      if($("mentu1").hasClass("cry")) {
        yaku += 1;
      } else {
        yaku += 2;
      }
    }

    if(count_value !== 0) {
      $("#modal-content").append(`<P>ドラ${dora}</P>`)
    }

  }

  // 点数計算
  fu = Math.ceil(fu/10)*10;
  if(yakuman == 6) {
    $("#modal-content").append(`
    <P>六倍役満</P>
    <P>親</P>
    <P>288000</P>
    <P>(96000)</P>
    <P>子</P>
    <P>192000</P>
    <P>(96000・48000)</P>
    `)
  } else if(yakuman == 5) {
    $("#modal-content").append(`
    <P>5倍役満</P>
    <P>親</P>
    <P>240000</P>
    <P>(80000)</P>
    <P>子</P>
    <P>160000</P>
    <P>(80000・40000)</P>
    `)
  } else if (yakuman == 4) {
    $("#modal-content").append(`
    <P>４倍役満</P>
    <P>親</P>
    <P>192000</P>
    <P>(64000)</P>
    <P>子</P>
    <P>128000</P>
    <P>(64000・32000)</P>
    `)
  } else if (yakuman == 3) {
    $("#modal-content").append(`
    <P>トリプル役満</P>
    <P>親</P>
    <P>144000</P>
    <P>(48000)</P>
    <P>子</P>
    <P>96000</P>
    <P>(48000・24000)</P>
    `)
  } else if (yakuman == 2) {
    $("#modal-content").append(`
    <P>ダブル役満</P>
    <P>親</P>
    <P>96000</P>
    <P>(32000)</P>
    <P>子</P>
    <P>64000</P>
    <P>(32000・16000)</P>
    `)
  } else if(yakuman == 1) {
    $("#modal-content").append(`
    <P>役満</P>
    <P>親</P>
    <P>48000</P>
    <P>(16000)</P>
    <P>子</P>
    <P>32000</P>
    <P>(16000・8000)</P>
    `)
  } else if(yaku >= 13) {
    $("#modal-content").append(`
    <P>数え役満</P>
    <P>親</P>
    <P>48000</P>
    <P>(16000)</P>
    <P>子</P>
    <P>32000</P>
    <P>(16000・8000)</P>
    `)
  } else if(yaku == 11 || yaku == 12) {
    $("#modal-content").append(`
    <P>三倍満</P>
    <P>親</P>
    <P>36000</P>
    <P>(12000)</P>
    <P>子</P>
    <P>24000</P>
    <P>(12000・6000)</P>
    `)
  } else if (yaku >= 8) {
    $("#modal-content").append(`
    <P>倍満</P>
    <P>親</P>
    <P>24000</P>
    <P>(8000)</P>
    <P>子</P>
    <P>16000</P>
    <P>(8000・4000)</P>
    `)
  } else if(yaku >= 6) {
    $("#modal-content").append(`
    <P>跳満</P>
    <P>親</P>
    <P>18000</P>
    <P>(6000)</P>
    <P>子</P>
    <P>12000</P>
    <P>(6000・3000)</P>
    `)
  } else if(yaku == 5 || yaku == 4 && fu >= 40 || yaku == 3 && fu >= 70) {
    $("#modal-content").append(`
    <P>満貫</P>
    <P>親</P>
    <P>12000</P>
    <P>(4000)</P>
    <P>子</P>
    <P>8000</P>
    <P>(4000・2000)</P>
    `)
  } else if(yaku == 4 && fu == 30 || yaku == 3 && fu == 60 ) {
    $("#modal-content").append(`
    <P>親</P>
    <P>11600</P>
    <P>(3900)</P>
    <P>子</P>
    <P>7700</P>
    <P>(3900・2000)</P>
    `)
  } else if(yaku == 2 && fu == 110) {
    $("#modal-content").append(`
    <P>親</P>
    <P>10600</P>
    <P>(3600)</P>
    <P>子</P>
    <P>7100</P>
    <P>(3600・1800)</P>
    `)
  } else if (yaku == 4 && fu == 25 || yaku == 3 && fu == 50 || yaku == 2 && fu == 100) {
    $("#modal-content").append(`
    <P>親</P>
    <P>9600</P>
    <P>(3200)</P>
    <P>子</P>
    <P>6400</P>
    <P>(3200・1600)</P>
    `)
  } else if(yaku == 2 && fu == 100) {
    $("#modal-content").append(`
    <P>親</P>
    <P>8700</P>
    <P>(2900)</P>
    <P>子</P>
    <P>5800</P>
    <P>(2900・1500)</P>
    `)
  } else if (yaku == 3 && fu == 40 || yaku == 2 && fu == 80 || yaku == 4 && fu == 20) {
    $("#modal-content").append(`
    <P> 親</P>
    <P>7700</P>
    <P>(2600)</P>
    <P>子</P>
    <P>5200</P>
    <P>(2600・1300)</P>
    `)
  } else if(yaku == 2 && fu == 70) {
    $("#modal-content").append(`
    <P>親</P>
    <P>6800</P>
    <P>(2300)</P>
    <P>子</P>
    <P>4500</P>
    <P>(2300・1200)</P>
    `)
  } else if (yaku == 3 && fu == 30 || yaku == 2 && fu == 60) {
    $("#modal-content").append(`
    <P>親</P>
    <P>5800</P>
    <P>(2000)</P>
    <P>子</P>
    <P>3900</P>
    <P>(2000・1000)</P>
    `)
  } else if (yaku == 1 && fu == 110) {
    $("#modal-content").append(`
    <P>親</P>
    <P>5300</P>
    <P>(1800)</P>
    <P>子</P>
    <P>3600</P>
    <P>(1800・900)</P>
    `)
  } else if (yaku == 3 && fu == 25 || yaku == 2 && fu == 50 || yaku == 1 && fu == 100) {
    $("#modal-content").append(`
    <P>親</P>
    <P>4800</P>
    <P>(1600)</P>
    <P>子</P>
    <P>3200</P>
    <P>(1600・800)</P>
    `)
  } else if (yaku == 1 && fu == 90) {
    $("#modal-content").append(`
    <P>親</P>
    <P>4400</P>
    <P>(1500)</P>
    <P>子</P>
    <P>2900</P>
    <P>(1500・800)</P>
    `)
  } else if (yaku == 3 && fu == 20 || yaku == 2 && fu == 40 || yaku == 1 && fu == 80) {
    $("#modal-content").append(`
    <P>親</P>
    <P>3900</P>
    <P>(1300)</P>
    <P>子</P>
    <P>2600</P>
    <P>(1300・700)</P>
    `)
  } else if(yaku == 1 && fu == 70) {
    $("#modal-content").append(`
    <P>親</P>
    <P>3400</P>
    <P>(1200)</P>
    <P>子</P>
    <P>2300</P>
    <P>(1200・600)</P>
    `)
  } else if(yaku == 2 && fu == 30 || yaku == 1 && fu == 60) {
    $("#modal-content").append(`
    <P>親</P>
    <P>2900</P>
    <P>(1000)</P>
    <P>子</P>
    <P>2000</P>
    <P>(1000・500)</P>
    `)
  } else if(yaku == 2 && fu == 25 || yaku == 1 && fu == 50) {
    $("#modal-content").append(`
    <P>親</P>
    <P>2400</P>
    <P>(800)</P>
    <P>子</P>
    <P>1600</P>
    <P>(800・400)</P>
    `)
  } else if (yaku == 2 && fu == 20 || yaku == 1 && fu == 40) {
    $("#modal-content").append(`
    <P>親</P>
    <P>2000</P>
    <P>(700)</P>
    <P>子</P>
    <P>1300</P>
    <P>(700・400)</P>
    `)
  } else if (yaku == 1) {
    $("#modal-content").append(`
    <P>親</P>
    <P>1500</P>
    <P>(500)</P>
    <P>子</P>
    <P>1000</P>
    <P>(500・300)</P>
    `)
  } else {
    $("#modal-content").append('<P>役がありません</P>')
  }

    
    $("#modal-content").fadeIn("slow");
    centeringModalSyncer("#modal-content");
  }
})

$("#modal-close,#modal-overlay").unbind().click(function(){
  $("#mdoal-content").html('<p><a id="modal-close" class="button-link">閉じる</a></p>');
  $("#modal-overlay").css("display","none")
  $("#modal-content,#modal-overlay").fadeOut("slow",function (){
    $("#modal-overlay").remove();
  })
})
$("#modal-overlay").click(function() {
})