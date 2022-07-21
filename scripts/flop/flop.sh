#!/bin/bash
#converts filenames a.png through z.png into horizontally mirrored versions numbered 1.png through 26.png using graphicsmagick convert command. 
i=1
for letter in {a..z} ; do
  convert -flop "${letter}.png" "${i}.png"
  i=$((i + 1)) 
done
