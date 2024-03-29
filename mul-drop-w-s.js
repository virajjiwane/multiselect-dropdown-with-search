// Get all divs with the class
var multiselect_dd_w_sb_classes = document.getElementsByClassName("multiselect-dd-w-sb");

//Adding elements in html
for(var i=0;i<multiselect_dd_w_sb_classes.length;i++){
    multiselect_dd_w_sb_classes[i].appendChild(internalButtonDiv());
    multiselect_dd_w_sb_classes[i].appendChild(internalContentDiv());
}

// Div for search button
function internalButtonDiv(){
    var internalButtondiv = document.createElement("div");
    internalButtondiv.setAttribute("class","dropdownButton");
    internalButtondiv.appendChild(internalButtontag());
    return internalButtondiv;
}

// Div for list of options and selected items
function internalContentDiv(){    
    var internalContentdiv = document.createElement("div");
    internalContentdiv.setAttribute("class","dropdownContent");
    internalContentdiv.appendChild(searchBoxinput());
    internalContentdiv.appendChild(selectedItemsul());
    return internalContentdiv;
}

// The search button
function internalButtontag(){
    var button =  document.createElement("button");
    button.innerHTML = "Search..";
    button.setAttribute("class","form-control form-control-user");
    return button;
}

// The search box input
function searchBoxinput(){
    var searchBox = document.createElement("input");
    searchBox.setAttribute("class","dropDownSearch form-control form-control-user");
    return searchBox;
}

// The selected list tag
function selectedItemsul(){
    var selectedItems = document.createElement("ul");
    selectedItems.setAttribute("class","selectedItemsList");
    return selectedItems;
}