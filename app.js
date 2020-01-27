/* app.js */

// table container
var animatedTable = document.querySelector("table.board");


/*************************************************************
 *  ON LOAD ANIMATION
 * 
 *  DO NOT CHANGE
 * 
 *  When the page is first loaded, show three random points  
 *  on the animated to demonstrate the pulse effect. 
 * ***********************************************************/
function onLoad(){
  pulseColor(5, 5, 5);
}

/*************************************************************
 *  ANIMATED TABLE EVENT LISTENER
 * 
 *  TBD
 * 
 *  If the element pressed is a table cell then call the 
 *  pulseColor function. The pulseDepth is randomly set to an 
 *  integer between 1 and 4.
 * ***********************************************************/
animatedTable.addEventListener("click", function(){
    
    

});

/*************************************************************
 *  PULSE COLORS FUNCTION
 * 
 *  TBD
 * 
 *  Given an x coordinate, y coordinate, and pulseDepth, add  
 *  animate-table-cell to the table cell at those coordinates,
 *  remove the animation class after 500ms, and call the pulse
 *  function with a decremented pulse depth.
 * ***********************************************************/
function pulseColor(rowNum, colNum, pulseDepth){
    
    

}

/*************************************************************
 *  VERIFY COORDINATES FUNCTION
 * 
 *  TBD
 * 
 *  Check to see if the given coordinates correspond to an 
 *  existing element that has an id attribute with these
 *  coordinates.
 * ***********************************************************/
function verifyCoordinates(rowNum, colNum){
    if (document.getElementById(rowNum+"-"+colNum) != null && rowNum >= 0 && rowNum <= 24 && colNum >= 0 && colNum <= 31){
        return true;
    }
    else{
        return false;
    }
}