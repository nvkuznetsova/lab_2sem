<?php
  $arr = ['a1'=>1, 'b1'=>3, 'c1'=>2, 'a2'=>9, 'b2'=>2, 'c2'=>7];
  $det1 = $arr['c1']*$arr['b2'] - $arr['c2']*$arr['b1'];
  $det2 = $arr['a1']*$arr['c2'] - $arr['a2']*$arr['c1'];
  $det = $arr['a1']*$arr['b2'] - $arr['a2']*$arr['b1'];

  $x1 = $det1/$det;
  $x2 = $det2/$det;

  echo 'x1 = '.$x1.' x2 = '.$x2;
 ?>
