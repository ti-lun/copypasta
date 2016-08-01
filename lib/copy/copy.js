var formValues = {};
var list = ["name", "class", "club", "age", "persona"];

var fieldValueGetter = function (fieldList) {

  for (var i = 0; i < fieldList.length; ++i) {
    var value = $("#" + fieldList[i]).text();
    formValues[fieldList[i]] = value;
  }
};

fieldValueGetter(list);
console.log(formValues);
