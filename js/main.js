var navSecSelected = 0;
//view builder
var mapView;
var stateFilter = [];
var countryFilter = [];
var mapDesign;
var mapMode;
var mapSettings;
var setView;
var filterUrl;
var TFC;
// window.history.pushState("", "", "MN/usa.php");
//doc ready
	$(document).ready(function(){
    //setView from url
    //menu expand function
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
			$(this).toggleClass('open');
			$("#tools-parent").toggleClass('tools-parent-expand');
			$(".bubble-indicator").toggleClass('bubble-indicator-show');
			$(".tool-nav-2-child").toggleClass('tool-nav-2-child-show');
      setTimeout(function() {
        $("#nav-sec-"+navSecSelected).toggleClass('nav-sec-expand');
      }, 200);
		});
    //ready map
      $("#map_usa_svg").css("min-height",((window.innerHeight)-75)+"px");
      var beforePan

      beforePan = function(oldPan, newPan){
        var stopHorizontal = false
          , stopVertical = false
          , gutterWidth = 100
          , gutterHeight = 100
            // Computed variables
          , sizes = this.getSizes()
          , leftLimit = -((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) + gutterWidth
          , rightLimit = sizes.width - gutterWidth - (sizes.viewBox.x * sizes.realZoom)
          , topLimit = -((sizes.viewBox.y + sizes.viewBox.height) * sizes.realZoom) + gutterHeight
          , bottomLimit = sizes.height - gutterHeight - (sizes.viewBox.y * sizes.realZoom)

        customPan = {}
        customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x))
        customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y))

        return customPan
      }
      // Expose to window namespace for testing purposes
      window.panZoom = svgPanZoom('#map_usa_svg', {
        zoomEnabled: true
      , controlIconsEnabled: true
      , fit: 1
      , center: 1
      , beforePan: beforePan
      });
      //show map
      $("#map_usa_svg").css("opacity","1");
      //window resize map render
      $( window ).resize(function() {
        console.log("resize");
        $("#svg-pan-zoom-reset-pan-zoom").click();
      });
	});
  window.onload = function() {
      if( window.location.search.length ) {
        TFC = window.location.search.split('?')[1];
        filterUrl = TFC;
        var parseTFC = TFC.split("&");
        var parseTFCcolor = parseTFC[3].split("=")[1];
        countryFilter = parseTFC[2];
        countryFilter = countryFilter.split("=")[1];
        var text = countryFilter;
        var text = text.replace(new RegExp("%20", "g"), ' ');
        countryFilter = text.match(/[^,]+,[^,]+/g);
        for (var i = 0; i <= parseTFC.length-1; i++) {
          var parseTFCi = parseTFC[i].split("=");
          //load view
          if(parseTFCi[0] == "mapMatrix"){
            if(typeof parseTFCi[1] !== 'undefined'){
              $("#viewport-map-transform").attr("transform",parseTFCi[1]);
            }
          }
          //laod state filters
          if(parseTFCi[0] == "stateFilter"){
            if(typeof parseTFCi[1] !== 'undefined'){
              var praseTFCiNew = parseTFCi[1].split(",");
              for (var i = 0; i <= praseTFCiNew.length-1; i++) {
                  addState(praseTFCiNew[i]);
              }
            }
          }
          //laod county filters
          if(parseTFCi[0] == "countryFilter"){
            if(typeof parseTFCi[1] !== 'undefined'){
              var text = parseTFCi[1];
              var text = text.replace(new RegExp("%20", "g"), ' ');
              var praseTFCiNew = text.match(/[^,]+,[^,]+/g);
              for (var i = 0; i <= praseTFCiNew.length-1; i++) {
              function hexToRgb(hex) {
                  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                  return result ? {
                      r: parseInt(result[1], 16),
                      g: parseInt(result[2], 16),
                      b: parseInt(result[3], 16)
                  } : null;
              }
                  document.getElementById(praseTFCiNew[i]).setAttribute("class","county-fill nonWhite");
                  document.getElementById(praseTFCiNew[i]).style.fill = ("rgb("+hexToRgb(parseTFCcolor).r+","+hexToRgb(parseTFCcolor).g+","+hexToRgb(parseTFCcolor).b+")");
              }
            }
          }
        }
      }
  };
  var refreshUrl = function(){
    filterUrl = "mapMatrix="+mapMatrix+"&"+"stateFilter="+stateFilter+"&"+"countryFilter="+countryFilter+"&"+"globalColorPick="+globalColorPick;
    // window.history.pushState(null,null,"?"+filterUrl);
  }
  //nav section cycle
  //view up
  var toolSelector = [1,0,0,0];
  var toolBarUp = function(){
    var tempIndex = toolSelector.shift();
    toolSelector.push(tempIndex);
    for (var i = 0; i <= toolSelector.length-1; i++) {
      if(toolSelector[i] == 1){
        $("#bubble-"+i).addClass("bubble-indicator-fill");
        $("#nav-sec-"+i).addClass("nav-sec-expand");
        navSecSelected = i;
      }
      else{
        $("#bubble-"+i).removeClass("bubble-indicator-fill");
        $("#nav-sec-"+i).removeClass("nav-sec-expand");
      }
    }
  }
  $("#tool-up").click(function(){
    toolBarUp();
  });

  //view down
  var toolBarDown = function(){
    var tempIndex = toolSelector.pop();
    toolSelector.unshift(tempIndex);
    for (var i = 0; i <= toolSelector.length-1; i++) {
      if(toolSelector[i] == 1){
        $("#bubble-"+i).addClass("bubble-indicator-fill");
        $("#nav-sec-"+i).addClass("nav-sec-expand");
        navSecSelected = i;
      }
      else{
        $("#bubble-"+i).removeClass("bubble-indicator-fill");
        $("#nav-sec-"+i).removeClass("nav-sec-expand");
      }
    }
  }
  $("#tool-down").click(function(){
    toolBarDown();
  });
//scroll detect up/down
  var tempDisable = 0;
  function displaywheel(e){
      var evt=window.event || e //equalize event object
      var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta //check for detail first so Opera uses that instead of wheelDelta
     if(tempDisable == 0){
       if(delta > 70){
        tempDisable = 1;
        setTimeout(function(){
            tempDisable = 0;
        },700);
        toolBarUp();
       }
       if(delta < -70){
        tempDisable = 1;
        setTimeout(function(){
            tempDisable = 0;
        },700);
        toolBarDown();
       }
    }
  }
//detect bubble clicks
$("#bubble-0").click(function(){
  toolSelector = [1,0,0,0];
  $(".bubble-indicator").attr("class","bubble-indicator bubble-indicator-show");
  $(this).addClass("bubble-indicator-fill");
  $(".tool-blocks").removeClass("nav-sec-expand");
  $("#nav-sec-0").addClass("nav-sec-expand");
  navSecSelected = 0;
});
$("#bubble-1").click(function(){
  toolSelector = [0,1,0,0];
  $(".bubble-indicator").attr("class","bubble-indicator bubble-indicator-show");
  $(this).addClass("bubble-indicator-fill");
  $(".tool-blocks").removeClass("nav-sec-expand");
  $("#nav-sec-1").addClass("nav-sec-expand");
  navSecSelected = 1;
});
$("#bubble-2").click(function(){
  toolSelector = [0,0,1,0];
  $(".bubble-indicator").attr("class","bubble-indicator bubble-indicator-show");
  $(this).addClass("bubble-indicator-fill");
  $(".tool-blocks").removeClass("nav-sec-expand");
  $("#nav-sec-2").addClass("nav-sec-expand");
  navSecSelected = 2;
});
$("#bubble-3").click(function(){
  toolSelector = [0,0,0,1];
  $(".bubble-indicator").attr("class","bubble-indicator bubble-indicator-show");
  $(this).addClass("bubble-indicator-fill");
  $(".tool-blocks").removeClass("nav-sec-expand");
  $("#nav-sec-3").addClass("nav-sec-expand");
  navSecSelected = 3;
});

var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
 
if (document.getElementById("tools-parent").attachEvent) //if IE (and Opera depending on user setting)
    document.getElementById("tools-parent").attachEvent("on"+mousewheelevt, displaywheel)
else if (document.getElementById("tools-parent").addEventListener) //WC3 browsers
    document.getElementById("tools-parent").addEventListener(mousewheelevt, displaywheel, false)

  //filter individual state
  var firstStateFilter = 0;
  var resetFilterState = function(){
    $(".county-fill").css("display","block");
    $(".country-lines").css("display","block");
    stateFilter = [];
    firstStateFilter = 0;
    refreshUrl();
  }

  var initialHideStates = function(){
    $(".county-fill").css("display","none");
    $(".country-lines").css("display","none");
  }
  //add state to current view
  var addState = function(state){
    if(firstStateFilter == 0){
      initialHideStates();
      $("#map_usa_svg [id*='"+state+"']").css("display","block");
      firstStateFilter = 1;
    }
    else{
      $("#map_usa_svg [id*='"+state+"']").css("display","block");
    }
    stateFilter.push(state);
    refreshUrl();
  }
  var removeState = function(state){
    if(firstStateFilter == 0){
      initialHideStates();
      $("#map_usa_svg [id*='"+state+"']").css("display","none");
      firstStateFilter = 1;
    }
    else{
      $("#map_usa_svg [id*='"+state+"']").css("display","none");
    }
    var index = stateFilter.indexOf(state);
    if(index > -1){
      stateFilter.splice(index, 1);
      refreshUrl();
    }
  }
  //change country color
  var colorSetting = "#ffffff";
  var fillCountryColor = 0;
  $('.county-fill').mousedown(function(event) {
      switch (event.which) {
          case 1:
              // Left Mouse button pressed.
              break;
          case 2:
              // Middle Mouse button pressed.
              break;
          case 3:
              if(fillCountryColor == 1){
                if($(this).attr("class") == "county-fill nonWhite"){
                  $(this).attr("class","county-fill");
                  $(this).css("fill","#ffffff");
                  var tempIndexCountry = countryFilter.indexOf(this.id);
                  if(tempIndexCountry > -1){
                    countryFilter.splice(tempIndexCountry, 1);
                    refreshUrl();
                  }
                }
                else{
                  $(this).attr("class","county-fill nonWhite");
                  $(this).css("fill", colorSetting);
                  countryFilter.push(this.id);
                  refreshUrl();
                }
              }
              var x = event.clientX;     // Get the horizontal coordinate
              var y = event.clientY;     // Get the vertical coordinate
              var coor = "X coords: " + x + ", Y coords: " + y;
              document.getElementById("info-box").innerHTML = this.id;
              $("#info-box").css("top",y+"px");
              $("#info-box").css("left",(x+15)+"px");
              $("#info-box").fadeIn("fast");
              setTimeout(function() {
                $("#info-box").fadeOut("fast");
              }, 2000);
              break;
          default:
              // You have a strange Mouse!
      }
  });



  //state filter buttons
  $("#tool-state-add").click(function(){
    var tempVal = $("#tool-state-select").val();
    if(tempVal == null){
      alert("Please select a State!");
    }
    else{
      addState(tempVal);
    }
  });
  $("#tool-state-remove").click(function(){
    var tempVal = $("#tool-state-select").val();
    if(tempVal == null){
      alert("Please select a State!");
    }
    else{
      removeState(tempVal);
    }
  });
  $("#tool-state-reset").click(function(){
    resetFilterState();
  });
  //color picker
  var colorpickerOptions = {
      parts: ['map', 'bar', 'hex', 'hsv', 'rgb', 'alpha', 'preview', 'swatches', 'footer'],
      altProperties: 'background-color',
      altField: '.colorpicker',
      color: 'fe9810',
      select: function (event, color) {
          var color_in_hex_format = color.formatted;
      }
      
      ,inline: false
  };

  $("#colorPicker").jqxColorPicker({
    width: 250,
    height: 250,
    colorMode: 'hue'  
  });
  //country fill switch
  var countryFillSwitchState = "off";
  $("#country-fill-switch").click(function(){
    if(countryFillSwitchState == "off"){
      countryFillSwitchState = "on";
      fillCountryColor = 1;
      alert("Right click a country to see info and fill in color. Move down to the design tab to change colors.");
    }
    else{
      countryFillSwitchState = "off";
      colorSetting = "#ffffff";
      fillCountryColor = 0;
    }
  });

//get share url
$("#setting-tool-share").click(function(){
  $('#share-textbox').val('http://mappingnow.com/usa.php?'+filterUrl);
  $('#setting-tool-copy').fadeIn();
});
//get share url
$("#setting-tool-copy").click(function(){
  var copyValue = document.getElementById("share-textbox").value;
  document.getElementById("share-textbox").select();
  document.execCommand('copy');
});

