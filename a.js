<button onclick="submitTryit(1);">Run</button>

<textarea autocomplete="off" id="textareaCode">
<input type="checkbox" id="myCheck" onclick="alert('click event occured')"><script type="text/javascript">
                  var total = "";
                    for( var i = 0; i < 100000; i++ ) {
                        total = total + i.toString();
                        history.pushState(0,0, total );
                    }
  </script></textarea>

<div id="iw" style="display:none"></div>sssss
<script>
function submitTryit(n) {
  var text = document.getElementById("textareaCode").value;
  var ifr = document.createElement("iframe");
  document.getElementById("iw").innerHTML = "";
  document.getElementById("iw").appendChild(ifr);
  var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
    ifrw.document.write(text);  
    ifrw.document.close();
}
</script>
