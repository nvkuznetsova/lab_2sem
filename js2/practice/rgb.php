<?php
declare(strict_types=1);
function rgb()
{
  # code...
  $min = 0;
  $max = 255;
  $r = rand($min, $max);
  $g = rand($min, $max);
  $b = rand($min, $max);
  echo 'rgb('.$r.', '.$g.', '.$b.')';
}

rgb();
 ?>
