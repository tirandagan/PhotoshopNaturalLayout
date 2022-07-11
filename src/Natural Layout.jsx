const NaturalLayoutVersion = "0.4b"
/*

Photoshop ExtendScript :: Natural Layout Formula
Written by Tiran Dagan, July 2022
tiran@tirandagan.com
www.tirandagan.com 
www.boardtohome.com

This script will create the guide needed to help design a sign using
the principles described in the book "Master Layout - on the art of Eye Appeal", by Mike Stevens
Published by ST Publications, Inc, Cincinnati, OH  (c) 1994 - 1986


To run this script manually:

  File -> Scripts -> Browse...
  [and select this file from the location you downloaded it to]

To add the script to Photoshop:

1. Add the script file to the Photoshop script folder:
      Mac OS:
      Macintosh HD:Applications:Adobe Photoshop 2021:Presets:Scripts

      Windows:
      C:\Program Files\Adobe\Adobe Photoshop 2022\Presets\Scripts
      (obviously the path will differ for you, depending on the version on Photoshop you have)

2. Restart Photoshop

3. Now you can select the script from File -> Scripts -> Natural Layout

*/
function GotoLink(url) {
  url = url || "http://www.tirandagan.com";

  if (app.version > 6) {
    if (File.fs == "Macintosh") {
      var body =
        'tell application "Finder"\ropen location "' + url + '"\rend tell';

      app.doScript(body, ScriptLanguage.APPLESCRIPT_LANGUAGE);
    } else {
      var body =
        'dim objShell\rset objShell = CreateObject("Shell.Application")\rstr = "' +
        url +
        '"\robjShell.ShellExecute str, "", "", "open", 1 ';

      app.doScript(body, ScriptLanguage.VISUAL_BASIC);
    }
  } else {
    linkJumper = File(Folder.temp.absoluteURI + "/link.html");

    linkJumper.open("w");

    var linkBody = '<html><head><META HTTP-EQUIV=Refresh CONTENT="0; URL=' +
            url + '"></head><body> <p></body></html>';

    linkJumper.write(linkBody);
    linkJumper.close();
    linkJumper.execute();
  }
}
function SettingsDialog() {
  /*
  Code for Import https://scriptui.joonas.me — (Triple click to select): 
  {"activeId":24,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"dlgNL","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":false,"borderless":false,"resizeable":false},"text":"Dialog","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":11,"alignChildren":["left","top"]}},"item-1":{"id":1,"type":"StaticText","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Please enter the dimensions of your sign\n(your document will be created or reformatted to 300dpi)","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"dim","preferredSize":[0,91],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-8":{"id":8,"type":"Checkbox","parentId":0,"style":{"enabled":true,"varName":"cbDocGuides","text":"Add document guides","preferredSize":[0,0],"alignment":null,"helpTip":"Note: any existing guides you have in this document will be removed","checked":true}},"item-9":{"id":9,"type":"StaticText","parentId":16,"style":{"enabled":true,"varName":"tbHeight","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Inches","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"EditText","parentId":16,"style":{"enabled":true,"varName":"valW","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"8","justify":"left","preferredSize":[38,32],"alignment":"center","helpTip":null}},"item-12":{"id":12,"type":"EditText","parentId":27,"style":{"enabled":true,"varName":"valH","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"10","justify":"left","preferredSize":[38,32],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"StaticText","parentId":27,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Inches","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"Group","parentId":21,"style":{"enabled":true,"varName":"gw","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-21":{"id":21,"type":"Panel","parentId":7,"style":{"enabled":true,"varName":"width","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Width","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-22":{"id":22,"type":"Panel","parentId":7,"style":{"enabled":true,"varName":"height","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Height","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-23":{"id":23,"type":"Checkbox","parentId":0,"style":{"enabled":true,"varName":"cbNewDoc","text":"Create new document","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-24":{"id":24,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"gbuttons","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":"right"}},"item-25":{"id":25,"type":"Button","parentId":24,"style":{"enabled":true,"varName":"btnCancel","text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-26":{"id":26,"type":"Button","parentId":24,"style":{"enabled":true,"varName":"btnOk","text":"Start","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-27":{"id":27,"type":"Group","parentId":22,"style":{"enabled":true,"varName":"gh","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}}},"order":[0,1,7,21,16,10,9,22,27,12,13,23,8,24,25,26],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
  */

  // DLGNL
  // =====
  var dlgNL = new Window("dialog", undefined, undefined, {
    closeButton: false,
  });
  dlgNL.text = "Natural Layout by Tiran Dagan (v" + NaturalLayoutVersion + ")";
  dlgNL.orientation = "column";
  dlgNL.alignChildren = ["left", "top"];
  dlgNL.spacing = 11;
  dlgNL.margins = 16;

  var statictext1 = dlgNL.add("group");
  statictext1.orientation = "column";
  statictext1.alignChildren = ["left", "center"];
  statictext1.spacing = 0;

  statictext1.add(
    "statictext",
    undefined,
    "Please enter the dimensions of your sign",
    { name: "statictext1" }
  );
  statictext1.add(
    "statictext",
    undefined,
    "(your document will be created or reformatted to 300dpi)",
    { name: "statictext1" }
  );

  // DIM
  // ===
  var dim = dlgNL.add("group", undefined, { name: "dim" });
  dim.preferredSize.height = 91;
  dim.orientation = "row";
  dim.alignChildren = ["left", "center"];
  dim.spacing = 10;
  dim.margins = 0;

  // WIDTH
  // =====
  var width = dim.add("panel", undefined, undefined, { name: "width" });
  width.text = "Width";
  width.orientation = "column";
  width.alignChildren = ["left", "top"];
  width.spacing = 10;
  width.margins = 10;

  // GW
  // ==
  var gw = width.add("group", undefined, { name: "gw" });
  gw.orientation = "row";
  gw.alignChildren = ["left", "center"];
  gw.spacing = 10;
  gw.margins = 0;

  var valW = gw.add('edittext {justify: "center", properties: {name: "valW"}}');
  valW.text = dlgDocWidth;
  valW.preferredSize.width = 38;
  valW.alignment = ["left", "center"];

  var tbHeight = gw.add("statictext", undefined, undefined, {
    name: "tbHeight",
  });
  tbHeight.text = "Inches";

  // HEIGHT
  // ======
  var height = dim.add("panel", undefined, undefined, { name: "height" });
  height.text = "Height";
  height.orientation = "row";
  height.alignChildren = ["left", "top"];
  height.spacing = 10;
  height.margins = 10;

  // GH
  // ==
  var gh = height.add("group", undefined, { name: "gh" });
  gh.orientation = "row";
  gh.alignChildren = ["left", "center"];
  gh.spacing = 10;
  gh.margins = 0;

  var valH = gh.add('edittext {justify: "center", properties: {name: "valH"}}');
  valH.text = dlgDocHeight;
  valH.preferredSize.width = 38;

  var statictext2 = gh.add("statictext", undefined, undefined, {
    name: "statictext2",
  });
  statictext2.text = "Inches";

  // DLGNL
  // =====
  var cbNewDoc = dlgNL.add("checkbox", undefined, undefined, {
    name: "cbNewDoc",
  });
  cbNewDoc.text = "Create new document";
  cbNewDoc.helpTip =
    "Do you want to create a new document or resize the existing one?";
  cbNewDoc.preferredSize.width = 220;
  cbNewDoc.value = true;
  if (app.documents.length == 0) cbNewDoc.enabled = false;
  cbNewDoc.onClick = function () {
    if (cbNewDoc.value) {
      cbDocGuides.enabled = false;
      cbDocGuides.value = true;
    } else {
      cbDocGuides.enabled = true;
    }
  };

  var cbDocGuides = dlgNL.add("checkbox", undefined, undefined, {
    name: "cbDocGuides",
  });
  cbDocGuides.helpTip =
    "Note: any existing guides you have in this document will be removed";
  cbDocGuides.text = "Add document guides";
  cbDocGuides.value = true;
  cbDocGuides.enabled = false;

  // GBUTTONS
  // ========
  var gbuttons = dlgNL.add("group", undefined, { name: "gbuttons" });
  gbuttons.orientation = "row";
  gbuttons.alignChildren = ["right", "center"];
  gbuttons.spacing = 10;
  gbuttons.margins = 0;
  gbuttons.alignment = ["right", "top"];

  var btnCancel = gbuttons.add("button", undefined, undefined, {
    name: "btnCancel",
  });
  btnCancel.text = "Cancel";
  btnCancel.onClick = function () {
    dlgAction = "Cancel";
    dlgNL.close();
  };

  var btnOk = gbuttons.add("button", undefined, undefined, { name: "btnOk" });
  btnOk.text = "Start";
  btnOk.onClick = function () {
    dlgAction = "Ok";
    dlgNewDoc = cbNewDoc.value;
    dlgDocWidth = parseFloat(valW.text);
    dlgDocHeight = parseFloat(valH.text);
    dlgNL.close();
  };

  // GROUP1
  // ======
  var group1 = dlgNL.add("group", undefined, { name: "group1" });
  group1.orientation = "column";
  group1.alignChildren = ["left", "center"];
  group1.spacing = 7;
  group1.margins = 0;

  var divider1 = group1.add("panel", undefined, undefined, {
    name: "divider1",
  });
  divider1.alignment = "fill";

  var Credit = group1.add("group");
  Credit.orientation = "column";
  Credit.alignChildren = ["left", "center"];
  Credit.spacing = 0;

  Credit.add(
    "statictext",
    undefined,
    "This application was designed by Tiran Dagan ",
    { name: "Credit" }
  );
  Credit.add(
    "statictext",
    undefined,
    "and inspired by Paul Chamberlain (AKA the Happy Gilder) ",
    { name: "Credit" }
  );

  // GROUP2
  // ======
  var group2 = group1.add("group", undefined, { name: "group2" });
  group2.orientation = "row";
  group2.alignChildren = ["center", "center"];
  group2.spacing = 10;
  group2.margins = 0;
  group2.alignment = ["fill", "center"];

  // GROUP3
  // ======
  var group3 = group2.add("group", undefined, { name: "group3" });
  group3.orientation = "column";
  group3.alignChildren = ["center", "center"];
  group3.spacing = 10;
  group3.margins = 0;

  var YT1_imgString =
    "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%20%00%00%00%20%08%06%00%00%00szz%C3%B4%00%00%00%04gAMA%00%00%C2%B1%C2%8F%0B%C3%BCa%05%00%00%0AIiCCPsRGB%20IEC61966-2.1%00%00H%C2%89%C2%9DSwX%C2%93%C3%B7%16%3E%C3%9F%C3%B7e%0FVB%C3%98%C3%B0%C2%B1%C2%97l%C2%81%00%22%23%C2%AC%08%C3%88%10Y%C2%A2%10%C2%92%00a%C2%84%10%12%40%C3%85%C2%85%C2%88%0AV%14%15%11%C2%9CHU%C3%84%C2%82%C3%95%0AH%C2%9D%C2%88%C3%A2%C2%A0(%C2%B8gA%C2%8A%C2%88Z%C2%8BU%5C8%C3%AE%1F%C3%9C%C2%A7%C2%B5%7Dz%C3%AF%C3%AD%C3%AD%C3%BB%C3%97%C3%BB%C2%BC%C3%A7%C2%9C%C3%A7%C3%BC%C3%8Ey%C3%8F%0F%C2%80%11%12%26%C2%91%C3%A6%C2%A2j%009R%C2%85%3C%3A%C3%98%1F%C2%8FOH%C3%84%C3%89%C2%BD%C2%80%02%15H%C3%A0%04%20%10%C3%A6%C3%8B%C3%82g%05%C3%85%00%00%C3%B0%03yx~t%C2%B0%3F%C3%BC%01%C2%AFo%00%02%00p%C3%95.%24%12%C3%87%C3%A1%C3%BF%C2%83%C2%BAP%26W%00%20%C2%91%00%C3%A0%22%12%C3%A7%0B%01%C2%90R%00%C3%88.T%C3%88%14%00%C3%88%18%00%C2%B0S%C2%B3d%0A%00%C2%94%00%00ly%7CB%22%00%C2%AA%0D%00%C3%AC%C3%B4I%3E%05%00%C3%98%C2%A9%C2%93%C3%9C%17%00%C3%98%C2%A2%1C%C2%A9%08%00%C2%8D%01%00%C2%99(G%24%02%40%C2%BB%00%60U%C2%81R%2C%02%C3%80%C3%82%00%C2%A0%C2%AC%40%22.%04%C3%80%C2%AE%01%C2%80Y%C2%B62G%02%C2%80%C2%BD%05%00v%C2%8EX%C2%90%0F%40%60%00%C2%80%C2%99B%2C%C3%8C%00%208%02%00C%1E%13%C3%8D%03%20L%03%C2%A00%C3%92%C2%BF%C3%A0%C2%A9_p%C2%85%C2%B8H%01%00%C3%80%C3%8B%C2%95%C3%8D%C2%97K%C3%923%14%C2%B8%C2%95%C3%90%1Aw%C3%B2%C3%B0%C3%A0%C3%A2!%C3%A2%C3%82l%C2%B1Ba%17)%10f%09%C3%A4%22%C2%9C%C2%97%C2%9B%23%13H%C3%A7%03L%C3%8E%0C%00%00%1A%C3%B9%C3%91%C3%81%C3%BE8%3F%C2%90%C3%A7%C3%A6%C3%A4%C3%A1%C3%A6f%C3%A7l%C3%AF%C3%B4%C3%85%C2%A2%C3%BEk%C3%B0o%22%3E!%C3%B1%C3%9F%C3%BE%C2%BC%C2%8C%02%04%00%10N%C3%8F%C3%AF%C3%9A_%C3%A5%C3%A5%C3%96%03p%C3%87%01%C2%B0u%C2%BFk%C2%A9%5B%00%C3%9AV%00h%C3%9F%C3%B9%5D3%C3%9B%09%C2%A0Z%0A%C3%90z%C3%B9%C2%8By8%C3%BC%40%1E%C2%9E%C2%A1P%C3%88%3C%1D%1C%0A%0B%0B%C3%AD%25b%C2%A1%C2%BD0%C3%A3%C2%8B%3E%C3%BF3%C3%A1o%C3%A0%C2%8B~%C3%B6%C3%BC%40%1E%C3%BE%C3%9Bz%C3%B0%00q%C2%9A%40%C2%99%C2%AD%C3%80%C2%A3%C2%83%C3%BDqanv%C2%AER%C2%8E%C3%A7%C3%8B%04B1n%C3%B7%C3%A7%23%C3%BE%C3%87%C2%85%7F%C3%BD%C2%8E)%C3%91%C3%A24%C2%B1%5C%2C%15%C2%8A%C3%B1X%C2%89%C2%B8P%22M%C3%87y%C2%B9R%C2%91D!%C3%89%C2%95%C3%A2%12%C3%A9%7F2%C3%B1%1F%C2%96%C3%BD%09%C2%93w%0D%00%C2%AC%C2%86O%C3%80N%C2%B6%07%C2%B5%C3%8Bl%C3%80~%C3%AE%01%02%C2%8B%0EX%C3%92v%00%40~%C3%B3-%C2%8C%1A%0B%C2%91%00%10g42y%C3%B7%00%00%C2%93%C2%BF%C3%B9%C2%8F%40%2B%01%00%C3%8D%C2%97%C2%A4%C3%A3%00%00%C2%BC%C3%A8%18%5C%C2%A8%C2%94%17L%C3%86%08%00%00D%C2%A0%C2%81*%C2%B0A%07%0C%C3%81%14%C2%AC%C3%80%0E%C2%9C%C3%81%1D%C2%BC%C3%80%17%02a%06D%40%0C%24%C3%80%3C%10B%06%C3%A4%C2%80%1C%0A%C2%A1%18%C2%96A%19T%C3%80%3A%C3%98%04%C2%B5%C2%B0%03%1A%C2%A0%11%C2%9A%C3%A1%10%C2%B4%C3%8118%0D%C3%A7%C3%A0%12%5C%C2%81%C3%ABp%17%06%60%18%C2%9E%C3%82%18%C2%BC%C2%86%09%04A%C3%88%08%13a!%3A%C2%88%11b%C2%8E%C3%98%22%C3%8E%08%17%C2%99%C2%8E%04%22aH4%C2%92%C2%80%C2%A4%20%C3%A9%C2%88%14Q%22%C3%85%C3%88r%C2%A4%02%C2%A9Bj%C2%91%5DH%23%C3%B2-r%149%C2%8D%5C%40%C3%BA%C2%90%C3%9B%C3%88%202%C2%8A%C3%BC%C2%8A%C2%BCG1%C2%94%C2%81%C2%B2Q%03%C3%94%02u%40%C2%B9%C2%A8%1F%1A%C2%8A%C3%86%C2%A0s%C3%91t4%0F%5D%C2%80%C2%96%C2%A2k%C3%91%1A%C2%B4%1E%3D%C2%80%C2%B6%C2%A2%C2%A7%C3%91K%C3%A8ut%00%7D%C2%8A%C2%8Ec%C2%80%C3%911%0Ef%C2%8C%C3%99a%5C%C2%8C%C2%87E%60%C2%89X%1A%26%C3%87%16c%C3%A5X5V%C2%8F5c%1DX7v%15%1B%C3%80%C2%9Ea%C3%AF%08%24%02%C2%8B%C2%80%13%C3%AC%08%5E%C2%84%10%C3%82l%C2%82%C2%90%C2%90GXLXC%C2%A8%25%C3%AC%23%C2%B4%12%C2%BA%08W%09%C2%83%C2%841%C3%82'%22%C2%93%C2%A8O%C2%B4%25z%12%C3%B9%C3%84xb%3A%C2%B1%C2%90XF%C2%AC%26%C3%AE!%1E!%C2%9E%25%5E'%0E%13_%C2%93H%24%0E%C3%89%C2%92%C3%A4N%0A!%25%C2%902I%0BIkH%C3%9BH-%C2%A4S%C2%A4%3E%C3%92%10i%C2%9CL%26%C3%AB%C2%90m%C3%89%C3%9E%C3%A4%08%C2%B2%C2%80%C2%AC%20%C2%97%C2%91%C2%B7%C2%90%0F%C2%90O%C2%92%C3%BB%C3%89%C3%83%C3%A4%C2%B7%14%3A%C3%85%C2%88%C3%A2L%09%C2%A2%24R%C2%A4%C2%94%12J5e%3F%C3%A5%04%C2%A5%C2%9F2B%C2%99%C2%A0%C2%AAQ%C3%8D%C2%A9%C2%9E%C3%94%08%C2%AA%C2%88%3A%C2%9FZIm%C2%A0vP%2FS%C2%87%C2%A9%134u%C2%9A%25%C3%8D%C2%9B%16C%C3%8B%C2%A4-%C2%A3%C3%95%C3%90%C2%9Aigi%C3%B7h%2F%C3%A9t%C2%BA%09%C3%9D%C2%83%1EE%C2%97%C3%90%C2%97%C3%92k%C3%A8%07%C3%A9%C3%A7%C3%A9%C2%83%C3%B4w%0C%0D%C2%86%0D%C2%83%C3%87Hb(%19k%19%7B%19%C2%A7%18%C2%B7%19%2F%C2%99L%C2%A6%05%C3%93%C2%97%C2%99%C3%88T0%C3%972%1B%C2%99g%C2%98%0F%C2%98oUX*%C3%B6*%7C%15%C2%91%C3%8A%12%C2%95%3A%C2%95V%C2%95~%C2%95%C3%A7%C2%AATUsU%3F%C3%95y%C2%AA%0BT%C2%ABU%0F%C2%AB%5EV%7D%C2%A6FU%C2%B3P%C3%A3%C2%A9%09%C3%94%16%C2%AB%C3%95%C2%A9%1DU%C2%BB%C2%A96%C2%AE%C3%8ERwR%C2%8FP%C3%8FQ_%C2%A3%C2%BE_%C3%BD%C2%82%C3%BAc%0D%C2%B2%C2%86%C2%85F%C2%A0%C2%86H%C2%A3Tc%C2%B7%C3%86%19%C2%8D!%16%C3%862e%C3%B1XB%C3%96rV%03%C3%AB%2Ck%C2%98Mb%5B%C2%B2%C3%B9%C3%ACLv%05%C3%BB%1Bv%2F%7BLSCs%C2%AAf%C2%ACf%C2%91f%C2%9D%C3%A6q%C3%8D%01%0E%C3%86%C2%B1%C3%A0%C3%B09%C3%99%C2%9CJ%C3%8E!%C3%8E%0D%C3%8E%7B-%03-%3F-%C2%B1%C3%96j%C2%ADf%C2%AD~%C2%AD7%C3%9Az%C3%9A%C2%BE%C3%9Ab%C3%ADr%C3%AD%16%C3%AD%C3%AB%C3%9A%C3%AFup%C2%9D%40%C2%9D%2C%C2%9D%C3%B5%3Am%3A%C3%B7u%09%C2%BA6%C2%BAQ%C2%BA%C2%85%C2%BA%C3%9Bu%C3%8F%C3%AA%3E%C3%93c%C3%ABy%C3%A9%09%C3%B5%C3%8A%C3%B5%0E%C3%A9%C3%9D%C3%91G%C3%B5m%C3%B4%C2%A3%C3%B5%17%C3%AA%C3%AF%C3%96%C3%AF%C3%91%1F704%086%C2%90%19l18c%C3%B0%C3%8C%C2%90c%C3%A8k%C2%98i%C2%B8%C3%91%C3%B0%C2%84%C3%A1%C2%A8%11%C3%8Bh%C2%BA%C2%91%C3%84h%C2%A3%C3%91I%C2%A3'%C2%B8%26%C3%AE%C2%87g%C3%A35x%17%3Ef%C2%ACo%1Cb%C2%AC4%C3%9Ee%C3%9Ck%3Cabi2%C3%9B%C2%A4%C3%84%C2%A4%C3%85%C3%A4%C2%BE)%C3%8D%C2%94k%C2%9Af%C2%BA%C3%91%C2%B4%C3%93t%C3%8C%C3%8C%C3%88%2C%C3%9C%C2%AC%C3%98%C2%AC%C3%89%C3%AC%C2%8E9%C3%95%C2%9Ck%C2%9Ea%C2%BE%C3%99%C2%BC%C3%9B%C3%BC%C2%8D%C2%85%C2%A5E%C2%9C%C3%85J%C2%8B6%C2%8B%C3%87%C2%96%C3%9A%C2%96%7C%C3%8B%05%C2%96M%C2%96%C3%B7%C2%AC%C2%98V%3EVyV%C3%B5V%C3%97%C2%ACI%C3%96%5C%C3%AB%2C%C3%ABm%C3%96WlP%1BW%C2%9B%0C%C2%9B%3A%C2%9B%C3%8B%C2%B6%C2%A8%C2%AD%C2%9B%C2%AD%C3%84v%C2%9Bm%C3%9F%14%C3%A2%14%C2%8F)%C3%92)%C3%B5Sn%C3%9A1%C3%AC%C3%BC%C3%AC%0A%C3%AC%C2%9A%C3%AC%06%C3%AD9%C3%B6a%C3%B6%25%C3%B6m%C3%B6%C3%8F%1D%C3%8C%1C%12%1D%C3%96%3Bt%3B%7Crtu%C3%8Cvlp%C2%BC%C3%AB%C2%A4%C3%A14%C3%83%C2%A9%C3%84%C2%A9%C3%83%C3%A9Wg%1Bg%C2%A1s%C2%9D%C3%B35%17%C2%A6K%C2%90%C3%8B%12%C2%97v%C2%97%17Sm%C2%A7%C2%8A%C2%A7n%C2%9Fz%C3%8B%C2%95%C3%A5%1A%C3%AE%C2%BA%C3%92%C2%B5%C3%93%C3%B5%C2%A3%C2%9B%C2%BB%C2%9B%C3%9C%C2%AD%C3%99m%C3%94%C3%9D%C3%8C%3D%C3%85%7D%C2%AB%C3%BBM.%C2%9B%1B%C3%89%5D%C3%83%3D%C3%AFA%C3%B4%C3%B0%C3%B7X%C3%A2q%C3%8C%C3%A3%C2%9D%C2%A7%C2%9B%C2%A7%C3%82%C3%B3%C2%90%C3%A7%2F%5Ev%5EY%5E%C3%BB%C2%BD%1EO%C2%B3%C2%9C%26%C2%9E%C3%960m%C3%88%C3%9B%C3%84%5B%C3%A0%C2%BD%C3%8B%7B%60%3A%3E%3De%C3%BA%C3%8E%C3%A9%03%3E%C3%86%3E%02%C2%9Fz%C2%9F%C2%87%C2%BE%C2%A6%C2%BE%22%C3%9F%3D%C2%BE%23~%C3%96~%C2%99~%07%C3%BC%C2%9E%C3%BB%3B%C3%BA%C3%8B%C3%BD%C2%8F%C3%B8%C2%BF%C3%A1y%C3%B2%16%C3%B1N%05%60%01%C3%81%01%C3%A5%01%C2%BD%C2%81%1A%C2%81%C2%B3%03k%03%1F%04%C2%99%04%C2%A5%075%05%C2%8D%05%C2%BB%06%2F%0C%3E%15B%0C%09%0DY%1Fr%C2%93o%C3%80%17%C3%B2%1B%C3%B9c3%C3%9Cg%2C%C2%9A%C3%91%15%C3%8A%08%C2%9D%15Z%1B%C3%BA0%C3%8C%26L%1E%C3%96%11%C2%8E%C2%86%C3%8F%08%C3%9F%10~o%C2%A6%C3%B9L%C3%A9%C3%8C%C2%B6%08%C2%88%C3%A0Gl%C2%88%C2%B8%1Fi%19%C2%99%17%C3%B9%7D%14)*2%C2%AA.%C3%AAQ%C2%B4Stqt%C3%B7%2C%C3%96%C2%AC%C3%A4Y%C3%BBg%C2%BD%C2%8E%C3%B1%C2%8F%C2%A9%C2%8C%C2%B9%3B%C3%9Bj%C2%B6rvg%C2%ACjlRlc%C3%AC%C2%9B%C2%B8%C2%80%C2%B8%C2%AA%C2%B8%C2%81x%C2%87%C3%B8E%C3%B1%C2%97%12t%13%24%09%C3%AD%C2%89%C3%A4%C3%84%C3%98%C3%84%3D%C2%89%C3%A3s%02%C3%A7l%C2%9A3%C2%9C%C3%A4%C2%9AT%C2%96tc%C2%AE%C3%A5%C3%9C%C2%A2%C2%B9%17%C3%A6%C3%A9%C3%8E%C3%8B%C2%9Ew%3CY5Y%C2%90%7C8%C2%85%C2%98%12%C2%97%C2%B2%3F%C3%A5%C2%83%20BP%2F%18O%C3%A5%C2%A7nM%1D%13%C3%B2%C2%84%C2%9B%C2%85OE%C2%BE%C2%A2%C2%8D%C2%A2Q%C2%B1%C2%B7%C2%B8J%3C%C2%92%C3%A6%C2%9DV%C2%95%C3%B68%C3%9D%3B%7DC%C3%BAh%C2%86OFu%C3%863%09OR%2By%C2%91%19%C2%92%C2%B9%23%C3%B3MVD%C3%96%C3%9E%C2%AC%C3%8F%C3%99q%C3%99-9%C2%94%C2%9C%C2%94%C2%9C%C2%A3R%0Di%C2%96%C2%B4%2B%C3%970%C2%B7(%C2%B7Of%2B%2B%C2%93%0D%C3%A4y%C3%A6m%C3%8A%1B%C2%93%C2%87%C3%8A%C3%B7%C3%A4%23%C3%B9s%C3%B3%C3%9B%15l%C2%85L%C3%91%C2%A3%C2%B4R%C2%AEP%0E%16L%2F%C2%A8%2Bx%5B%18%5Bx%C2%B8H%C2%BDHZ%C3%943%C3%9Ff%C3%BE%C3%AA%C3%B9%23%0B%C2%82%16%7C%C2%BD%C2%90%C2%B0P%C2%B8%C2%B0%C2%B3%C3%98%C2%B8xY%C3%B1%C3%A0%22%C2%BFE%C2%BB%16%23%C2%8BS%17w.1%5DR%C2%BAdxi%C3%B0%C3%92%7D%C3%8Bh%C3%8B%C2%B2%C2%96%C3%BDP%C3%A2XRU%C3%B2jy%C3%9C%C3%B2%C2%8ER%C2%83%C3%92%C2%A5%C2%A5C%2B%C2%82W4%C2%95%C2%A9%C2%94%C3%89%C3%8Bn%C2%AE%C3%B4Z%C2%B9c%15a%C2%95dU%C3%AFj%C2%97%C3%95%5BV%7F*%17%C2%95_%C2%ACp%C2%AC%C2%A8%C2%AE%C3%B8%C2%B0F%C2%B8%C3%A6%C3%A2WN_%C3%95%7C%C3%B5ym%C3%9A%C3%9A%C3%9EJ%C2%B7%C3%8A%C3%AD%C3%ABH%C3%AB%C2%A4%C3%ABn%C2%AC%C3%B7Y%C2%BF%C2%AFJ%C2%BDjA%C3%95%C3%90%C2%86%C3%B0%0D%C2%AD%1B%C3%B1%C2%8D%C3%A5%1B_mJ%C3%9Et%C2%A1zj%C3%B5%C2%8E%C3%8D%C2%B4%C3%8D%C3%8A%C3%8D%035a5%C3%AD%5B%C3%8C%C2%B6%C2%AC%C3%9B%C3%B2%C2%A16%C2%A3%C3%B6z%C2%9D%7F%5D%C3%8BV%C3%BD%C2%AD%C2%AB%C2%B7%C2%BE%C3%99%26%C3%9A%C3%96%C2%BF%C3%9Dw%7B%C3%B3%0E%C2%83%1D%15%3B%C3%9E%C3%AF%C2%94%C3%AC%C2%BC%C2%B5%2BxWk%C2%BDE%7D%C3%B5n%C3%92%C3%AE%C2%82%C3%9D%C2%8F%1Ab%1B%C2%BA%C2%BF%C3%A6~%C3%9D%C2%B8GwO%C3%85%C2%9E%C2%8F%7B%C2%A5%7B%07%C3%B6E%C3%AF%C3%ABjtol%C3%9C%C2%AF%C2%BF%C2%BF%C2%B2%09mR6%C2%8D%1EH%3Ap%C3%A5%C2%9B%C2%80o%C3%9A%C2%9B%C3%AD%C2%9Aw%C2%B5pZ*%0E%C3%82A%C3%A5%C3%81'%C3%9F%C2%A6%7C%7B%C3%A3P%C3%A8%C2%A1%C3%8E%C3%83%C3%9C%C3%83%C3%8D%C3%9F%C2%99%7F%C2%B7%C3%B5%08%C3%ABHy%2B%C3%92%3A%C2%BFu%C2%AC-%C2%A3m%C2%A0%3D%C2%A1%C2%BD%C3%AF%C3%A8%C2%8C%C2%A3%C2%9D%1D%5E%1DG%C2%BE%C2%B7%C3%BF~%C3%AF1%C3%A3cu%C3%875%C2%8FW%C2%9E%C2%A0%C2%9D(%3D%C3%B1%C3%B9%C3%A4%C2%82%C2%93%C3%A3%C2%A7d%C2%A7%C2%9E%C2%9DN%3F%3D%C3%94%C2%99%C3%9Cy%C3%B7L%C3%BC%C2%99k%5DQ%5D%C2%BDgC%C3%8F%C2%9E%3F%17t%C3%AEL%C2%B7_%C3%B7%C3%89%C3%B3%C3%9E%C3%A7%C2%8F%5D%C3%B0%C2%BCp%C3%B4%22%C3%B7b%C3%9B%25%C2%B7K%C2%AD%3D%C2%AE%3DG~p%C3%BD%C3%A1H%C2%AF%5Bo%C3%ABe%C3%B7%C3%8B%C3%ADW%3C%C2%AEt%C3%B4M%C3%AB%3B%C3%91%C3%AF%C3%93%7F%C3%BAj%C3%80%C3%95s%C3%97%C3%B8%C3%97.%5D%C2%9Fy%C2%BD%C3%AF%C3%86%C3%AC%1B%C2%B7n%26%C3%9D%1C%C2%B8%25%C2%BA%C3%B5%C3%B8v%C3%B6%C3%AD%17w%0A%C3%AEL%C3%9C%5Dz%C2%8Fx%C2%AF%C3%BC%C2%BE%C3%9A%C3%BD%C3%AA%07%C3%BA%0F%C3%AA%7F%C2%B4%C3%BE%C2%B1e%C3%80m%C3%A0%C3%B8%60%C3%80%60%C3%8F%C3%83Y%0F%C3%AF%0E%09%C2%87%C2%9E%C3%BE%C2%94%C3%BF%C3%93%C2%87%C3%A1%C3%92G%C3%8CG%C3%95%23F%23%C2%8D%C2%8F%C2%9D%1F%1F%1B%0D%1A%C2%BD%C3%B2d%C3%8E%C2%93%C3%A1%C2%A7%C2%B2%C2%A7%13%C3%8F%C3%8A~V%C3%BFy%C3%ABs%C2%AB%C3%A7%C3%9F%C3%BD%C3%A2%C3%BBK%C3%8FX%C3%BC%C3%98%C3%B0%0B%C3%B9%C2%8B%C3%8F%C2%BF%C2%AEy%C2%A9%C3%B3r%C3%AF%C2%AB%C2%A9%C2%AF%3A%C3%87%23%C3%87%1F%C2%BC%C3%8Ey%3D%C3%B1%C2%A6%C3%BC%C2%AD%C3%8E%C3%9B%7D%C3%AF%C2%B8%C3%AF%C2%BA%C3%9F%C3%87%C2%BD%1F%C2%99(%C3%BC%40%C3%BEP%C3%B3%C3%91%C3%BAc%C3%87%C2%A7%C3%90O%C3%B7%3E%C3%A7%7C%C3%BE%C3%BC%2F%C3%B7%C2%84%C3%B3%C3%BB-G8%C3%8F%00%00%00%20cHRM%00%00z%26%00%00%C2%80%C2%84%00%00%C3%BA%00%00%00%C2%80%C3%A8%00%00u0%00%00%C3%AA%60%00%00%3A%C2%98%00%00%17p%C2%9C%C2%BAQ%3C%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%01uIDATX%C2%85%C3%AD%C2%97%C2%BBj%02A%14%C2%86%C2%BF5B%20%17!%20n%C2%8A%C2%A4%11%C3%ACM%C2%A1U%1E%40%C2%B0%C3%B3%15%2C%7D%1A%05%C3%9F%C3%80W%10%7C%C2%80%14Z%C3%85%226%09%2C6J%C2%BA%C2%90%2BDcN%C2%8Aq%C3%97C0a%2F%C2%89%C3%93%C3%AC%0F%3F%C3%AC.%C3%8C%C2%9Eof%C3%8E%2C%C3%BF%3A%22%C2%82Me%C2%ACVO%01R%00%20%1B%5C9Np%05%5C%02%17%C3%80)p%02%1C%C2%AE%7D%0C%C3%AC%03%7B%18%C3%B8%C2%ACz%C3%87%C3%87%C3%9A%C2%9F%C3%80%0Ax%07%C2%9E%C2%81%C3%97%C2%B5%1F%C2%80%7B%C3%A0%1A%C2%B8%02%C3%8C%C3%B1%13%11c%C3%B3%C3%A4%5C%C3%80%13%C2%90%7F%C2%B6'p%26%5B%00%26%3B(%C3%AE%7B%C3%B2%1D%C2%A0%C2%B1%C3%83%C3%A2%C2%BE%1B%C2%BA%09%C3%8B%7F%C3%92U%C3%91T%C3%96%00E%0B%00E%0DP%08%3D%C2%ACT%C2%82v%1B%C3%B2%C3%B9%C2%A4%00%05%C3%9D%03%C2%A3%C3%90%7B%C3%A7%C2%BA%12%C2%A8%C3%95J%C3%92%03C%0D%10%C3%BE%04%C2%B8%C2%AE%C3%88r%C2%B9%C2%81%C2%98%C3%8DDj%C2%B58%007%1A%C3%A0.6%C2%80%C2%AF%C3%A1P%C2%A4R%C2%89%02p%C2%AB%01%C2%A6%C2%89%01%7C%C3%95%C3%ABa%01%C2%A6%C2%BA%09%C2%97I%3B%C2%8A%C3%91%08%C2%AAU%C3%A8%C3%B7%C3%83%C2%8EXd%C3%B5M%C3%AC%C3%82%C3%B394%C2%9B0%18D%1D%C2%B9%C2%B0~%0A%C3%B4%16%3C%C2%86%C3%A6%C3%8E%C3%A5%C2%A0%C3%931%C3%9F%C2%81n7%C3%AA%C2%AC%C2%B5%C2%9E%C3%B4%0A%C3%B4%12%C3%8C%24%C2%AE%7Bz%05%C2%BC%24S%C2%89)O%03%C2%8C-%00%C2%8C%C3%B5%16X%C3%8F%03%C2%88I)%3BMDN%C3%B0g%C3%B4%7B%26%3C%00%C2%8E%C3%98d%C3%82%0C%26%17n%C3%8B%C2%84%2BL.%C3%B43%C3%A1%0B%C3%B0%C3%86%0F%C2%99p%03%60I%C3%96cy%0A%60%1D%C3%A0%0B-%C3%B7(%C3%8F%C3%B0%C3%88L6%00%00%00%00IEND%C2%AEB%60%C2%82";
  var YT1 = group3.add("iconbutton", undefined, File.decode(YT1_imgString), {
    name: "YT1",
    style: "toolbutton",
  });
  YT1.onClick = function() {
    GotoLink("https://www.youtube.com/channel/UCllNtUEAB47v38EZUo7BFlg");
  }
  var statictext3 = group3.add("statictext", undefined, undefined, {
    name: "statictext3",
  });
  statictext3.helpTip = "Click to visit Tiran's Youtube Channel";
  statictext3.text = "Tiran's Channel";
  YT1.helpTip = statictext3.helpTip;
  // GROUP2
  // ======
  var statictext4 = group2.add("statictext", undefined, undefined, {
    name: "statictext4",
  });
  statictext4.preferredSize.width = 80;

  // GROUP4
  // ======
  var group4 = group2.add("group", undefined, { name: "group4" });
  group4.orientation = "column";
  group4.alignChildren = ["center", "center"];
  group4.spacing = 10;
  group4.margins = 0;

  var YT2 = group4.add("iconbutton", undefined, File.decode(YT1_imgString), {
    name: "YT2",
    style: "toolbutton",
  });
  YT2.onClick = function() {
    GotoLink("https://www.youtube.com/channel/UC5isMTsFMUaOR-AChVx0aVw");
  }
  var statictext5 = group4.add("statictext", undefined, undefined, {
    name: "statictext5",
  });
  statictext5.helpTip = "Click to visit the Happy Gilder channel on You Tube";
  YT2.helpTip = statictext5.helpTip;
  statictext5.text = "Happy Gilder";

  // GROUP2
  // ======
  var statictext6 = group2.add("statictext", undefined, undefined, {
    name: "statictext6",
  });
  statictext6.preferredSize.width = 80;

  // GROUP5
  // ======
  var group5 = group2.add("group", undefined, { name: "group5" });
  group5.orientation = "column";
  group5.alignChildren = ["center", "center"];
  group5.spacing = 10;
  group5.margins = 0;

  var YT3 = group5.add("iconbutton", undefined, File.decode(YT1_imgString), {
    name: "YT3",
    style: "toolbutton",
  });
  YT3.onClick = function() {
    GotoLink("https://www.youtube.com/watch?v=pgLfk-4fqKs");
  }
  var statictext7 = group5.add("statictext", undefined, undefined, {
    name: "statictext7",
  });
  statictext7.helpTip =  "Paul's original action and accompanying video describing the use of the natural layout templates";
  YT3.helpTip = statictext7.helpTip;
  statictext7.text = "Instructions";

  dlgNL.show();
}

function DrawShape() {
  var y = arguments.length;
  var i = 0;

  var lineSubPathArray_ArraysALL = [];

  var docSquarePathArray = [];

  var docSquarePathArray = new SubPathInfo();
  docSquarePathArray.closed = true;
  docSquarePathArray.operation = ShapeOperation.SHAPEADD;
  docSquarePathArray.entireSubPath = lineArr(
    [0, 0],
    [docWidth, 0],
    [docWidth, docHeight],
    [0, docHeight],
    [0, 0]
  );
  lineSubPathArray_ArraysALL.push(docSquarePathArray);

  var lineSubPathArray = new SubPathInfo();
  lineSubPathArray.closed = true;
  lineSubPathArray.operation = ShapeOperation.SHAPESUBTRACT;
  lineSubPathArray.entireSubPath = lineArr.apply(null, arguments);
  lineSubPathArray_ArraysALL.push(lineSubPathArray);
  try {
    var myPathItem = doc.pathItems.getByName("Natural Layout Template");
  } catch (err) {
    var myPathItem = doc.pathItems.add(
      "Natural Layout Template",
      lineSubPathArray_ArraysALL
    );
  }
  var scolor = new SolidColor();
  scolor.rgb.red = 173;
  scolor.rgb.green = 41;
  scolor.rgb.blue = 30;

  doc.layers[0].isBackgroundLayer = false;
  myPathItem.makeSelection();
  doc.selection.fill(scolor);
  doc.selection.deselect();
  myPathItem.remove();

  function lineArr() {
    var docCoef = doc.resolution / 72;
    var lineArray = [];
    var y = arguments.length;

    for (i = 0; i < y; i++) {
      lineArray[i] = new PathPointInfo();
      lineArray[i].kind = PointKind.CORNERPOINT;
      lineArray[i].anchor = [
        arguments[i][0] / docCoef,
        arguments[i][1] / docCoef,
      ];
      lineArray[i].leftDirection = lineArray[i].anchor;
      lineArray[i].rightDirection = lineArray[i].anchor;
    }
    return lineArray;
  }
}

//
// Get the dialog started
//
var dlgAction = "?";
var dlgNewDoc = false;
var dlgDocWidth = 8;
dlgDocHeight = 11;

SettingsDialog();
if (dlgAction == "Ok") {
  if (dlgNewDoc) {
    app.preferences.rulerUnits = Units.INCHES;
    app.preferences.typeUnits = TypeUnits.POINTS;
    var doc = app.documents.add(
      dlgDocWidth,
      dlgDocHeight,
      300,
      "Natural Layout Sign"
    );
  } else {
    var doc = app.activeDocument;
  }

  var startRulerUnits = app.preferences.rulerUnits;
  var startTypeUnits = app.preferences.typeUnits;

  app.preferences.rulerUnits = Units.PIXELS;
  app.preferences.typeUnits = TypeUnits.POINTS;

  var docWidth = doc.width.value;
  var docHeight = doc.height.value;
  var docUnits = doc.measurementScale.logicalUnits;

  var docShortestAxis;

  if (docWidth <= docHeight) {
    docShortestAxis = docWidth;
  } else {
    docShortestAxis = docHeight;
  }

  var natural_layout_a = 0.15 * docShortestAxis;
  var natural_layout_a_bottom = natural_layout_a * 1.15;
  var natural_layout_b = 0.17 * docWidth;
  var natural_layout_top = 0.29 * docHeight;
  var natural_layout_mid = 0.38 * docHeight;
  var natural_layout_bottom = 0.33 * docHeight;
  var natural_layout_optical_center_y = 0.46 * docHeight;

  DrawShape(
    [natural_layout_b, natural_layout_a],
    [docWidth - natural_layout_b, natural_layout_a],
    [docWidth - natural_layout_b, natural_layout_top],
    [docWidth - natural_layout_a, natural_layout_top],
    [docWidth - natural_layout_a, natural_layout_top + natural_layout_mid],
    [docWidth - natural_layout_b, natural_layout_top + natural_layout_mid],
    [docWidth - natural_layout_b, docHeight - natural_layout_a_bottom],
    [natural_layout_b, docHeight - natural_layout_a_bottom],
    [natural_layout_b, docHeight - natural_layout_bottom],
    [natural_layout_a, docHeight - natural_layout_bottom],
    [natural_layout_a, natural_layout_top],
    [natural_layout_b, natural_layout_top],
    [natural_layout_b, natural_layout_a]
  );

  // Add guides
  doc.guides.removeAll();
  var NL_mid_v = doc.guides.add(Direction.VERTICAL, docWidth / 2);
  var NL_mid_h = doc.guides.add(
    Direction.HORIZONTAL,
    natural_layout_optical_center_y
  );

  var NL_h_1 = doc.guides.add(Direction.HORIZONTAL, natural_layout_a);
  var NL_h_2 = doc.guides.add(Direction.HORIZONTAL, natural_layout_top);
  var NL_h_3 = doc.guides.add(
    Direction.HORIZONTAL,
    docHeight - natural_layout_bottom
  );
  var NL_h_4 = doc.guides.add(
    Direction.HORIZONTAL,
    docHeight - natural_layout_a_bottom
  );

  var NL_v_1 = doc.guides.add(Direction.VERTICAL, natural_layout_a);
  var NL_v_2 = doc.guides.add(Direction.VERTICAL, natural_layout_b);
  var NL_v_3 = doc.guides.add(Direction.VERTICAL, docWidth - natural_layout_a);
  var NL_v_4 = doc.guides.add(Direction.VERTICAL, docWidth - natural_layout_b);

  app.preferences.rulerUnits = startRulerUnits;
  app.preferences.typeUnits = startTypeUnits;
}
