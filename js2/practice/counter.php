<?php
$count = (function($i=0) {
  return function() use (&$i){
    return ++$i;
    };
  })();

  echo $count();
  echo $count();
  echo $count();
 ?>
