var generated = [],
    possible  = $(".possible").val() ? $(".possible").val() : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generateCodes(number, length) {
  for ( var i=0; i < number; i++ ) {
    generateCode(length);
  }
  $("textarea").val(generated.join("\n"));
  $(".generator").addClass("generated");
}
function generateCode(length) {
  var text = "";

  for ( var i=0; i < length; i++ ) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  if ( generated.indexOf(text) == -1 ) {
    generated.push(text);
  }else {
    generateCode();
  }
}
$(".generate").on("click", function(e) {
  var num = $(".count").val() ? $(".count").val() : 5,
      len = $(".length").val() ? $(".length").val() : 5;
  
  possible  = $(".possible").val() ? $(".possible").val() : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  generateCodes(num, len);
  return false;
});