const kanaMap = {
    'ｶﾞ' : 'ガ',
    'ｷﾞ' : 'ギ',
    'ｸﾞ' : 'グ',
    'ｹﾞ' : 'ゲ',
    'ｺﾞ' : 'ゴ',
    'ｻﾞ' : 'ザ',
    'ｼﾞ' : 'ジ',
    'ｽﾞ' : 'ズ',
    'ｾﾞ' : 'ゼ',
    'ｿﾞ' : 'ゾ',
    'ﾀﾞ' : 'ダ',
    'ﾁﾞ' : 'ヂ',
    'ﾂﾞ' : 'ヅ',
    'ﾃﾞ' : 'デ',
    'ﾄﾞ' : 'ド',
    'ﾊﾞ' : 'バ',
    'ﾋﾞ' : 'ビ',
    'ﾌﾞ' : 'ブ',
    'ﾍﾞ' : 'ベ',
    'ﾎﾞ' : 'ボ',
    'ﾊﾟ' : 'パ',
    'ﾋﾟ' : 'ピ',
    'ﾌﾟ' : 'プ',
    'ﾍﾟ' : 'ペ',
    'ﾎﾟ' : 'ポ',
    'ｳﾞ' : 'ヴ',
    'ﾜﾞ' : 'ヷ',
    'ｦﾞ' : 'ヺ',
    'ｱ' : 'ア',
    'ｲ' : 'イ',
    'ｳ' : 'ウ',
    'ｴ' : 'エ',
    'ｵ' : 'オ',
    'ｶ' : 'カ',
    'ｷ' : 'キ',
    'ｸ' : 'ク',
    'ｹ' : 'ケ',
    'ｺ' : 'コ',
    'ｻ' : 'サ',
    'ｼ' : 'シ',
    'ｽ' : 'ス',
    'ｾ' : 'セ',
    'ｿ' : 'ソ',
    'ﾀ' : 'タ',
    'ﾁ' : 'チ',
    'ﾂ' : 'ツ',
    'ﾃ' : 'テ',
    'ﾄ' : 'ト',
    'ﾅ' : 'ナ',
    'ﾆ' : 'ニ',
    'ﾇ' : 'ヌ',
    'ﾈ' : 'ネ',
    'ﾉ' : 'ノ',
    'ﾊ' : 'ハ',
    'ﾋ' : 'ヒ',
    'ﾌ' : 'フ',
    'ﾍ' : 'ヘ',
    'ﾎ' : 'ホ',
    'ﾏ' : 'マ',
    'ﾐ' : 'ミ',
    'ﾑ' : 'ム',
    'ﾒ' : 'メ',
    'ﾓ' : 'モ',
    'ﾔ' : 'ヤ',
    'ﾕ' : 'ユ',
    'ﾖ' : 'ヨ',
    'ﾗ' : 'ラ',
    'ﾘ' : 'リ',
    'ﾙ' : 'ル',
    'ﾚ' : 'レ',
    'ﾛ' : 'ロ',
    'ﾜ' : 'ワ',
    'ｦ' : 'ヲ',
    'ﾝ' : 'ン',
    'ｧ' : 'ァ',
    'ｨ' : 'ィ',
    'ｩ' : 'ゥ',
    'ｪ' : 'ェ',
    'ｫ' : 'ォ',
    'ｯ' : 'ッ',
    'ｬ' : 'ャ',
    'ｭ' : 'ュ',
    'ｮ' : 'ョ',
    '｡' : '。',
    '､' : '、',
    'ｰ' : 'ー',
    '~' : '～',
};

const symbolMap = {
    "dot":              {"." : "．"},
    "comma":            {"," : "，"},
    "hyphen":           {"-" : "－"},
    "under_score":      {"_" : "＿"},
    "slash":            {"/" : "／"},
    "colon":            {":" : "："},
    "semicolon":        {";" : "；"},
    "pipe":             {"|" : "｜"},
    "plus":             {"+" : "＋"},
    "equal":            {"=" : "＝"},
    "percent":          {"%" : "％"},
    "sharp":            {"#" : "＃"},
    "single_quote":     {"'" : "’"},
    "double_quote":     {'"' : "”"},
    "maru_kakko":       {"(" : "（", ")" : "）"},
    "nami_kakko":       {"{" : "｛", "}" : "｝"},
    "kaku_kakko":       {"[" : "［", "]" : "］"},
    "futougou":         {"<" : "＜", ">" : "＞"},
    "exclamation_mark": {"!" : "！"},
    "question_mark":    {"?" : "？"},
    "and":              {"&" : "＆"},
    "dollar":           {"$" : "＄"},
    "space":            {" " : "　"},
};

const voicedSemiVoicedKatakana = [
    'ｶﾞ',
    'ｷﾞ',
    'ｸﾞ',
    'ｹﾞ',
    'ｺﾞ',
    'ｻﾞ',
    'ｼﾞ',
    'ｽﾞ',
    'ｾﾞ',
    'ｿﾞ',
    'ﾀﾞ',
    'ﾁﾞ',
    'ﾂﾞ',
    'ﾃﾞ',
    'ﾄﾞ',
    'ﾊﾞ',
    'ﾋﾞ',
    'ﾌﾞ',
    'ﾍﾞ',
    'ﾎﾞ',
    'ﾊﾟ',
    'ﾋﾟ',
    'ﾌﾟ',
    'ﾍﾟ',
    'ﾎﾟ',
    'ｳﾞ',
    'ﾜﾞ',
    'ｦﾞ',
    'カ゛',
    'キ゛',
    'ク゛',
    'ケ゛',
    'コ゛',
    'サ゛',
    'シ゛',
    'ス゛',
    'セ゛',
    'ソ゛',
    'タ゛',
    'チ゛',
    'ツ゛',
    'テ゛',
    'ト゛',
    'ハ゛',
    'ヒ゛',
    'フ゛',
    'ヘ゛',
    'ホ゛',
    'ハ゜',
    'ヒ゜',
    'フ゜',
    'ヘ゜',
    'ホ゜',
    'ウ゛',
    'ワ゛',
    'ヲ゛',
];

let srcText = null;
let distText = null;
let displayTexts = {};


//変換ボタンが押された
function convert() {
    srcText = document.getElementById('src-text').value;

    //バリデーション
    if (srcText.length == 0) {
        setValidationError('変換前テキストを入力してください。');
        return;
    }
    if (srcText.length > 50000) {
        setValidationError('変換前テキストは50,000文字以内で入力してください。');
        return;
    }

    //エラー表示リセット
    resetErrorDisplay();

    //変換
    distText = changeNumber(srcText);
    distText = changeAlphabet(distText);
    distText = changeKatakana(distText);
    distText = changeSymbol(distText);

    //ハイライト設定をリセット
    document.getElementById('change-do-highlight').checked = true;
    document.getElementById('half-space-do-highlight').checked = true;
    document.getElementById('full-space-do-highlight').checked = true;

    //表示
    display(srcText, distText);

    document.getElementById('dist-area').style.display = 'block';
    location.href = '#dist-area';
}


//エラー表示
function setValidationError(msg) {
    document.getElementById('src-text').classList.add('error-input');

    let srcTextError = document.getElementById('src-text-error');
    srcTextError.innerHTML = msg;
    srcTextError.style.display = 'block';

    document.getElementById('dist-area').style.display = 'none';

    location.href = '#src-area';
}

//エラー表示リセット
function resetErrorDisplay() {
    document.getElementById('src-text').classList.remove('error-input');

    let srcTextError = document.getElementById('src-text-error');
    srcTextError.innerHTML = '';
    srcTextError.style.display = 'none';
}

//数字変換
function changeNumber(text) {
    let rule = getCheckedValue('number_rule');

    if (rule == 'half_width') {
        text = text.replace(/[０-９]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
    } else if (rule == 'full_width') {
        text = text.replace(/[0-9]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
        });
    }

    return text;
}

//アルファベット変換
function changeAlphabet(text) {
    let rule = getCheckedValue('alphabet_rule');

    if (rule == 'half_width') {
        text = text.replace(/[Ａ-Ｚａ-ｚ]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
    } else if (rule =='full_width') {
        text = text.replace(/[A-Za-z]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
        });
    }

    return text;
}

//カタカナ変換
function changeKatakana(text) {
    let rule = getCheckedValue('katakana_rule');

    if (rule != 'half_width' && rule != 'full_width') {
        return text;
    }

    let map = createKanaMap(rule);

    if (rule == 'half_width') {
        let reg = new RegExp('(' + Object.keys(map).join('|') + ')', 'g');
        text = text
            .replace(reg, function (match) {
                return map[match];
            })
            .replace(/゛/g, 'ﾞ')
            .replace(/゜/g, 'ﾟ');
    } else if (rule == 'full_width') {
        let reg = new RegExp('(' + Object.keys(map).join('|') + ')', 'g');
        text = text
            .replace(reg, function (match) {
                return map[match];
            })
            .replace(/ﾞ/g, '゛')
            .replace(/ﾟ/g, '゜');
    }

    return text;
}

//カタカナマッピングを作る
function createKanaMap(rule) {
    let convertMap = [];

    for (let key in kanaMap) {
        if (rule == 'half_width') {
            convertMap[kanaMap[key]] = key;
        } else {
            convertMap[key] = kanaMap[key];
        }
    }

    return convertMap;
}

//記号変換
function changeSymbol(text) {
    let rule = getCheckedValue('symbol_rule');

    if (rule != 'half_width' && rule != 'full_width') {
        return text;
    }

    let map = createSybmolMap(rule);

    //正規表現を使うとエスケープとか面倒なので、1文字づつ比較する
    let srcArray = text.split('');
    let distArrat = [];

    srcArray.forEach(function(val, idx) {
        let convertVal = val;

        for (let key in map) {
            if (val == key) {
                convertVal = map[key];
                break;
            }
        }

        distArrat.push(convertVal);
    });

    return distArrat.join('');
}


//記号マッピングを作る
function createSybmolMap(rule) {
    let convertMap = [];

    let elements = document.getElementsByName('target_symbol');

    for (let i = elements.length; i--; ) {
        if (elements[i].checked) {
            let tmp = symbolMap[elements[i].value];

            for (let key in tmp) {
                if (rule == 'half_width') {
                    convertMap[tmp[key]] = key;
                } else {
                    convertMap[key] = tmp[key];
                }
            }
        }
    }

    return convertMap;
}

//ラジオボタンのチェックされた値を取得
function getCheckedValue(name) {
    let checked = '';
    let elements = document.getElementsByName(name);

    for (let i = elements.length; i--; ) {
        if (elements[i].checked) {
            checked = elements[i].value;
            break;
        }
    }

    return checked;
}

//表示用変換
function display(src, dist) {
    let srcArray = src.split('');
    let distArray = dist.split('');

    srcArray = convertVoicedSemiVoicedhalfKatakana(srcArray);
    distArray = convertVoicedSemiVoicedhalfKatakana(distArray);

    displayTexts = {
        'hhh' : highlight(srcArray, distArray, 1, 1, 1),
        'hhn' : highlight(srcArray, distArray, 1, 1, 0),
        'hnh' : highlight(srcArray, distArray, 1, 0, 1),
        'hnn' : highlight(srcArray, distArray, 1, 0, 0),
        'nhh' : highlight(srcArray, distArray, 0, 1, 1),
        'nhn' : highlight(srcArray, distArray, 0, 1, 0),
        'nnh' : highlight(srcArray, distArray, 0, 0, 1),
        'nnn' : highlight(srcArray, distArray, 0, 0, 0),
    };

    document.getElementById('dist-text').innerHTML = displayTexts['hhh'];
}

//ハイライト
function highlight(srcArray, distArray, chFlg, hshFlg, fshFlg) {
    if (chFlg) {
        distArray = changeHighlight(distArray, srcArray);
    }

    if (hshFlg) {
        distArray = halfSpaceHighlight(distArray);
    }

    if (fshFlg) {
        distArray = fullSpaceHighlight(distArray);
    }

    distArray = escape(distArray);

    return nl2br(distArray.join(''));
}

//変更点ハイライト
function changeHighlight(array, srcArray) {
    let highlightArray = [];

    array.forEach(function(val, idx) {
        if (val != srcArray[idx]) {
            highlightArray.push('<span class="change-highlight-text">');
        }

        highlightArray.push(val);

        if (val != srcArray[idx]) {
            highlightArray.push('</span>');
        }
    });

    return highlightArray;
}

//半角の濁点半濁点カタカナは2文字に分かれてしまうので、
//濁点半濁点カタカナはすべて1つの要素にまとめる
function convertVoicedSemiVoicedhalfKatakana(array) {
    let convertArray = [];
    let skip = false;

    for(let i = 0; i < array.length; i++) {
        let tmp = array[i] + array[i + 1];

        if (voicedSemiVoicedKatakana.includes(tmp)) {
            convertArray.push(tmp);
            skip = true;
            continue;
        }

        if (skip) {
            skip = false;
            continue;
        }

        convertArray.push(array[i]);
    }

    return convertArray;
}

//半角スペースハイライト
function halfSpaceHighlight(array) {
    let highlightArray = [];

    array.forEach(function(val, idx){
        if (val == ' ') {
            highlightArray.push('<span class="half-space-highlight-text">');
        }

        highlightArray.push(val);

        if (val == ' ') {
          highlightArray.push('</span>');
        }
    });

    return highlightArray;
}

//全角スペースハイライト
function fullSpaceHighlight(array) {
    let highlightArray = [];

    array.forEach(function(val, idx){
        if (val == '　') {
            highlightArray.push('<span class="full-space-highlight-text">');
        }

        highlightArray.push(val);

        if (val == '　') {
          highlightArray.push('</span>');
        }
    });

    return highlightArray;
}

//実態参照文字にエスケープ
function escape(array) {
    let escapeArray = [];

    array.forEach(function(val, idx){
        //ハイライトで差し込んだタグは除外したいので、文字数が1のものだけエスケープ
        if (val.length == 1) {
            val= val.replace(/&/g, '&amp;');
            val = val.replace(/"/g, '&quot;');
            val = val.replace(/'/g, '&#039;');
            val = val.replace(/</g, '&lt;');
            val = val.replace(/>/g, '&gt;');
        }

        if (val == ' ') {
            val = '&nbsp;';
        }

          escapeArray.push(val);
    });

    return escapeArray;
}

//改行
function nl2br(text) {
    let splitText = text.split('\n');
    return splitText.join('<br>');
}

//ハイライトON/OFF切り替え
function highlightOnOff() {
    let ch = getCheckedValue('change_highlight');
    let hsh = getCheckedValue('half_space_highlight');
    let fsh = getCheckedValue('full_space_highlight');

    document.getElementById('dist-text').innerHTML = displayTexts[ch + hsh + fsh];
}

//変換する記号の表示切替
function targetSymbol(flg){
    document.getElementById('target-symbol-area').style.display = (flg == 'on') ? 'block' : 'none';
}

//変換する記号の全チェックON/OFF切り替え
function allCheckOnOff() {
    let flg = 'off';
    let elements = document.getElementsByName('target_symbol');

    for (let i = elements.length; i--;) {
        if (!elements[i].checked) {
            flg = 'on';
        }
    }

    for (let i = elements.length; i--;) {
        elements[i].checked = (flg == 'on') ? true : false;
    }
}

//コピーする
function copy() {
    let listener = function(e){
        e.clipboardData.setData('text/plain' , distText);
        e.preventDefault();
        document.removeEventListener('copy', listener);
    }

    document.addEventListener('copy' , listener);
    document.execCommand('copy');

    new bootstrap.Toast(document.getElementById('copied-toast')).show();
}

//半角スペース除去
function deleteHalfSpace() {
    srcText = srcText.replace(/ /g, '');
    distText = distText.replace(/ /g, '');

    //表示
    display(srcText, distText);
    highlightOnOff();
}

//全角スペース除去
function deleteFullSpace() {
    srcText = srcText.replace(/　/g, '');
    distText = distText.replace(/　/g, '');

    //表示
    display(srcText, distText);
    highlightOnOff();
}

//改行除去
function deleteNewLine() {
    srcText = srcText.replace(/\r?\n/g, '');
    distText = distText.replace(/\r?\n/g, '');

    //表示
    display(srcText, distText);
    highlightOnOff();
}

//トースト初期化
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
});

//チェックテキスト
/*
1234567890１２３４５６７８９０

あいうえお
かきくけこ
さしすせそ
たちつてと
なにぬねの
はひふへほ
まみむめも
や　ゆ　よ
らりるれろ
わ　　　を
ん　　　　

アイウエオ
カキクケコ
サシスセソ
タチツテト
ナニヌネノ
ハヒフヘホ
マミムメモ
ヤ　ユ　ヨ
ラリルレロ
ワ　　　ヲ
ン　　　　

ｱｲｳｴｵ
ｶｷｸｹｺ
ｻｼｽｾｿ
ﾀﾁﾂﾃﾄ
ﾅﾆﾇﾈﾉ
ﾊﾋﾌﾍﾎ
ﾏﾐﾑﾒﾓ
ﾔ ﾕ ﾖ
ﾗﾘﾙﾚﾛ
ﾜ   ｦ
ﾝ    

ガ - ギ - グ - ゲ - ゴ
ザ - ジ - ズ - ゼ - ゾ
ダ - ヂ - ヅ - デ - ド
バ - ビ - ブ - ベ - ボ
パ - ピ - プ - ペ - ポ

ｶﾞ - ｷﾞ - ｸﾞ - ｹﾞ - ｺﾞ
ｻﾞ - ｼﾞ - ｽﾞ - ｾﾞ - ｿﾞ
ﾀﾞ - ﾁﾞ - ﾂﾞ - ﾃﾞ - ﾄﾞ
ﾊﾞ - ﾋﾞ - ﾌﾞ - ﾍﾞ - ﾎﾞ
ﾊﾟ - ﾋﾟ - ﾌﾟ - ﾍﾟ - ﾎﾟ

カ゛ - キ゛ - ク゛ - ケ゛ - コ゛
サ゛ - シ゛ - ス゛ - セ゛ - ソ゛
タ゛ - チ゛ - ツ゛ - テ゛ - ト゛
ハ゛ - ヒ゛ - フ゛ - ヘ゛ - ホ゛
ハ゜ - ヒ゜ - フ゜ - ヘ゜ - ホ゜


キャー、キュー、キョー。シャー、シュー、ショー。チャー、チュー、チョー。ニャー、ニュー、ニョー。ヒャー、ヒュー、ヒョー。ミャー、ミュー、ミョー。リャー、リュー、リョー。ギャー、ギュー、ギョー。ジャー、ジュー、ジョー。ビャー、ビュー、ビョー。ピャー、ピュー、ピョー。
ｷｬｰ､ｷｭｰ､ｷｮｰ｡ｼｬｰ､ｼｭｰ､ｼｮｰ｡ﾁｬｰ､ﾁｭｰ､ﾁｮｰ｡ﾆｬｰ､ﾆｭｰ､ﾆｮｰ｡ﾋｬｰ､ﾋｭｰ､ﾋｮｰ｡ﾐｬｰ､ﾐｭｰ､ﾐｮｰ｡ﾘｬｰ､ﾘｭｰ､ﾘｮｰ｡ｷﾞｬｰ､ｷﾞｭｰ､ｷﾞｮｰ｡ｼﾞｬｰ､ｼﾞｭｰ､ｼﾞｮｰ｡ﾋﾞｬｰ､ﾋﾞｭｰ､ﾋﾞｮｰ｡ﾋﾟｬｰ､ﾋﾟｭｰ､ﾋﾟｮｰ｡

ファ フィ フェ フォ フュ ウィ ウェ ウォ ヴァ ヴィ ヴェ ヴォ ツァ ツィ ツェ ツォ チェ シェ ジェ ティ ディ デュ トゥ
ﾌｧ ﾌｨ ﾌｪ ﾌｫ ﾌｭ ｳｨ ｳｪ ｳｫ ｳﾞｧ ｳﾞｨ ｳﾞｪ ｳﾞｫ ﾂｧ ﾂｨ ﾂｪ ﾂｫ ﾁｪ ｼｪ ｼﾞｪ ﾃｨ ﾃﾞｨ ﾃﾞｭ ﾄｩ

AaＡａ/BbＢｂ/CcＣｃ/DdＤｄ/EeＥｅ/FfＦｆ/GgＧｇ/HhＨｈ/IiＩｉ/JjＪｊ/KkＫｋ/LlＬｌ/MmＭｍ/NnＮｎ/OＯｏo/PpＰｐ/QqＱｑ/RrＲｒ/SsＳｓ/TtＴｔ/UuＵｕ/VvＶｖ/WwＷｗ/XxＸｘ/YyＹｙ/ZzＺｚ

. ．
, ，
- －
_ ＿
/ ／
: ：
; ；
| ｜
+ ＋
= ＝
% ％
# ＃
' ’
" ”
( （ ) ） }
{ ｛ } ｝ }
[ ［ ] ］ }
< ＜ > ＞ }
! ！
? ？
& ＆
$ ＄
 　
*/