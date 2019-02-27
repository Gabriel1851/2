var excelGameData = {
  humour: 0,
  humourCost: 10,
  interest: 0,
  lastTick: Date.now(),
  layout: 0,
  layoutCost: 20,
  mechanics: 0,
  mechanicsCost: 50,
  motivation: 100,
  release: 0,
}

var excelRestart = {
  humour: 0,
  humourCost: 10,
  interest: 0,
  lastTick: Date.now(),
  layout: 0,
  layoutCost: 20,
  mechanics: 0,
  mechanicsCost: 50,
  motivation: 100,
  release: 0,
}

var saveExcelGameLoop = window.setInterval(function() {
  localStorage.setItem('excelSave', JSON.stringify(excelGameData))
}, 15000)

var saveExcelgame = JSON.parse(localStorage.getItem("excelSave"))

if (saveExcelgame !== null) {
  excelGameData = saveExcelgame
  var loadExcelGameLoop = window.setInterval(function() {
    excelPrices()
    if (excelGameData.motivation > 100) {
//      document.getElementById("excelPass").style.display = "block";
    }
  }, 10)
}
function excelReset() {
  localStorage.setItem('excelSave', JSON.stringify(excelRestart))
  window.location.reload(false);
}

function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
}

function toggle_cell_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'table-cell')
    e.style.display = 'none';
  else
    e.style.display = 'table-cell';
}

function bold(id) {
  var e = document.getElementById(id);
  e.style.fontWeight = 'bold';
}

var mainExcelGameLoop = window.setInterval(function() {
  diff = Date.now() - excelGameData.lastTick;
  excelGameData.lastTick = Date.now()
  excelMotivation();
  if (excelGameData.Motivation < 10 && excelGameData.Interest == 0) {
    alert("With no players and little motivation, there's nothing to do but start again.");
  }
}, 1000)

function excelMotivation () {
  if (excelGameData.interest > 0) {
    var e = Math.floor(Math.random() * 100) + 1;
    if (e > 90) {
      if (excelGameData.interest < excelGameData.mechanics * 3) {
        excelGameData.interest += 1
      } else {
        excelGameData.interest = excelGameData.mechanics * 3
      }
    } else if (e < 20) {
      excelGameData.interest -= 1
    }
  }
  excelGameData.motivation += excelGameData.interest
  document.getElementById("motivation").innerHTML = excelGameData.motivation
}

function excelRelease() {
  var e = (excelGameData.layout + excelGameData.humour) * excelGameData.mechanics
  if (excelGameData.layout * excelGameData.mechanics !== 0) {
    if (excelGameData.release !== e) {
      if (excelGameData.interest += e > excelGameData.mechanics * 3) {
        excelGameData.interest == excelGameData.mechanics * 3
      } else {
        excelGameData.interest += e;
      }
      excelGameData.release = e;
      document.getElementById("interest").innerHTML = excelGameData.interest;
    } else {
    alert("You won't attract new users without adding anything more");
    }
  }
  if (excelGameData.layout == 0) {
    alert("You need to include some layout or users won't be able to play");
  }
  if (excelGameData.mechanics == 0) {
    alert("There needs to be some basic mechanics if anyone can play");
  }
}

function excelPrices() {
  document.getElementById("humour").innerHTML = excelGameData.humour;
  document.getElementById("interest").innerHTML = excelGameData.interest;
  document.getElementById("layout").innerHTML = excelGameData.layout;
  document.getElementById("mechanics").innerHTML = excelGameData.mechanics;
  document.getElementById("motivation").innerHTML = excelGameData.motivation;
}

function excelUpgrade(type) {
  if (type == "layout") {
    if (excelGameData.layout < 4) {
      if (excelGameData.motivation >= excelGameData.layoutCost) {
        excelGameData.layout += 1
        excelGameData.motivation -= excelGameData.layoutCost
        document.getElementById("layout").innerHTML = excelGameData.layout
        excelAppearance()
      }
    }
  }
  if (type == "mechanics") {
    if (excelGameData.mechanics < 4) {
      if (excelGameData.motivation >= excelGameData.mechanicsCost) {
        excelGameData.mechanics += 1
        excelGameData.motivation -= excelGameData.mechanicsCost
        document.getElementById("mechanics").innerHTML = excelGameData.mechanics
        excelMechanics()
      }
    }
  }
  if (type == "humour") {
    if (excelGameData.humour < 3) {
      if (excelGameData.motivation >= excelGameData.humourCost) {
        excelGameData.humour += 1
        excelGameData.motivation -= excelGameData.humourCost
        document.getElementById("humour").innerHTML = excelGameData.humour
        excelHumour()
      }
    }
  }
  document.getElementById("motivation").innerHTML = excelGameData.motivation
}

function excelAppearance() {
  if (excelGameData.layout == 0) {
    toggle_visibility("layoutBuy1");
  }
  if (excelGameData.layout == 1) {
    toggle_visibility("layoutBuy1");
    toggle_visibility("layoutBuy2");
    toggle_cell_visibility("cell1");
    toggle_cell_visibility("cell2");
    toggle_cell_visibility("cell3");
    toggle_cell_visibility("cell4");
    toggle_cell_visibility("cell5");
    toggle_cell_visibility("cell6");
    toggle_cell_visibility("cell7");
    toggle_cell_visibility("cell8");
    toggle_cell_visibility("cell9");
    toggle_cell_visibility("cell10");
    toggle_cell_visibility("cell11");
    toggle_cell_visibility("cell12");
    toggle_cell_visibility("cell13");
    toggle_cell_visibility("cell14");
    toggle_cell_visibility("cell15");
    toggle_cell_visibility("cell16");
  }
  if (excelGameData.layout == 2) {
    toggle_visibility("layoutBuy2");
    toggle_visibility("layoutBuy3");
    bold("levelHeading");
    bold("costHeading");
  }
  if (excelGameData.layout == 3) {
    toggle_visibility("layoutBuy3");
    toggle_visibility("layoutBuy4");
    document.getElementById('excelBorder1').className = "excel excelTableRight";
    document.getElementById('excelBorder2').className = "excel excelTableBottom";
    document.getElementById('excelBorder3').className = "excel excelTableBottomRight";
    document.getElementById('excelBorder4').className = "excel excelTableBottom";
    document.getElementById('excelBorder5').className = "excel excelTableBottom";
    document.getElementById('excelBorder6').className = "excel excelTableTop";
    document.getElementById('excelBorder7').className = "excel excelTableRight";
    document.getElementById('excelBorder8').className = "excel excelTableRight";
    document.getElementById('excelBorder9').className = "excel excelTableBottom";
    document.getElementById('excelBorder10').className = "excel excelTableBottom";
    document.getElementById('excelBorder11').className = "excel excelTableBottomRight";
  }
  if (excelGameData.layout == 4) {
    toggle_visibility("excelReleaseLink");
    toggle_visibility("excelReleaseButton");
    toggle_visibility("excelResetLink");
    toggle_visibility("excelResetButton");
    toggle_visibility("humourBuyLink");
    toggle_visibility("humourBuyButton");
    toggle_visibility("layoutBuy4");
    toggle_visibility("layoutBuy5");
    toggle_visibility("layoutBuyLink");
    toggle_visibility("layoutBuyButton");
    toggle_visibility("mechanicsBuyLink");
    toggle_visibility("mechanicsBuyButton");
  }
}

function excelHumour() {
  if (excelGameData.humour == 0) {
    toggle_visibility("humourBuy1");
  }
  if (excelGameData.humour == 1) {
    toggle_visibility("humourBuy1");
    toggle_visibility("humourBuy2");
  }
  if (excelGameData.humour == 2) {
    toggle_visibility("humourBuy2");
    toggle_visibility("humourBuy3");
  }
  if (excelGameData.humour == 3) {
    toggle_visibility("humourBuy3");
    toggle_visibility("humourBuy4");
  }
}

function excelMechanics() {
  if (excelGameData.layout == 0) {
    toggle_visibility("mechanicsBuy1");
  }
  if (excelGameData.layout == 1) {
    toggle_visibility("mechanicsBuy1");
    toggle_visibility("mechanicsBuy2");
  }
  if (excelGameData.layout == 2) {
    toggle_visibility("mechanicsBuy2");
    toggle_visibility("mechanicsBuy3");
  }
  if (excelGameData.layout == 3) {
    toggle_visibility("mechanicsBuy3");
    toggle_visibility("mechanicsBuy4");
  }
  if (excelGameData.layout == 4) {
    toggle_visibility("mechanicsBuy4");
    toggle_visibility("mechanicsBuy5");
  }
}