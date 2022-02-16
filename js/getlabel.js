// ---------- FUNCTION TO ADD LABELS TO THE ORDER ----------

// function to add labels
// this function will add up to 4 labels to an order
function getLabel() {

    // declare variables
    var tempArray = [];
    var tempObj = {}

    // temporary path
    var tempLabelReq = 'label-req0';
    var labelOrderedPath = '';
    var position = 0;
    var labelPDF = '';

    // temporary checkbox
    var tempInputQty = 'req0';
    var tempChecked;

    // temporary quantity ordered
    var tempReqQty = 'req0-qty';    
    var qtyLabelOrdered = 0;

    // iterate over 4 possible labels' order
    for (let i = 1; i <= 4; i++) {
        // getting the path of the label ordered
        tempLabelReq = tempLabelReq.slice(0,9)+(i).toString();
        labelOrderedPath = document.getElementById(tempLabelReq).src;
        position = labelOrderedPath.search('image');
        labelPDF = labelOrderedPath.slice(position);

        // getting value of check
        var tempInputQty = tempInputQty.slice(0,3)+(i).toString();
        tempChecked = document.getElementById(tempInputQty).checked;

        //getting the quantity of the label ordered
        tempReqQty = tempReqQty.slice(0,3)+(i).toString()+tempReqQty.slice(4,8);
        qtyLabelOrdered = document.getElementById(tempReqQty).value;
        
        // condition to find out if label was ordered based on the quantity
        if (qtyLabelOrdered > 0 && labelPDF !== 'images/logo-small.png' && tempChecked) {
            tempObj = { pdf: labelPDF, qty: qtyLabelOrdered};
            tempArray.push(tempObj);
        }
    }
    // return array of objects
    return tempArray;
}