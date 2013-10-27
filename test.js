var qlzo =require("./build/Release/quicklzo");


var bufferIn = new Buffer("Hello Mr Tester...did you enter more and more text?Hello Mr Tester...did you enter mode and more again");

var bufferOut = new Buffer (bufferIn.length*2);


var len = qlzo.compress(bufferIn, bufferOut);



console.log("Uncompressed : " + bufferIn.length + " Compressed : "+ len);

bufferOut = bufferOut.slice (0, len);


var bufferOriginal = new Buffer (bufferOut.length*3); //give it sufficient length
var l = qlzo.decompress(bufferOut, bufferOriginal);
console.log ("decompression len : "+ l);
