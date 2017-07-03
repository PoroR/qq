// var A = document.getElementById("messageText").value;
var noneBill = document.getElementById("getBillMessage");
var noneBoob = document.getElementById("getBoobMessage");

var obj = {}
function sendBill(obj){
   this.obj.name = "Bill";
   this.obj.val = document.getElementById("messageText").value;
   this.obj.toString = function(){return "User " + this.name + " get message: \n" + this.val};
};
function sendBoob(obj){
   this.obj.name = "Boob";
   this.obj.val = document.getElementById("messageText").value;
   this.obj.toString = function(){return "User " + this.name + " get message: \n" + this.val};
};
function showBill(){
   document.getElementById("getBillMessage").value = obj;
      var noneBill = document.getElementById("getBillMessage");
      if(noneBill.style.display != "block"){
         noneBill.style.display = "block"
      }
      else {
         noneBill.style.display = "none"
      }
   };
function showBoob(){
   document.getElementById("getBoobMessage").value = obj;
      var noneBoob = document.getElementById("getBoobMessage");
      if(noneBoob.style.display != "block"){
         noneBoob.style.display = "block"
      }
      else {
         noneBoob.style.display = "none";
      }
   };
