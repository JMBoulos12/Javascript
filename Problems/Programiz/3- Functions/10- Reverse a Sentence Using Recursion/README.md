

### Execution steps

| No.	 | reverse() | substring() | reversedString |
| --- | --- | --- | --- |
| 1 | reverse("Go work") | "o Work"	| result + "G" |
| 2 | reverse("o Work") | " Work"	| result + "o" + "G" |
| 3 | reverse(" Work") | "Work"	| result + " " + "o" + "G" |
| 4 | reverse("Work") | "ork"	| result + "W" + " " + "o" + "G" |
| 5 | reverse("ork") | "rk"	| result + "o" + "W" + " " + "o" + "G" |
| 6 | reverse("rk") | "k"	| result + "r" + "o" + "W" + " " + "o" + "G" |
| 7 | reverse("k") | ""	| result + "k" + "r" + "o" + "W" + " " + "o" + "G" |
| Final |	reverse("") | -	| "" + "k" + "r" + "o" + "W" + " " + "o" + "G" = "kroW oG" |
