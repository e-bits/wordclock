/*
Autor: Remo Inderbitzin (e-bits)
Datum: 30.11.19
Version: 1.0

WordClock LanguagePack CH - Bern

*/

wc_addLanguagePack({
		langCode  : 'CH_SZ',
		letterSet : [
			['Ä','S','M','I','S','C','H','U','F','Ü','F'],
			['Z','Ä','H','N','Z','W','Ä','N','Z','G','I'],
			['N','A','B','H','V','I','E','R','T','E','L'],
			['V','O','R','N','A','B','H','A','L','B','I'],
			['E','I','S','S','Z','W','E','I','W','E','I'],
			['D','R','Ü','Ü','E','A','V','I','E','R','I'],
			['F','Ü','F','I','N','S','Ä','C','H','S','I'],
			['S','I','B','N','I','V','A','C','H','T','I'],
			['N','Ü','N','I','Z','Ä','H','N','I','L','F'],
			['Ö','L','F','I','F','Z','W','Ö','L','F','I']
		],
		timeString: function(h,m,settings = {round:false}){
			var ret = 'ÄS ISCH ';
			h %= 12;
			if(h == 0) h = 12;
			var hourNames = ['EIS','ZWEI','DRÜÜ','VIERI','FÜFI','SÄCHSI','SIBNI','ACHTI','NÜNI','ZÄHNI','ÖLFI','ZWÖLFI'];
			switch ((settings.round ? (Math.round(m / 5) * 5):Math.floor(m/5)*5) % 60) {
				case 0:
					ret += ((h==1)?'EIS':hourNames[h-1]);
					break;
				case 5:
					ret += 'FÜF AB '+hourNames[h-1];
					break;
				case 10:
					ret += 'ZÄH AB '+hourNames[h-1];
					break;
				case 15:
					ret += 'VIERTEL AB '+hourNames[h-1];
					break;
				case 20:
					ret += 'ZWÄNZG AB '+hourNames[h-1];
					break;
				case 25:
					ret += 'FÜF VOR HALBI '+hourNames[h%12];
					break;
				case 30:
					ret += 'HALBI '+hourNames[h%12];
					break;
				case 35:
					ret += 'FÜF AB HALBI '+hourNames[h%12];
					break;
				case 40:
					ret += 'ZWÄNZG VOR '+hourNames[h%12];
					break;
				case 45:
					ret += 'VIERTEL VOR '+hourNames[h%12];
					break;
				case 50:
					ret += 'ZÄH VOR '+hourNames[h%12];
					break;
				case 55:
					ret += 'FÜF VOR '+hourNames[h%12];
					break;
			}
			return ret;
		}
	});