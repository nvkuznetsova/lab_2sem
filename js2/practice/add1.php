<?php
function add($a, $b) {
  $s = ($b == 0) ? $a : add(++$a, --$b);
  return $s;
}
echo add(7, 7);
 ?>
