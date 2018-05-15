//this function will be called after the JavaScriptApplet code has been loaded.
function jsmeOnLoad() {
var startingStructure = "13 14 C 15.94 -11.45 C 15.94 -10.05 C 14.72 -9.35 C 13.51 -10.05 C 13.51 -11.45 C 14.72 -12.15 C 17.34 -11.45 C 17.34 -10.05 O 18.33 -9.06 C 18.33 -12.44 C 17.96 -13.79 C 19.68 -12.07 N 21.03 -11.71 1 2 1 2 3 -1 3 4 1 4 5 1 5 6 1 1 6 -1 7 8 1 2 8 1 1 7 1 8 9 2 7 10 -1 10 11 2 10 12 1 12 13 3";

//Instantiate a new JSME:
//arguments: HTML id, width, height (must be string not number!)

	jsmeApplet = new JSApplet.JSME("appletContainer", "600px", "440px", {
		//optional parameters
		"options" : "query,hydrogens",
		"jme" : startingStructure
	});



//Alternative method: the size is not specified: the applet will use 100% of the space of its parent container "appletContainer".
//Be sure that the parent container size > 0, otherwise the applet will not be visible

/*    	jsmeApplet = new JSApplet.JSME("appletContainer",  {
		//optional parameters
	"options" : "query,hydrogens",
	"jme" : startingStructure
});
*/



  //Opera patch: if some applet elements are not displayed, force repaint
  //jsmeApplet.deferredRepaint(); //the applet will be repainted after the browser event loop returns
  //it is recommended to use it if the JSME is created outside this jsmeOnLoad() function



  //jsmeApplet has the same API as the original Java applet
//One can mimic the JME Java applet access to simplify the adaptation of HTML and JavaScript code:
document.JME = jsmeApplet;


  //suggestion
//all buttons that access the jsme variable were disabled in the html
//Now enable all buttons that can access the jsme variable since the applet is ready
//example:
//document.getElementById("button").disabled=false;


document.getElementById("inchiKeyUrlTextArea").value = jsmeApplet.getWebSearchInchiKeyBaseUrl();

}



function readMolecule() {
  var jme = "16 17 C 7.37 -8.99 C 7.37 -7.59 C 6.16 -6.89 C 4.95 -7.59 C 4.95 -8.99 C 6.16 -9.69 N 8.58 -6.89 C 8.58 -5.49 C 7.37 -4.79 O 6.16 -5.49 C 9.80 -7.59 O 9.80 -8.99 C 11.01 -6.89 Cl 12.22 -7.59 Cl 11.01 -5.49 C 9.80 -4.79 1 2 1 2 3 2 3 4 1 4 5 2 5 6 1 6 1 2 7 8 1 8 9 1 9 10 1 3 10 1 2 7 1 7 11 1 11 12 2 11 13 1 13 14 1 13 15 1 8 16 1";
  jsmeApplet.readMolecule(jme); // or document.JME.readMolecule(jme);
}

function readMultipart() {
  var jme = "9 9 C 6.68 -7.15 C 5.47 -6.45 C 4.26 -7.15 C 4.26 -8.55 C 5.47 -9.25 C 6.68 -8.55 C 5.47 -5.05 O- 6.68 -4.35 O 4.26 -4.35 1 2 1 2 3 2 3 4 1 4 5 2 5 6 1 6 1 2 2 7 1 7 8 1 7 9 2|1 0 Na+ 12.21 -6.61";
  jsmeApplet.readMolecule(jme) // or document.JME.readMolecule(jme
}

function readReaction() {
  var jme = "3 2 C:1 1.41 -7.12 O:2 1.41 -5.72 Cl 2.63 -7.82 1 2 2 1 3 1|3 2 N:3 5.72 -6.78 C:4 7.12 -6.78 H:5 5.02 -7.99 1 2 1 1 3 1 >> 5 4 C:1 13.51 -6.40 O:2 13.51 -5.00 N:3 14.72 -7.10 C:4 15.94 -6.40 H:5 14.71 -8.50 1 2 2 1 3 1 3 4 1 3 5 1";
  jsmeApplet.readMolecule(jme);
}


  function getMolfile(isV3000) {
  	var data = document.JME.molFile(isV3000);
  	document.getElementById("jme_output").value = data;

  }
  function getSmiles() {
  	var data = document.JME.smiles();
  	document.getElementById("jme_output").value = data;
 }
  function getJMEstring() {
  	var data = document.JME.jmeFile();
  	document.getElementById("jme_output").value = data;
  }
function readMoleculeFromTextArea() {
  var jme = document.getElementById("jme_output").value;
  jsmeApplet.readMolecule(jme);
}
function readMOLFromTextArea() {
  var mol = document.getElementById("jme_output").value;
  jsmeApplet.readMolFile(mol);
}

function readAnyFromTextArea() {
  var mol = document.getElementById("jme_output").value;
  jsmeApplet.readGenericMolecularInput(mol);
}
