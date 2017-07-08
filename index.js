// var noneBill = document.getElementById("getBillMessage");
// var noneBoob = document.getElementById("getBoobMessage");

var massBill = [];
var massBoob = [];
var massCustom = [];
var objBill = {};
var objBoob = {};
var objCustom = {};
function sendBill(objBill, massBill){
   this.objBill.name = "Bill";
   this.objBill.val = document.getElementById("messageText").value;
   this.objBill.toString = function(){return "User " + this.name + " get message: \n" + this.val};
   Object.freeze(this.objBill);
   this.massBill.push(this.objBill);
   document.getElementById("getBillMessage").value = this.massBill.join("\n" + "\n");
};
function sendBoob(objBoob, massBoob){
   this.objBoob.name = "Boob";
   this.objBoob.val = document.getElementById("messageText").value;
   this.objBoob.toString = function(){return "User " + this.name + " get message: \n" + this.val};
   this.massBoob.push(this.objBoob);
   document.getElementById("getBoobMessage").value = this.massBoob.join("\n" + "\n");
};
function sendCustom(objCustom, massCustom){
   this.objCustom.name = document.getElementById("yourName").value;
   this.objCustom.val = document.getElementById("yourText").value;
   this.objCustom.toString = function(){return "User " + this.name + " get message: \n" + this.val};
   this.massCustom.push(this.objCustom);
   document.getElementById("getCustomMessage").value = this.massCustom.join("\n" + "\n");
};
function showBill(){
   var noneBill = document.getElementById("getBillMessage");
   if(noneBill.style.display != "block"){
      noneBill.style.display = "block";
   }
   else noneBill.style.display = "none";

}
function showBoob(){
   var noneBoob = document.getElementById("getBoobMessage");
   if(noneBoob.style.display != "block"){
      noneBoob.style.display = "block";
   }
   else noneBoob.style.display = "none";
   };
function showCustom(){
   var noneCustom = document.getElementById("getCustomMessage");
   if(noneCustom.style.display != "block"){
         noneCustom.style.display = "block";
   }
   else noneCustom.style.display = "none";
   };
function showBill1(){
   document.getElementById("getAllMessage").value = this.massBill.join("\n" + "\n");
}
function showBoob1(){
   document.getElementById("getAllMessage").value = this.massBoob.join("\n" + "\n");
}
function showCustom1(){
   document.getElementById("getAllMessage").value = this.massCustom.join("\n" + "\n");
}
