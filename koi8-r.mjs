/*! https://mths.be/koi8-r v3.0.3 by @mathias | MIT license */

const stringFromCharCode = String.fromCharCode;

const INDEX_BY_CODE_POINT = new Map([
	[160, 26],
	[169, 63],
	[176, 28],
	[178, 29],
	[183, 30],
	[247, 31],
	[1025, 51],
	[1040, 97],
	[1041, 98],
	[1042, 119],
	[1043, 103],
	[1044, 100],
	[1045, 101],
	[1046, 118],
	[1047, 122],
	[1048, 105],
	[1049, 106],
	[1050, 107],
	[1051, 108],
	[1052, 109],
	[1053, 110],
	[1054, 111],
	[1055, 112],
	[1056, 114],
	[1057, 115],
	[1058, 116],
	[1059, 117],
	[1060, 102],
	[1061, 104],
	[1062, 99],
	[1063, 126],
	[1064, 123],
	[1065, 125],
	[1066, 127],
	[1067, 121],
	[1068, 120],
	[1069, 124],
	[1070, 96],
	[1071, 113],
	[1072, 65],
	[1073, 66],
	[1074, 87],
	[1075, 71],
	[1076, 68],
	[1077, 69],
	[1078, 86],
	[1079, 90],
	[1080, 73],
	[1081, 74],
	[1082, 75],
	[1083, 76],
	[1084, 77],
	[1085, 78],
	[1086, 79],
	[1087, 80],
	[1088, 82],
	[1089, 83],
	[1090, 84],
	[1091, 85],
	[1092, 70],
	[1093, 72],
	[1094, 67],
	[1095, 94],
	[1096, 91],
	[1097, 93],
	[1098, 95],
	[1099, 89],
	[1100, 88],
	[1101, 92],
	[1102, 64],
	[1103, 81],
	[1105, 35],
	[8729, 21],
	[8730, 22],
	[8776, 23],
	[8804, 24],
	[8805, 25],
	[8992, 19],
	[8993, 27],
	[9472, 0],
	[9474, 1],
	[9484, 2],
	[9488, 3],
	[9492, 4],
	[9496, 5],
	[9500, 6],
	[9508, 7],
	[9516, 8],
	[9524, 9],
	[9532, 10],
	[9552, 32],
	[9553, 33],
	[9554, 34],
	[9555, 36],
	[9556, 37],
	[9557, 38],
	[9558, 39],
	[9559, 40],
	[9560, 41],
	[9561, 42],
	[9562, 43],
	[9563, 44],
	[9564, 45],
	[9565, 46],
	[9566, 47],
	[9567, 48],
	[9568, 49],
	[9569, 50],
	[9570, 52],
	[9571, 53],
	[9572, 54],
	[9573, 55],
	[9574, 56],
	[9575, 57],
	[9576, 58],
	[9577, 59],
	[9578, 60],
	[9579, 61],
	[9580, 62],
	[9600, 11],
	[9604, 12],
	[9608, 13],
	[9612, 14],
	[9616, 15],
	[9617, 16],
	[9618, 17],
	[9619, 18],
	[9632, 20]
]);
const INDEX_BY_POINTER = new Map([
	[0, '\u2500'],
	[1, '\u2502'],
	[2, '\u250C'],
	[3, '\u2510'],
	[4, '\u2514'],
	[5, '\u2518'],
	[6, '\u251C'],
	[7, '\u2524'],
	[8, '\u252C'],
	[9, '\u2534'],
	[10, '\u253C'],
	[11, '\u2580'],
	[12, '\u2584'],
	[13, '\u2588'],
	[14, '\u258C'],
	[15, '\u2590'],
	[16, '\u2591'],
	[17, '\u2592'],
	[18, '\u2593'],
	[19, '\u2320'],
	[20, '\u25A0'],
	[21, '\u2219'],
	[22, '\u221A'],
	[23, '\u2248'],
	[24, '\u2264'],
	[25, '\u2265'],
	[26, '\xA0'],
	[27, '\u2321'],
	[28, '\xB0'],
	[29, '\xB2'],
	[30, '\xB7'],
	[31, '\xF7'],
	[32, '\u2550'],
	[33, '\u2551'],
	[34, '\u2552'],
	[35, '\u0451'],
	[36, '\u2553'],
	[37, '\u2554'],
	[38, '\u2555'],
	[39, '\u2556'],
	[40, '\u2557'],
	[41, '\u2558'],
	[42, '\u2559'],
	[43, '\u255A'],
	[44, '\u255B'],
	[45, '\u255C'],
	[46, '\u255D'],
	[47, '\u255E'],
	[48, '\u255F'],
	[49, '\u2560'],
	[50, '\u2561'],
	[51, '\u0401'],
	[52, '\u2562'],
	[53, '\u2563'],
	[54, '\u2564'],
	[55, '\u2565'],
	[56, '\u2566'],
	[57, '\u2567'],
	[58, '\u2568'],
	[59, '\u2569'],
	[60, '\u256A'],
	[61, '\u256B'],
	[62, '\u256C'],
	[63, '\xA9'],
	[64, '\u044E'],
	[65, '\u0430'],
	[66, '\u0431'],
	[67, '\u0446'],
	[68, '\u0434'],
	[69, '\u0435'],
	[70, '\u0444'],
	[71, '\u0433'],
	[72, '\u0445'],
	[73, '\u0438'],
	[74, '\u0439'],
	[75, '\u043A'],
	[76, '\u043B'],
	[77, '\u043C'],
	[78, '\u043D'],
	[79, '\u043E'],
	[80, '\u043F'],
	[81, '\u044F'],
	[82, '\u0440'],
	[83, '\u0441'],
	[84, '\u0442'],
	[85, '\u0443'],
	[86, '\u0436'],
	[87, '\u0432'],
	[88, '\u044C'],
	[89, '\u044B'],
	[90, '\u0437'],
	[91, '\u0448'],
	[92, '\u044D'],
	[93, '\u0449'],
	[94, '\u0447'],
	[95, '\u044A'],
	[96, '\u042E'],
	[97, '\u0410'],
	[98, '\u0411'],
	[99, '\u0426'],
	[100, '\u0414'],
	[101, '\u0415'],
	[102, '\u0424'],
	[103, '\u0413'],
	[104, '\u0425'],
	[105, '\u0418'],
	[106, '\u0419'],
	[107, '\u041A'],
	[108, '\u041B'],
	[109, '\u041C'],
	[110, '\u041D'],
	[111, '\u041E'],
	[112, '\u041F'],
	[113, '\u042F'],
	[114, '\u0420'],
	[115, '\u0421'],
	[116, '\u0422'],
	[117, '\u0423'],
	[118, '\u0416'],
	[119, '\u0412'],
	[120, '\u042C'],
	[121, '\u042B'],
	[122, '\u0417'],
	[123, '\u0428'],
	[124, '\u042D'],
	[125, '\u0429'],
	[126, '\u0427'],
	[127, '\u042A']
]);

// https://encoding.spec.whatwg.org/#error-mode
const decodingError = (mode) => {
	if (mode === 'replacement') {
		return '\uFFFD';
	}
	// Else, `mode == 'fatal'`.
	throw new Error();
};

const encodingError = (mode) => {
	if (mode === 'replacement') {
		return 0xFFFD;
	}
	// Else, `mode == 'fatal'`.
	throw new Error();
};

// https://encoding.spec.whatwg.org/#single-byte-decoder
export const decode = (input, options) => {
	let mode;
	if (options && options.mode) {
		mode = options.mode.toLowerCase();
	}
	// “An error mode […] is either `replacement` (default) or `fatal` for a
	// decoder.”
	if (mode !== 'replacement' && mode !== 'fatal') {
		mode = 'replacement';
	}

	const length = input.length;

	// Support byte strings as input.
	if (typeof input === 'string') {
		const bytes = new Uint16Array(length);
		for (let index = 0; index < length; index++) {
			bytes[index] = input.charCodeAt(index);
		}
		input = bytes;
	}

	const buffer = [];
	for (let index = 0; index < length; index++) {
		const byteValue = input[index];
		// “If `byte` is an ASCII byte, return a code point whose value is
		// `byte`.”
		if (0x00 <= byteValue && byteValue <= 0x7F) {
			buffer.push(stringFromCharCode(byteValue));
			continue;
		}
		// “Let `code point` be the index code point for `byte − 0x80` in index
		// single-byte.”
		const pointer = byteValue - 0x80;
		if (INDEX_BY_POINTER.has(pointer)) {
			// “Return a code point whose value is `code point`.”
			buffer.push(INDEX_BY_POINTER.get(pointer));
		} else {
			// “If `code point` is `null`, return `error`.”
			buffer.push(decodingError(mode));
		}
	}
	const result = buffer.join('');
	return result;
};

// https://encoding.spec.whatwg.org/#single-byte-encoder
export const encode = (input, options) => {
	let mode;
	if (options && options.mode) {
		mode = options.mode.toLowerCase();
	}
	// Support `fatal` (default) and `replacement` error modes.
	if (mode !== 'fatal' && mode !== 'replacement') {
		mode = 'fatal';
	}
	const length = input.length;
	const result = new Uint16Array(length);
	for (let index = 0; index < length; index++) {
		const codePoint = input.charCodeAt(index);
		// “If `code point` is an ASCII code point, return a byte whose
		// value is `code point`.”
		if (0x00 <= codePoint && codePoint <= 0x7F) {
			result[index] = codePoint;
			continue;
		}
		// “Let `pointer` be the index pointer for `code point` in index
		// single-byte.”
		if (INDEX_BY_CODE_POINT.has(codePoint)) {
			const pointer = INDEX_BY_CODE_POINT.get(codePoint);
			// “Return a byte whose value is `pointer + 0x80`.”
			result[index] = pointer + 0x80;
		} else {
			// “If `pointer` is `null`, return `error` with `code point`.”
			result[index] = encodingError(mode);
		}
	}
	return result;
};

export const labels = [
	'cskoi8r',
	'koi',
	'koi8',
	'koi8-r',
	'koi8_r'
];
