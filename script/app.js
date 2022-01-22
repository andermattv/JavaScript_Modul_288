let index;
let meta = undefined;


/**
 * Ausgabe zeigen
 */
function showUI(){
    //Identification
    let htmlObj = document.getElementById("meta");
    htmlObj.innerHTML =
        `Name: ${meta.name}<br>`+
        `Kategorie: ${meta.kategorie}<br>`+
        `Datum: ${meta.datum}<br>`+
        `Ort: ${meta.ort}<br>`+
        `Blende: ${meta.blende}<br>`+
        `Verschlusszeit: ${meta.verschlusszeit}<br>`+
        `ISO-Wert: ${meta.iso}<br>`+
        `Kamera: ${meta.kamera}<br>`+
        `Objektiv: ${meta.objektiv}<br>`+
        `Bildbearbeitung: ${meta.bildbearbeitung}`
    ;
    let imgObj = document.getElementById("bild");
    imgObj.src = meta.src;

    //Index im Pagination-Element zeigen
    htmlObj = document.getElementById("showIndex");
//clear
    htmlObj.innerHTML = "";
//set
    htmlObj.innerHTML = index;
}



/**
 * Nächster Eintrag zeigen
 */
function showNext() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index eins kleiner als das Maximum ist
        if (metaList.length-1 > index){
            //... erhöhe den index um 1
            index++;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    meta = metaList[index];
    //zeige den Eintrag
    showUI();
}

/**
 *  Vorhergehender Eintrag zeigen
 */
function showPrevious() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index grösser als das Minimum ist
        if (index > 0){
            //... vermindere den index um 1
            index--;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    meta = metaList[index];
    //zeige den Eintrag
    showUI();
}

//start app
//Falls der index nicht definiert ist ...
if (meta === undefined){
    //... dann setze den index auf 0 (Anfang)
    index = 0;
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    meta = metaList[index];
    //zeige den Eintrag
    showUI();
}
