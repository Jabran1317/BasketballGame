// var seeMore = document.getElementById("seeMore");
// var seeLess = document.getElementById("seeLess");
// function seeMoreBtn() {
//   seeMore.src = "/BasketballAssets/seeLess.png";
// }

// iButton B popup data

// var iButton1 = document.getElementById("iButton");

// function iButtonB() {
//   iButton1.classList.add("show");
// }

var overlay1 = document.getElementById("overlay");
var d = document.getElementById("main-body");

function rewardGuideBtn() {
  overlay1.classList.add("overlayAddClass");
  document.body.style.position = "fixed";

  // d.classList.toggle("main-body");

  leftBtn();
}
function closeBtn() {
  overlay1.classList.remove("overlayAddClass");
  document.body.style.position = "relative";
}

var popupdata1 = document.getElementById("popId");
function popup() {
  popupdata1.style.display = "block";
  document.body.style.position = "fixed";
}

function closebtn1() {
  popupdata1.style.display = "none";
  document.body.style.position = "relative";
  console.log("closebtn1()");
}
var ibtnb11 = document.getElementById("ibtnb1");

function ibtnb() {
  ibtnb11.style.display = "block";
  document.body.style.position = "fixed";
}
function ibtnclose() {
  ibtnb11.style.display = "none";
  document.body.style.position = "relative";
}

var ibtnA11 = document.getElementById("ibtnA1");
function ibtnA() {
  ibtnA11.style.display = "block";
  document.body.style.position = "fixed";
}

function ibtnaclose() {
  ibtnA11.style.display = "none";
  document.body.style.position = "relative";
}

// <!-- two tabs inside the guide btn of popup 1=how to paly and 2=reward info. -->
var leftBtnData = document.getElementById("left");
var rightBtnData = document.getElementById("right");

var leftBtn11 = document.getElementById("leftBtn1");
var rightBtn11 = document.getElementById("rightBtn1");

function leftBtn() {
  leftBtnData.style.opacity = "1";
  rightBtnData.style.opacity = "0.5";

  leftBtn11.style.display = "block";
  rightBtn11.style.display = "none";
}
function rightBtn() {
  leftBtnData.style.opacity = "0.5";
  rightBtnData.style.opacity = "1";

  leftBtn11.style.display = "none";
  rightBtn11.style.display = "block";
}

// first three tabs function
var field1 = document.getElementById("field");
var growth1 = document.getElementById("growth");
var gifting1 = document.getElementById("gifting");

var fieldGoal11 = document.getElementById("fieldGoalId");
var growth11 = document.getElementById("growthId");
var gifting11 = document.getElementById("giftingId");

function fieldGoal() {
  field1.src = "/BasketballAssets/fieldSelected.png";
  growth1.src = "/BasketballAssets/growthUnselected.png";
  gifting1.src = "/BasketballAssets/giftingUnsleceted.png";

  fieldGoal11.style.display = "block";
  growth11.style.display = "none";
  gifting11.style.display = "none";
  talentData1.style.display = "none";

  subTabTalentData11.style.display = "none";
}
function growth() {
  field1.src = "/BasketballAssets/fieldUnselected.png";
  growth1.src = "/BasketballAssets/growthSelected.png";
  gifting1.src = "/BasketballAssets/giftingUnsleceted.png";

  fieldGoal11.style.display = "none";
  growth11.style.display = "block";
  gifting11.style.display = "none";

  talentData1.style.display = "none";
}
function gifting() {
  field1.src = "/BasketballAssets/fieldUnselected.png";
  growth1.src = "/BasketballAssets/growthUnselected.png";
  gifting1.src = "/BasketballAssets/giftingSleceted.png";

  fieldGoal11.style.display = "none";
  growth11.style.display = "none";
  gifting11.style.display = "block";

  todayfunc();
}

var giftTab1 = document.getElementById("giftTabId");
var talentTab1 = document.getElementById("talentId");

var dailyData11234 = document.getElementById("dailyId1");
var talentData1 = document.getElementById("talentId1");

var userBoxingData = document.getElementById("userBoxingId");
var talentBoxingData = document.getElementById("talentBoxingId");
var boxing = document.getElementsByClassName("boxing");

function giftUser() {
  talentTab1.src = "/2ndPage/tab-unselected.png";
  giftTab1.src = "/2ndPage/tab-selected.gif";

  dailyData11234.style.display = "block";
  talentData1.style.display = "none";
  // giftTab1.classList.remove("opacity01");
  talentTab1.style.opacity = 0.7;
  giftTab1.style.opacity = 1;

  // talentTab1.classList.add("opacity01");

  overallfun1();
  slideBtn123();
  // userBoxingData.style.display = "block";
  // talentBoxingData.style.display = "none";
}
function giftTalent() {
  talentTab1.src = "/2ndPage/tab-selected.gif";
  giftTab1.src = "/2ndPage/tab-unselected.png";
  giftTab1.style.opacity = 0.7;

  talentTab1.style.opacity = 1;

  dailyData11234.style.display = "none";
  talentData1.style.display = "block";
  overallfun1();
  slideBtnUser111();
  today001();

  // userBoxingData.style.display = "none";
  // talentBoxingData.style.display = "block";
}
//  tabs gifting then user and user have two tabs daily and overall

var overall11 = document.getElementById("overallId1");
var overall22 = document.getElementById("overallId2");

var overallDataTalent1 = document.getElementById("overallId123");
var overallDataTalent2 = document.getElementById("overallId1234");

var dailyData11 = document.getElementById("dailydataId");
var overallData11 = document.getElementById("overallDataId111");

var overallData112 = document.getElementById("overallDataId222");
var dailyData112 = document.getElementById("dailydataId111");

function overallfun1() {
  overall11.src = "/2ndPage/tab-selected.gif";
  overall22.src = "/2ndPage/tab-unselected.png";

  overallDataTalent1.src = "/2ndPage/tab-selected.gif";
  overallDataTalent2.src = "/2ndPage/tab-unselected.png";

  overallDataTalent2.style.opacity = 0.7;
  overallDataTalent1.style.opacity = 1;

  overall11.style.opacity = 1;
  overall22.style.opacity = 0.7;

  dailyData11.style.display = "block";
  overallData11.style.display = "none";

  dailyData112.style.display = "block";
  overallData112.style.display = "none";

  todayfunc();
  console.log("clockd");
}
function overallfun2() {
  overall22.src = "/2ndPage/tab-selected.gif";
  overall11.src = "/2ndPage/tab-unselected.png";

  overall11.style.opacity = 0.7;
  overall22.style.opacity = 1;

  overallDataTalent2.src = "/2ndPage/tab-selected.gif";
  overallDataTalent1.src = "/2ndPage/tab-unselected.png";

  overallDataTalent2.style.opacity = 1;
  overallDataTalent1.style.opacity = 0.7;

  dailyData11.style.display = "none";
  overallData11.style.display = "block";

  dailyData112.style.display = "none";
  overallData112.style.display = "block";

  console.log("click");
}

var today1 = document.getElementById("todayId");
var yestersday = document.getElementById("yesId");

var todayData1 = document.getElementById("todaySlideId");
var yestData1 = document.getElementById("yestSlideId");

function todayfunc() {
  yestersday.classList.add("opacity");
  today1.classList.remove("opacity");

  todayData1.style.display = "block";
  yestData1.style.display = "none";

  seeLessBtn2();
}
function yestersdayfunc() {
  today1.classList.add("opacity");
  yestersday.classList.remove("opacity");

  todayData1.style.display = "none";
  yestData1.style.display = "block";

  seeMoreBtn2();
}

var seeMoreBtn01 = document.getElementById("seeMoreId1");
var seeLessBtn01 = document.getElementById("seeLessId1");

var seeBoardData1 = document.getElementById("leaderboardTabs1Data001");

function seeMoreBtn1() {
  seeMoreBtn01.style.display = "none";
  seeLessBtn01.style.display = "block";

  seeBoardData1.classList.add("overflow");
  console.log("clickseemore");
}
function seeLessBtn1() {
  seeMoreBtn01.style.display = "block";
  seeLessBtn01.style.display = "none";
  seeBoardData1.classList.remove("overflow");

  console.log("clicktexterless");
  seeBoardData1.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}

var seeMoreBtn02 = document.getElementById("seeMoreId2");
var seeLessBtn02 = document.getElementById("seeLessId2");

var seeBoardData2 = document.getElementById("leaderboardTabs1Data002");

function seeMoreBtn2() {
  seeMoreBtn02.style.display = "none";
  seeLessBtn02.style.display = "block";

  seeBoardData2.classList.add("overflow");
  console.log("clickseemore");
}
function seeLessBtn2() {
  seeMoreBtn02.style.display = "block";
  seeLessBtn02.style.display = "none";
  seeBoardData2.classList.remove("overflow");

  console.log("clicktexterless");
  seeBoardData2.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}
var seeMoreBtn03 = document.getElementById("seeMoreId3");
var seeLessBtn03 = document.getElementById("seeLessId3");

var seeBoardData3 = document.getElementById("leaderboardTabs1Data003");

function seeMoreBtn3() {
  seeMoreBtn03.style.display = "none";
  seeLessBtn03.style.display = "block";

  seeBoardData3.classList.add("overflow");
  console.log("clickseemore");
}
function seeLessBtn3() {
  seeMoreBtn03.style.display = "block";
  seeLessBtn03.style.display = "none";
  seeBoardData3.classList.remove("overflow");

  console.log("clicktexterless");
  seeBoardData3.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}
var seeMoreBtn04 = document.getElementById("seeMoreId4");
var seeLessBtn04 = document.getElementById("seeLessId4");

var seeBoardData4 = document.getElementById("leaderboardTabs1Data004");

function seeMoreBtn4() {
  seeMoreBtn04.style.display = "none";
  seeLessBtn04.style.display = "block";

  seeBoardData4.classList.add("overflow");
  console.log("clickseemore");
}
function seeLessBtn4() {
  seeMoreBtn04.style.display = "block";
  seeLessBtn04.style.display = "none";
  seeBoardData4.classList.remove("overflow");

  console.log("clicktexterless");
  seeBoardData4.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}
var seeMoreBtn05 = document.getElementById("seeMoreId5");
var seeLessBtn05 = document.getElementById("seeLessId5");

var seeBoardData5 = document.getElementById("leaderboardTabs1Data005");

function seeMoreBtn5() {
  seeMoreBtn05.style.display = "none";
  seeLessBtn05.style.display = "block";

  seeBoardData5.classList.add("overflow");
  console.log("clickseemore");
}
function seeLessBtn5() {
  seeMoreBtn05.style.display = "block";
  seeLessBtn05.style.display = "none";
  seeBoardData5.classList.remove("overflow");

  console.log("clicktexterless");
  seeBoardData5.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}
var seeMoreBtn06 = document.getElementById("seeMoreId6");
var seeLessBtn06 = document.getElementById("seeLessId6");

var seeBoardData6 = document.getElementById("leaderboardTabs1Data006");

function seeMoreBtn6() {
  seeMoreBtn06.style.display = "none";
  seeLessBtn06.style.display = "block";

  seeBoardData6.classList.add("overflow");
  console.log("clickseemore");
}
function seeLessBtn6() {
  seeMoreBtn06.style.display = "block";
  seeLessBtn06.style.display = "none";
  seeBoardData6.classList.remove("overflow");

  console.log("clicktexterless");
  seeBoardData6.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}

// var seeMoreBtn112 = document.getElementById("seeMoreId001");
// var seeLessBtn112 = document.getElementById("seeLessId001");

// var seeLessBtndata112 = document.getElementById("leaderboardTabs1Data002");
// var seeLessBtndata113 = document.getElementById("leaderboardTabs1Data003");
// var seeLessBtndata114 = document.getElementById("leaderboardTabs1Data004");
// var seeLessBtndata115 = document.getElementById(" leaderboardTabs1Data005");
// var seeLessBtndata116 = document.getElementById(" leaderboardTabs1Data006");

// var seeMoreBtnData007 = document.getElementById("seeMoreId007");
// var seeLessBtnData0077 = document.getElementById("seeLessId007");

// var seeLessBtndata007 = document.getElementById(" leaderboardTabs1Data007");
// var seeLessBtn11 = document.getElementById("seeLessId");

// function seeMoreBtn007() {
//   seeMoreBtnData007.style.display = "none";
//   seeLessBtnData0077.style.display = "block";

//   seeLessBtndata007.classList.add("overflow");

//   console.log("clickseemore");
// }
// function seeLessBtn007() {
//   seeMoreBtnData007.style.display = "block";
//   seeLessBtnData0077.style.display = "none";

//   seeLessBtndata007.classList.remove("overflow");
//   console.log("clicktexterless");
//   seeLessBtndata007.scrollTop = 0;
//   // document.documentElement.scrollTop = 0;
// }

// function seeMoreBtn12() {
//   seeMoreBtn112.style.display = "none";
//   seeLessBtn112.style.display = "block";

//   seeLessBtndata112.classList.add("overflow");

//   console.log("clickseemore");
// }
// function seeLessBtn12() {
//   seeMoreBtn112.style.display = "block";
//   seeLessBtn112.style.display = "none";

//   seeLessBtndata112.classList.remove("overflow");
//   console.log("clicktexterless");
//   seeLessBtndata112.scrollTop = 0;
//   // document.documentElement.scrollTop = 0;
// }
// function seeMoreBtn123() {
//   seeMoreBtn112.style.display = "none";
//   seeLessBtn112.style.display = "block";

//   seeLessBtndata113.classList.add("overflow");

//   console.log("clickseemore");
// }
// function seeLessBtn123() {
//   seeMoreBtn112.style.display = "block";
//   seeLessBtn112.style.display = "none";

//   seeLessBtndata113.classList.remove("overflow");
//   console.log("clicktexterless");
//   seeLessBtndata113.scrollTop = 0;
//   // document.documentElement.scrollTop = 0;
// }
// function seeMoreBtn006() {
//   seeMoreBtn112.style.display = "none";
//   seeLessBtn112.style.display = "block";

//   seeLessBtndata114.classList.add("overflow");

//   console.log("clickseemore");
// }
// function seeLessBtn006() {
//   seeMoreBtn112.style.display = "block";
//   seeLessBtn112.style.display = "none";

//   seeLessBtndata114.classList.remove("overflow");
//   console.log("clicktexterless");
//   seeLessBtndata114.scrollTop = 0;
//   // document.documentElement.scrollTop = 0;
// }

// function seeMoreBtn12345() {
//   seeMoreBtn112.style.display = "none";
//   seeLessBtn112.style.display = "block";

//   seeLessBtndata115.classList.add("overflow");

//   console.log("clickseemore");
// }
// function seeLessBtn12345() {
//   seeMoreBtn112.style.display = "block";
//   seeLessBtn112.style.display = "none";

//   seeLessBtndata115.classList.remove("overflow");
//   console.log("clicktexterless");
//   seeLessBtndata115.scrollTop = 0;
//   // document.documentElement.scrollTop = 0;
// }

var overallLeaderboard1 = document.getElementById("overallLeaderboardId");

var x = document.getElementById("bg1");

var sideBtn1 = document.getElementById("sideBtn");

// var x = document.getElementById("tabsDailyBgId");
function dailyLeaderboardfunc() {
  if (x.style.display === "none") {
    x.style.display = "block";
    sideBtn1.src = "/popupAndRest/drop.png";
  } else {
    x.style.display = "none";
    sideBtn1.src = "/popupAndRest/side.png";
  }

  subTabUser();

  // tabsdaily11.style.display = "none";
}

var subTabData1 = document.getElementById("subTab1");
var subTabData2 = document.getElementById("subTab2");

var subTabUserData = document.getElementById("leaderboardDataId");
var subTabTalentData = document.getElementById("leaderboardTalentId");

function subTabUser() {
  subTabData1.classList.remove("opacity");
  subTabData2.classList.add("opacity");

  subTabUserData.style.display = "block";
  subTabTalentData.style.display = "none";

  console.log("user");
}
function subTabTalent() {
  subTabData1.classList.add("opacity");
  subTabData2.classList.remove("opacity");

  subTabUserData.style.display = "none";
  subTabTalentData.style.display = "block";

  console.log("telnt");
}

// overallLeaderboard function here

var overallLeaderboard1 = document.getElementById("overallLeaderboardId");

var x1 = document.getElementById("bg11");

var sideBtn12 = document.getElementById("sideBtn11");

function overallLeaderboardfunc() {
  if (x1.style.display === "none") {
    x1.style.display = "block";
    sideBtn12.src = "/popupAndRest/drop.png";
  } else {
    x1.style.display = "none";
    sideBtn12.src = "/popupAndRest/side.png";
  }
  subTabUser1();

  subTabUser();

  // tabsdaily11.style.display = "none";
}

var subTabData11 = document.getElementById("subTab12");
var subTabData22 = document.getElementById("subTab22");

var subTabUserData1 = document.getElementById("leaderboardDataId1");
var subTabTalentData1 = document.getElementById("leaderboardTalentId1");

function subTabUser1() {
  subTabData11.classList.remove("opacity");
  subTabData22.classList.add("opacity");

  subTabUserData1.style.display = "block";
  subTabTalentData1.style.display = "none";

  console.log("user");
}
function subTabTalent1() {
  subTabData11.classList.add("opacity");
  subTabData22.classList.remove("opacity");

  subTabUserData1.style.display = "none";
  subTabTalentData1.style.display = "block";

  console.log("telnt");
}

// field goal leaderboard function here

var fieldgoalLeaderboard1 = document.getElementById("fieldgoalLeaderboardId");

var x2 = document.getElementById("bg111");

var sideBtn122 = document.getElementById("sideBtn111");

function fieldgoalLeaderboardfunc() {
  if (x2.style.display === "none") {
    x2.style.display = "block";
    sideBtn122.src = "/popupAndRest/drop.png";
  } else {
    x2.style.display = "none";
    sideBtn122.src = "/popupAndRest/side.png";
  }
  subTabUser123();
  console.log("click");

  // tabsdaily11.style.display = "none";
}

var subTabData112 = document.getElementById("subTab112");
var subTabData222 = document.getElementById("subTab222");

var subTabUserData11 = document.getElementById("leaderboardDataId11");
var subTabTalentData11 = document.getElementById("leaderboardTalentId11");

function subTabUser123() {
  console.log(subTabTalentData11);
  subTabData112.classList.remove("opacity");
  subTabData222.classList.add("opacity");

  subTabUserData11.style.display = "block";
  subTabTalentData11.style.display = "none";

  console.log("user");
}
function subTabTalent12() {
  subTabData112.classList.add("opacity");
  subTabData222.classList.remove("opacity");

  subTabUserData11.style.display = "none";
  subTabTalentData11.style.display = "block";

  console.log("telnt");
}

// seeMore11.src = "/BasketballAssets/seeMore.png";
// seeMore11.style.toggle("/BasketballAssets/seeMore.png");
// function seeMoreBtn1() {
//   seeMore22.src = "/BasketballAssets/seeLess.png";
// }
var slideBtnUser1 = document.getElementById("slideBtnId1");
var slideBtnUser2 = document.getElementById("slideBtnId2");

var talentSlide1 = document.getElementById("talentslideId");
var userSlide1 = document.getElementById("userslideId");

function slideBtnUser111() {
  console.log("hehehe");
  slideBtnUser1.classList.remove("opacity");
  slideBtnUser2.classList.add("opacity");

  talentSlide1.style.display = "block";
  userSlide1.style.display = "none";
}
function slideBtnUser12() {
  slideBtnUser1.classList.add("opacity");
  slideBtnUser2.classList.remove("opacity");

  talentSlide1.style.display = "none";
  userSlide1.style.display = "block";
}

var slideBtnData1 = document.getElementById("slide123");
var slideBtnData2 = document.getElementById("slide1234");

var slideData001 = document.getElementById("slide001");
var slideData002 = document.getElementById("slide002");

function slideBtn123() {
  console.log("liiiii");
  slideBtnData1.classList.remove("opacity");
  slideBtnData2.classList.add("opacity");

  slideData001.style.display = "block";
  slideData002.style.display = "none";
}
function slideBtn124() {
  console.log("kiiiii");

  slideBtnData1.classList.add("opacity");
  slideBtnData2.classList.remove("opacity");

  slideData001.style.display = "none";
  slideData002.style.display = "block";
}

var todayData001 = document.getElementById("todayId01");
var todayData002 = document.getElementById("todayId02");

var toslideData1 = document.getElementById("toslide0011");
var toslideData2 = document.getElementById("toslide0012");

function today001() {
  todayData001.classList.remove("opacity");
  todayData002.classList.add("opacity");

  toslideData1.style.display = "block";
  toslideData2.style.display = "none";

  seeMoreBtn6();
}
function today002() {
  todayData001.classList.add("opacity");
  todayData002.classList.remove("opacity");

  toslideData2.style.display = "block";
  toslideData1.style.display = "none";
  seeLessBtn6();
}

var inputId1 = document.getElementById("inputId");
var inputnum1 = document.getElementById("inputnum");

function input() {
  var max = parseInt(inputnum1.innerText);
  // console.log(inputnum1, "first");
  // debugger;
  var value = inputId1.value;
  // var value1 = inputnum1.value1;
  if (value !== parseInt(value, 10).toString()) {
    inputId1.value = "";
  } else if (value > max) {
    inputId1.value = max;
  } else if (value < 1) {
    inputId1.value = "";
  }
}

var mainData1 = [];
var mainData2 = [];
var mainData3 = [];
var mainData4 = [];
var mainData5 = [];
var mainData6 = [];

var ltop = document.getElementById("userId001");
var lbotm = document.getElementById("leaderboardTabs1Data001");

var ltop1 = document.getElementById("userId002");
var lbotm1 = document.getElementById("leaderboardTabs1Data002");

var ltop2 = document.getElementById("userId003");
var lbotm2 = document.getElementById("leaderboardTabs1Data003");

var ltop3 = document.getElementById("userId004");
var lbotm3 = document.getElementById("leaderboardTabs1Data004");

var ltop4 = document.getElementById("userId005");
var lbotm4 = document.getElementById("leaderboardTabs1Data005");

var ltop5 = document.getElementById("userId006");
var lbotm5 = document.getElementById("leaderboardTabs1Data006");

var ltop6 = document.getElementById("userId007");
var lbotm6 = document.getElementById("leaderboardTabs1Data007");

function displayData1(top, bottom, arrary, end) {
  top.innerHTML = "";
  bottom.innerHTML = "";
  let unknownImage = "/BasketballDefaultPage/wolf.jpg";
  arrary.forEach((element, index) => {
    let id = index + 1;
    let userName = element.nickname.slice(0, 9);
    if (id === 1) {
      top.innerHTML += `
      <div class="winnerSilver">
    <div class="img1">
      <img src='${element.avatar ? element.avatar : unknownImage}' alt="" />
    </div>
    <div class="userData1">
      <p class="userName">${userName}</p>
      <div class="userLevel">
        <img
          src="http://streamkarlive.live/streamkar/common/img/ulv/17.png"
          alt=""
        />
      </div>
      <div class="estReward">
        Est.Reward:
        <span class="beanData1">
          <img src="/BasketballAssets/bean.png" alt="" />
          000000
        </span>
      </div>
      <span class="scoreLon">
        <img src="/BasketballAssets/scoreIcon.png" alt="" />
        ${element.count}
      </span>
    </div>
  </div>`;
    } else if (id === 2) {
      top.innerHTML += `
      
  <div class="winnerGold">
    <div class="img2">
      <img src="${element.avatar ? element.avatar : unknownImage}" alt="" />
    </div>
    <div class="userData2">
      <p class="userName">${userName}</p>
      <div class="userLevel">
        <img
          src="http://streamkarlive.live/streamkar/common/img/ulv/17.png"
          alt=""
        />
      </div>
      <div class="estReward">
        Est.Reward:
        <span class="beanData1">
          <img src="/BasketballAssets/bean.png" alt="" />
          000000
        </span>
      </div>
      <span class="scoreLon">
        <img src="/BasketballAssets/scoreIcon.png" alt="" />
        ${element.count}
      </span>
    </div>
  </div>
  `;
    } else if (id === 3) {
      top.innerHTML += `
      
  <div class="winnerBronze">
    <div class="img3">
      <img src="${element.avatar ? element.avatar : unknownImage}" alt="" />
    </div>
    <div class="userData3">
      <p class="userName">${userName}</p>
      <div class="userLevel">
        <img
          src="http://streamkarlive.live/streamkar/common/img/ulv/17.png"
          alt=""
        />
      </div>
      <div class="estReward">
        Est.Reward:
        <span class="beanData1">
          <img src="/BasketballAssets/bean.png" alt="" />
          000000
        </span>
      </div>
      <span class="scoreLon">
        <img src="/BasketballAssets/scoreIcon.png" alt="" />
        ${element.count}
      </span>
    </div>
  </div>
</div>`;
    } else {
      bottom.innerHTML += `<div class="userDataContainer">
      <div class="userBox1">
        <p class="count">${id}.</p>
        <div class="userNameLevel">
          <span class="userImg">
            <img src=${element.avatar ? element.avatar : unknownImage} alt="" />
            <p class="nameText">${userName}</p>
          </span>
          <img
            src="http://streamkarlive.live/streamkar/common/img/ulv/17.png"
            alt=""
          />
        </div>
      </div>
      <div class="scoreIconContainer">
        <span class="ballCount1">
          <img src="/BasketballAssets/scoreIcon.png" alt="" />
          <p class="ballText">2325</p>
        </span>
      </div>
    </div>`;
    }
  });
}
fetch(
  "http://test.streamkar.tv/api/activity/basketball/getRankInfo?userType=1&dayIndex=6&type=1&sort=1&pageNum=1&pageSize=20"
)
  .then((res) => {
    return res.json();
  })
  .then((ress) => {
    console.log(ress.data.list);

    mainData1 = ress.data.list;
    displayData1(ltop, lbotm, mainData1, 13);
  });
fetch(
  "http://test.streamkar.tv/api/activity/basketball/getRankInfo?userType=1&dayIndex=5&type=1&sort=1&pageNum=1&pageSize=20"
)
  .then((res) => {
    return res.json();
  })
  .then((ress) => {
    console.log(ress.data.list);
    mainData2 = ress.data.list;
    displayData1(ltop1, lbotm1, mainData2, 13);
  });
fetch(
  "http://test.streamkar.tv/api/activity/basketball/getRankInfo?userType=1&dayIndex=6&type=1&sort=2&pageNum=1&pageSize=20"
)
  .then((res) => {
    return res.json();
  })
  .then((ress) => {
    console.log(ress.data.list);
    mainData3 = ress.data.list;
    displayData1(ltop2, lbotm2, mainData3, 13);
  });
fetch(
  "http://test.streamkar.tv/api/activity/basketball/getRankInfo?userType=1&dayIndex=6&type=1&sort=2&pageNum=1&pageSize=20"
)
  .then((res) => {
    return res.json();
  })
  .then((ress) => {
    console.log(ress.data.list);
    mainData4 = ress.data.list;
    displayData1(ltop3, lbotm3, mainData4, 13);
  });
fetch(
  "http://test.streamkar.tv/api/activity/basketball/getRankInfo?userType=1&dayIndex=5&type=1&sort=1&pageNum=1&pageSize=20"
)
  .then((res) => {
    return res.json();
  })
  .then((ress) => {
    console.log(ress.data.list);
    mainData5 = ress.data.list;
    displayData1(ltop4, lbotm4, mainData5, 13);
  });
fetch(
  "http://test.streamkar.tv/api/activity/basketball/getRankInfo?userType=1&dayIndex=6&type=1&sort=2&pageNum=1&pageSize=20"
)
  .then((res) => {
    return res.json();
  })
  .then((ress) => {
    console.log(ress.data.list);
    mainData6 = ress.data.list;
    displayData1(ltop5, lbotm5, mainData6, 13);
  })
  .catch((err) => console.log(err));

var recordData007 = document.getElementById("recordId001");

var recordData1 = [];
fetch(
  "http://test.streamkar.tv/api/activity/basketball/getRewardRecord?userId=502184262&pageNum=1&pageSize=10"
)
  .then((res) => {
    return res.json();
  })
  .then((ress) => {
    console.log(ress.data.list);
    recordData1 = ress.data.list;
    recordInfoData(boxing2, recordData1, 10);
  });

const boxing2 = document.getElementById("boxing001");
function recordInfoData(one, array, end) {
  // one.innerHTML = "";

  array.forEach((e) => {
    const a = `    <div class="recordData" id="recordId001">
    <span class="date">
    <p class="date1">${e.time.split("T")[0]}</p>

    <span class="time1">${e.time.split("T")[1]}</span>
  </span>
  <div class="dataImg">
    <img
      src="/BasketballAssets/giftDisplayBasketBall.gif"
      alt=""
    />
  </div>
  <span class="rewardData">
    <div class="rewardImg1">
      <img src="/popupAndRest/beanbag.png" alt="" />
      <span class="rewardText">${e.rewardType}</span>
    </div>
  </span>
  </div>

    `;
    one.innerHTML = one.innerHTML + a;
  });
}

function clickHere() {
  fetch("http://test.streamkar.tv/api/activity/basketball/playShootGame", {
    method: "POST",
    headers: {
      userId: 502184266,
      token: "A13FA1D048C9C44B98AFDDCB51CD218BEC",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 502184266,
      playCount: 1,
    }),
    redirect: "follow",
  })
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      console.log(result, "api number");
      if (result.msg === "success") {
        var newData = result?.data;
      } else if (result.msg === "Token error") {
        console.log(result.msg);
      } else {
        console.log(result.msg);
      }
    });

  var random = Math.floor(Math.random() * 5);

  var id = random + 1;

  let character = document.getElementById("jumpingCharacter");
  character.classList.add("jumpingCharac");
  character.classList.remove("jumpCharac");
  if (id === 1) {
    character.src = "/images(1)/images/basket01.gif";
  } else if (id === 2) {
    character.src = "/images(1)/images/basket02.gif";
  } else if (id === 3) {
    character.src = "/images(1)/images/basket03.gif";
  } else if (id === 4) {
    character.src = "/images(1)/images/basket04.gif";
  } else if (id === 5) {
    character.src = "/images(1)/images/basket05.gif";
  } else if (id === 6) {
    character.src = "/images(1)/images/basket06.gif";
  }
  setTimeout(() => {
    character.classList.add("jumpCharac");
    character.classList.remove("jumpingCharac");
    character.src = "/2ndPage/jumpingCharacter.png";
  }, 1800);
}

var growthId = document.getElementById("growthDataId");

function growthClick() {
  growthId.style.display = "block";
}
function growthcloseBtn() {
  // console.log(growthcloseBtn);
  growthId.style.display = "none";
  errorMsg.innerHTML = "";

  // document.body.style.position = "relative";
}

var inputData = document.getElementById("inputBtn1");
var searchBtnData = document.getElementById("inputSearch");
// var cardTextData = document.getElementById("cardTextId");

// function searchBtn1() {
//   fetch(
//     `http://test.streamkar.tv/meShow/entrance?parameter=%7B%22FuncTag%22:10002008,%22fuzzyString%22${searchBtnData.value}%22%22,pageCount:10,%22pageNum%22:%221%22%7D`
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((result) => {
//       // var data = result?.roomList[0];

//       console.log(result, "hhhhhhhhhhhh");
//     });

//     cardTextData.innerHTML += ` <img class="user001" src="" alt="">
//       <div class="cardtext">
//   <span class="cardtext1">${data.nickname}</span>
//   <span class="cardtext2">ID : ${data.userId}</span>
//       </div>
//     <div class="accele007"><img src="/popupAndRest/accelerationCard.png" alt="">
//     </div>`;
// }

var cardTextData = document.getElementById("cardTextId");

function searchBtn1() {
  fetch(
    `http://test.streamkar.tv/meShow/entrance?parameter=%7B%22FuncTag%22:10002008,%22fuzzyString%22:${searchBtnData.value},%22pageCount%22:10,%22pageNum%22:%221%22%7D`
  )
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      var name = result?.roomList[0].nickname;
      var userId = result?.roomList[0].userId;
      var avatar = result?.roomList[0].portrait_path_original;

      var imageSpan = document.getElementById("user-send-avatar");
      var nameSpan = document.getElementById("user-send-name");
      var idSpan = document.getElementById("user-send-id");

      imageSpan.src = avatar;
      nameSpan.innerText = name;
      idSpan.innerText = `ID: ${userId}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

var sendData = document.getElementById("sendId");
var imgSrcData = document.getElementById("imgsrc");
var errorMsg = document.getElementById("errorMsg");

function sendMsgfun() {
  var userSendData = document
    .getElementById("user-send-id")
    .innerHTML.split(" ")?.[1];
  userSendData = parseInt(userSendData);
  console.log(userSendData);
  fetch(
    "http://test.streamkar.tv/api/activity/basketball/sendAccelerationCard",
    {
      method: "POST",
      headers: {
        userId: 554000002,
        token: "A14891CF8AE6AA42B497D1FCBDA129619B",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sendId: 554000002,
        receiveId: 502184258,
      }),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      console.log(result);
      var max1 = result.msg;
      imgSrcData.src = "/2ndPage/tab-selected.gif";
      errorMsg.innerHTML = "";

      errorMsg.innerHTML += `
    <span class="sendMsg" 
    ">${max1}</span>
    `;
    });
}

var dropDownData = document.getElementById("dropdown");

function changeLang(lang) {
  let leftBtnData1 = document.getElementById("leftBtn1");
  if (lang === "english") {
    leftBtnData1.innerHTML = `          
    
    <li>
    For every 25,000 beans spent by the user, he/she will get 1
    chance.
  </li>
  <li>
    6 basketball nets will be there, all you need to do is click
    on the throw button, to throw the basketball in the net.
  </li>
  <li class="color">
    You all can type upto x99 chances. By default, 1 chance
    would be there.
  </li>
  <li>
    If more than 1 chance is used, animations would be played
    once, but the system will calculate the number of rewards
    you would receive according to the number of chances used to
    play the game.
  </li>
  <li>
    Each successful attempt will be counted towards the
    milestones, also extra reward would be given for reaching
    the milestone.
  </li>
  <li>
    Your failed attempts will not be counted towards the
    milestones
  </li>
  <li class="color">
    If there is a situation where scores are equal, then most
    successful attempts in less time will be taken into
    consideration and then your XP level will also be taken into
    consideration.
  </li>
  <li class="color">
    Top 3 users with most successful attempts will receive Beans
    rewards.
  </li>
  <li class="color">
    Users have to attempt a minimum 1000 successful attempts or
    more to win a bean reward.
  </li>
  <li class="color">
    Amongst the TOP 3 eligible users, the beans will be
    distributed in the ratio of the beans spent by them in the
    whole event.
  </li>
  <h3>GROWTH ACCELERATION</h3>
  <li>
    You can collect the acceleration card by playing the game
  </li>
  <li>
    When you receive an acceleration card, you need to send it
    to the talent.
  </li>
  <li>
    When talent receives this card, the acceleration rate will
    be increased by 1x than the existing rate. For example, if
    talent’s existing rate is 1X, it will be increased to 2X.
  </li>
  <li>
    If any Talent ID will receive multiple ACCELERATION CARDS
    from multiple users, no effect will take place.
  </li>
  <li class="color">
    To send the ACCELERATION CARD to your favourite talent,
    visit the GROWTH ACCELERATION tab.
  </li>
  <h3>FOR TALENT</h3>
  <li>
    For 100 beans received by the talents through event gifts,
    talent will receive 1 ENERGY point.
  </li>
  <li>
    Tokens will be credited to the talent’s account after
    completion of tasks. Talents need to collect tokens by
    completing the tasks given daily on GROWTH ACCELERATION TAB.
  </li>
  <li>
    These tokens will be considered for growth acceleration.
  </li>
  <table border="1" class="tb011">
    <tr>
      <td>TOKENS REQUIRED</td>
      <td>ACCELERATION RATE</td>
    </tr>
    <tr>
      <td>200</td>
      <td>1.2x</td>
    </tr>
    <tr>
      <td>400</td>
      <td>1.5x</td>
    </tr>
    <tr>
      <td>800</td>
      <td>2x</td>
    </tr>
  </table>`;
  } else {
    leftBtnData1.innerHTML = ` <li>
    25,000 beans event gifts pe spend karne par 1 throwing chance milega.
  </li>
  <li>
  6 basketball nets honge jisme ball throw karne ke liye aapko THROW par click karna hoga.
  </li>
  <li class="color">
   Default setting me 1 chance pre-selected hoga. Aap multiple chances type karke khel sakte hain (upto x99 chances)
  </li>
  <li>
  Har successful attempt milestones ki taraf count kia jayega
  </li>
  <li>
  Failed attempt milestone ki taraf nahi gina jayega
  </li>
  <li>
   Agar aisa koi situation aata hai jahaan scores equal hai toh Pehle, jisne kam time mein zyada successful attempts complete kiye hai unhe consider kia jayega, aur baadme user ka XP level consider kia jaayega. 
  </li>
  <li class="color">
  Top 3 users jinke sabse zyada successful attempts hai unhe beans rewards diye jayenge.
  </li>
  <li class="color">
   Users ko beans reward tabhi milega jab woh minimum 1000 successful attempts ya usse zyada successful attempts complete karenge .
  </li>
  <li class="color">
   Users ko beans reward tabhi milega jab woh minimum 1000 successful attempts ya usse zyada successful attempts complete karenge .
  </li>
  <li class="color">
   Top 3 eligible users mein beans rewards distribute kiye jayenge, unke pure event mai kiye gaye beans spending ke ratio mai.
  </li>
  <h3>GROWTH ACCELERATION</h3>
  <li>
   Aapko acceleration cards game khel ke collect kana hai. 
  </li>
  <li>
   Jabhi aap acceleration card collect karoge, aapko yeh acceleration card talent ko send karna padega.
  </li>
  <li>
   Jab talents yeh card receive karenge toh unka acceleration rate 1x se increase hoga existing rate se. EXAMPLE: Agar talent ka existing acceleration rate 1X hai toh woh badhke 2X hojayega ye card receive karne pe.
  </li>
  <li>
  Agar koi talent multiple ACCELERATION CARDS receive karega, toh card ka koi effect nahi hoga.
  </li>
  <li class="color">
  Growth acceleration ko send karne apko GROWTH ACCELERATION TAB visit karna hoga.
  </li>
  <h3>FOR TALENT</h3>
  <li>
   Har 100 Beans receive karnepe talents ko 1 energy point milega jo Leaderboard me use hoga. Leaderboard ENERGY POINTS ke basis par arrange hoga.
  </li>
  <li>
  ● Talents ko DAILY TASKS roz complete karke Tokens collect karne hain
  </li>
  <li>
  Yeh tokens growth acceleration ke liye consider kiye jayenge.  
  </li>
  <table border="1" class="tb011">
    <tr>
      <td>TOKENS REQUIRED</td>
      <td>ACCELERATION RATE</td>
    </tr>
    <tr>
      <td>200</td>
      <td>1.2x</td>
    </tr>
    <tr>
      <td>400</td>
      <td>1.5x</td>
    </tr>
    <tr>
      <td>800</td>
      <td>2x</td>
    </tr>
  </table>`;
  }
}

function onLanguageChange(event) {
  changeLang(event.target.value);
}

// function clickHere(image) {
//   image.style.heigth = "20px";
//   image.style.width = "20px";
// }
// var ltop2=document.getElementById("userId002")
// var lbtm2=document.getElementById("leaderboardTabs1Data002")

// function displayData1(top1 , bottom1 , arrary )

// function input() {
//   var value = inputId1.value;

//   // Remove any non-digit characters
//   value = value.replace(/\D/g, "");

//   // Ensure the fixed value is less than or equal to 100
//   if (value > 100) {
//     inputId1.value = ""; // Clear the input field
//   } else {
//     inputId1.value = value; // Display the entered value
//   }
// }
// var input1 = document.getElementById("inputId");
// var inputnum1 = document.getElementById("inputnum");

// function input() {
//   var value = input1.value;
//   var max = parseInt(inputnum1.innerText);
//   if ((value < 0 || value > 99 || value !== (value, 10), toString())) {
//     input1.value = "";
//   } else if (value > max) {
//     input1.value = max; // Hard value to display for inputs greater than 99
//   } else {
//     input1.value = 0; // Display the new value if within the valid range
//   }
// }
