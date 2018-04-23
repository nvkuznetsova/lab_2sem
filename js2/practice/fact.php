<?php
function fact($n) {
  $f = ($n == 0) ? 1 : $n*fact($n-1);
  return $f;
}
echo fact(5);
 ?>
