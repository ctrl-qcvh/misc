	for (x = 0; x <= horozontal.length; x++)
	{
	 for (j; j <= replacements.length; j++)
	 {
	  var horozontal = replacements[j];

	  if (replacements[j] == undefined)
	  {
	   j == 0;
	  }
	  else if (replacements[j][x] == undefined)
	  {
	   document.write("work4");
	   //j++;
	   x--;
	  }
	  else if (j == replacements.length && x == horozontal.length) //-1
	  {
	   document.write(b);
	   document.write("work1");
	   break;
	  }
	  else if (x == horozontal.length)
	  {
	   document.write(b);
	   b = b.replaceAll(replacements[j][x], replacements[j][0]);
	   document.write("work2");
	   //document.write("j="+j+"x="+x);
	   //document.write(b);
	  }
	  else {
	   b = b.replaceAll(replacements[j][x], replacements[j][x + 1]);
	   x++;
	   document.write(b);
	   document.write("work3");
	   //break;
	  }
	  //console.clear();
	  //break;
	 }
	}