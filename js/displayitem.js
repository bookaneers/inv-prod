// ---------- FUNCTION TO DISPLAY ITEMS ----------

// function to display entry
function newItem(entry) {

    // ---------- STRUCTURE TAGS ----------
    
    // create a new li listed-item
    const $listedItem = document.createElement('li');
    $listedItem.setAttribute('class', 'listed-item');
    
    // create main div row
    const $mainRow = document.createElement('div');
    $mainRow.setAttribute('class', 'main-row');

    // create secondary div row
    const $row1 = document.createElement('div');
    $row1.setAttribute('class', 'list-row');

    // create secondary div row
    const $row2 = document.createElement('div');
    $row2.setAttribute('class', 'list-row');

    // create secondary div row
    const $row3 = document.createElement('div');
    $row3.setAttribute('class', 'list-row');

    // create secondary div row
    const $row4 = document.createElement('div');
    $row4.setAttribute('class', 'list-row');

    // create a new div one-fourth-column
    const $listedOneFourthColumn1 = document.createElement('div');
    $listedOneFourthColumn1.setAttribute('class', 'list-one-fourth-column');

    // create a new div one-fourth-column
    const $listedOneFourthColumn2 = document.createElement('div');
    $listedOneFourthColumn2.setAttribute('class', 'list-one-fourth-column');

    // create a new div one-fourth-column
    const $listedOneFourthColumn3 = document.createElement('div');
    $listedOneFourthColumn3.setAttribute('class', 'list-one-fourth-column');

    // create a new div one-fourth-column
    const $listedOneFourthColumn4 = document.createElement('div');
    $listedOneFourthColumn4.setAttribute('class', 'list-one-fourth-column');
    
    // ---------- VALUE TAGS ----------

    // create a new h3 tag
    const $displayDept = document.createElement('h3');
    $displayDept.textContent = entry.department;

    // create a new h3 tag
    const $displayEmployee = document.createElement('h3');
    $displayEmployee.textContent = entry.employee;

    // create a new h3 tag
    const $displayDate = document.createElement('h3');
    $displayDate.textContent = 'day and time order was placed';

    // create a new h3 tag
    const $displayTodaysDate = document.createElement('h3');
    $displayTodaysDate.textContent = entry.todaysDate;        

    // create a new h3 tag
    const $displayOrderInfo = document.createElement('h3');
    $displayOrderInfo.textContent = 'order # and status';

    // DATA-ID
    const $displayEntryId = document.createElement('h3');
    $displayEntryId.textContent = entry.entryId;

    // create a new h3 tag
    const $displayStatus = document.createElement('h3');
    $displayStatus.textContent = entry.status;
    // if (entry.status === 'lead approved') {
    //     $listedItem.style.background = 'purple';
    // }
    
    // create image tag
    const $approvedIcon = document.createElement('img');
    $approvedIcon.setAttribute('src', 'images/approved.png');
    $approvedIcon.setAttribute('class', 'approved');
    // DATA-ID
    $approvedIcon.setAttribute('data-id', entry.entryId);

    // create image tag
    const $processingIcon = document.createElement('img');
    $processingIcon.setAttribute('src', 'images/processing.png');
    $processingIcon.setAttribute('class', 'processing');
    // DATA-ID
    $processingIcon.setAttribute('data-id', entry.entryId);    

    // create image tag
    const $deliveredIcon = document.createElement('img');
    $deliveredIcon.setAttribute('src', 'images/delivered.png');
    $deliveredIcon.setAttribute('class', 'delivered');
    // DATA-ID
    $deliveredIcon.setAttribute('data-id', entry.entryId);  

    // create image tag
    const $deleteIcon = document.createElement('img');
    $deleteIcon.setAttribute('src', 'images/delete.png');
    $deleteIcon.setAttribute('class', 'delete');
    // DATA-ID
    $deleteIcon.setAttribute('data-id', entry.entryId);

    // next 2 elements: iframe for the label's picture and
    // h3 for quantity ordered will be further down on the code

    // append everything together to listedItem
    $listedItem.appendChild($mainRow);

    $mainRow.appendChild($row1);
    $row1.appendChild($listedOneFourthColumn1);
    $listedOneFourthColumn1.appendChild($displayEmployee);
    $listedOneFourthColumn1.appendChild($displayDept);
    $listedOneFourthColumn1.appendChild($displayDate);
    $listedOneFourthColumn1.appendChild($displayTodaysDate);

    $mainRow.appendChild($row2);
    $row2.appendChild($listedOneFourthColumn2);
    $listedOneFourthColumn2.appendChild($displayOrderInfo);
    $listedOneFourthColumn2.appendChild($displayEntryId);
    $listedOneFourthColumn2.appendChild($displayStatus);
    if ($userName === 'amandaa') {
        $listedOneFourthColumn2.appendChild($processingIcon);
        $listedOneFourthColumn2.appendChild($deliveredIcon);
    }

    if ($userName === 'lead') {
        $listedOneFourthColumn2.appendChild($approvedIcon);
    }

    $listedOneFourthColumn2.appendChild($deleteIcon);

    // appending labels 
    $mainRow.appendChild($row3);
    $row3.appendChild($listedOneFourthColumn3);
    // const $orderedLabel = document.createElement('iframe');

    var tempOrderedLabel = '$orderedLabel0';

    for (var i = 0; i < entry.labels.length; i++) {
        tempOrderedLabel = tempOrderedLabel.slice(0,-1)+(i).toString();
        var $tempOrderedLabel = tempOrderedLabel;
        $tempOrderedLabel = document.createElement('iframe');
        $listedOneFourthColumn3.appendChild($tempOrderedLabel);
        $labelPath = entry.labels[i].pdf;
        $tempOrderedLabel.setAttribute('src', $labelPath);
        $tempOrderedLabel.setAttribute('class', 'ordered-label');
    }        

    // appending labels quantities
    $mainRow.appendChild($row4);
    $row4.appendChild($listedOneFourthColumn4);

    var tempOrderedQty = '$displayQty0';
    for (var i = 0; i < entry.labels.length; i++) {
    tempOrderedQty = tempOrderedQty.slice(0,-1)+(i).toString();
    var $tempOrderedQty  = tempOrderedQty;
    $tempOrderedQty = document.createElement('h3');
    $listedOneFourthColumn4.appendChild($tempOrderedQty);
    $tempOrderedQty.textContent = entry.labels[i].qty
    $tempOrderedQty.setAttribute('id', 'ordered-label-qty');
    }

    // return listedItem
    return $listedItem;
}