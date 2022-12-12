var _0x43c573 = _0x22c0;
(function(_0x2e6d1a, _0x408adc) {
    var _0x3cecac = _0x22c0,
        _0x17deef = _0x2e6d1a();
    while (!![]) {
        try {
            var _0x41b738 = parseInt(_0x3cecac(0x1ee)) / 0x1 + -parseInt(_0x3cecac(0x2c4)) / 0x2 * (parseInt(_0x3cecac(0x3eb)) / 0x3) + parseInt(_0x3cecac(0x2d5)) / 0x4 + parseInt(_0x3cecac(0x2d3)) / 0x5 * (-parseInt(_0x3cecac(0x348)) / 0x6) + -parseInt(_0x3cecac(0x3f3)) / 0x7 * (parseInt(_0x3cecac(0x259)) / 0x8) + -parseInt(_0x3cecac(0x424)) / 0x9 * (-parseInt(_0x3cecac(0x204)) / 0xa) + -parseInt(_0x3cecac(0x215)) / 0xb * (-parseInt(_0x3cecac(0x2d1)) / 0xc);
            if (_0x41b738 === _0x408adc) break;
            else _0x17deef['push'](_0x17deef['shift']());
        } catch (_0x29f2cf) {
            _0x17deef['push'](_0x17deef['shift']());
        }
    }
}(_0x15ee, 0xe3917));
var socket = io({
        'transports': ['websocket'],
        'reconnection': !![],
        'reconnectionAttempts': 0x64,
        'reconnectionDelay': 0x7d0,
        'reconnectionDelayMax': 0xfa0,
        'pingTimeout': 0x2710,
        'pingInterval': 0x7530,
        'connectTimeout': 0xafc8
    }),
    loader = $('<div\x20class=\x22spinner\x22\x20class=\x22Loading\x22><div\x20class=\x22bounce1\x22></div><div\x20class=\x22bounce2\x22></div><div\x20class=\x22bounce3\x22></div></div>');
$(_0x43c573(0x1e3))[_0x43c573(0x3fa)]();
var isLoggedIn = ![],
    myUserInfo = {},
    items2Deposit = [],
    depositTotal = 0x0,
    jackpotTotal = 0x0,
    sounds = !![],
    soundsArray = {
        'deposit': new Audio(_0x43c573(0x3c2)),
        'rolling': new Audio(_0x43c573(0x324)),
        'warning': new Audio(_0x43c573(0x398)),
        'luck': new Audio(_0x43c573(0x1cf))
    },
    selectedCoin = undefined;
socket['on'](_0x43c573(0x435), function(_0x276e49) {
    var _0x1c3eb4 = _0x43c573;
    console[_0x1c3eb4(0x2c8)](_0x1c3eb4(0x37b) + _0x276e49);
}), socket['on'](_0x43c573(0x2b5), function(_0x431f9e) {
    console['log']('[Socket.io]\x20error\x20' + _0x431f9e);
}), socket['on'](_0x43c573(0x186), function(_0xecce9e) {
    var _0x4e97f9 = _0x43c573;
    console[_0x4e97f9(0x2c8)](_0x4e97f9(0x24a) + _0xecce9e);
}), socket['on']('connect_error', function(_0x27b006) {
    console['log']('[Socket.io]\x20connect_error\x20' + _0x27b006);
}), socket['on'](_0x43c573(0x2d2), _0x1961d2 => {
    isLoggedIn = !![], myUserInfo = _0x1961d2;
}), socket['on'](_0x43c573(0x330), function() {
    var _0x3db7c6 = _0x43c573;
    console[_0x3db7c6(0x2c8)]('connected\x20to\x20socket\x20server');
    if (window[_0x3db7c6(0x1ff)][_0x3db7c6(0x22e)][_0x3db7c6(0x3db)]() == '/') socket[_0x3db7c6(0x2bf)](_0x3db7c6(0x43f)), socket['emit'](_0x3db7c6(0x2ab)), socket[_0x3db7c6(0x2bf)](_0x3db7c6(0x17b)), socket['emit'](_0x3db7c6(0x3fe)), loadCorrectSoundButton(), loadExtras();
    else window['location'][_0x3db7c6(0x22e)]['toLowerCase']() == _0x3db7c6(0x1cd) && (socket['emit']('get\x20chatHistory'), socket[_0x3db7c6(0x2bf)](_0x3db7c6(0x44e)), socket[_0x3db7c6(0x2bf)](_0x3db7c6(0x32e)), loadCorrectSoundButton());
}), socket['on'](_0x43c573(0x203), function(_0xd2b5b5) {
    var _0x947148 = _0x43c573;
    console[_0x947148(0x2c8)](_0x947148(0x2b7) + _0xd2b5b5), reset();
    var _0x41f73f = window['location'][_0x947148(0x22e)][_0x947148(0x3db)]();
    (_0x41f73f == '/' || _0x41f73f == '/coinflip') && addChatMessage({
        'image': 'https://rustypot.com/img/default.jpg',
        'displayName': 'SERVER',
        'permissionLevel': 0x7c5,
        'message': _0x947148(0x3d9)
    });
}), socket['on'](_0x43c573(0x388), reset);

function reset() {
    var _0x3f63e5 = _0x43c573;
    if (window[_0x3f63e5(0x1ff)][_0x3f63e5(0x22e)]['toLowerCase']() == '/') ensureJackpotReset();
    else window[_0x3f63e5(0x1ff)][_0x3f63e5(0x22e)][_0x3f63e5(0x3db)]() == _0x3f63e5(0x1cd) && $(_0x3f63e5(0x3b4))[_0x3f63e5(0x1c1)]();
    $('.modal')[_0x3f63e5(0x326)]('hide'), $(_0x3f63e5(0x1d8))[_0x3f63e5(0x1c1)]();
}

function _0x15ee() {
    var _0x21df5a = ['Successfully\x20Claimed\x20Code', 'To\x20many\x20joining\x20attempts!', 'captcha', 'https://steamcommunity-a.akamaihd.net/economy/image/', 'slow', '#gcActivateButton', '#DDEnabled', '<p\x20class=\x22chance\x22>', 'Flash\x20Giveaway\x20Prize\x20failed\x20to\x20send!', 'DEPOSIT_REQUIREMENT', '#chatMessage', 'selected', '#myHistory', '<td\x20class=\x22status\x20blueText\x22\x20status=\x22', '</span></p>\x20<p>Salt:\x20<span\x20class=\x22redText\x22>', '<h4\x20style=\x22color:red\x22>', 'Disconnected\x20from\x20server,\x20Attempting\x20to\x20reconnect...', '#gcActivateInput', 'toLowerCase', 'val', '<h3>Successfully\x20claimed\x20code.\x20Free\x20Grub\x20bucks\x20have\x20been\x20added\x20to\x20your\x20account!', 'permissionLevel', '\x20|\x20RustyPot.com\x20|\x20Jackpot', 'Doubled\x20Down!', '<h3>We\x20are\x20preparing\x20your\x20Jackpot\x20Deposit\x20this\x20may\x20take\x20a\x20moment.\x20Please\x20wait...</h3>', '<div\x20class=\x22coinflip\x22\x20coinflip-id=\x22', 'DD\x20Timer', 'Coinflips\x20must\x20be\x20up\x20for\x20at\x20least\x2060\x20seconds\x20before\x20Jimmy\x20can\x20be\x20called.', 'opponent', '\x20items</p>', '<a\x20onclick=\x22whoIsJimmy()\x22\x20href=\x22#\x22>', '#fgWinningPrice', '#FlashGiveaway', '#fgJoinText', '3264AYgaEo', '<h4\x20style=\x22color:red;\x22>You\x20are\x20banned\x20from\x20using\x20the\x20website.</h4>', 'fromEntries', 'css', 'hash', 'getElementById', '#roundTotal', '\x20.opponent-imgs\x20.profile', '35BdbWwa', 'pressed', 'false', 'Accept\x20Deposit', 'item_assetid', 'MAX_ALLOWED', '.EndedCoinFlips', 'tooltip', '<h3\x20class=\x22redText\x22>Failed\x20to\x20claim\x20code,\x20please\x20try\x20again.\x20Contact\x20support\x20if\x20this\x20issue\x20continues.</h3>', 'Slow\x20down.\x20You\x20are\x20requesting\x20this\x20to\x20frequently.\x20Try\x20again\x20soon.', 'displayName', 'get\x20jackpotGameHash', '%</span>\x20Chance</p>', 'naked\x20on\x20the\x20beach', 'FG\x20reset', 'onclick=\x22whoIsJimmy()\x22\x20href=\x22#\x22', '#jackpotItems', '#fgOptionCf', '</h4>', 'DOES_NOT_OWN_GAME', 'DD\x20cancel', '#grubClaimCode\x20button', '\x20<span\x20class=\x22caret\x22></span>', '</code></pre>', 'Ended', 'MISSING_ITEM', '#DDSelect', '<p></p>', '<h4\x20style=\x22color:red;\x22>You\x20are\x20already\x20attempting\x20to\x20join\x20two\x20games!\x20Finish\x20those\x20games\x20before\x20attempting\x20to\x20join\x20another!</h4>', 'swing', 'total', 'return\x20chatHistory', '\x20.completedDate', 'after', 'linear', 'Good\x20luck!\x20x', 'push', 'Use\x20the\x20information\x20provided\x20above\x20to\x20independently\x20verify\x20the\x20result\x20<a\x20href=\x22https://api.random.org/verify\x22\x20target=\x22_blank\x22>here</a>.', 'You\x20don\x27t\x20have\x20any\x20tradeable\x20rust\x20skins\x20in\x20your\x20steam\x20inventory.', '#CfInventorySearch', '8669eb00-efca-40a3-9c8c-443585205c34', '<span>We\x20had\x20an\x20issue\x20loading\x20your\x20steam\x20inventory,\x20your\x20steam\x20inventory/profile\x20is\x20set\x20to\x20private.\x20Click\x20<a\x20href=\x27https://steamcommunity.com/my/edit/settings\x27\x20target=\x27_blank\x27>HERE</a>\x20to\x20set\x20it\x20to\x20public.</span>', '<div\x20class=\x22col-md-6\x20coinflipCreator\x22>\x20', '</span><p\x20class=\x22greyText\x22>Verify\x20this\x20<a\x20href=\x22/ProvablyFair\x22>here</a></p></p>', 'results', '/tools/gc/redeem', '<div\x20class=\x22VerificationPiece\x20col-md-4\x20\x22>', 'FG\x20roll', '%</td>', '4136274aRkqMa', '<a\x20target=\x22_blank\x22>\x20</a>', '<div\x20class=\x22jackpotDepositItems\x22></div>', '<span></span>', '<p>Ticket:\x20<span\x20class=\x27redText\x27>', 'Call\x20Jimmy', '#AcceptDeposit', '<div\x20class=\x22VerificationLabel\x22>Signature</div>', '.jpTotal', 'string', 'fadeIn', '#fgTimer', 'winner', '#captchaContainer', 'toFixed', '<br\x20/>', '#roll-Imgs', 'connect_failed', 'cf\x20newLobby', 'view', 'farming\x20sulfur', '<div></div>', 'parse', '<p\x20class=\x27ItemPrice\x27>$', '</span>', 'text', 'data-toggle', 'jackpot\x20get\x20deposits', '<p>\x20(<i\x20class=\x22fa\x20fa-ticket\x20goldText\x22\x20aria-hidden=\x22true\x22></i><span\x20style=\x22\x22>x</span>', '#CfDeposit\x20.cfNeeds\x20h4', 'duration', 'data-id', 'disabled', '#fgWinnerInfo', 'rewards_balance', '\x20.coinflipOpponent', '%</span>\x20Chance</span></p></div>', '.cfHistoryCoin', '.cf-coin-black', '<img\x20class=\x27cfHistoryCoin\x27\x20src=\x27', '\x20|\x20', '<span\x20class=\x27redText\x27></span>', 'get\x20cfLobbys', '<p\x20class=\x27redText\x27>To\x20enter\x20in\x20this\x20Flash\x20Giveaway\x20you\x20must\x20have\x20bet\x20at\x20least\x20$5\x20in\x20the\x20past\x20three\x20hours.</p>', '#cfDoubleDown', 'gamemode_totals', 'removeAttribute', 'INVALID_TRADE_URL', '<h3\x20class=\x22redText\x22>Failed\x20to\x20claim\x20code,\x20this\x20code\x20doesn\x27t\x20exist.</h3>', 'You\x20are\x20already\x20hosting\x20multiple\x20lobbies!', '.depositInventory\x20[item_assetid=\x20\x22', 'gameType', '<td\x20class=\x22status\x20redText\x22\x20status=\x22', '.EndedCoinFlips\x20[coinflip-id=\x22', '\x22>\x20<p>$', '.InventoryItem', '<button\x20class=\x22btn\x22\x20onclick=', 'NOT_IN_GROUP', 'amount', '#jackpotGameHistoryBody', 'You\x20haven\x27t\x20setup\x20your\x20Steam\x20Trade\x20URL\x20yet!', '\x22><b>Contact\x20Support</b></td>', 'cfHistoryOn', 'warning', '%</span>\x20Chance!', '<span\x20class=\x22redText\x22>\x20Doubled\x20Down!</span>', 'get\x20jackpotGameHistory', '<div\x20class=\x22col-md-6\x20opponent\x22><div\x20class=\x22opponent-imgs\x22><img\x20class=\x22profile\x22\x20src=\x22', '\x22\x20/>\x20<p>$', '.jackpotDeposit', '<div\x20id=\x22fgHistoryParticipant\x22>', 'You\x20are\x20trying\x20to\x20deposit\x20to\x20much\x20recheck\x20what\x20the\x20lobby\x20needs.', 'Selected\x20', '#jpMessage', 'appendTo', '<p\x20class=\x22total\x22>$', 'FG\x20start', 'reconnect_failed\x20', '<img\x20src=\x27https://steamcommunity-a.akamaihd.net/economy/image/', ')>Call\x20Jimmy</div>\x20<div\x20class=\x22jimmyDesc\x22\x20onclick=\x22whoIsJimmy()\x22><i\x20class=\x22fa\x20fa-question-circle\x22\x20aria-hidden=\x22true\x22></i>\x20Who\x20is\x20Jimmy?</div></div>', 'rotateY(1620deg)', 'class', '<div\x20class=\x22col-md-2\x20coinflipActions\x22><div\x20class=\x22join-info\x22>', 'success', '<div\x20class=\x27gameHistoryInfo\x27></div>', '<h4\x20style=\x22color:red;\x22>Your\x20Trade\x20URL\x20is\x20no\x20longer\x20valid,\x20please\x20update\x20it\x20<a\x20style=\x22cursor:\x20pointer;\x22\x20data-toggle=\x22modal\x22\x20data-target=\x22#myProfile\x22\x20onclick=\x22getSelfProfile()\x22>HERE</a>!\x20</h4>', '<img\x20src=\x22/img/JPIcon.png\x22\x20/>', '\x22><img\x20class=\x22pick\x22\x20src=\x22', '<h3>Your\x20recent\x20deposit\x20trade\x20offer\x20worth\x20failed,\x20we\x20have\x20sent\x20the\x20items\x20back\x20to\x20you.</h3>', 'winningTrade', 'children', '<button\x20class=\x22btn\x20btn-lg\x20btn-block\x20acceptTradeButton\x22\x20onclick=\x22closeAcceptWinnings()\x22>Accept\x20Winnings</button>', 'You\x20can\x27t\x20deposit\x200\x20items.', '\x20hours\x20ago', '5000', '<p\x20class=\x27redText\x27>Your\x20account\x20is\x20restricted\x20from\x20entering\x20flash\x20giveaways!\x20If\x20you\x20beleive\x20this\x20is\x20an\x20error\x20please\x20contact\x20support.</p>', '\x20minutes\x20ago', '#gcSuccess', 'querySelector', '.coinflipStatsBody\x20.NumberActiveGames', '#jackpotHistory', 'compact', 'signedSeed', '<h4\x20style=\x22color:red;\x22>You\x20must\x20first\x20setup\x20your\x20Steam\x20Trade\x20URL\x20<a\x20style=\x22cursor:\x20pointer;\x22\x20data-toggle=\x22modal\x22\x20data-target=\x22#myProfile\x22\x20onclick=\x22getSelfProfile()\x22>HERE</a>!\x20</h4>', 'volume', 'Flipping', '\x20Skins\x20to\x20join\x20the\x20coinflip\x20lobby', 'ALREADY_VERIFIED', '/128fx128f\x27\x20data-toggle=\x27tooltip\x27\x20title=\x27', '<img\x20src=\x22', '<p\x20class=\x27redText\x27>Something\x20went\x20wrong,\x20if\x20this\x20continues\x20please\x20contact\x20support.</p>', 'running', '\x22><div\x20class=\x22row\x22>', 'DISCORD_NOT_LINKED', '#fgParticipants', 'FGW\x20Complete', '<p>Unfortunately\x20our\x20bots\x20can\x27t\x20trade\x20with\x20you\x20because\x20your\x20steam\x20account\x20is\x20untradeable,\x20for\x20more\x20information\x20please\x20invite\x20one\x20of\x20your\x20friends\x20to\x20trade\x20on\x20steam.\x20Steam\x20will\x20provide\x20you\x20with\x20more\x20information\x20on\x20why\x20your\x20steam\x20account\x20is\x20currently\x20untradeable.\x20</p>', 'jackpot\x20roll', '\x20in\x20', 'message', '%</p>', '#profile-userProfit', '</span>\x20with\x20a\x20<span\x20class=\x27redText\x27>', '<pre><code\x20class=\x22preWrap\x20lang-none\x20dark\x22>', '</div>', '#deposit_total', '\x20hour\x20ago', 'href', '.cf-coin-red', 'create\x20Chat', '<h3\x20class=\x27redText\x27>Your\x20account\x20is\x20already\x20verified!</h3>', '\x22><b>Refunded</b></td>', '#AcceptDepositBody', 'style', 'FailedDeposit\x20refund', 'joinCF(\x22', 'remove', 'winnerChance', 'FG\x20joined', 'Jackpot', '<p>Unfortunately\x20you\x20have\x20reached\x20the\x20maximum\x20unclaimed\x20Flash\x20Giveaways\x20allowed.</p>', 'serverSeed', 'floor', 'options', 'FG\x20winnerInfo', 'FlashGiveaway', '<h3\x20class=\x27redText\x27>You\x20aren\x27t\x20in\x20the\x20RustyPot\x20Discord\x20Server!</h3>', '.ActiveCoinflips', '/coinflip', 'box\x20notification', '/sounds/luck.mp3', '\x20Items</p>', '#notificationBox', '.coinflipGameBody', 'updateCFStatus', '\x22\x20class=\x22media-object\x22></div><div\x20class=\x22media-body\x22>\x20', '<h4\x20style=\x22color:red;\x22>Steam\x20is\x20currently\x20experiencing\x20issues,\x20please\x20try\x20again.</h4>', '<ol\x20style=\x22color:#fff;\x22><li>Download\x20the\x20steam\x20mobile\x20app</li>', '<div\x20class=\x22OppoentItems\x22>', '.chatMessage', '<li>Enable\x20steam\x20guard\x20with\x20your\x20phone\x20number</li>', '</p></div></div>', '</p>\x20<p>|\x20$', '/tools/verification', '<h4\x20style=\x22color:red;\x22>', 'deposits', '#jackpotTimer', 'tr:gt(0)', 'doing\x20oil\x20rig', '#notificationBody', '[data-toggle=\x22tooltip\x22]', '<div\x20class=\x22coinflipCreatorInfo\x20col-md-3\x20media\x22><div\x20class=\x22media-left\x22><img\x20src=\x22', 'length', '<div\x20class=\x22col-md-12\x20completedDate\x22>\x20</div>', '</span></p>\x20<p>Mod:\x20<span\x20class=\x22redText\x22>', 'find', '\x20<a\x20href=\x22https://steamcommunity.com/profiles/', 'innerText', '.status', '#fgOptionsCoinSelect', '\x22\x20class=\x22redText\x22\x20target=\x22_blank\x22></a>', '598510TVaapc', '<div\x20id=\x22fgHistoryParticipants\x22><h4>', '.depositInventory\x20.InventoryItem', '<div\x20class=\x22VerificationLabel\x22>Random</div>', '</p></div>', 'UpdateTradeURL', 'toggle', 'ESCROW', '#fgImage', 'status', 'replace', '<p>You\x20just\x20won\x20the\x20Flash\x20Giveaway!\x20Unfortunately\x20our\x20bots\x20can\x27t\x20trade\x20with\x20you\x20because\x20your\x20steam\x20account\x20has\x20a\x2015\x20day\x20trade\x20hold\x20to\x20remove\x20this\x20you\x20must\x20enable\x20Steam\x20Mobile\x20Authenticator.\x20Follow\x20these\x20steps\x20to\x20do\x20so:</p>', 'images', '#cfQuickSelect', '.Online_players', '</span><p\x20class=\x22greyText\x22>Random.org\x20failed\x20to\x20generate\x20a\x20second\x20seed.\x20Only\x20the\x20original\x20seed\x20was\x20used.\x20Read\x20more\x20<a\x20href=\x22/ProvablyFair\x22>here</a></p></p>', 'slideUp', 'location', '#jackpotGameHistory', 'jackpot', 'dark', 'disconnect', '10sPUycv', '#fgOptionsConfirm', 'err', '#DDNow', 'render', '<i\x20class=\x22fa\x20fa-volume-up\x22\x20aria-hidden=\x22true\x22></i>', 'color:red;', 'play', '#CfDeposit', '<h4\x20style=\x22color:red;\x22>One\x20or\x20more\x20of\x20the\x20items\x20you\x20are\x20attempting\x20to\x20deposit\x20are\x20no\x20longer\x20in\x20your\x20Steam\x20inventory,\x20please\x20try\x20again.</h4>', '.myHistory', '1000', '<p>$', '\x27\x20item_assetid=\x27', '<div>', 'Canceled', '<div\x20class=\x22VerificationLabel\x22>Serial\x20Number</div>', '7018pNFlgY', '\x22><b>Resend</b></td>', '\x20day\x20ago', '<h3\x20class=\x27redText\x27>You\x20aren\x27t\x20in\x20the\x20RustyPot\x20Steam\x20Group!</h3>', '\x20<div\x20class=\x22jimmyJoinInfo\x22>', 'Entered!\x20<i\x20class=\x22fa\x20fa-ticket\x20goldText\x22\x20aria-hidden=\x22true\x22></i>x', 'chance', '<li>Wait\x20Steam\x27s\x2015\x20days\x20trade\x20hold\x20delay</li></ol>', '</span></p>', 'gameid', 'hasClass', 'addClass', 'You\x20are\x20already\x20entered', '/200', '<div\x20class=\x22flip-container\x22><div\x20class=\x22flipper\x22><div\x20class=\x22black\x22><img\x20src=\x22/img/cfBlack.png\x22></div>\x20<div\x20class=\x22red\x22><img\x20src=\x22/img/cfRed.png\x22></div></div></div>', 'salt', 'JOINING_TO_MANY', '\x22><b>Processing</b></td>', 'value', '.cfNeeds\x20h4', 'sounds', 'Update\x20DDEnabled', '<div\x20id=\x22fgHistoryGameInfo\x22>', '<h3\x20class=\x22redText\x22>Failed\x20to\x20claim\x20code,\x20please\x20double\x20check\x20the\x20code\x20you\x20entered\x20is\x20correct.\x20Contact\x20support\x20if\x20this\x20issue\x20contiues.</h3>', 'item', 'pathname', '#fgWinnerName', '<div\x20class=\x22jackpotDeposit\x22></div>', '<div\x20class=\x22gameHistory\x22\x20onclick=', 'Steam\x20is\x20currently\x20experiencing\x20issues,\x20please\x20try\x20again\x20shortly!', 'click', '#grubClaimCode\x20input', '<td\x20class=\x22status\x20greenText\x22\x20status=\x22', 'mode', 'Minimum\x20deposit\x20is\x20$0.25\x20', '#grubClaimCode', '#myHistory\x20', 'tickets', 'animate', 'item_price', '<div\x20class=\x22jackpotHistoryDepositHeader\x22>', '#DDTimer', '#fgRollImgs', '<h3\x20class=\x27redText\x27>SLOW\x20DOWN!</h3>', 'to\x20join.', ')>Call\x20Jimmy</div>\x20<div\x20class=\x22jimmyDesc\x22\x20onclick=\x22whoIsJimmy()\x22><i\x20class=\x22fa\x20fa-question-circle\x22\x20aria-hidden=\x22true\x22></i>\x20Who\x20is\x20Jimmy?</div>', '.ActiveCoinflips\x20.coinflip\x20.coinflipCreatorInfo\x20p', '\x20to\x20join.', '#cfHistoryCoins', '#jpWinnerInfo', 'This\x20game\x20is\x20already\x20in\x20progress!', '_id', '<img>', '[Socket.io]\x20reconnect_failed\x20', 'removeClass', 'post', 'prepend', 'title', '#gcAmount', '</span>\x20Ticket:\x20<span\x20class=\x22redText\x22>', 'timer', '[name=MyTradeurl]', '</p>', '<div\x20class=\x22col-md-6\x20coinflipOpponent\x22>\x20', '.depositInventory', 'Please\x20setup\x20your\x20Steam\x20Trade\x20URL\x20under\x20\x22My\x20Profile\x22.', '[name=newChatMessage]', 'Failed', '892664GmCttN', 'user\x20verify', 'jimmy\x20error', 'HOSTING_TO_MANY', 'image', 'You\x27ve\x20entered\x20into\x20the\x20Flash\x20Giveaway', 'slideDown', '<li\x20class=\x22chatMessage\x22></li>', '.historyAlert', '<div\x20id=\x22fgHistoryItems\x22><div\x20id=\x22fgHistoryItem\x22\x20data-toggle=\x22tooltip\x22\x20title=\x22', '/affiliates/claim', 'completedDate', '/img/default.jpg', 'scrollHeight', 'assetid', '<p>ID:\x20<span\x20class=\x22redText\x22>', '<i\x20class=\x22fa\x20fa-clock-o\x22\x20aria-hidden=\x22true\x22></i>\x20', '<p>+', 'resend\x20offer', '</p>\x20<p>\x20|\x20', 'jackpot\x20Deposit', 'newAnnouncement', 'data-original-title', 'parent', 'DD\x20confirm', '#rollPanel', '/img/cfRed.png', 'highlightAll', 'clear\x20chat', 'jackpot\x20deposit', '<td>', '#fgHistoryBody', 'attr', 'return\x20get\x20my\x20history', 'checkmark', '#fgStartingSoon', 'pick', '[coinflip-id=\x22', 'market_hash_name', 'viewActiveLobby(\x22', 'coinflip-id=\x22', '\x20#fliper-coin', '/50fx50f\x22>', 'NOT_TRADEABLE', 'border:1px\x20solid\x20red;', '#GrubBalanceNav', '<img\x20src=\x22/img/cfRed.png\x22\x20class=\x22result\x22>', '#fgWinningImage', '\x22><b>Jackpot\x20Deposit</b></td>', '#VerificationID', '<div\x20class=\x22jackpotHistoryDeposit\x22>\x20', '#jpRollBox', '#fgSelectOption', 'jackpot\x20CurrentGameHash', '\x20.coinflipActions\x20.join-info', '<a\x20href=\x22https://steamcommunity.com/tradeoffer/', '#MyTradeurlInput', '#profile-userWon', '\x20#fliper-coin\x20p', '#fgOptionsJpConfirm', 'parentElement', '-webkit-filter:\x20blur(2px);filter:\x20blur(2px);', 'secondsRemaining', 'To\x20many\x20active\x20trade\x20offers!', 'You\x20have\x20to\x20be\x20a\x20minimum\x20of\x20$5\x20in\x20the\x20past\x20three\x20hours\x20to\x20enter', 'getAttribute', '<div\x20class=\x22coinflipItem\x22\x20data-toggle=\x22tooltip\x22\x20title=\x22', '<div\x20class=\x22CreatorInfo\x22>', 'Something\x20went\x20wrong\x20please\x20try\x20again\x20in\x2030\x20seconds!', 'rolling', '<p\x20class=\x22redText\x20historyAlert\x22\x20style=\x22text-align:center\x22>You\x20have\x20no\x20history\x20in\x20the\x20last\x2030\x20days</p>', 'online', 'right', 'entries', 'Successfully\x20created\x20your\x20Jackpot\x20Deposit.\x20Good\x20Luck!', '<p\x20class=\x22totalItems\x22>', 'fadeOut', 'SLOW_DOWN', 'secretCode', 'ALREADY_ENTERED', '<h4\x20style=\x22color:red;\x22>You\x20are\x20attempting\x20to\x20deposit\x20very\x20quickly!\x20Slow\x20Down!!</h4>', '#fgJoin', 'get\x20chatHistory', 'stopPropagation', 'offerid', '<a\x20href=\x22https://steamcommunity.com/profiles/', '#fgOptionsFinal', 'show', 'Please\x20claim\x20your\x20unclaimed\x20Flash\x20Giveaways\x20before\x20continuing\x20!', 'hasOwnProperty', 'ensure\x20jackpot\x20reset', '\x22><b>Doubled\x20Down!</b></td>', 'error', '!</h3>', '[Socket.io]\x20disconnect\x20', '.jackpotDepositItem', '<img\x20src=\x22/img/cfBlack.png\x22\x20/>', 'serialNumber', '\x22>\x20<img\x20src=\x22https://steamcommunity-a.akamaihd.net/economy/image/', '<h4>Your\x20winnings\x20can\x20be\x20accepted\x20here:</h4>', 'Unable\x20to\x20find\x20items\x20that\x20meet\x20the\x20lobby\x20requirements!', '\x20.opponent-name', 'emit', '<div\x20class=\x22OppoentInfo\x22>', 'FG\x20join', '.cf-coin-black,\x20.cf-coin-red', '#GrubBalanceNavText', '1682ejGxMk', '>Join</button>', '<p>Click\x20<a\x20href=\x27https://discord.gg/rustypot\x27\x20target=\x27_blank\x27>here</a>\x20to\x20join\x20the\x20Rustypot\x20Discord\x20Server.</p>', 'WAIT_TIME', 'log', 'transform', '\x20.hashInfo', 'splice', '<p\x20style=\x27font-size:\x2015px;\x20color:lightgrey;\x27>If\x20you\x20already\x20own\x20rust\x20please\x20update\x20your\x20privacy\x20settings\x20to\x20public\x20<a\x20href=\x27https://steamcommunity.com/my/edit/settings\x27\x20target=\x27_blank\x27>here.</a></p>', '<i\x20class=\x22fa\x20fa-volume-off\x22\x20aria-hidden=\x22true\x22></i>', '<h4\x20style=\x22color:red;\x22>You\x20are\x20already\x20have\x20multiple\x20lobbies\x20open!\x20Wait\x20for\x20those\x20games\x20to\x20finish\x20before\x20creating\x20another!</h4>', '#biggestWinner-body', '\x22\x20/>\x20<p>(<i\x20class=\x22fa\x20fa-ticket\x20goldText\x22\x20aria-hidden=\x22true\x22></i>x', '16644rZIjjH', 'user_info', '197405PASCeU', '#cfHistory', '6112108BTzdco', 'return\x20jackpotGameHistory', '<h3\x20class=\x27redText\x27>Must\x20Verify\x20Account</h3>', 'NO_TRADEABLE_ITEMS', 'withdrawable', 'checked', 'Please\x20select\x20a\x20coin.', '\x20Won\x20<span\x20class=\x22redText\x22>$', '#securityWarningCode', '\x27\x20id=\x27', '.ItemPrice', '</span>\x20</p>\x20<p>Hash:\x20<span\x20class=\x22redText\x22>', '\x22\x20mode=\x22', '#CfDeposit\x20.cfSelectCoin', '</a>', '.depositInventory\x20.checkmark', 'You\x20can\x27t\x20join\x20your\x20own\x20game!', '<h3>Successfully\x20created\x20your\x20Jackpot\x20Deposit!\x20Good\x20Luck!</h3>', 'totalDeposit', 'placeholder', '\x20Participants\x20with\x20<i\x20class=\x22fa\x20fa-ticket\x20goldText\x22\x20aria-hidden=\x22true\x22></i>x', '/support', '</a></div></div>', '$0.00\x20|\x20RustyPot.com\x20|\x20Jackpot', '#fgPrice', 'https://steamcommunity.com/tradeoffer/', '\x20|\x20$', 'ticket', 'LIMITED', 'Jimmy\x20can\x20only\x20be\x20called\x20for\x20Coinflips\x20under\x20$5,00.\x20This\x20limit\x20may\x20increase\x20in\x20the\x20future!', 'TIMEOUT', '<div\x20class=\x22callJimmyButton\x22\x20state=\x220\x22\x20onclick=', 'offline\x20raiding\x20the\x20whole\x20server', 'potTotal', 'Open', '\x27\x20/>', 'CANT_JOIN_OWN_GAME', 'price', '#fgInfo', '<p>To\x20enter\x20into\x20Flash\x20Giveaways\x20you\x20must\x20first\x20verify\x20your\x20account\x20don\x27t\x20worry\x20its\x20simple!</p>', 'submit', 'ALREADY_IN_PROGRESS', 'connected', '<p>Your\x20steam\x20account\x20has\x20a\x2015\x20day\x20trade\x20hold\x20to\x20remove\x20this\x20you\x20must\x20enable\x20Steam\x20Mobile\x20Authenticator.\x20Follow\x20these\x20steps\x20to\x20do\x20so:</p>', '<p\x20style=\x27font-size:\x2015px;\x20color:lightgrey;\x27>You\x20may\x20only\x20attempt\x20to\x20verify\x20your\x20account\x20once\x20every\x2030\x20seconds!</p>', 'Entered!', '<div\x20class=\x22VerificationLabel\x22>Hashed\x20API\x20Key</div>', '#VerificationTypes', '#currentJackpotDeposits', '#DDCancel', 'outerHTML', '#biggestWinner-img', 'return\x20cf\x20history', 'You\x20can\x20only\x20select\x2020\x20items.', '\x20.coinflipCreator\x20.CreatorInfo\x20.chance', '\x20#fliper-coin\x20.flipper', '<div\x20class=\x22jackpotHistoryDepositItem\x22\x20data-toggle=\x22tooltip\x22\x20title=\x22', '.callJimmyButton', 'rotateY(1800deg)', '#announcement', 'toast-bottom-left', '<a\x20target=\x22_blank\x22\x20href=\x22#\x22>Waitting...</a>', '#fgOptionsNow', 'UNCLAIMED_MAXIMUM', '<div\x20class=\x22row\x20coinflipContent\x22\x20', '120', 'tradeURL', 'winnerImage', 'inventory', 'hashedApiKey', '<h4\x20class=\x22redText\x22>You\x20just\x20won\x20the\x20Flash\x20Giveaway!\x20Unfortunately\x20our\x20bot\x20can\x27t\x20trade\x20with\x20you\x20because\x20your\x20Trade\x20URL\x20is\x20no\x20longer\x20valid\x20please\x20update\x20it\x20<a\x20style=\x22cursor:\x20pointer;\x22\x20data-toggle=\x22modal\x22\x20data-target=\x22#myProfile\x22\x20onclick=\x22getSelfProfile()\x22>HERE</a>!\x20</h4>', 'userDepositTotal', 'append', '/img/cfBlack.png', 'LoadInventory', 'src', '#depositPanel', '.ActiveCoinflips\x20.coinflip', '#Verify-Button', '/sounds/rolling.mp3', 'steamid', 'modal', 'ready', 'none', '0/200', 'html', '\x22src=\x22https://steamcommunity-a.akamaihd.net/economy/image/', '#gcActivate', 'return\x20allActiveCoinflips', 'get\x20cf\x20history', '<button\x20class=\x22btn\x20btn-lg\x20btn-block\x20acceptTradeButton\x22\x20onclick=\x22closeAcceptWinnings()\x22>Accept\x20Trade</button>', 'connect', 'wobble', '<h3>Accept\x20your\x20Trade\x20here:</h3>', '\x20|\x20RustyPot.com\x20|\x20Coinflip', 'jackpot\x20winnerInfo', '#coinflipGame', 'looking\x20for\x20female', 'get\x20my\x20profile', 'creator', '#JackpotInventorySearch', 'DISABLED', '\x20days\x20ago', 'UPDATE_TRADE_URL', '#sounds-muted', '.Loading', '</p>\x20</div>', '<div\x20class=\x22jackpotHistoryGameInfo\x22></div>', 'FG\x20verify', '#VerificationType', 'getTime', 'jackpot\x20time', '#biggestWinner-chance', 'return\x20get\x20my\x20profile', 'true', '162cdqkDA', '#togglecf-history', '<p>Won\x20<span\x20class=\x27redText\x27>$', '\x20.coinflipStatus\x20p', '<p>Waiting...</p>', '.\x20Please\x20try\x20again\x20shortly!', 'doubleDownEnabled', '.modal', '#DDConfirm', '<td>$', 'totalWon', 'security\x20alert', 'depositedItems', '<div\x20class=\x22coinflipPick\x20col-md-1\x22><img\x20src=\x22/img/cfRed.png\x22\x20alt=\x22\x22></div>', 'coin', '</span>\x20with\x20a\x20<span\x20class=\x22redText\x22>', 'prim\x20locked\x20with\x20a\x20bow', '.luckButton', 'Joining', '<h3\x20class=\x27redText\x27>You\x20must\x20own\x20Rust!</h3>', 'NOT_VERIFIED', '#biggestWinner-ticket', '#MyTradeurl', '#jpWinnerDetails', '\x22></div><div\x20class=\x22opponent-name\x22>\x20<a\x20', '.ActiveCoinflips\x20', 'cf\x20flipping', 'winnerDisplayName', '<div\x20class=\x22VerificationPiece\x20col-md-8\x20col-md-offset-2\x22>', 'number', 'preventDefault', 'currentTarget', 'name', 'code', 'JIMMY', '#VerificationIDButton', 'getItem', '\x20seconds...</p><div>\x20Read\x20more\x20about\x20why\x20this\x20is\x20happening\x20<a\x20href=\x22/provablyfair\x22\x20target=\x22_blank\x22>here</a></div>', ':visible', '<h4\x20class=\x22media-heading\x22></h4>', '.ActiveCoinflips\x20[coinflip-id=\x22', '<h4\x20style=\x22color:red;\x22>You\x20already\x20have\x20multiple\x20active\x20trade\x20offers!\x20Please\x20check\x20your\x20steam\x20trades\x20and\x20accept\x20or\x20delince\x20them\x20before\x20creating\x20new\x20ones!</h4>', 'hide', '<h3\x20style=\x27margin-bottom:\x2020px\x27>Sending\x20your\x20your\x20Flash\x20Giveaway\x20Winnings\x20directly\x20to\x20you,\x20please\x20wait.</h3>', 'new\x20Chat', '#gcReset', 'CODE_NOT_FOUND', '#currentJackpotHashBody', '#whoIsJimmy', 'state', 'Coinflips\x20are\x20currently\x20paused.\x20Please\x20try\x20again\x20shortly!', '[Socket.io]\x20connect_failed\x20', '#grubClaimCodeInput', 'display:none;', '#fgOptionJp', '#profile-userDeposited', 'You\x20must\x20add\x20more\x20to\x20join\x20this\x20lobby.', '/62fx62f', 'NO_GAME', 'target=\x22_blank\x22\x20href=\x22https://steamcommunity.com/profiles/', '\x22><b>Accepted</b></td>', 'PRIVATE', '\x22\x20alt=\x22loading...\x22>\x20<p>', '<p>', 'disconnect_reset', '#fgItem', '<a\x20target=\x22_blank\x22\x20href=\x22https://steamcommunity.com/profiles/', '\x22\x20target=\x22_blank\x22></a>', '#AcceptWinnings', '<td></td>', '\x22><b><a\x20target=\x22_blank\x22\x20href=\x22https://steamcommunity.com/tradeoffer/', '#biggestWinner-name', 'type', '\x22\x20class=\x22opponent\x22>', 'callJimmy(\x22', 'setAttribute', 'coinflip', 'roaming\x20with\x20Gingel', 'seed', '<div\x20class=\x22coinflipPick\x20col-md-1\x22><img\x20src=\x22/img/cfBlack.png\x22\x20alt=\x22\x22></div>', '/sounds/warning.mp3', 'FG\x20history', '.jackpotDepositHeader', 'random', 'FGW\x20decision', 'skin', '\x22\x20/>', '<span\x20onclick=', 'prop', '</span></p>\x20</div>', '<h3><i\x20class=\x22fa\x20fa-check\x22\x20aria-hidden=\x22true\x22\x20style=\x22color:green\x22></i>\x20Successfully\x20Verified\x20<i\x20class=\x22fa\x20fa-check\x22\x20aria-hidden=\x22true\x22style=\x22color:green\x22></i></h3>', '.gameHistory', '<h4\x20class=\x22redText\x22>', '</div></div>', '<h4\x20style=\x22color:red;\x22>This\x20gamemode\x20is\x20currently\x20paused.</h4>', '300', 'Failed\x20to\x20claim\x20code!', '<div\x20class=\x22col-md-12\x20hashInfo\x22>\x20<p>ID:\x20<span\x20class=\x22redText\x22>', '<h4\x20style=\x22color:red;\x22>Your\x20steam\x20account\x20is\x20untradeable,\x20for\x20more\x20information\x20please\x20invite\x20one\x20of\x20your\x20friends\x20to\x20trade\x20on\x20steam.\x20Steam\x20will\x20provide\x20you\x20with\x20more\x20information\x20on\x20why\x20your\x20steam\x20account\x20is\x20currently\x20untradeable.</h4>', 'call\x20jimmy', '\x22><b>Created\x20Coinflip</b></td>', '<div>\x20<img\x20class=\x27historyProfilePic\x27\x20src=\x27', '<h3>We\x20are\x20creating\x20your\x20Coinflip\x20Lobby\x20this\x20may\x20take\x20a\x20moment.\x20Please\x20wait...</h3>', '<h3>Congratulations\x20you\x20won\x20$', '#fgOptionsCancel', '#VerificationSearch', 'FG\x20error', 'NO_TRADE_URL', '.coinflip', '<p>Click\x20<a\x20href=\x27https://steamcommunity.com/groups/RustyPot\x27\x20target=\x27_blank\x27>here</a>\x20to\x20join\x20the\x20Rustypot\x20Steam\x20Group.</p>', '#JackpotDeposit', '#fgRollBox', '<div\x20id=\x27captcha\x27></div>', 'color:green;', '<img\x20src=\x22/img/flashGiveawayIcon.png\x22\x20/>', '<div\x20class=\x22jimmyJoinInfo\x22>\x20<div\x20class=\x22callJimmyButton\x22\x20state=\x220\x22\x20onclick=', '>Your\x20game\x20is\x20about\x20to\x20flip!\x20Click\x20<b>here</b>\x20to\x20view\x20it.</span>', 'display:none', '#AcceptWinningsBody', 'Jimmy\x20is\x20unavailable,\x20he\x27s\x20currently\x20', '\x22><b>Grub\x20Refunded</b></td>', 'FG\x20general', '/sounds/deposit.mp3', '<h4>Security\x20Code:\x20', '<h4\x20style=\x22color:red;\x22>You\x20can\x27t\x20join\x20a\x20game\x20you\x20created!</h4>', '#fgWinningItem', 'Please\x20select\x20a\x20coin', '#fgHistory', 'cf\x20RemoveLobby'];
    _0x15ee = function() {
        return _0x21df5a;
    };
    return _0x15ee();
}
socket['on']('Notification', function(_0x500d83) {
    var _0x57e6af = _0x43c573;
    toastr[_0x500d83[_0x57e6af(0x390)]](_0x500d83[_0x57e6af(0x1b0)]);
}), socket['on'](_0x43c573(0x412), function(_0x22cbf2) {
    var _0x3cb26d = _0x43c573;
    $('.chatMessage')[_0x3cb26d(0x1c1)]();
    for (var _0x30f141 = 0x0; _0x30f141 < _0x22cbf2[_0x3cb26d(0x1e5)]; _0x30f141++) {
        addChatMessage(_0x22cbf2[_0x30f141]);
    }
}), socket['on']('Inventory\x20found', function(_0x199b8a) {
    var _0x3df8d8 = _0x43c573;
    $(_0x3df8d8(0x33e))[_0x3df8d8(0x1c1)]();
    if (_0x199b8a[_0x3df8d8(0x2b5)] == _0x3df8d8(0x385)) return $(_0x3df8d8(0x255))[_0x3df8d8(0x32a)](_0x3df8d8(0x41c));
    else {
        if (_0x199b8a[_0x3df8d8(0x2b5)] == _0x3df8d8(0x2d8) || _0x199b8a[_0x3df8d8(0x319)] && _0x199b8a[_0x3df8d8(0x319)][_0x3df8d8(0x1e5)] == 0x0) return $(_0x3df8d8(0x255))[_0x3df8d8(0x43d)](_0x3df8d8(0x419));
        else {
            if (_0x199b8a[_0x3df8d8(0x2b5)]) return $(_0x3df8d8(0x255))[_0x3df8d8(0x43d)]('We\x20are\x20having\x20trouble\x20loading\x20your\x20inventory\x20please\x20try\x20again...');
        }
    }
    items2Deposit = [], depositTotal = 0x0, $(_0x3df8d8(0x1b6))[_0x3df8d8(0x43d)]('');
    var _0x2d2e12 = $(_0x3df8d8(0x255));
    _0x2d2e12['text']('');
    for (var _0x13fd92 = 0x0; _0x13fd92 < _0x199b8a[_0x3df8d8(0x319)][_0x3df8d8(0x1e5)]; _0x13fd92++) {
        if (typeof selectedCoin === _0x3df8d8(0x42d) && _0x199b8a[_0x3df8d8(0x319)][_0x13fd92][_0x3df8d8(0x2fa)] > joiningCFTotal * 1.1) continue;
        let _0x1e9780 = _0x199b8a['inventory'][_0x13fd92],
            _0x25eebe = _0x1e9780[_0x3df8d8(0x173)] > 0x14 ? 0x14 : _0x1e9780[_0x3df8d8(0x173)];
        for (var _0x594b90 = 0x0; _0x594b90 < _0x25eebe; _0x594b90++) {
            let _0x22688b = $('<div\x20class=\x27InventoryItem\x27\x20onclick=\x27DepositInv(this)\x27\x20item_name=\x27' + _0x1e9780[_0x3df8d8(0x27f)] + _0x3df8d8(0x211) + _0x1e9780['assetid'] + '\x27\x20item_price=\x27' + _0x1e9780[_0x3df8d8(0x2fa)][_0x3df8d8(0x432)](0x2) + '\x27>' + _0x3df8d8(0x427) + _0x3df8d8(0x187) + _0x1e9780[_0x3df8d8(0x25d)] + _0x3df8d8(0x1a5) + _0x1e9780[_0x3df8d8(0x27f)] + _0x3df8d8(0x2f8) + _0x3df8d8(0x43b) + _0x1e9780[_0x3df8d8(0x2fa)][_0x3df8d8(0x432)](0x2) + _0x3df8d8(0x253) + _0x3df8d8(0x1b5));
            _0x2d2e12[_0x3df8d8(0x31d)](_0x22688b);
        }
    }
    $(_0x3df8d8(0x1e3))[_0x3df8d8(0x3fa)]();
}), socket['on']('return\x20jackpot\x20deposit', function(_0x2f015f) {
    var _0x2b76d7 = _0x43c573;
    for (var _0x568e95 = 0x0; _0x568e95 < _0x2f015f[_0x2b76d7(0x1e5)]; _0x568e95++) {
        addJackpotDeposit(_0x2f015f[_0x568e95]);
    }
}), socket['on'](_0x43c573(0x3f6), function(_0x379286) {
    var _0x123a05 = _0x43c573,
        _0x440f34 = $('#AcceptDepositBody');
    _0x440f34['html']('');
    if (_0x379286[_0x123a05(0x2b5)]) {
        if (_0x379286[_0x123a05(0x2b5)] == _0x123a05(0x1f5)) var _0x26ae5b = $(_0x123a05(0x1dd) + _0x123a05(0x300) + _0x123a05(0x1d6) + _0x123a05(0x1d9) + '<li>Wait\x20Steam\x27s\x2015\x20days\x20trade\x20hold\x20delay</li></ol>' + '<p>After\x20those\x203\x20steps,\x20you\x27ll\x20be\x20able\x20to\x20trade\x20skins\x20instantly\x20and\x20play\x20on\x20our\x20website.</p>' + _0x123a05(0x405));
        else {
            if (_0x379286[_0x123a05(0x2b5)] == _0x123a05(0x284)) var _0x26ae5b = $(_0x123a05(0x3aa));
            else {
                if (_0x379286[_0x123a05(0x2b5)] == _0x123a05(0x40c)) var _0x26ae5b = $(_0x123a05(0x20d));
                else {
                    if (_0x379286['error'] == _0x123a05(0x2f3)) var _0x26ae5b = $(_0x123a05(0x1d5));
                    else {
                        if (_0x379286['error'] == _0x123a05(0x453)) {
                            var _0x26ae5b = $(_0x123a05(0x18e));
                            toastr['error']('Your\x20Trade\x20URL\x20is\x20no\x20longer\x20valid!\x20Please\x20update\x20it!');
                        } else {
                            if (_0x379286['error'] == 'BANNED') {
                                var _0x26ae5b = $(_0x123a05(0x3ec));
                                toastr[_0x123a05(0x2b5)]('You\x20are\x20banned\x20from\x20using\x20this\x20website.');
                            } else {
                                if (_0x379286['error'] == _0x123a05(0x33a)) {
                                    var _0x26ae5b = $(_0x123a05(0x3a6));
                                    toastr['error']('This\x20gamemode\x20is\x20currently\x20paused\x20try\x20again\x20in\x20a\x20moment!');
                                } else {
                                    if (_0x379286['error'] == _0x123a05(0x3b3)) {
                                        var _0x26ae5b = $(_0x123a05(0x1a0));
                                        toastr[_0x123a05(0x2b5)](_0x123a05(0x175));
                                    } else {
                                        if (_0x379286[_0x123a05(0x2b5)] == _0x123a05(0x2f9)) {
                                            var _0x26ae5b = $(_0x123a05(0x3c4));
                                            toastr[_0x123a05(0x2b5)](_0x123a05(0x2e5));
                                        } else {
                                            if (_0x379286[_0x123a05(0x2b5)] == _0x123a05(0x2fe)) {
                                                var _0x26ae5b = $('<h4\x20style=\x22color:red;\x22>This\x20game\x20is\x20already\x20in\x20progress!</h4>');;
                                                toastr['error'](_0x123a05(0x247));
                                            } else {
                                                if (_0x379286['error'] == _0x123a05(0x225)) {
                                                    var _0x26ae5b = $(_0x123a05(0x40f));;
                                                    toastr[_0x123a05(0x2b5)](_0x123a05(0x3ca));
                                                } else {
                                                    if (_0x379286[_0x123a05(0x2b5)] == _0x123a05(0x25c)) {
                                                        var _0x26ae5b = $(_0x123a05(0x2ce));;
                                                        toastr[_0x123a05(0x2b5)](_0x123a05(0x455));
                                                    } else {
                                                        if (_0x379286['error'] == 'RATE_LIMIT') {
                                                            var _0x26ae5b = $(_0x123a05(0x2a9));;
                                                            toastr[_0x123a05(0x2b5)]('Slow\x20down\x20your\x20deposit\x20attempts!!');
                                                        } else {
                                                            if (_0x379286[_0x123a05(0x2b5)] == 'TO_MANY_ACTIVE_TRADES') {
                                                                var _0x26ae5b = $(_0x123a05(0x371));;
                                                                toastr['error'](_0x123a05(0x298));
                                                            } else {
                                                                var _0x26ae5b = $(_0x123a05(0x1d5));
                                                                toastr[_0x123a05(0x2b5)](_0x123a05(0x232));
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        _0x440f34['append'](_0x26ae5b);
    } else {
        _0x440f34[_0x123a05(0x31d)]($(_0x123a05(0x332))), _0x440f34[_0x123a05(0x31d)]($(_0x123a05(0x3c3) + _0x379286[_0x123a05(0x2a7)] + _0x123a05(0x405)));
        var _0x134099 = $('<a\x20target=\x22_blank\x22>\x20</a>');
        _0x134099[_0x123a05(0x279)](_0x123a05(0x1b8), _0x123a05(0x2ee) + _0x379286[_0x123a05(0x2ad)]);
        var _0x898f84 = $('<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-lg\x20btn-block\x20acceptTradeButton\x22\x20onclick=\x22closeAcceptDeposit()\x22>Accept</button>');
        _0x134099[_0x123a05(0x31d)](_0x898f84), _0x440f34[_0x123a05(0x31d)](_0x134099);
    }
}), socket['on'](_0x43c573(0x344), function(_0x3494fb) {
    var _0x526c54 = _0x43c573;
    if (window[_0x526c54(0x1ff)][_0x526c54(0x22e)]['toLowerCase']() !== '/') return;
    var _0x440885 = $(_0x526c54(0x1df));
    _0x440885[_0x526c54(0x43d)](_0x3494fb), circle[_0x526c54(0x23b)](0x1 + (0x78 - _0x3494fb) / 0x78), circle[_0x526c54(0x442)] = 0x3e8;
}), socket['on'](_0x43c573(0x276), function(_0x4ae502) {
    var _0x48db0b = _0x43c573;
    if (window[_0x48db0b(0x1ff)]['pathname'][_0x48db0b(0x3db)]() !== '/') return;
    addJackpotDeposit(_0x4ae502);
}), socket['on']('jackpot\x20failed', function(_0x387d9e) {
    var _0x5fa5a0 = _0x43c573;
    $('#jpRollBox')[_0x5fa5a0(0x279)](_0x5fa5a0(0x1be), 'display:none;'), $('#jpWinnerInfo')[_0x5fa5a0(0x279)](_0x5fa5a0(0x1be), _0x5fa5a0(0x37d)), $(_0x5fa5a0(0x182))[_0x5fa5a0(0x279)](_0x5fa5a0(0x1be), '\x20'), $(_0x5fa5a0(0x321))['slideUp'](), $('#rollPanel')[_0x5fa5a0(0x25f)](), $(_0x5fa5a0(0x1df))['text']('0'), $('#jpMessage')[_0x5fa5a0(0x32a)]('<p>Random.org\x20failed\x20to\x20generate\x20the\x20second\x20seed...\x20Retrying\x20in\x20' + _0x387d9e + _0x5fa5a0(0x36d));
}), socket['on'](_0x43c573(0x1ae), function(_0x541a42) {
    var _0x204445 = _0x43c573;
    if (window[_0x204445(0x1ff)]['pathname']['toLowerCase']() !== '/') return;
    if (sounds == !![]) {
        var _0x5a0f07 = soundsArray[_0x204445(0x29e)];
        _0x5a0f07[_0x204445(0x1a1)] = 0.4, _0x5a0f07[_0x204445(0x20b)]();
    }
    var _0x1becd1 = $(_0x204445(0x434));
    _0x1becd1[_0x204445(0x32a)]('');
    for (var _0x4d4c3f = 0x0; _0x4d4c3f < _0x541a42[_0x204445(0x1fa)][_0x204445(0x1e5)]; _0x4d4c3f++) {
        var _0x1a1361 = $(_0x204445(0x1a6) + _0x541a42[_0x204445(0x1fa)][_0x4d4c3f] + '\x22>');
        _0x1becd1[_0x204445(0x31d)](_0x1a1361);
    }
    $('#depositPanel')[_0x204445(0x1fe)](), $('#rollPanel')['slideDown'](), $(_0x204445(0x28c))[_0x204445(0x279)](_0x204445(0x1be), '\x20'), $(_0x204445(0x246))[_0x204445(0x279)](_0x204445(0x1be), _0x204445(0x37d)), $(_0x204445(0x182))['attr'](_0x204445(0x1be), _0x204445(0x37d));
    var _0x48a8a8 = _0x541a42[_0x204445(0x331)] - $(_0x204445(0x272))['width']() / 0x2;
    $(_0x204445(0x434))[_0x204445(0x3ee)](_0x204445(0x2a1), _0x48a8a8 + 'px');
}), socket['on'](_0x43c573(0x334), function(_0x450ba9) {
    var _0x72a487 = _0x43c573;
    if (window['location']['pathname']['toLowerCase']() !== '/') return;
    $(_0x72a487(0x321))[_0x72a487(0x1fe)](), $(_0x72a487(0x272))[_0x72a487(0x25f)](), $('#jpRollBox')[_0x72a487(0x279)]('style', _0x72a487(0x37d)), $(_0x72a487(0x182))[_0x72a487(0x279)](_0x72a487(0x1be), _0x72a487(0x37d)), $('#jpWinnerInfo')[_0x72a487(0x25f)]();
    var _0x106c26 = $(_0x72a487(0x44d))[_0x72a487(0x43d)](_0x450ba9[_0x72a487(0x368)]);
    $(_0x72a487(0x246))[_0x72a487(0x279)](_0x72a487(0x443), _0x450ba9[_0x72a487(0x248)]), $('#jpWinnerImg')['attr'](_0x72a487(0x320), _0x450ba9[_0x72a487(0x25d)]), $(_0x72a487(0x35f))[_0x72a487(0x32a)](_0x106c26['prop'](_0x72a487(0x307)) + '\x20won\x20<span\x20class=\x22redText\x22>$' + _0x450ba9[_0x72a487(0x411)][_0x72a487(0x432)](0x2) + _0x72a487(0x357) + _0x450ba9[_0x72a487(0x21b)][_0x72a487(0x432)](0x2) + _0x72a487(0x179));
}), socket['on'](_0x43c573(0x2b3), function(_0x46fa84) {
    var _0x521a0 = _0x43c573;
    if (window[_0x521a0(0x1ff)][_0x521a0(0x22e)][_0x521a0(0x3db)]() !== '/') return;
    addJackpotGameHistory(_0x46fa84), ensureJackpotReset();
});

function ensureJackpotReset() {
    var _0x359dae = _0x43c573;
    if (window['location']['pathname'][_0x359dae(0x3db)]() !== '/') return;
    $('.jackpotDeposit')['remove'](), $(_0x359dae(0x3f1))[_0x359dae(0x43d)]('$0'), $(_0x359dae(0x403))[_0x359dae(0x43d)](_0x359dae(0x329)), $(_0x359dae(0x1df))['text'](_0x359dae(0x316)), document[_0x359dae(0x24e)] = _0x359dae(0x2ec), $(_0x359dae(0x321))[_0x359dae(0x25f)](), $(_0x359dae(0x272))['slideUp'](), $(_0x359dae(0x434))[_0x359dae(0x32a)](''), $(_0x359dae(0x434))['css'](_0x359dae(0x2a1), 0x0 + 'px'), jackpotTotal = 0x0, loadExtras(), circle[_0x359dae(0x23b)](0x1);
}
socket['on'](_0x43c573(0x374), function(_0x26aa14) {
    var _0x13967a = _0x43c573;
    (window[_0x13967a(0x1ff)][_0x13967a(0x22e)][_0x13967a(0x3db)]() == '/' || window[_0x13967a(0x1ff)]['pathname']['toLowerCase']() == '/coinflip') && addChatMessage(_0x26aa14);
}), socket['on'](_0x43c573(0x2d6), function(_0x8d1d75) {
    for (var _0x5bbed1 = 0x0; _0x5bbed1 < _0x8d1d75['length']; _0x5bbed1++) {
        addJackpotGameHistory(_0x8d1d75[_0x5bbed1]);
    }
}), socket['on'](_0x43c573(0x28e), function(_0x1dfd3f) {
    var _0x36d78f = _0x43c573;
    $(_0x36d78f(0x377))[_0x36d78f(0x43d)](_0x1dfd3f);
}), socket['on']('AcceptWinnings', function(_0x257f5e) {
    var _0x15faa1 = _0x43c573;
    !$('#AcceptWinnings')[_0x15faa1(0x21f)]('in') && ($(_0x15faa1(0x34f))[_0x15faa1(0x326)]('hide'), $(_0x15faa1(0x38c))['modal']('show'));
    var _0x2a58bf = $(_0x15faa1(0x3be));
    _0x2a58bf[_0x15faa1(0x32a)](''), _0x2a58bf[_0x15faa1(0x31d)]($(_0x15faa1(0x3af) + _0x257f5e[_0x15faa1(0x411)][_0x15faa1(0x432)](0x2) + _0x15faa1(0x2b6))), _0x2a58bf[_0x15faa1(0x31d)]($(_0x15faa1(0x2bc)));
    var _0x43c1c4 = $('<a\x20href=\x22https://steamcommunity.com/tradeoffer/' + _0x257f5e['id'] + '\x22\x20target=\x22_blank\x22></a>');
    _0x43c1c4[_0x15faa1(0x31d)]($(_0x15faa1(0x194))), _0x2a58bf[_0x15faa1(0x31d)](_0x43c1c4);
});

function closeAcceptWinnings() {
    $(function() {
        var _0xb2a31d = _0x22c0;
        $(_0xb2a31d(0x34f))[_0xb2a31d(0x326)](_0xb2a31d(0x372));
    });
}
socket['on']('return\x20jackpot\x20history', function(_0x337c68) {
    var _0x5691de = _0x43c573,
        _0x56ef50 = $('#jackpotGameHistoryBody');
    _0x56ef50[_0x5691de(0x32a)]('');
    var _0x6f3202 = $('<a\x20href=\x22https://steamcommunity.com/profiles/' + _0x337c68[_0x5691de(0x430)]['id'] + _0x5691de(0x1ed))[_0x5691de(0x43d)](_0x337c68[_0x5691de(0x430)]['displayName']),
        _0x119c61 = $('<div\x20class=\x22jackpotHistoryWinner\x22><img\x20src=\x22' + _0x337c68[_0x5691de(0x430)][_0x5691de(0x25d)] + _0x5691de(0x386) + _0x6f3202[_0x5691de(0x3a0)](_0x5691de(0x307)) + _0x5691de(0x2dc) + _0x337c68[_0x5691de(0x430)][_0x5691de(0x2f6)] + _0x5691de(0x357) + _0x337c68[_0x5691de(0x430)][_0x5691de(0x21b)][_0x5691de(0x432)](0x2) + _0x5691de(0x448));
    _0x56ef50[_0x5691de(0x31d)](_0x119c61);
    var _0x52286c = $(''),
        _0x39aae3 = _0x337c68[_0x5691de(0x430)]['potTotal'];
    for (var _0x5a99c8 = _0x337c68[_0x5691de(0x1de)]['length'] - 0x1; _0x5a99c8 >= 0x0; _0x5a99c8--) {
        var _0x685df8 = _0x337c68['deposits'][_0x5a99c8],
            _0x23c7af = $('<a\x20href=\x22https://steamcommunity.com/profiles/' + _0x685df8['id'] + '\x22\x20target=\x22_blank\x22></a>')[_0x5691de(0x43d)](_0x685df8['displayName']),
            _0x4b91e6 = $('<div\x20class=\x22jackpotHistoryDepositItems\x22></div>');
        for (var _0x54a55e = 0x0; _0x54a55e < _0x685df8[_0x5691de(0x354)][_0x5691de(0x1e5)]; _0x54a55e++) {
            var _0x336a27 = _0x685df8[_0x5691de(0x354)][_0x54a55e];
            _0x4b91e6[_0x5691de(0x31d)]($(_0x5691de(0x30d) + _0x336a27['name'] + '\x22>\x20<img\x20src=\x22https://steamcommunity-a.akamaihd.net/economy/image/' + _0x336a27[_0x5691de(0x25d)] + '/62fx62f\x22>\x20<p>$' + _0x336a27[_0x5691de(0x2fa)]['toFixed'](0x2) + _0x5691de(0x33f)));
        }
        var _0x79f05a = $(_0x5691de(0x28b) + _0x5691de(0x23d) + _0x5691de(0x1a6) + _0x685df8['image'] + '\x22>' + _0x5691de(0x387) + _0x23c7af[_0x5691de(0x3a0)](_0x5691de(0x307)) + _0x5691de(0x1db) + _0x685df8[_0x5691de(0x31c)][_0x5691de(0x432)](0x2) + _0x5691de(0x26c) + (_0x685df8['userDepositTotal'] / _0x39aae3 * 0x64)[_0x5691de(0x432)](0x2) + _0x5691de(0x1b1) + _0x5691de(0x1b5) + _0x4b91e6[_0x5691de(0x3a0)](_0x5691de(0x307)) + _0x5691de(0x1b5));
        _0x56ef50[_0x5691de(0x31d)](_0x79f05a);
    }
    var _0x2fd0c3 = $(_0x5691de(0x340));
    _0x337c68[_0x5691de(0x3ef)][_0x5691de(0x2b2)]('salt') ? _0x2fd0c3[_0x5691de(0x31d)](_0x5691de(0x268) + _0x337c68['id'] + '</span>\x20</p>\x20<p>Hash:\x20<span\x20class=\x22redText\x22>' + _0x337c68[_0x5691de(0x3ef)][_0x5691de(0x3ef)] + _0x5691de(0x3d7) + _0x337c68[_0x5691de(0x3ef)][_0x5691de(0x224)] + _0x5691de(0x250) + _0x337c68[_0x5691de(0x3ef)][_0x5691de(0x2f0)] + '</span></p>') : _0x337c68['hash']['hasOwnProperty']('serverSeed') && _0x337c68[_0x5691de(0x3ef)]['hasOwnProperty'](_0x5691de(0x19f)) ? _0x2fd0c3[_0x5691de(0x31d)](_0x5691de(0x268) + _0x337c68['id'] + _0x5691de(0x2e0) + _0x337c68[_0x5691de(0x3ef)][_0x5691de(0x3ef)] + '</span></p>\x20<p>Mod:\x20<span\x20class=\x22redText\x22>' + _0x337c68[_0x5691de(0x3ef)][_0x5691de(0x1c6)] + '-' + _0x337c68[_0x5691de(0x3ef)][_0x5691de(0x19f)] + _0x5691de(0x250) + _0x337c68[_0x5691de(0x3ef)][_0x5691de(0x2f0)] + '</span><p\x20class=\x22greyText\x22>Verify\x20this\x20<a\x20href=\x22/ProvablyFair\x22>here</a></p></p>') : _0x2fd0c3[_0x5691de(0x31d)](_0x5691de(0x268) + _0x337c68['id'] + '</span>\x20</p>\x20<p>Hash:\x20<span\x20class=\x22redText\x22>' + _0x337c68[_0x5691de(0x3ef)][_0x5691de(0x3ef)] + _0x5691de(0x1e7) + _0x337c68[_0x5691de(0x3ef)][_0x5691de(0x1c6)] + _0x5691de(0x250) + _0x337c68[_0x5691de(0x3ef)][_0x5691de(0x2f0)] + _0x5691de(0x1fd)), _0x56ef50[_0x5691de(0x31d)](_0x2fd0c3), $(_0x5691de(0x1e3))[_0x5691de(0x3fa)]();
}), socket['on'](_0x43c573(0x275), function() {
    var _0x9851f7 = _0x43c573;
    $(_0x9851f7(0x1d8))['remove']();
}), socket['on'](_0x43c573(0x26e), function(_0x20d693) {
    var _0x416ad9 = _0x43c573;
    $(_0x416ad9(0x310))[_0x416ad9(0x2a5)](function() {
        var _0x483e64 = _0x416ad9;
        $(_0x483e64(0x310))[_0x483e64(0x32a)](_0x20d693)[_0x483e64(0x42e)]();
    });
}), socket['on'](_0x43c573(0x309), function(_0x25978b) {
    var _0x29775e = _0x43c573;
    for (var _0x31a253 = 0x0; _0x31a253 < _0x25978b[_0x29775e(0x1e5)]; _0x31a253++) {
        addCfHistory(_0x25978b[_0x31a253][_0x29775e(0x248)], _0x25978b[_0x31a253][_0x29775e(0x356)]);
    }
}), socket['on'](_0x43c573(0x362), function(_0x2eb09d) {
    var _0x568fca = _0x43c573;
    toastr['success'](_0x568fca(0x39f) + _0x568fca(0x280) + _0x2eb09d + '\x22)' + _0x568fca(0x3bc));
});

function addCfHistory(_0x109e09, _0x5439ae) {
    var _0x87dc56 = _0x43c573,
        _0x58ec01 = _0x5439ae == 0x0 ? _0x87dc56(0x31e) : '/img/cfRed.png';
    $(_0x87dc56(0x245))[_0x87dc56(0x24d)](_0x87dc56(0x44b) + _0x58ec01 + _0x87dc56(0x2de) + _0x109e09 + _0x87dc56(0x2f8))['fadeIn'](_0x87dc56(0x3cd)), $('.cfHistoryCoin')['length'] > 0x32 && $(_0x87dc56(0x449))[0x32][_0x87dc56(0x1c1)]();
}
$('#cfHistoryCoins\x20')['on'](_0x43c573(0x233), _0x43c573(0x449), function() {
    var _0x1087d1 = _0x43c573,
        _0x353f1e = this[_0x1087d1(0x29a)]('id');
    viewActiveLobby(_0x353f1e);
});

function DepositInv(_0x409d75) {
    var _0x197486 = _0x43c573,
        _0xd90d39 = $(_0x197486(0x1b6)),
        _0x523037 = Number(_0x409d75[_0x197486(0x29a)](_0x197486(0x23c)));
    if (_0x409d75['getAttribute']('style')) {
        var _0x4e6eed = _0x409d75[_0x197486(0x29a)](_0x197486(0x3f7)),
            _0x5bf4ba = items2Deposit['findIndex'](_0x33c2b0 => _0x33c2b0 == _0x4e6eed);
        items2Deposit['splice'](_0x5bf4ba, 0x1), depositTotal -= _0x523037, _0xd90d39[_0x197486(0x43d)]('$' + depositTotal[_0x197486(0x432)](0x2)), _0x409d75['children'][0x0][_0x197486(0x452)](_0x197486(0x18a), _0x197486(0x27b)), _0x409d75[_0x197486(0x193)][0x1][_0x197486(0x452)](_0x197486(0x1be), _0x197486(0x296)), _0x409d75[_0x197486(0x452)](_0x197486(0x1be), _0x197486(0x285));
    } else {
        if (items2Deposit[_0x197486(0x1e5)] >= 0x14) {
            toastr[_0x197486(0x2b5)](_0x197486(0x30a));
            return;
        }
        items2Deposit[_0x197486(0x417)](_0x409d75[_0x197486(0x29a)]('item_assetid')), depositTotal += _0x523037, _0xd90d39[_0x197486(0x43d)]('$' + depositTotal['toFixed'](0x2)), _0x409d75[_0x197486(0x193)][0x0][_0x197486(0x393)](_0x197486(0x18a), 'checkmark'), _0x409d75[_0x197486(0x193)][0x1]['setAttribute'](_0x197486(0x1be), _0x197486(0x296)), _0x409d75[_0x197486(0x393)](_0x197486(0x1be), _0x197486(0x285));
    }
};

function addJackpotDeposit(_0x540bda) {
    var _0x5f5b8f = _0x43c573;
    if (window[_0x5f5b8f(0x1ff)][_0x5f5b8f(0x22e)][_0x5f5b8f(0x3db)]() !== '/') return;
    if (sounds == !![]) {
        var _0xc3d1ce = soundsArray['deposit'];
        _0xc3d1ce[_0x5f5b8f(0x1a1)] = 0.4, _0xc3d1ce[_0x5f5b8f(0x20b)]();
    }
    jackpotTotal = jackpotTotal + _0x540bda[_0x5f5b8f(0x31c)];
    var _0x33eeb4 = $(_0x5f5b8f(0x230)),
        _0x21a2eb = $('<div\x20class=\x22jackpotDepositHeader\x22></div>'),
        _0x104212 = $(_0x5f5b8f(0x1a6) + _0x540bda[_0x5f5b8f(0x25d)] + '\x22>');
    _0x21a2eb[_0x5f5b8f(0x31d)](_0x104212);
    var _0x371679 = $(_0x5f5b8f(0x40e)),
        _0x3cf592 = $(_0x5f5b8f(0x1e9) + _0x540bda['id'] + '\x22\x20target=\x22_blank\x22>x</a>');
    _0x3cf592[_0x5f5b8f(0x43d)](_0x540bda['displayName'] + _0x5f5b8f(0x44c)), _0x371679[_0x5f5b8f(0x31d)](_0x3cf592), _0x21a2eb[_0x5f5b8f(0x31d)](_0x371679), _0x21a2eb[_0x5f5b8f(0x31d)]($('<p>$' + _0x540bda[_0x5f5b8f(0x31c)][_0x5f5b8f(0x432)](0x2) + '</p>\x20<p></p></div>'));
    var _0x13d2e0 = $(_0x5f5b8f(0x426));
    for (i = 0x0; i < _0x540bda['depositedItems'][_0x5f5b8f(0x1e5)]; i++) {
        var _0x4d4e03 = $('<div\x20class=\x22jackpotDepositItem\x22></div>');
        _0x4d4e03[_0x5f5b8f(0x279)](_0x5f5b8f(0x43e), _0x5f5b8f(0x3fa))[_0x5f5b8f(0x279)]('title', _0x540bda[_0x5f5b8f(0x354)][i][_0x5f5b8f(0x368)]);
        var _0x1dff16 = $(_0x5f5b8f(0x249))['attr']('src', _0x5f5b8f(0x3cc) + _0x540bda[_0x5f5b8f(0x354)][i][_0x5f5b8f(0x25d)] + _0x5f5b8f(0x381)),
            _0x236fd1 = $(_0x5f5b8f(0x40e))[_0x5f5b8f(0x43d)]('$' + _0x540bda['depositedItems'][i]['price'][_0x5f5b8f(0x432)](0x2));
        _0x4d4e03[_0x5f5b8f(0x31d)](_0x1dff16), _0x4d4e03['append'](_0x236fd1), _0x13d2e0[_0x5f5b8f(0x31d)](_0x4d4e03);
    }
    _0x33eeb4[_0x5f5b8f(0x31d)](_0x21a2eb), _0x33eeb4[_0x5f5b8f(0x31d)](_0x13d2e0);
    var _0x39becd = $(_0x5f5b8f(0x305));
    _0x39becd[_0x5f5b8f(0x414)](_0x33eeb4[_0x5f5b8f(0x25f)]()), loadExtras(), $(_0x5f5b8f(0x1e3))[_0x5f5b8f(0x3fa)]();
}

function loadExtras() {
    var _0x5d3bad = _0x43c573;
    if (window[_0x5d3bad(0x1ff)]['pathname'][_0x5d3bad(0x3db)]() !== '/') return;
    $(_0x5d3bad(0x3f1))[_0x5d3bad(0x43d)]('$' + jackpotTotal[_0x5d3bad(0x432)](0x2)), document[_0x5d3bad(0x24e)] = '$' + jackpotTotal['toFixed'](0x2) + _0x5d3bad(0x3df);
    var _0x41bc44 = $(_0x5d3bad(0x39a));
    for (var _0x6dfc25 = 0x0; _0x6dfc25 < _0x41bc44[_0x5d3bad(0x1e5)]; _0x6dfc25++) {
        var _0x5ae3a8 = _0x41bc44[_0x6dfc25][_0x5d3bad(0x193)][0x2][_0x5d3bad(0x1ea)][_0x5d3bad(0x1f8)]('$', ''),
            _0x595f19 = _0x5ae3a8 / jackpotTotal * 0x64,
            _0x334fe5 = Math['round'](_0x595f19 * 0x64) / 0x64;
        _0x41bc44[_0x6dfc25][_0x5d3bad(0x193)][0x3][_0x5d3bad(0x1ea)] = '|\x20' + _0x334fe5[_0x5d3bad(0x432)](0x2) + '%';
    }
    $(_0x5d3bad(0x403))[_0x5d3bad(0x43d)]($(_0x5d3bad(0x2b8))[_0x5d3bad(0x1e5)] + _0x5d3bad(0x222)), $(_0x5d3bad(0x17e))[_0x5d3bad(0x1e5)] <= 0x0 ? $('#currentJackpotHashBody')[_0x5d3bad(0x3ee)]('display', _0x5d3bad(0x328)) : $('#currentJackpotHashBody')[_0x5d3bad(0x3ee)]('display', '');
}

function closeAcceptDeposit() {
    $(function() {
        var _0x1e9717 = _0x22c0;
        $(_0x1e9717(0x42a))[_0x1e9717(0x326)]('hide');
    });
}

function JackpotLoadInventory() {
    var _0x73afc1 = _0x43c573,
        _0x1efce1 = $(_0x73afc1(0x255));
    _0x1efce1[_0x73afc1(0x43d)]('');
    var _0x2a1c5c = $(_0x73afc1(0x1b6));
    _0x2a1c5c[_0x73afc1(0x43d)](''), $('.depositInventory')[_0x73afc1(0x31d)](loader), $(_0x73afc1(0x45b))[_0x73afc1(0x1c1)](), $(_0x73afc1(0x339))[_0x73afc1(0x3dc)](''), items2Deposit = [], depositTotal = 0x0, socket[_0x73afc1(0x2bf)](_0x73afc1(0x31f)), $(_0x73afc1(0x3b6))['modal']('show');
}

function CfLoadInventory() {
    var _0xb5300d = _0x43c573,
        _0x57760f = $('.depositInventory');
    _0x57760f[_0xb5300d(0x43d)](''), $(_0xb5300d(0x1b6))[_0xb5300d(0x43d)](''), $('.depositInventory')[_0xb5300d(0x31d)](loader), $(_0xb5300d(0x45b))[_0xb5300d(0x1c1)](), $(_0xb5300d(0x41a))[_0xb5300d(0x3dc)](''), items2Deposit = [], depositTotal = 0x0, selectedCoin = undefined, $('.cf-coin-black,\x20.cf-coin-red')[_0xb5300d(0x24b)](_0xb5300d(0x3d4)), $(_0xb5300d(0x2e2))[_0xb5300d(0x279)](_0xb5300d(0x1be), ''), $('#CfDeposit\x20.cfNeeds\x20h4')[_0xb5300d(0x279)](_0xb5300d(0x1be), _0xb5300d(0x37d)), $(_0xb5300d(0x1fb))['attr']('style', 'display:none;'), socket[_0xb5300d(0x2bf)](_0xb5300d(0x31f)), $('#CfDeposit')[_0xb5300d(0x326)](_0xb5300d(0x2b0));
}
var joiningCFTotal = 0x0;

function joinCF(_0xbf6279, _0x21afc6) {
    var _0x41ee88 = _0x43c573,
        _0x3721b2 = $('.depositInventory');
    _0x3721b2[_0x41ee88(0x43d)](''), $(_0x41ee88(0x1b6))[_0x41ee88(0x43d)](''), $(_0x41ee88(0x255))['append'](loader), $(_0x41ee88(0x45b))[_0x41ee88(0x1c1)](), $(_0x41ee88(0x41a))[_0x41ee88(0x3dc)](''), items2Deposit = [], depositTotal = 0x0, joiningCFTotal = _0x21afc6, selectedCoin = _0xbf6279, $(_0x41ee88(0x2e2))[_0x41ee88(0x279)](_0x41ee88(0x1be), _0x41ee88(0x3bd));
    let _0x3d8d23 = (Math[_0x41ee88(0x1c7)](_0x21afc6 * 0x6e) / 0x64)[_0x41ee88(0x432)](0x2),
        _0x325d42 = (Math[_0x41ee88(0x1c7)](_0x21afc6 * 0x5a) / 0x64)['toFixed'](0x2);
    $(_0x41ee88(0x441))['attr'](_0x41ee88(0x1be), '')['text']('Coinflip\x20requires\x20$' + _0x3d8d23 + '-' + _0x325d42 + _0x41ee88(0x244)), $(_0x41ee88(0x1fb))[_0x41ee88(0x279)](_0x41ee88(0x1be), ''), socket['emit'](_0x41ee88(0x31f)), $(_0x41ee88(0x20c))[_0x41ee88(0x326)](_0x41ee88(0x2b0));
}

function requestJackpotDeposit() {
    var _0x4ee826 = _0x43c573;
    if (items2Deposit[_0x4ee826(0x1e5)] <= 0x0) {
        toastr[_0x4ee826(0x2b5)](_0x4ee826(0x195));
        return;
    }
    var _0x3de58c = $(_0x4ee826(0x1bd));
    _0x3de58c[_0x4ee826(0x32a)](loader), socket['emit'](_0x4ee826(0x26d), items2Deposit), $(function() {
        var _0x382e05 = _0x4ee826;
        $(_0x382e05(0x3b6))[_0x382e05(0x326)]('hide'), $('#AcceptDeposit')[_0x382e05(0x326)](_0x382e05(0x2b0));
    });
}

function requestCfDeposit() {
    var _0x324642 = _0x43c573,
        _0x277d96 = $(_0x324642(0x1bd));
    if (items2Deposit[_0x324642(0x1e5)] <= 0x0) {
        toastr[_0x324642(0x2b5)](_0x324642(0x195));
        return;
    } else {
        if (typeof selectedCoin === _0x324642(0x42d)) {
            if (depositTotal >= joiningCFTotal * 0.9 && depositTotal <= joiningCFTotal * 1.1) {
                socket[_0x324642(0x2bf)]('join\x20cfLobby', selectedCoin, items2Deposit), _0x277d96['html'](loader), $(_0x324642(0x20c))[_0x324642(0x326)](_0x324642(0x372)), $(_0x324642(0x42a))[_0x324642(0x326)]('show');
                return;
            } else {
                if (depositTotal < joiningCFTotal * 0.9) {
                    toastr[_0x324642(0x2b5)](_0x324642(0x380));
                    return;
                } else {
                    toastr[_0x324642(0x2b5)](_0x324642(0x180));
                    return;
                }
            }
        } else {
            if (!(selectedCoin == 0x0 || selectedCoin == 0x1)) {
                toastr[_0x324642(0x2b5)](_0x324642(0x3c6));
                return;
            } else {
                if (depositTotal[_0x324642(0x432)](0x2) < 0.25) {
                    toastr['error'](_0x324642(0x237));
                    return;
                }
            }
        }
    }
    _0x277d96[_0x324642(0x32a)](loader), socket[_0x324642(0x2bf)]('cf\x20createGame', items2Deposit, selectedCoin), $(function() {
        var _0x61587f = _0x324642;
        $('#CfDeposit')[_0x61587f(0x326)](_0x61587f(0x372)), $(_0x61587f(0x42a))[_0x61587f(0x326)](_0x61587f(0x2b0));
    });
}

function addChatMessage(_0x3c86db) {
    var _0x363726 = _0x43c573,
        _0x53a2b5 = $('#chatArea'),
        _0x32ce06 = $(_0x363726(0x260)),
        _0x214eb8 = $(_0x363726(0x249));
    _0x214eb8[_0x363726(0x279)](_0x363726(0x320), _0x3c86db['image']), _0x32ce06[_0x363726(0x31d)](_0x214eb8);
    if (_0x3c86db[_0x363726(0x3de)] == 0x7c5) _0x32ce06[_0x363726(0x31d)]($('<b\x20style=\x22color:red\x22>\x20[Admin]</b>'));
    else _0x3c86db[_0x363726(0x3de)] === 0x3e7 && _0x32ce06[_0x363726(0x31d)]($('<b\x20style=\x22color:red\x22>\x20[Mod]</b>'));
    var _0x4be873 = $(_0x363726(0x425))[_0x363726(0x279)](_0x363726(0x1b8), 'https://steamcommunity.com/profiles/' + _0x3c86db['id']);
    _0x4be873[_0x363726(0x43d)]('\x20' + _0x3c86db['displayName']), _0x4be873[_0x363726(0x31d)]($('<span\x20class=\x22chatBreaker\x22>:</span>')), _0x32ce06[_0x363726(0x31d)](_0x4be873);
    var _0x42e941 = $(_0x363726(0x427));
    _0x42e941[_0x363726(0x43d)]('\x20' + _0x3c86db[_0x363726(0x1b0)]), _0x32ce06['append'](_0x42e941), _0x53a2b5['append'](_0x32ce06);
    var _0x4e5db2 = document[_0x363726(0x3f0)]('chatArea');
    _0x4e5db2['scrollTop'] = _0x4e5db2[_0x363726(0x266)], $(_0x363726(0x1d8))[_0x363726(0x1e5)] >= 0x14 && $('.chatMessage')[0x0][_0x363726(0x1c1)]();
}
$(_0x43c573(0x35e))['on'](_0x43c573(0x2fd), function(_0x4cb1d6) {
    var _0x182684 = _0x43c573;
    _0x4cb1d6[_0x182684(0x366)]();
    var _0x1fc452 = $(_0x182684(0x252));
    socket[_0x182684(0x2bf)](_0x182684(0x1f3), _0x1fc452['val']()), _0x1fc452['attr']('placeholder', _0x1fc452['val']()), _0x1fc452[_0x182684(0x3dc)]('');
}), $(_0x43c573(0x3d3))['on']('submit', function(_0x448fed) {
    var _0x42a198 = _0x43c573;
    _0x448fed['preventDefault']();
    var _0x52f772 = $(_0x42a198(0x257));
    socket[_0x42a198(0x2bf)](_0x42a198(0x1ba), _0x52f772[_0x42a198(0x3dc)]()), _0x52f772['val']('');
});

function getJackpotHistory(_0x420219) {
    var _0x68fd2e = _0x43c573;
    $(_0x68fd2e(0x34f))['modal'](_0x68fd2e(0x372)), socket[_0x68fd2e(0x2bf)]('getJackpotHistory', _0x420219), $(_0x68fd2e(0x174))[_0x68fd2e(0x32a)](loader), $(_0x68fd2e(0x200))['modal']('show');
}

function getSelfProfile() {
    var _0x3214d9 = _0x43c573;
    $(_0x3214d9(0x34f))[_0x3214d9(0x326)](_0x3214d9(0x372)), $(_0x3214d9(0x37f))[_0x3214d9(0x43d)](''), $(_0x3214d9(0x292))['text'](''), $(_0x3214d9(0x1b2))[_0x3214d9(0x43d)](''), socket[_0x3214d9(0x2bf)](_0x3214d9(0x337)), $('#myHistory')['find'](_0x3214d9(0x1e0))[_0x3214d9(0x1c1)]();
}
socket['on'](_0x43c573(0x346), function(_0x2fee60) {
    var _0x1a9f15 = _0x43c573;
    $(_0x1a9f15(0x37f))['text']('$' + _0x2fee60[_0x1a9f15(0x2e7)][_0x1a9f15(0x432)](0x2)), $(_0x1a9f15(0x292))[_0x1a9f15(0x43d)]('$' + _0x2fee60[_0x1a9f15(0x352)]['toFixed'](0x2)), $(_0x1a9f15(0x1b2))[_0x1a9f15(0x43d)]('');
    _0x2fee60[_0x1a9f15(0x317)] !== null && $(_0x1a9f15(0x291))[_0x1a9f15(0x279)](_0x1a9f15(0x2e8), _0x2fee60['tradeURL']);
    var _0x40c061 = _0x2fee60['totalWon'] - _0x2fee60['totalDeposit'];
    _0x40c061 < 0x0 ? $(_0x1a9f15(0x1b2))[_0x1a9f15(0x43d)]('$' + _0x40c061[_0x1a9f15(0x432)](0x2))[_0x1a9f15(0x279)](_0x1a9f15(0x1be), _0x1a9f15(0x20a)) : $(_0x1a9f15(0x1b2))[_0x1a9f15(0x43d)]('$' + _0x40c061[_0x1a9f15(0x432)](0x2))['attr'](_0x1a9f15(0x1be), _0x1a9f15(0x3b9)), _0x2fee60[_0x1a9f15(0x34e)] ? $(_0x1a9f15(0x3cf))[_0x1a9f15(0x3a0)](_0x1a9f15(0x2da), !![]) : $(_0x1a9f15(0x3cf))['prop'](_0x1a9f15(0x2da), ![]), _0x2fee60[_0x1a9f15(0x369)] && ($(_0x1a9f15(0x408))[_0x1a9f15(0x3a0)](_0x1a9f15(0x444), !![]), $('#grubClaimCode\x20input')[_0x1a9f15(0x3a0)](_0x1a9f15(0x444), !![]), $(_0x1a9f15(0x234))[_0x1a9f15(0x3dc)](_0x2fee60[_0x1a9f15(0x369)]));
}), $(_0x43c573(0x3cf))['on'](_0x43c573(0x233), function() {
    var _0x3c8782 = _0x43c573;
    socket[_0x3c8782(0x2bf)](_0x3c8782(0x22a), $(_0x3c8782(0x3cf))[_0x3c8782(0x3a0)](_0x3c8782(0x2da)));
}), socket['on'](_0x43c573(0x27a), function(_0x21b08d) {
    var _0x353a12 = _0x43c573;
    $(_0x353a12(0x3d5))[_0x353a12(0x1e8)](_0x353a12(0x1e0))[_0x353a12(0x1c1)](), $(_0x353a12(0x261))[_0x353a12(0x1c1)]();
    if (_0x21b08d['length'] <= 0x0) return $(_0x353a12(0x3d5))['after'](_0x353a12(0x29f));
    for (var _0x17887f = 0x0; _0x17887f < _0x21b08d[_0x353a12(0x1e5)]; _0x17887f++) {
        addGameHistory(_0x21b08d[_0x17887f]);
    }
});

function addGameHistory(_0x3a3980) {
    var _0x3bb375 = _0x43c573,
        _0x4a77c7 = $(_0x3bb375(0x38d))['text'](_0x3a3980['winner']),
        _0x2df0f4 = typeof _0x3a3980[_0x3bb375(0x173)] == _0x3bb375(0x365) ? _0x3a3980[_0x3bb375(0x173)]['toFixed'](0x2) : _0x3a3980['amount'],
        _0x421167 = typeof _0x3a3980[_0x3bb375(0x21b)] == 'number' ? _0x3a3980['chance'][_0x3bb375(0x432)](0x2) : _0x3a3980[_0x3bb375(0x21b)],
        _0x4af6fa = historyMode(_0x3a3980['gameType']),
        _0x4518ed = $('<tr\x20class=\x22myHistory\x22\x20gameid=\x22' + _0x3a3980['id'] + _0x3bb375(0x2e1) + _0x4af6fa + '\x22\x20>' + _0x4a77c7[_0x3bb375(0x3a0)](_0x3bb375(0x307)) + _0x3bb375(0x351) + _0x2df0f4 + '</td>' + '<td>' + _0x421167 + _0x3bb375(0x423) + _0x3bb375(0x277) + gameImage(_0x3a3980) + '</td>' + winningsStatus(_0x3a3980[_0x3bb375(0x1f7)], _0x3a3980) + '</tr>');
    $('#myHistory')[_0x3bb375(0x31d)](_0x4518ed);
}

function historyMode(_0x3cd082) {
    var _0x127b21 = _0x43c573;
    switch (_0x3cd082) {
        case _0x127b21(0x1c4):
            return 0x0;
        case 'Coinflip':
            return 0x1;
        case _0x127b21(0x1ca):
            return 0x2;
    }
}

function gameImage(_0x408327) {
    var _0xf1119c = _0x43c573;
    if (_0x408327[_0xf1119c(0x457)] == _0xf1119c(0x1c4)) return _0xf1119c(0x18f);
    if (_0x408327[_0xf1119c(0x457)] == _0xf1119c(0x1ca)) return _0xf1119c(0x3ba);
    else {
        if (_0x408327[_0xf1119c(0x356)] == 0x0) return _0xf1119c(0x2b9);
        else {
            if (_0x408327['coin'] == 0x1) return '<img\x20src=\x22/img/cfRed.png\x22\x20/>';
            else return '<img\x20src=\x22/img/cfUnknown.png\x22\x20/>';
        }
    }
}
$('#myHistory\x20')['on'](_0x43c573(0x233), _0x43c573(0x20e), function() {
    var _0xa41c51 = _0x43c573,
        _0x2a5ebd = this['getAttribute'](_0xa41c51(0x236)),
        _0x263d51 = this[_0xa41c51(0x29a)](_0xa41c51(0x21e));
    if (_0x2a5ebd == '0') getJackpotHistory(_0x263d51);
    else {
        if (_0x2a5ebd == '1') viewActiveLobby(_0x263d51);
        else _0x2a5ebd == '2' && viewFGHistory(_0x263d51);
    }
}), $(_0x43c573(0x239))['on'](_0x43c573(0x233), _0x43c573(0x1eb), function(_0x2541e6) {
    var _0x2f396f = _0x43c573,
        _0x564035 = $(this)[_0x2f396f(0x270)](),
        _0x20c8a1 = Number(this['getAttribute'](_0x2f396f(0x1f7))),
        _0x551345 = _0x564035[0x0][_0x2f396f(0x29a)](_0x2f396f(0x21e)),
        _0x26eb4c = Number(_0x564035[0x0][_0x2f396f(0x29a)](_0x2f396f(0x236)));
    if (_0x20c8a1 == 0x2) return _0x2541e6['stopPropagation']();
    if (_0x20c8a1 == 0x3) {
        _0x2541e6[_0x2f396f(0x2ac)](), $(_0x2f396f(0x34f))['modal'](_0x2f396f(0x372)), $(_0x2f396f(0x1d1))['modal'](_0x2f396f(0x2b0));
        var _0x2e9698 = $(_0x2f396f(0x1e2));
        _0x2e9698['html'](''), _0x2e9698['append'](loader), socket[_0x2f396f(0x2bf)](_0x2f396f(0x26b), _0x551345, _0x26eb4c);
    } else {
        if (_0x20c8a1 == 0x4 && _0x26eb4c == 0x1) {
            _0x2541e6[_0x2f396f(0x2ac)](), socket['emit']('cancel\x20cf', _0x551345), $(_0x2f396f(0x34f))[_0x2f396f(0x326)](_0x2f396f(0x372)), $('#notificationBox')[_0x2f396f(0x326)](_0x2f396f(0x2b0));
            var _0x2e9698 = $(_0x2f396f(0x1e2));
            _0x2e9698[_0x2f396f(0x32a)](''), _0x2e9698['append'](loader);
        } else {
            if (_0x20c8a1 == '5') _0x2541e6[_0x2f396f(0x2ac)](), window['location'] = _0x2f396f(0x2ea);
            else _0x20c8a1 == '11' && (_0x2541e6[_0x2f396f(0x2ac)](), window[_0x2f396f(0x1ff)] = '/grub');
        }
    }
});

function winningsStatus(_0x7afdb7, _0x5a67e6) {
    var _0x3273f3 = _0x43c573;
    switch (_0x7afdb7) {
        case 0x0:
            return _0x3273f3(0x458) + _0x5a67e6[_0x3273f3(0x1f7)] + '\x22><b>Lost</b></td>';
        case 0x1:
            return '<td\x20class=\x22status\x20greenText\x22\x20status=\x22' + _0x5a67e6[_0x3273f3(0x1f7)] + _0x3273f3(0x384);
        case 0x2:
            return '<td\x20class=\x22status\x22\x20status=\x22' + _0x5a67e6[_0x3273f3(0x1f7)] + _0x3273f3(0x38e) + _0x5a67e6[_0x3273f3(0x192)] + '\x22>Accept\x20trade</a></b></td>';
        case 0x3:
            return '<td\x20class=\x22status\x20blueText\x22\x20status=\x22' + _0x5a67e6[_0x3273f3(0x1f7)] + _0x3273f3(0x216);
        case 0x4:
            return _0x3273f3(0x3d6) + _0x5a67e6[_0x3273f3(0x1f7)] + '\x22><b>Cancel</b></td>';
        case 0x5:
            return '<td\x20class=\x22status\x20redText\x22\x20status=\x22' + _0x5a67e6[_0x3273f3(0x1f7)] + _0x3273f3(0x176);
        case 0x6:
            return _0x3273f3(0x235) + _0x5a67e6['status'] + _0x3273f3(0x2b4);
        case 0x7:
            return _0x3273f3(0x3d6) + _0x5a67e6[_0x3273f3(0x1f7)] + _0x3273f3(0x226);
        case 0x8:
            return _0x3273f3(0x458) + _0x5a67e6[_0x3273f3(0x1f7)] + _0x3273f3(0x1bc);
        case 0x9:
            return _0x3273f3(0x235) + _0x5a67e6[_0x3273f3(0x1f7)] + _0x3273f3(0x289);
        case 0xa:
            return '<td\x20class=\x22status\x20greenText\x22\x20status=\x22' + _0x5a67e6[_0x3273f3(0x1f7)] + _0x3273f3(0x3ac);
        case 0xb:
            return _0x3273f3(0x3d6) + _0x5a67e6['status'] + _0x3273f3(0x3c0);
    }
}

function addJackpotGameHistory(_0x437df6) {
    var _0x1e4c23 = _0x43c573;
    if (window[_0x1e4c23(0x1ff)][_0x1e4c23(0x22e)][_0x1e4c23(0x3db)]() !== '/') return;
    var _0x31ea4e = $(_0x1e4c23(0x231) + 'getJackpotHistory(\x27' + _0x437df6['id'] + '\x27)' + '></div>'),
        _0x12a9e6 = $(_0x1e4c23(0x3ad) + _0x437df6[_0x1e4c23(0x318)] + '\x27></div>'),
        _0x4ce709 = $(_0x1e4c23(0x18d)),
        _0xacf6be = $('<p\x20class=\x27redText\x27></p>');
    _0xacf6be[_0x1e4c23(0x43d)](_0x437df6[_0x1e4c23(0x363)]), _0x4ce709['append'](_0xacf6be), _0x4ce709[_0x1e4c23(0x31d)]($(_0x1e4c23(0x34a) + _0x437df6[_0x1e4c23(0x2f6)][_0x1e4c23(0x432)](0x2) + _0x1e4c23(0x1b3) + _0x437df6[_0x1e4c23(0x1c2)] + _0x1e4c23(0x3ff))), _0x4ce709['append']($(_0x1e4c23(0x428) + _0x437df6[_0x1e4c23(0x2f0)] + '</span></p>')), _0x31ea4e[_0x1e4c23(0x31d)](_0x12a9e6), _0x31ea4e[_0x1e4c23(0x31d)](_0x4ce709), $(_0x1e4c23(0x19d))['prepend'](_0x31ea4e), $(_0x1e4c23(0x3a3))[_0x1e4c23(0x1e5)] > 0x5 && $(_0x1e4c23(0x3a3))[0x5]['remove']();
}
socket['on']('new\x20BiggestBet', function(_0x3f44a5) {
    var _0x221749 = _0x43c573;
    if (window[_0x221749(0x1ff)][_0x221749(0x22e)][_0x221749(0x3db)]() !== '/') return;
    $(_0x221749(0x2cf))[_0x221749(0x279)](_0x221749(0x443), _0x3f44a5[_0x221749(0x248)]), $(_0x221749(0x308))[_0x221749(0x279)]('src', _0x3f44a5[_0x221749(0x25d)]), $(_0x221749(0x38f))['text'](_0x3f44a5[_0x221749(0x3fd)]), $('#biggestWinner-amount')[_0x221749(0x43d)]('$' + _0x3f44a5[_0x221749(0x2f6)]), $(_0x221749(0x345))[_0x221749(0x43d)](_0x3f44a5[_0x221749(0x21b)][_0x221749(0x432)](0x2) + '%'), $(_0x221749(0x35d))[_0x221749(0x43d)](_0x3f44a5['ticket']);
}), $('#biggestWinner-body')[_0x43c573(0x233)](function() {
    var _0x5274ae = _0x43c573,
        _0x4da867 = $('#biggestWinner-body')[_0x5274ae(0x279)](_0x5274ae(0x443));
    getJackpotHistory(_0x4da867);
}), $(_0x43c573(0x349))['on'](_0x43c573(0x233), function() {
    var _0x22c1a5 = _0x43c573;
    try {
        localStorage[_0x22c1a5(0x36c)](_0x22c1a5(0x177)) == 'true' ? (localStorage[_0x22c1a5(0x177)] = _0x22c1a5(0x3f5), $(_0x22c1a5(0x2d4))[_0x22c1a5(0x279)]('style', 'display:none;')) : (localStorage[_0x22c1a5(0x177)] = 'true', $(_0x22c1a5(0x2d4))[_0x22c1a5(0x279)](_0x22c1a5(0x1be), ''));
    } catch (_0x3feaff) {
        return;
    }
}), cfhistoryIsToggled();

function cfhistoryIsToggled() {
    var _0x4dfc2f = _0x43c573;
    try {
        localStorage['getItem'](_0x4dfc2f(0x177)) == _0x4dfc2f(0x3f5) && $(_0x4dfc2f(0x2d4))[_0x4dfc2f(0x279)](_0x4dfc2f(0x1be), _0x4dfc2f(0x37d));
    } catch (_0x2d73a4) {
        return;
    }
}

function toggleSiteSounds() {
    var _0x9520cf = _0x43c573;
    try {
        localStorage[_0x9520cf(0x36c)](_0x9520cf(0x229)) == _0x9520cf(0x347) ? (localStorage['sounds'] = _0x9520cf(0x3f5), sounds = ![], $('#sounds-muted')['html']('<i\x20class=\x22fa\x20fa-volume-off\x22\x20aria-hidden=\x22true\x22></i>')) : (localStorage[_0x9520cf(0x229)] = _0x9520cf(0x347), sounds = !![], $(_0x9520cf(0x33d))[_0x9520cf(0x32a)](_0x9520cf(0x209)));
    } catch (_0x3b1b19) {
        return;
    }
}

function loadCorrectSoundButton() {
    var _0xed6ea4 = _0x43c573;
    try {
        if (!localStorage['getItem'](_0xed6ea4(0x229))) localStorage[_0xed6ea4(0x229)] = !![], sounds = !![];
        else localStorage[_0xed6ea4(0x36c)](_0xed6ea4(0x229)) == 'true' ? ($(_0xed6ea4(0x33d))[_0xed6ea4(0x32a)](_0xed6ea4(0x209)), sounds = !![]) : ($('#sounds-muted')[_0xed6ea4(0x32a)](_0xed6ea4(0x2cd)), sounds = ![]);
    } catch (_0x587338) {
        return;
    }
}

function selectCoin(_0x4c8c41, _0x37b5b1) {
    var _0x2f8802 = _0x43c573;
    if (_0x37b5b1 == 0x0) selectedCoin = 0x0, $(_0x2f8802(0x44a))[_0x2f8802(0x220)]('selected'), $(_0x2f8802(0x1b9))[_0x2f8802(0x24b)](_0x2f8802(0x3d4));
    else _0x37b5b1 == 0x1 ? (selectedCoin = 0x1, $(_0x2f8802(0x1b9))['addClass'](_0x2f8802(0x3d4)), $('.cf-coin-black')[_0x2f8802(0x24b)](_0x2f8802(0x3d4))) : (selectedCoin = undefined, $(_0x2f8802(0x44a))['removeClass'](_0x2f8802(0x3d4)), $(_0x2f8802(0x1b9))[_0x2f8802(0x24b)](_0x2f8802(0x3d4)));
}
toastr[_0x43c573(0x1c8)] = {
    'closeButton': !![],
    'debug': ![],
    'newestOnTop': ![],
    'progressBar': !![],
    'positionClass': _0x43c573(0x311),
    'preventDuplicates': !![],
    'onclick': null,
    'showDuration': _0x43c573(0x3a7),
    'hideDuration': '1000',
    'timeOut': _0x43c573(0x197),
    'extendedTimeOut': _0x43c573(0x20f),
    'showEasing': _0x43c573(0x410),
    'hideEasing': _0x43c573(0x415),
    'showMethod': _0x43c573(0x42e),
    'hideMethod': _0x43c573(0x2a5)
};

function addCoinflipLobby(_0x31328e) {
    var _0x2dca07 = _0x43c573,
        _0x383ec7 = $(_0x2dca07(0x36f))[_0x2dca07(0x43d)](_0x31328e[_0x2dca07(0x338)][_0x2dca07(0x3fd)]);
    if (_0x31328e[_0x2dca07(0x338)][_0x2dca07(0x27d)] === 0x0) var _0x3a7a88 = $(_0x2dca07(0x397));
    else {
        if (_0x31328e[_0x2dca07(0x338)][_0x2dca07(0x27d)] === 0x1) var _0x3a7a88 = $(_0x2dca07(0x355));
    }
    var _0x34015a = '';
    for (let _0x1d7809 = 0x0; _0x1d7809 < _0x31328e[_0x2dca07(0x338)][_0x2dca07(0x354)][_0x2dca07(0x1e5)]; _0x1d7809++) {
        if (_0x1d7809 >= 0x5) {
            _0x34015a += _0x2dca07(0x26a) + (_0x31328e['creator'][_0x2dca07(0x354)][_0x2dca07(0x1e5)] - _0x1d7809) + _0x2dca07(0x3e6);
            break;
        } else _0x34015a += '<img\x20data-toggle=\x22tooltip\x22\x20title=\x22' + _0x31328e[_0x2dca07(0x338)]['depositedItems'][_0x1d7809][_0x2dca07(0x368)] + _0x2dca07(0x2ef) + _0x31328e['creator'][_0x2dca07(0x354)][_0x1d7809][_0x2dca07(0x2fa)][_0x2dca07(0x432)](0x2) + _0x2dca07(0x32b) + _0x31328e[_0x2dca07(0x338)][_0x2dca07(0x354)][_0x1d7809][_0x2dca07(0x25d)] + _0x2dca07(0x283);
    }
    var _0x54ccdd = '';
    switch (_0x31328e[_0x2dca07(0x1f7)]) {
        case 'Open':
            _0x54ccdd += _0x2dca07(0x45c) + _0x2dca07(0x1c0) + _0x31328e[_0x2dca07(0x248)] + '\x22' + ',' + _0x31328e[_0x2dca07(0x338)]['total'] + ')' + _0x2dca07(0x2c5);
            break;
        case 'Joining' || _0x2dca07(0x1a2):
            break;
        case _0x2dca07(0x40b):
            switch (_0x31328e[_0x2dca07(0x430)][_0x2dca07(0x356)]) {
                case 0x0:
                    _0x54ccdd += '<img\x20src=\x22/img/cfBlack.png\x22\x20class=\x22result\x22>';
                    break;
                case 0x1:
                    _0x54ccdd += '<img\x20src=\x22/img/cfRed.png\x22\x20class=\x22result\x22>';
                    break;
            }
            break;
    }
    var _0x2a6554 = _0x31328e['doubledDown'] ? _0x2dca07(0x17a) : '';
    let _0x3b4034 = $(_0x2dca07(0x3e2) + _0x31328e['_id'] + _0x2dca07(0x1a9) + _0x2dca07(0x1e4) + _0x31328e[_0x2dca07(0x338)][_0x2dca07(0x25d)] + _0x2dca07(0x1d4) + _0x383ec7[_0x2dca07(0x3a0)](_0x2dca07(0x307)) + _0x2dca07(0x210) + _0x31328e[_0x2dca07(0x338)][_0x2dca07(0x411)][_0x2dca07(0x432)](0x2) + _0x2a6554 + _0x2dca07(0x1da) + _0x3a7a88[_0x2dca07(0x3a0)](_0x2dca07(0x307)) + '<div\x20class=\x22col-md-4\x20coinflipGameItems\x22>' + _0x34015a + _0x2dca07(0x1b5) + '<div\x20class=\x22col-md-2\x20coinflipStatus\x22><p>' + _0x31328e['status'] + _0x2dca07(0x1f2) + _0x2dca07(0x18b) + _0x54ccdd + '</div><div\x20class=\x22view\x22><button\x20class=\x22btn\x22\x20onclick=' + _0x2dca07(0x280) + _0x31328e[_0x2dca07(0x248)] + '\x22)' + '>View</button></div></div>' + _0x2dca07(0x3a5));
    _0x31328e[_0x2dca07(0x1f7)] == _0x2dca07(0x40b) || _0x31328e[_0x2dca07(0x1f7)] == _0x2dca07(0x213) ? $('.EndedCoinFlips')[_0x2dca07(0x31d)](_0x3b4034) : $(_0x2dca07(0x1cc))['append'](_0x3b4034), $(_0x2dca07(0x1e3))[_0x2dca07(0x3fa)](), updateCFHeader();
}
socket['on'](_0x43c573(0x436), function(_0x2e74a9) {
    addCoinflipLobby(_0x2e74a9);
}), socket['on'](_0x43c573(0x32d), function(_0x4064eb) {
    for (lobby in _0x4064eb) {
        addCoinflipLobby(_0x4064eb[lobby]);
    }
}), socket['on']('return\x20cfLobby', function(_0x50ce80) {
    var _0x24b665 = _0x43c573;
    $(_0x24b665(0x1d2))[_0x24b665(0x32a)]('');
    let _0x1b9a9f = _0x24b665(0x281) + _0x50ce80[_0x24b665(0x248)] + '\x22',
        _0x556522 = '[coinflip-id=\x22' + _0x50ce80['_id'] + '\x22]';
    var _0x2519d9 = '',
        _0x11034f = '';
    switch (_0x50ce80[_0x24b665(0x338)][_0x24b665(0x27d)]) {
        case 0x0:
            _0x2519d9 = _0x24b665(0x31e), opponentPick = _0x24b665(0x273);
            break;
        case 0x1:
            _0x2519d9 = _0x24b665(0x273), opponentPick = '/img/cfBlack.png';
            break;
    }
    let _0x40e586 = _0x50ce80['creator']['id'] === myUserInfo[_0x24b665(0x325)];
    var _0x384d46 = $('<p></p>')[_0x24b665(0x43d)](_0x50ce80[_0x24b665(0x338)][_0x24b665(0x3fd)]);
    if (_0x50ce80['opponent'] && _0x50ce80['opponent'][_0x24b665(0x3fd)] !== undefined) var _0x53fbf7 = $('<p></p>')['text'](_0x50ce80['opponent'][_0x24b665(0x3fd)]),
        _0x3fc1c1 = _0x50ce80[_0x24b665(0x3e5)]['image'];
    else var _0x53fbf7 = $(_0x24b665(0x34c)),
        _0x3fc1c1 = _0x24b665(0x265);
    var _0x3e6005 = _0x50ce80['opponent'] && _0x50ce80[_0x24b665(0x3e5)][_0x24b665(0x411)] !== undefined ? _0x50ce80[_0x24b665(0x338)][_0x24b665(0x411)] + _0x50ce80[_0x24b665(0x3e5)][_0x24b665(0x411)] : _0x50ce80[_0x24b665(0x338)][_0x24b665(0x411)] * 0x2,
        _0x48d7fd = '';
    _0x50ce80[_0x24b665(0x1f7)] == _0x24b665(0x40b) ? cfFlipperr = _0x24b665(0x223) : cfFlipperr = _0x24b665(0x387) + _0x50ce80[_0x24b665(0x1f7)] + '</p>';
    if (_0x50ce80[_0x24b665(0x3e5)] && _0x50ce80['opponent']['total'] !== undefined && _0x50ce80[_0x24b665(0x3e5)][_0x24b665(0x411)] > 0x0) var _0x6f55fe = _0x50ce80[_0x24b665(0x338)][_0x24b665(0x411)] / _0x3e6005 * 0x64;
    else var _0x6f55fe = 0x32;
    var _0x1c5583 = '',
        _0x17b29f = _0x24b665(0x29c) + _0x24b665(0x184) + _0x50ce80[_0x24b665(0x338)][_0x24b665(0x411)][_0x24b665(0x432)](0x2) + _0x24b665(0x253) + _0x24b665(0x2a4) + _0x50ce80[_0x24b665(0x338)]['depositedItems'][_0x24b665(0x1e5)] + _0x24b665(0x1d0) + _0x24b665(0x3d0) + _0x6f55fe[_0x24b665(0x432)](0x2) + _0x24b665(0x1b1) + _0x24b665(0x1b5);
    for (var _0x2bf179 = 0x0; _0x2bf179 < _0x50ce80[_0x24b665(0x338)][_0x24b665(0x354)]['length']; _0x2bf179++) {
        _0x1c5583 += _0x24b665(0x29b) + _0x50ce80[_0x24b665(0x338)][_0x24b665(0x354)][_0x2bf179]['name'] + '\x22>\x20<img\x20src=\x22https://steamcommunity-a.akamaihd.net/economy/image/' + _0x50ce80[_0x24b665(0x338)][_0x24b665(0x354)][_0x2bf179][_0x24b665(0x25d)] + _0x24b665(0x45a) + _0x50ce80[_0x24b665(0x338)][_0x24b665(0x354)][_0x2bf179][_0x24b665(0x2fa)][_0x24b665(0x432)](0x2) + _0x24b665(0x33f);
    }
    var _0x2d6fc = '',
        _0x232bc9 = '',
        _0x5592a8 = '';
    if (_0x50ce80[_0x24b665(0x3e5)] && _0x50ce80['opponent'][_0x24b665(0x411)] !== undefined && _0x50ce80[_0x24b665(0x3e5)][_0x24b665(0x411)] > 0x0) {
        _0x2d6fc = _0x24b665(0x2c0) + '<p\x20class=\x22total\x22>$' + _0x50ce80[_0x24b665(0x3e5)]['total'][_0x24b665(0x432)](0x2) + _0x24b665(0x253) + _0x24b665(0x2a4) + _0x50ce80[_0x24b665(0x3e5)][_0x24b665(0x354)][_0x24b665(0x1e5)] + _0x24b665(0x1d0) + _0x24b665(0x3d0) + (_0x50ce80['opponent'][_0x24b665(0x411)] / _0x3e6005 * 0x64)[_0x24b665(0x432)](0x2) + _0x24b665(0x1b1) + _0x24b665(0x1b5);
        for (var _0x2bf179 = 0x0; _0x2bf179 < _0x50ce80[_0x24b665(0x3e5)]['depositedItems'][_0x24b665(0x1e5)]; _0x2bf179++) {
            _0x232bc9 += '<div\x20class=\x22coinflipItem\x22\x20data-toggle=\x22tooltip\x22\x20title=\x22' + _0x50ce80[_0x24b665(0x3e5)]['depositedItems'][_0x2bf179][_0x24b665(0x368)] + _0x24b665(0x2bb) + _0x50ce80[_0x24b665(0x3e5)]['depositedItems'][_0x2bf179][_0x24b665(0x25d)] + _0x24b665(0x45a) + _0x50ce80[_0x24b665(0x3e5)][_0x24b665(0x354)][_0x2bf179][_0x24b665(0x2fa)][_0x24b665(0x432)](0x2) + '</p>\x20</div>';
        }
        _0x232bc9 = _0x24b665(0x1d7) + _0x232bc9 + '</div>';
    } else _0x50ce80[_0x24b665(0x1f7)] === _0x24b665(0x2f7) && _0x50ce80['opponent'] && !_0x50ce80[_0x24b665(0x3e5)]['id'] && _0x40e586 && (_0x5592a8 = _0x24b665(0x2f4) + 'callJimmy(\x22' + _0x50ce80[_0x24b665(0x248)] + '\x22' + _0x24b665(0x242));
    var _0x2ebad2 = _0x50ce80['opponent'] && _0x50ce80['opponent']['id'] !== undefined ? _0x50ce80[_0x24b665(0x3e5)]['id'] : null,
        _0x174f73 = _0x50ce80[_0x24b665(0x2b2)](_0x24b665(0x264)) ? '<i\x20class=\x22fa\x20fa-clock-o\x22\x20aria-hidden=\x22true\x22></i>\x20' + parseDate(_0x50ce80[_0x24b665(0x264)]) : '';
    let _0x478cda = $('<div\x20class=\x22coinflipHeader\x22\x20' + _0x1b9a9f + '><div\x20class=\x22row\x22>' + '<div\x20class=\x22col-md-6\x20creator\x22><div\x20class=\x22creator-imgs\x22><img\x20class=\x22profile\x22\x20src=\x22' + _0x50ce80[_0x24b665(0x338)]['image'] + '\x22>\x20<img\x20class=\x22pick\x22\x20src=\x22' + _0x2519d9 + '\x22>\x20</div>\x20<div\x20class=\x22creator-name\x22><a\x20target=\x22_blank\x22\x20href=\x22https://steamcommunity.com/profiles/' + _0x50ce80[_0x24b665(0x338)]['id'] + '\x22>' + _0x384d46[_0x24b665(0x3a0)](_0x24b665(0x307)) + _0x24b665(0x2eb) + '<div\x20class=\x22col-md-4\x22\x20id=\x22fliper-coin\x22>' + cfFlipperr + '</div>' + _0x24b665(0x17c) + _0x3fc1c1 + _0x24b665(0x190) + opponentPick + _0x24b665(0x360) + (_0x2ebad2 === _0x24b665(0x36a) ? _0x24b665(0x402) : _0x24b665(0x383) + _0x2ebad2 + '\x22') + '\x20>' + _0x53fbf7['prop']('outerHTML') + _0x24b665(0x2eb) + _0x24b665(0x3a5) + _0x24b665(0x315) + _0x1b9a9f + '>' + _0x24b665(0x41d) + _0x17b29f + '\x20<div\x20class=\x22CreatorItems\x22>' + _0x1c5583 + '</div></div>' + _0x24b665(0x254) + _0x2d6fc + '\x20' + _0x232bc9 + _0x24b665(0x219) + _0x5592a8 + '</div></div>' + _0x24b665(0x3a9) + _0x50ce80[_0x24b665(0x248)] + _0x24b665(0x2e0) + _0x50ce80[_0x24b665(0x3ef)][_0x24b665(0x3ef)] + _0x24b665(0x3a1) + _0x24b665(0x1e6) + _0x24b665(0x1b5));
    $(_0x24b665(0x1d2))[_0x24b665(0x31d)](_0x478cda), $(_0x24b665(0x1e3))[_0x24b665(0x3fa)]();
    if (_0x50ce80[_0x24b665(0x1f7)] == _0x24b665(0x40b)) {
        let _0x57f557 = _0x24b665(0x223);
        $(_0x556522 + _0x24b665(0x282))[_0x24b665(0x32a)](''), $(_0x556522 + _0x24b665(0x282))[_0x24b665(0x31d)](_0x57f557), setTimeout(function() {
            var _0x4366d3 = _0x24b665;
            _0x50ce80[_0x4366d3(0x430)][_0x4366d3(0x356)] ? $(_0x556522 + _0x4366d3(0x30c))[_0x4366d3(0x3ee)](_0x4366d3(0x2c9), _0x4366d3(0x189)) : $(_0x556522 + _0x4366d3(0x30c))[_0x4366d3(0x3ee)](_0x4366d3(0x2c9), _0x4366d3(0x30f));
        }, 0x96), setTimeout(function() {
            var _0x26f2b4 = _0x24b665;
            _0x50ce80[_0x26f2b4(0x3ef)][_0x26f2b4(0x2b2)](_0x26f2b4(0x224)) ? $(_0x556522 + _0x26f2b4(0x2ca))[_0x26f2b4(0x32a)]('<p>ID:\x20<span\x20class=\x22redText\x22>' + _0x50ce80['_id'] + _0x26f2b4(0x2e0) + _0x50ce80['hash'][_0x26f2b4(0x3ef)] + _0x26f2b4(0x3d7) + _0x50ce80[_0x26f2b4(0x3ef)][_0x26f2b4(0x224)] + _0x26f2b4(0x250) + _0x50ce80[_0x26f2b4(0x3ef)][_0x26f2b4(0x2f0)] + _0x26f2b4(0x21d)) : _0x50ce80['hash'][_0x26f2b4(0x2b2)](_0x26f2b4(0x1c6)) && _0x50ce80[_0x26f2b4(0x3ef)]['hasOwnProperty'](_0x26f2b4(0x19f)) ? $(_0x556522 + _0x26f2b4(0x2ca))['html'](_0x26f2b4(0x268) + _0x50ce80[_0x26f2b4(0x248)] + _0x26f2b4(0x2e0) + _0x50ce80['hash'][_0x26f2b4(0x3ef)] + '</span></p>\x20<p>Mod:\x20<span\x20class=\x22redText\x22>' + _0x50ce80['hash'][_0x26f2b4(0x1c6)] + '-' + _0x50ce80[_0x26f2b4(0x3ef)][_0x26f2b4(0x19f)] + _0x26f2b4(0x250) + _0x50ce80[_0x26f2b4(0x3ef)]['ticket'] + _0x26f2b4(0x41e)) : $(_0x556522 + _0x26f2b4(0x2ca))[_0x26f2b4(0x32a)](_0x26f2b4(0x268) + _0x50ce80['_id'] + _0x26f2b4(0x2e0) + _0x50ce80['hash'][_0x26f2b4(0x3ef)] + _0x26f2b4(0x1e7) + _0x50ce80['hash'][_0x26f2b4(0x1c6)] + _0x26f2b4(0x250) + _0x50ce80['hash'][_0x26f2b4(0x2f0)] + _0x26f2b4(0x1fd)), $(_0x556522 + _0x26f2b4(0x413))[_0x26f2b4(0x32a)](_0x174f73);
        }, 0xfa0);
    }
});
var jimmyMessages = [_0x43c573(0x336), _0x43c573(0x358), _0x43c573(0x400), _0x43c573(0x1e1), _0x43c573(0x438), _0x43c573(0x2f5), 'sleeping', _0x43c573(0x395)];

function _0x22c0(_0x35c7e8, _0x266a88) {
    var _0x15eed0 = _0x15ee();
    return _0x22c0 = function(_0x22c0fd, _0x4b1525) {
        _0x22c0fd = _0x22c0fd - 0x172;
        var _0x5e3903 = _0x15eed0[_0x22c0fd];
        return _0x5e3903;
    }, _0x22c0(_0x35c7e8, _0x266a88);
}

function callJimmy(_0x5d6564) {
    var _0x3700a0 = _0x43c573;
    let _0x34f52f = $('.callJimmyButton'),
        _0x19af38 = _0x34f52f['attr'](_0x3700a0(0x379));
    if (_0x19af38 === '0') _0x34f52f['text']('Confirm?');
    else _0x19af38 === '1' && socket[_0x3700a0(0x2bf)](_0x3700a0(0x3ab), _0x5d6564);
    _0x34f52f['attr'](_0x3700a0(0x379), Number(_0x19af38) + 0x1);
}

function whoIsJimmy() {
    var _0x57bf82 = _0x43c573;
    $(_0x57bf82(0x34f))[_0x57bf82(0x326)](_0x57bf82(0x372)), $(_0x57bf82(0x378))[_0x57bf82(0x326)](_0x57bf82(0x2b0));
}
socket['on'](_0x43c573(0x25b), _0x43349c => {
    var _0x1d6a1e = _0x43c573;
    let _0x2f26de = _0x43349c[_0x1d6a1e(0x2b5)],
        _0x223181 = jimmyMessages[Math['floor'](Math['random']() * jimmyMessages['length'])];
    if (_0x2f26de === _0x1d6a1e(0x3f8)) $(_0x1d6a1e(0x34f))[_0x1d6a1e(0x326)](_0x1d6a1e(0x372)), $('#notificationBody')[_0x1d6a1e(0x32a)]('<h4\x20style=\x22color:red\x22>Jimmy\x20can\x20only\x20be\x20called\x20for\x20Coinflips\x20under\x20$5,000.\x20This\x20limit\x20may\x20increase\x20in\x20the\x20future!</h4>'), toastr[_0x1d6a1e(0x2b5)](_0x1d6a1e(0x2f2)), $('#notificationBox')[_0x1d6a1e(0x326)]('show');
    else {
        if (_0x2f26de === _0x1d6a1e(0x2c7)) {
            let _0x17667d = $(_0x1d6a1e(0x30e));
            _0x17667d && (_0x17667d['attr'](_0x1d6a1e(0x379), '0'), _0x17667d[_0x1d6a1e(0x43d)](_0x1d6a1e(0x429))), toastr[_0x1d6a1e(0x2b5)](_0x1d6a1e(0x3e4)), toastr['error']('Jimmy\x20can\x20be\x20called\x20in\x20' + (_0x43349c[_0x1d6a1e(0x297)] / 0x3e8)['toFixed'](0x2) + '\x20seconds!');
        } else {
            if (_0x2f26de === _0x1d6a1e(0x2a6)) {
                let _0x49947e = $(_0x1d6a1e(0x30e));
                _0x49947e && (_0x49947e[_0x1d6a1e(0x279)](_0x1d6a1e(0x379), '0'), _0x49947e[_0x1d6a1e(0x43d)](_0x1d6a1e(0x429))), toastr[_0x1d6a1e(0x2b5)](_0x1d6a1e(0x3fc));
            } else {
                if (_0x2f26de === _0x1d6a1e(0x33a)) {
                    let _0x45ecc5 = $('.callJimmyButton');
                    _0x45ecc5 && (_0x45ecc5[_0x1d6a1e(0x279)](_0x1d6a1e(0x379), '0'), _0x45ecc5[_0x1d6a1e(0x43d)](_0x1d6a1e(0x429))), toastr['error'](_0x1d6a1e(0x3bf) + _0x223181 + _0x1d6a1e(0x34d));
                } else {
                    if (_0x2f26de === 'COINFLIP_PAUSED') {
                        let _0x38b711 = $(_0x1d6a1e(0x30e));
                        _0x38b711 && (_0x38b711['attr'](_0x1d6a1e(0x379), '0'), _0x38b711[_0x1d6a1e(0x43d)](_0x1d6a1e(0x429))), toastr[_0x1d6a1e(0x2b5)](_0x1d6a1e(0x37a));
                    } else {
                        let _0x3d08fb = $(_0x1d6a1e(0x30e));
                        _0x3d08fb && (_0x3d08fb[_0x1d6a1e(0x279)](_0x1d6a1e(0x379), '0'), _0x3d08fb['text']('Call\x20Jimmy')), toastr[_0x1d6a1e(0x2b5)](_0x1d6a1e(0x3bf) + _0x223181 + _0x1d6a1e(0x34d));
                    }
                }
            }
        }
    }
});

function parseDate(_0x3d69b0) {
    var _0x3dec78 = _0x43c573,
        _0x3a59e0 = new Date(_0x3d69b0)[_0x3dec78(0x343)](),
        _0x3e6fb0 = new Date()['getTime'](),
        _0x33432d = Math['round']((_0x3e6fb0 - _0x3a59e0) / 0x3e8);
    if (_0x33432d <= 0x3c) return 'Just\x20now';
    else {
        if (_0x33432d <= 0xe10) {
            if (_0x33432d <= 0x78) return '1\x20minute\x20ago';
            return (_0x33432d / 0x3c)[_0x3dec78(0x432)](0x2) + _0x3dec78(0x199);
        } else {
            if (_0x33432d <= 0x15180) {
                if (_0x33432d <= 0x1c20) return (_0x33432d / 0xe10)['toFixed'](0x0) + _0x3dec78(0x1b7);
                return (_0x33432d / 0xe10)['toFixed'](0x0) + _0x3dec78(0x196);
            } else {
                if (_0x33432d <= 0x2a300) return (_0x33432d / 0x15180)[_0x3dec78(0x432)](0x0) + _0x3dec78(0x217);
                return (_0x33432d / 0x15180)['toFixed'](0x0) + _0x3dec78(0x33b);
            }
        }
    }
}

function viewActiveLobby(_0x1ff1bd) {
    var _0x5e5421 = _0x43c573;
    $(_0x5e5421(0x34f))[_0x5e5421(0x326)](_0x5e5421(0x372)), socket[_0x5e5421(0x2bf)]('view\x20cfLobby', _0x1ff1bd), $(_0x5e5421(0x1d2))['html'](loader), $(_0x5e5421(0x335))['modal'](_0x5e5421(0x2b0));
};
socket['on'](_0x43c573(0x1d3), function(_0x3f601f) {
    updateCFStatus(_0x3f601f);
});

function updateCFStatus(_0x3d1e94) {
    var _0x3466ae = _0x43c573;
    let _0x129808 = _0x3466ae(0x27e) + _0x3d1e94[_0x3466ae(0x248)] + '\x22]';
    switch (_0x3d1e94['status']) {
        case _0x3466ae(0x2f7):
            $(_0x129808 + '\x20.coinflipStatus\x20p')['text'](_0x3d1e94[_0x3466ae(0x1f7)]), $(_0x129808 + _0x3466ae(0x28f))[_0x3466ae(0x32a)]('<button\x20class=\x22btn\x22\x20onclick=' + _0x3466ae(0x1c0) + _0x3d1e94[_0x3466ae(0x248)] + '\x22' + ',' + _0x3d1e94[_0x3466ae(0x338)][_0x3466ae(0x411)] + ')' + '>Join</button>'), $(_0x129808 + _0x3466ae(0x3f2))['attr'](_0x3466ae(0x320), _0x3466ae(0x265)), $(_0x129808 + '\x20.opponent-name')['html'](_0x3466ae(0x312)), $(_0x129808 + '\x20#fliper-coin\x20p')[_0x3466ae(0x43d)](_0x3d1e94[_0x3466ae(0x1f7)]);
            let _0x4a29ca = _0x3d1e94[_0x3466ae(0x338)]['id'] === myUserInfo[_0x3466ae(0x325)];
            _0x4a29ca && $(_0x129808 + '\x20.coinflipOpponent')[_0x3466ae(0x32a)](_0x3466ae(0x3bb) + _0x3466ae(0x392) + _0x3d1e94[_0x3466ae(0x248)] + '\x22' + _0x3466ae(0x188));
            break;
        case _0x3466ae(0x35a):
            $(_0x129808 + '\x20.coinflipStatus\x20p')[_0x3466ae(0x43d)](_0x3d1e94[_0x3466ae(0x1f7)] + '\x20' + _0x3d1e94[_0x3466ae(0x251)]), $(_0x129808 + _0x3466ae(0x28f))['html'](_0x3466ae(0x1a6) + _0x3d1e94[_0x3466ae(0x3e5)]['image'] + _0x3466ae(0x391));
            if (_0x3d1e94[_0x3466ae(0x251)] == 0x5a) {
                $(_0x129808 + _0x3466ae(0x3f2))['attr']('src', _0x3d1e94[_0x3466ae(0x3e5)]['image']);
                var _0x1e0a8f = $('<p></p>')['text'](_0x3d1e94[_0x3466ae(0x3e5)][_0x3466ae(0x3fd)]);
                _0x3d1e94['opponent']['id'] === 'JIMMY' ? $(_0x129808 + _0x3466ae(0x2be))['html'](_0x3466ae(0x3e7) + _0x1e0a8f[_0x3466ae(0x3a0)]('outerHTML') + _0x3466ae(0x2e3)) : $(_0x129808 + _0x3466ae(0x2be))[_0x3466ae(0x32a)](_0x3466ae(0x38a) + _0x3d1e94[_0x3466ae(0x3e5)]['id'] + '\x22>' + _0x1e0a8f[_0x3466ae(0x3a0)](_0x3466ae(0x307)) + _0x3466ae(0x2e3)), $(_0x129808 + '\x20.coinflipOpponent')['html']('');
            }
            $(_0x129808 + _0x3466ae(0x293))[_0x3466ae(0x43d)](_0x3d1e94[_0x3466ae(0x1f7)] + '\x20' + _0x3d1e94['timer']);
            break;
        case _0x3466ae(0x1a2):
            $(_0x129808 + _0x3466ae(0x34b))[_0x3466ae(0x43d)](_0x3d1e94['status'] + _0x3466ae(0x1af) + _0x3d1e94[_0x3466ae(0x251)]);
            if (_0x3d1e94['timer'] == 0xa) {
                var _0x19b8f8 = _0x3d1e94[_0x3466ae(0x338)][_0x3466ae(0x411)] + _0x3d1e94['opponent'][_0x3466ae(0x411)],
                    _0x24bd25 = '',
                    _0x457969 = _0x3466ae(0x2c0) + _0x3466ae(0x184) + _0x3d1e94[_0x3466ae(0x3e5)][_0x3466ae(0x411)][_0x3466ae(0x432)](0x2) + _0x3466ae(0x253) + _0x3466ae(0x2a4) + _0x3d1e94['opponent'][_0x3466ae(0x354)]['length'] + _0x3466ae(0x1d0) + _0x3466ae(0x3d0) + (_0x3d1e94[_0x3466ae(0x3e5)][_0x3466ae(0x411)] / _0x19b8f8 * 0x64)[_0x3466ae(0x432)](0x2) + _0x3466ae(0x1b1) + _0x3466ae(0x1b5);
                for (var _0x2a55d9 = 0x0; _0x2a55d9 < _0x3d1e94['opponent'][_0x3466ae(0x354)][_0x3466ae(0x1e5)]; _0x2a55d9++) {
                    _0x24bd25 += _0x3466ae(0x29b) + _0x3d1e94[_0x3466ae(0x3e5)][_0x3466ae(0x354)][_0x2a55d9][_0x3466ae(0x368)] + '\x22>\x20<img\x20src=\x22https://steamcommunity-a.akamaihd.net/economy/image/' + _0x3d1e94[_0x3466ae(0x3e5)][_0x3466ae(0x354)][_0x2a55d9][_0x3466ae(0x25d)] + _0x3466ae(0x45a) + _0x3d1e94[_0x3466ae(0x3e5)][_0x3466ae(0x354)][_0x2a55d9][_0x3466ae(0x2fa)][_0x3466ae(0x432)](0x2) + _0x3466ae(0x33f);
                }
                $(_0x129808 + _0x3466ae(0x447))['html']('')[_0x3466ae(0x31d)](_0x457969)[_0x3466ae(0x31d)](_0x3466ae(0x1d7) + _0x24bd25 + '</div>'), $(_0x129808 + _0x3466ae(0x30b))[_0x3466ae(0x43d)]((_0x3d1e94[_0x3466ae(0x338)][_0x3466ae(0x411)] / _0x19b8f8 * 0x64)['toFixed'](0x2) + '%'), $('[data-toggle=\x22tooltip\x22]')[_0x3466ae(0x3fa)]();
            }
            $(_0x129808 + _0x3466ae(0x293))['text'](_0x3d1e94[_0x3466ae(0x1f7)] + _0x3466ae(0x1af) + _0x3d1e94[_0x3466ae(0x251)]);
            break;
        case _0x3466ae(0x40b):
            let _0x5abb62 = _0x3466ae(0x223);
            $(_0x129808 + _0x3466ae(0x34b))[_0x3466ae(0x43d)](_0x3d1e94['status']), $(_0x129808 + _0x3466ae(0x282))[_0x3466ae(0x32a)](_0x5abb62);
            switch (_0x3d1e94['winner'][_0x3466ae(0x356)]) {
                case 0x0:
                    $(_0x129808 + '\x20.coinflipActions\x20.join-info')['html']('<img\x20src=\x22/img/cfBlack.png\x22\x20class=\x22result\x22>');
                    break;
                case 0x1:
                    $(_0x129808 + '\x20.coinflipActions\x20.join-info')[_0x3466ae(0x32a)](_0x3466ae(0x287));
                    break;
            }
            setTimeout(function() {
                var _0x543926 = _0x3466ae;
                _0x3d1e94[_0x543926(0x430)][_0x543926(0x356)] ? $(_0x129808 + _0x543926(0x30c))[_0x543926(0x3ee)]('transform', _0x543926(0x189)) : $(_0x129808 + '\x20#fliper-coin\x20.flipper')[_0x543926(0x3ee)]('transform', _0x543926(0x30f));
            }, 0x96);
            var _0xa2c1d7 = _0x3d1e94['hasOwnProperty'](_0x3466ae(0x264)) ? _0x3466ae(0x269) + parseDate(_0x3d1e94[_0x3466ae(0x264)]) : '';
            setTimeout(function() {
                var _0x404c26 = _0x3466ae;
                _0x3d1e94[_0x404c26(0x3ef)][_0x404c26(0x2b2)](_0x404c26(0x224)) ? $(_0x129808 + _0x404c26(0x2ca))['html']('<p>ID:\x20<span\x20class=\x22redText\x22>' + _0x3d1e94[_0x404c26(0x248)] + _0x404c26(0x2e0) + _0x3d1e94[_0x404c26(0x3ef)][_0x404c26(0x3ef)] + _0x404c26(0x3d7) + _0x3d1e94[_0x404c26(0x3ef)]['salt'] + '</span>\x20Ticket:\x20<span\x20class=\x22redText\x22>' + _0x3d1e94[_0x404c26(0x3ef)][_0x404c26(0x2f0)] + _0x404c26(0x21d)) : _0x3d1e94[_0x404c26(0x3ef)][_0x404c26(0x2b2)](_0x404c26(0x1c6)) && _0x3d1e94['hash'][_0x404c26(0x2b2)](_0x404c26(0x19f)) ? $(_0x129808 + _0x404c26(0x2ca))[_0x404c26(0x32a)](_0x404c26(0x268) + _0x3d1e94[_0x404c26(0x248)] + '</span>\x20</p>\x20<p>Hash:\x20<span\x20class=\x22redText\x22>' + _0x3d1e94[_0x404c26(0x3ef)][_0x404c26(0x3ef)] + _0x404c26(0x1e7) + _0x3d1e94[_0x404c26(0x3ef)][_0x404c26(0x1c6)] + '-' + _0x3d1e94[_0x404c26(0x3ef)][_0x404c26(0x19f)] + _0x404c26(0x250) + _0x3d1e94[_0x404c26(0x3ef)]['ticket'] + '</span><p\x20class=\x22greyText\x22>Verify\x20this\x20<a\x20href=\x22/ProvablyFair\x22>here</a></p></p>') : $(_0x129808 + '\x20.hashInfo')[_0x404c26(0x32a)](_0x404c26(0x268) + _0x3d1e94[_0x404c26(0x248)] + _0x404c26(0x2e0) + _0x3d1e94['hash'][_0x404c26(0x3ef)] + _0x404c26(0x1e7) + _0x3d1e94[_0x404c26(0x3ef)][_0x404c26(0x1c6)] + _0x404c26(0x250) + _0x3d1e94[_0x404c26(0x3ef)][_0x404c26(0x2f0)] + '</span><p\x20class=\x22greyText\x22>Random.org\x20failed\x20to\x20generate\x20a\x20second\x20seed.\x20Only\x20the\x20original\x20seed\x20was\x20used.\x20Read\x20more\x20<a\x20href=\x22/ProvablyFair\x22>here</a></p></p>'), $(_0x129808 + '\x20.completedDate')['html'](_0xa2c1d7);
            }, 0xfa0), setTimeout(function() {
                var _0x50195e = _0x3466ae;
                addCfHistory(_0x3d1e94['_id'], _0x3d1e94[_0x50195e(0x430)]['coin']);
            }, 0xbb8), $(_0x3466ae(0x361) + _0x129808)[_0x3466ae(0x2a5)](function() {
                var _0x1382a0 = _0x3466ae;
                $(_0x1382a0(0x361) + _0x129808)[_0x1382a0(0x183)]('.EndedCoinFlips')['fadeIn'](), updateCFHeader();
            });
            break;
        case _0x3466ae(0x213):
            $(_0x129808 + _0x3466ae(0x34b))['text'](_0x3d1e94[_0x3466ae(0x1f7)]), $(_0x129808 + _0x3466ae(0x28f))[_0x3466ae(0x32a)]('<img\x20src=\x22' + _0x3d1e94[_0x3466ae(0x338)][_0x3466ae(0x25d)] + _0x3466ae(0x391)), $(_0x129808 + _0x3466ae(0x293))['text'](_0x3d1e94[_0x3466ae(0x1f7)]), $(_0x3466ae(0x361) + _0x129808)['fadeOut'](function() {
                var _0x501f73 = _0x3466ae;
                $(_0x501f73(0x361) + _0x129808)[_0x501f73(0x183)](_0x501f73(0x3f9))['fadeIn'](), updateCFHeader();
            });
    }
}
socket['on'](_0x43c573(0x3c8), function(_0x591bd6) {
    var _0x26b903 = _0x43c573,
        _0x32d995 = $('.EndedCoinFlips\x20[coinflip-id=\x22' + _0x591bd6 + '\x22]')[_0x26b903(0x1e5)] > 0x0 ? $(_0x26b903(0x459) + _0x591bd6 + '\x22]') : $(_0x26b903(0x370) + _0x591bd6 + '\x22]');
    _0x32d995[_0x26b903(0x2a5)](function() {
        var _0x4974d8 = _0x26b903;
        _0x32d995[_0x4974d8(0x1c1)](), updateCFHeader();
    });
}), socket['on'](_0x43c573(0x1ce), function(_0xa9b27) {
    var _0x55e4fd = _0x43c573,
        _0x550fc3 = $(_0x55e4fd(0x1e2));
    _0x550fc3['html'](_0x55e4fd(0x3d8) + _0xa9b27 + _0x55e4fd(0x405));
}), socket['on'](_0x43c573(0x353), function(_0x3c9330) {
    var _0x566ee4 = _0x43c573;
    $('.modal')['modal'](_0x566ee4(0x372)), $('#securityWarning')[_0x566ee4(0x326)](_0x566ee4(0x2b0)), $(_0x566ee4(0x2dd))['text'](_0x3c9330);
    var _0x54216d = soundsArray[_0x566ee4(0x178)];
    _0x54216d['volume'] = 0.6, _0x54216d[_0x566ee4(0x20b)]();
});

function updateCFHeader() {
    var _0x8fff5f = _0x43c573;
    let _0x2a85bc = $(_0x8fff5f(0x19c)),
        _0x28bc9b = $(_0x8fff5f(0x322));
    _0x2a85bc[_0x8fff5f(0x43d)](_0x28bc9b[_0x8fff5f(0x1e5)]);
    let _0x520c8c = 0x0,
        _0x49d351 = $(_0x8fff5f(0x243));
    for (var _0x4cc53a = 0x0; _0x4cc53a < _0x49d351[_0x8fff5f(0x1e5)]; _0x4cc53a++) {
        _0x520c8c += Number(_0x49d351[_0x4cc53a][_0x8fff5f(0x1ea)][_0x8fff5f(0x1f8)]('$', '')[_0x8fff5f(0x1f8)](_0x8fff5f(0x3e0), ''));
    }
    $('.coinflipStatsBody\x20.ActiveGamesTotal')[_0x8fff5f(0x43d)]('$' + _0x520c8c[_0x8fff5f(0x432)](0x2)), window['location'][_0x8fff5f(0x22e)][_0x8fff5f(0x3db)]() == _0x8fff5f(0x1cd) && (document['title'] = '$' + _0x520c8c['toFixed'](0x2) + _0x8fff5f(0x333));
}
socket['on'](_0x43c573(0x2a0), function(_0x18a245) {
    var _0x760317 = _0x43c573;
    $(_0x760317(0x1fc))[_0x760317(0x43d)](_0x18a245[_0x760317(0x2a0)]);
}), socket['on'](_0x43c573(0x451), function(_0x51bc7c) {
    var _0x3e3943 = _0x43c573;
    $(_0x3e3943(0x42c))[_0x3e3943(0x43d)]('$' + _0x51bc7c[_0x3e3943(0x201)][_0x3e3943(0x432)](0x2)), $('.cfTotal')[_0x3e3943(0x43d)]('$' + _0x51bc7c['coinflip'][_0x3e3943(0x432)](0x2));
});

function joinQuickSelect() {
    var _0x1f47af = _0x43c573,
        _0x54b2cd = $(_0x1f47af(0x1b6));
    _0x54b2cd['text']('$0.00'), depositTotal = 0x0, items2Deposit = [];
    var _0x209f2c = $(_0x1f47af(0x2e4));
    for (var _0x18a70c = 0x0; _0x18a70c < _0x209f2c[_0x1f47af(0x1e5)]; _0x18a70c++) {
        _0x209f2c[_0x18a70c][_0x1f47af(0x452)](_0x1f47af(0x18a), _0x1f47af(0x27b)), _0x209f2c[_0x18a70c][_0x1f47af(0x295)]['children'][0x1][_0x1f47af(0x452)]('style', _0x1f47af(0x296)), _0x209f2c[_0x18a70c][_0x1f47af(0x295)][_0x1f47af(0x452)]('style', 'border:1px\x20solid\x20red;');
    }
    var _0x14ada5 = $(_0x1f47af(0x228))[_0x1f47af(0x43d)]()[_0x1f47af(0x1f8)]('Coinflip\x20requires\x20$', '')[_0x1f47af(0x1f8)](_0x1f47af(0x241), '')['split']('-'),
        _0x2d22d1 = Number(_0x14ada5[0x0]),
        _0x1dbedb = Number(_0x14ada5[0x1]),
        _0x369ccd = $(_0x1f47af(0x1f0)),
        _0x311e1d = [];
    for (var _0x18a70c = 0x0; _0x18a70c < _0x369ccd['length']; _0x18a70c++) {
        var _0x2d57b4 = _0x369ccd[_0x18a70c];
        _0x311e1d[_0x1f47af(0x417)]({
            'price': Number(_0x2d57b4[_0x1f47af(0x19b)](_0x1f47af(0x2df))[_0x1f47af(0x1ea)][_0x1f47af(0x1f8)]('$', '')),
            'assetid': _0x2d57b4[_0x1f47af(0x29a)](_0x1f47af(0x3f7))
        });
    }
    var _0x253ee8 = [];
    for (var _0x18a70c = 0x0; _0x18a70c < _0x311e1d[_0x1f47af(0x1e5)]; _0x18a70c++) {
        var _0x2d57b4 = _0x311e1d[_0x18a70c];
        if (depositTotal + _0x2d57b4['price'] <= _0x2d22d1 && _0x253ee8['length'] < 0x14) depositTotal += _0x2d57b4[_0x1f47af(0x2fa)], _0x253ee8[_0x1f47af(0x417)](_0x2d57b4);
        else {
            if (depositTotal <= _0x2d22d1 && depositTotal >= _0x1dbedb && _0x253ee8[_0x1f47af(0x1e5)] <= 0x14) continue;
            else depositTotal - _0x253ee8[0x0] + _0x2d57b4[_0x1f47af(0x2fa)] <= _0x2d22d1 && (depositTotal -= _0x253ee8[0x0], _0x253ee8[_0x1f47af(0x2cb)](0x0, 0x1), depositTotal += _0x2d57b4[_0x1f47af(0x2fa)], _0x253ee8[_0x1f47af(0x417)](_0x2d57b4));
        }
    }
    if (depositTotal >= _0x1dbedb && depositTotal <= _0x2d22d1) {
        toastr[_0x1f47af(0x18c)](_0x1f47af(0x181) + _0x253ee8[_0x1f47af(0x1e5)] + _0x1f47af(0x1a3));
        for (var _0x18a70c = 0x0; _0x18a70c < _0x253ee8[_0x1f47af(0x1e5)]; _0x18a70c++) {
            items2Deposit[_0x1f47af(0x417)](_0x253ee8[_0x18a70c][_0x1f47af(0x267)]);
            var _0x38062f = $(_0x1f47af(0x456) + _0x253ee8[_0x18a70c]['assetid'] + '\x22]');
            _0x38062f[0x0][_0x1f47af(0x193)][0x0]['setAttribute']('class', _0x1f47af(0x27b)), _0x38062f[0x0]['children'][0x1][_0x1f47af(0x393)]('style', '-webkit-filter:\x20blur(2px);filter:\x20blur(2px);'), _0x38062f[0x0]['setAttribute'](_0x1f47af(0x1be), 'border:1px\x20solid\x20red;');
        }
        _0x54b2cd[_0x1f47af(0x43d)]('$' + depositTotal[_0x1f47af(0x432)](0x2));
    } else {
        depositTotal = 0x0, items2Deposit = [], toastr['error'](_0x1f47af(0x2bd));
        var _0x209f2c = $(_0x1f47af(0x2e4));
        for (var _0x18a70c = 0x0; _0x18a70c < _0x209f2c[_0x1f47af(0x1e5)]; _0x18a70c++) {
            _0x209f2c[_0x18a70c][_0x1f47af(0x452)](_0x1f47af(0x18a), _0x1f47af(0x27b)), _0x209f2c[_0x18a70c][_0x1f47af(0x295)]['children'][0x1][_0x1f47af(0x452)]('style', _0x1f47af(0x296)), _0x209f2c[_0x18a70c][_0x1f47af(0x295)]['removeAttribute'](_0x1f47af(0x1be), _0x1f47af(0x285));
        }
        _0x54b2cd[_0x1f47af(0x43d)]('$' + depositTotal[_0x1f47af(0x432)](0x2));
    }
}
socket['on']('DD\x20Option', function(_0x378c79) {
    var _0x271831 = _0x43c573;
    $(_0x271831(0x34f))[_0x271831(0x326)]('hide'), $('#cfDoubleDown')['modal'](_0x271831(0x2b0)), $(_0x271831(0x40d))[_0x271831(0x279)]('style', _0x271831(0x37d)), selectedCoin = null, $(_0x271831(0x2c2))[_0x271831(0x24b)]('selected'), $('#DDWinning')[_0x271831(0x43d)](_0x378c79[_0x271831(0x411)]), $('#cfDoubleDown')[_0x271831(0x279)](_0x271831(0x21e), _0x378c79['id']);
}), socket['on'](_0x43c573(0x3e3), function(_0x284d53) {
    var _0xe24c93 = _0x43c573;
    $(_0xe24c93(0x23e))[_0xe24c93(0x43d)](_0x284d53), _0x284d53 == 0x0 && $(_0xe24c93(0x450))[_0xe24c93(0x21f)]('in') && ($(_0xe24c93(0x34f))[_0xe24c93(0x326)]('hide'), $('#AcceptWinningsBody')[_0xe24c93(0x32a)](loader), $(_0xe24c93(0x38c))[_0xe24c93(0x326)]('show'));
}), $(_0x43c573(0x207))['click'](function() {
    var _0x364d33 = _0x43c573;
    $(_0x364d33(0x40d))[_0x364d33(0x279)](_0x364d33(0x1be), '');
}), $(_0x43c573(0x306))['click'](function() {
    var _0xaec53c = _0x43c573;
    $(_0xaec53c(0x34f))[_0xaec53c(0x326)](_0xaec53c(0x372)), $(_0xaec53c(0x3be))[_0xaec53c(0x32a)](loader), $(_0xaec53c(0x38c))[_0xaec53c(0x326)](_0xaec53c(0x2b0));
    var _0x2f8436 = $(_0xaec53c(0x450))['attr'](_0xaec53c(0x21e));
    socket[_0xaec53c(0x2bf)](_0xaec53c(0x407), _0x2f8436);
}), $(_0x43c573(0x350))[_0x43c573(0x233)](function() {
    var _0x598eb1 = _0x43c573;
    if (selectedCoin == null) toastr[_0x598eb1(0x2b5)](_0x598eb1(0x2db));
    else {
        $('.modal')[_0x598eb1(0x326)]('hide'), $(_0x598eb1(0x1d2))[_0x598eb1(0x32a)](loader), $(_0x598eb1(0x335))['modal'](_0x598eb1(0x2b0));
        var _0x2b8240 = $(_0x598eb1(0x450))['attr'](_0x598eb1(0x21e));
        socket[_0x598eb1(0x2bf)](_0x598eb1(0x271), _0x2b8240, selectedCoin);
    }
}), socket['on'](_0x43c573(0x3c1), function(_0x1eb52a) {
    var _0x9b88d7 = _0x43c573;
    if (!_0x1eb52a[_0x9b88d7(0x1a8)]) return;
    var _0x13f2f3 = $(_0x9b88d7(0x3e9))['is'](':visible'),
        _0x43b5ea = $(_0x9b88d7(0x27c))['is'](_0x9b88d7(0x36e)),
        _0x3371a2 = $(_0x9b88d7(0x2fb))['is'](':visible'),
        _0x12957b = $(_0x9b88d7(0x3b7))['is'](_0x9b88d7(0x36e)),
        _0x46789a = $('#fgWinnerInfo')['is'](':visible');
    if (!_0x13f2f3) $('#FlashGiveaway')['slideDown']();
    if (_0x1eb52a[_0x9b88d7(0x251)] >= 0x5b) {
        $('#fgStartingTimer')[_0x9b88d7(0x43d)](_0x1eb52a[_0x9b88d7(0x251)] - 0x5a);
        if (!_0x43b5ea) $(_0x9b88d7(0x27c))[_0x9b88d7(0x25f)]();
        if (_0x3371a2) $(_0x9b88d7(0x2fb))[_0x9b88d7(0x1f4)]();
    } else {
        $('#fgParticipants')['text'](_0x1eb52a['participants']), $(_0x9b88d7(0x42f))['text'](_0x1eb52a[_0x9b88d7(0x251)]);
        if (_0x43b5ea) $(_0x9b88d7(0x27c))[_0x9b88d7(0x1f4)]();
        if (!_0x3371a2) $(_0x9b88d7(0x2fb))[_0x9b88d7(0x1f4)]();
        $(_0x9b88d7(0x389))[_0x9b88d7(0x279)](_0x9b88d7(0x26f), _0x1eb52a[_0x9b88d7(0x39d)][_0x9b88d7(0x368)]), $(_0x9b88d7(0x2ed))[_0x9b88d7(0x43d)]('$' + _0x1eb52a[_0x9b88d7(0x39d)]['price']['toFixed'](0x2)), $(_0x9b88d7(0x1f6))[_0x9b88d7(0x279)](_0x9b88d7(0x320), _0x1eb52a['skin'][_0x9b88d7(0x25d)]);
    }
    if (_0x12957b) $(_0x9b88d7(0x3b7))[_0x9b88d7(0x1fe)]();
    if (_0x46789a) $(_0x9b88d7(0x445))['slideUp']();
    _0x1eb52a['timer'] === 0x78 && ($('#fgRollImgs')['html']('\x20'), $(_0x9b88d7(0x23f))['css'](_0x9b88d7(0x2a1), 0x0 + 'px'));
}), socket['on'](_0x43c573(0x185), function(_0x2e69b9) {
    var _0x2a49db = _0x43c573,
        _0x4575b3 = $(_0x2a49db(0x3e9))['is'](_0x2a49db(0x36e));
    if (!_0x4575b3) $(_0x2a49db(0x3e9))[_0x2a49db(0x25f)]();
    $('#fgInfo')[_0x2a49db(0x279)]('style', ''), $(_0x2a49db(0x1ab))['text'](0x0), $(_0x2a49db(0x42f))[_0x2a49db(0x43d)](0x5a), $(_0x2a49db(0x389))[_0x2a49db(0x279)](_0x2a49db(0x26f), _0x2e69b9[_0x2a49db(0x368)]), $('#fgPrice')[_0x2a49db(0x43d)]('$' + _0x2e69b9[_0x2a49db(0x2fa)][_0x2a49db(0x432)](0x2)), $(_0x2a49db(0x1f6))[_0x2a49db(0x279)](_0x2a49db(0x320), _0x2e69b9[_0x2a49db(0x25d)]), $(_0x2a49db(0x3ea))[_0x2a49db(0x43d)]('Join!'), $(_0x2a49db(0x27c))[_0x2a49db(0x279)]('style', _0x2a49db(0x37d)), $(_0x2a49db(0x3b7))[_0x2a49db(0x279)](_0x2a49db(0x1be), _0x2a49db(0x37d)), $(_0x2a49db(0x445))[_0x2a49db(0x279)]('style', _0x2a49db(0x37d)), toastr['success']('A\x20Flash\x20Giveaway\x20has\x20started,\x20enjoy!');
}), socket['on'](_0x43c573(0x3b2), (_0x310dd4, _0x3d97f0) => {
    var _0x4f93df = _0x43c573;
    if (_0x310dd4 == 'RESTRICTED') $(_0x4f93df(0x34f))[_0x4f93df(0x326)](_0x4f93df(0x372)), $('#notificationBox')[_0x4f93df(0x326)](_0x4f93df(0x2b0)), $(_0x4f93df(0x1e2))[_0x4f93df(0x32a)](_0x4f93df(0x198));
    else {
        if (_0x310dd4 == _0x4f93df(0x2a8)) toastr[_0x4f93df(0x2b5)](_0x4f93df(0x221)), $(_0x4f93df(0x3ea))[_0x4f93df(0x32a)](_0x4f93df(0x21a) + _0x3d97f0['tickets']);
        else {
            if (_0x310dd4 == _0x4f93df(0x3d2)) toastr[_0x4f93df(0x2b5)](_0x4f93df(0x299)), $(_0x4f93df(0x34f))[_0x4f93df(0x326)](_0x4f93df(0x372)), $(_0x4f93df(0x1d1))[_0x4f93df(0x326)]('show'), $(_0x4f93df(0x1e2))['html'](_0x4f93df(0x44f));
            else {
                if (_0x310dd4 == _0x4f93df(0x35c)) $('.modal')['modal'](_0x4f93df(0x372)), $(_0x4f93df(0x1d1))[_0x4f93df(0x326)]('show'), $(_0x4f93df(0x1e2))[_0x4f93df(0x32a)](_0x4f93df(0x2d7) + _0x4f93df(0x2fc) + '<p>Click\x20<a\x20href=\x27/verify\x27>here</a>\x20to\x20get\x20started!</p>');
                else {
                    if (_0x310dd4 == _0x4f93df(0x3b3)) toastr['error'](_0x4f93df(0x256)), $(_0x4f93df(0x34f))[_0x4f93df(0x326)](_0x4f93df(0x372)), $('#notificationBox')['modal'](_0x4f93df(0x2b0)), $('#notificationBody')[_0x4f93df(0x32a)]('<h4\x20style=\x22color:red;\x22>You\x20must\x20first\x20setup\x20your\x20Steam\x20Trade\x20URL\x20<a\x20style=\x22cursor:\x20pointer;\x22\x20data-toggle=\x22modal\x22\x20data-target=\x22#myProfile\x22\x20onclick=\x22getSelfProfile()\x22>HERE</a>!\x20</h4>');
                    else {
                        if (_0x310dd4 == _0x4f93df(0x33c)) toastr[_0x4f93df(0x2b5)]('Please\x20setup\x20your\x20Steam\x20Trade\x20URL\x20under\x20\x22My\x20Profile\x22.'), $(_0x4f93df(0x34f))[_0x4f93df(0x326)]('hide'), $(_0x4f93df(0x1d1))['modal']('show'), $(_0x4f93df(0x1e2))[_0x4f93df(0x32a)](_0x4f93df(0x31b));
                        else {
                            if (_0x310dd4 == 'ESCROW') toastr[_0x4f93df(0x2b5)](_0x4f93df(0x3d1)), $(_0x4f93df(0x34f))[_0x4f93df(0x326)](_0x4f93df(0x372)), $(_0x4f93df(0x1d1))[_0x4f93df(0x326)]('show'), $('#notificationBody')[_0x4f93df(0x32a)]('<h4\x20class=\x22redText\x22>' + _0x4f93df(0x1f9) + '<ol\x20style=\x22color:#fff;\x22><li>Download\x20the\x20steam\x20mobile\x20app</li>' + _0x4f93df(0x1d9) + _0x4f93df(0x21c) + '<p>After\x20those\x203\x20steps,\x20you\x27ll\x20have\x20to\x20open\x20a\x20support\x20ticket\x20in\x20our\x20discord\x20and\x20we\x20will\x20happily\x20honor\x20this\x20prize!</p>' + '</h4>');
                            else {
                                if (_0x310dd4 == _0x4f93df(0x284)) toastr['error']('Flash\x20Giveaway\x20Prize\x20failed\x20to\x20send!'), $(_0x4f93df(0x34f))[_0x4f93df(0x326)](_0x4f93df(0x372)), $(_0x4f93df(0x1d1))[_0x4f93df(0x326)](_0x4f93df(0x2b0)), $(_0x4f93df(0x1e2))['html']('<h4\x20class=\x22redText\x22>' + '<p>You\x20just\x20won\x20the\x20Flash\x20Giveaway!</p>' + _0x4f93df(0x1ad) + 'Once\x20you\x20resolve\x20this\x20issue\x20open\x20a\x20ticket\x20up\x20on\x20our\x20discord\x20and\x20our\x20staff\x20team\x20will\x20happily\x20honor\x20this\x20prize!</h4>');
                                else _0x310dd4 == _0x4f93df(0x314) ? (toastr[_0x4f93df(0x2b5)](_0x4f93df(0x2b1)), $(_0x4f93df(0x34f))['modal'](_0x4f93df(0x372)), $(_0x4f93df(0x1d1))[_0x4f93df(0x326)]('show'), $(_0x4f93df(0x1e2))['html'](_0x4f93df(0x3a4) + '<p>You\x20are\x20unable\x20to\x20enter\x20the\x20Flash\x20Giveaway!</p>' + _0x4f93df(0x1c5) + 'Please\x20contact\x20our\x20support\x20and\x20claim\x20your\x20giveaways\x20before\x20continuing\x20to\x20enter!</h4>')) : ($('.modal')[_0x4f93df(0x326)](_0x4f93df(0x372)), $('#notificationBox')[_0x4f93df(0x326)](_0x4f93df(0x2b0)), $('#notificationBody')[_0x4f93df(0x32a)](_0x4f93df(0x1a7)));
                            }
                        }
                    }
                }
            }
        }
    }
}), socket['on'](_0x43c573(0x1c3), _0x568e3f => {
    var _0x3b6c67 = _0x43c573;
    toastr[_0x3b6c67(0x18c)](_0x3b6c67(0x25e)), $(_0x3b6c67(0x3ea))[_0x3b6c67(0x32a)](_0x3b6c67(0x21a) + _0x568e3f);
    var _0xcadd7a = Number($(_0x3b6c67(0x1ab))['text']());
    $(_0x3b6c67(0x1ab))['text'](_0xcadd7a + 0x1);
}), socket['on'](_0x43c573(0x341), () => {
    var _0x441f89 = _0x43c573;
    $('#verifyHuman')['modal'](_0x441f89(0x2b0)), $(_0x441f89(0x431))[_0x441f89(0x32a)](_0x441f89(0x3b8)), hcaptcha[_0x441f89(0x208)]('captcha', {
        'theme': _0x441f89(0x202),
        'size': _0x441f89(0x19e),
        'sitekey': '8669eb00-efca-40a3-9c8c-443585205c34',
        'callback': verifyCaptcha
    });
});

function verifyCaptcha(_0x3917c2) {
    var _0x5017c1 = _0x43c573;
    socket['emit']('FG\x20verified\x20join', _0x3917c2), $(_0x5017c1(0x34f))[_0x5017c1(0x326)](_0x5017c1(0x372));
}
$(_0x43c573(0x2aa))[_0x43c573(0x233)](function() {
    var _0x364541 = _0x43c573;
    if ($(_0x364541(0x3ea))[_0x364541(0x43d)]() == _0x364541(0x302)) return toastr[_0x364541(0x2b5)](_0x364541(0x221));
    socket[_0x364541(0x2bf)](_0x364541(0x2c1));
}), socket['on'](_0x43c573(0x422), function(_0x2b5f65) {
    var _0xcd0877 = _0x43c573,
        _0x4ebb37 = $(_0xcd0877(0x23f));
    _0x4ebb37['html']('\x20');
    for (var _0x5c44bf = 0x0; _0x5c44bf < _0x2b5f65['images'][_0xcd0877(0x1e5)]; _0x5c44bf++) {
        var _0x47703c = $(_0xcd0877(0x1a6) + _0x2b5f65['images'][_0x5c44bf] + '\x22>');
        _0x4ebb37['append'](_0x47703c);
    }
    $(_0xcd0877(0x2fb))[_0xcd0877(0x1fe)](), $('#fgRollBox')['slideDown'](), $(_0xcd0877(0x27c))[_0xcd0877(0x279)](_0xcd0877(0x1be), _0xcd0877(0x37d)), $(_0xcd0877(0x445))['attr']('style', _0xcd0877(0x37d));
    var _0x352227 = _0x2b5f65[_0xcd0877(0x331)] - $(_0xcd0877(0x3b7))['width']() / 0x2;
    _0x4ebb37[_0xcd0877(0x3ee)](_0xcd0877(0x2a1), _0x352227 + 'px');
}), socket['on'](_0x43c573(0x1c9), function(_0x38af74) {
    var _0x3e61b4 = _0x43c573;
    $(_0x3e61b4(0x3b7))[_0x3e61b4(0x1fe)](), $(_0x3e61b4(0x445))[_0x3e61b4(0x25f)](), $(_0x3e61b4(0x27c))[_0x3e61b4(0x279)](_0x3e61b4(0x1be), _0x3e61b4(0x37d)), $(_0x3e61b4(0x2fb))[_0x3e61b4(0x279)]('style', 'display:none;'), $(_0x3e61b4(0x445))[_0x3e61b4(0x279)](_0x3e61b4(0x443), _0x38af74['_id']), $('#fgWinnerImg')[_0x3e61b4(0x279)](_0x3e61b4(0x320), _0x38af74[_0x3e61b4(0x25d)]), $(_0x3e61b4(0x22f))[_0x3e61b4(0x43d)](_0x38af74['name']);
}), socket['on'](_0x43c573(0x401), function() {
    var _0x5cd4a7 = _0x43c573;
    $(_0x5cd4a7(0x3e9))[_0x5cd4a7(0x1fe)]();
    var _0x36e3ad = $(_0x5cd4a7(0x23f));
    _0x36e3ad[_0x5cd4a7(0x32a)]('\x20'), $(_0x5cd4a7(0x23f))[_0x5cd4a7(0x3ee)](_0x5cd4a7(0x2a1), 0x0 + 'px');
}), socket['on'](_0x43c573(0x399), function(_0x625cdd) {
    var _0x38bd1d = _0x43c573;
    $('#fgHistoryBody')[_0x38bd1d(0x32a)]('\x20');
    var _0x3ae32e = $(_0x38bd1d(0x439)),
        _0x413569 = _0x625cdd[_0x38bd1d(0x2a2)]['reduce']((_0x1b14d2, _0x1ea902) => _0x1b14d2 + _0x1ea902[_0x38bd1d(0x23a)], 0x0);
    for (var _0x572571 = _0x625cdd[_0x38bd1d(0x2a2)][_0x38bd1d(0x1e5)] - 0x1; _0x572571 >= 0x0; _0x572571--) {
        let _0x34f351 = _0x625cdd[_0x38bd1d(0x2a2)][_0x572571],
            _0x595a15 = _0x34f351[_0x38bd1d(0x23a)] || 0x1;
        var _0x3102f5 = $('<a\x20href=\x22https://steamcommunity.com/profiles/' + _0x34f351['id'] + _0x38bd1d(0x38b))[_0x38bd1d(0x43d)](_0x34f351[_0x38bd1d(0x3fd)]);
        _0x3ae32e['append']($(_0x38bd1d(0x17f) + _0x38bd1d(0x1a6) + _0x34f351[_0x38bd1d(0x25d)] + _0x38bd1d(0x39e) + _0x38bd1d(0x440) + _0x595a15 + ')\x20' + _0x3102f5['prop']('outerHTML') + _0x38bd1d(0x253) + _0x38bd1d(0x1b5)));
    }
    var _0x2d8ea0;
    _0x625cdd[_0x38bd1d(0x3ef)][_0x38bd1d(0x2b2)](_0x38bd1d(0x224)) ? _0x2d8ea0 = _0x38bd1d(0x268) + _0x625cdd['_id'] + _0x38bd1d(0x2e0) + _0x625cdd['hash'][_0x38bd1d(0x3ef)] + _0x38bd1d(0x3d7) + _0x625cdd[_0x38bd1d(0x3ef)][_0x38bd1d(0x224)] + '</span>\x20Ticket:\x20<span\x20class=\x22redText\x22>' + _0x625cdd['hash'][_0x38bd1d(0x2f0)] + _0x38bd1d(0x43c) : _0x625cdd['hash']['hasOwnProperty'](_0x38bd1d(0x1c6)) && _0x625cdd[_0x38bd1d(0x3ef)][_0x38bd1d(0x2b2)](_0x38bd1d(0x19f)) ? _0x2d8ea0 = _0x38bd1d(0x268) + _0x625cdd[_0x38bd1d(0x248)] + '</span>\x20</p>\x20<p>Hash:\x20<span\x20class=\x22redText\x22>' + _0x625cdd[_0x38bd1d(0x3ef)][_0x38bd1d(0x3ef)] + _0x38bd1d(0x1e7) + _0x625cdd['hash'][_0x38bd1d(0x1c6)] + '-' + _0x625cdd[_0x38bd1d(0x3ef)][_0x38bd1d(0x19f)] + '</span>\x20Ticket:\x20<span\x20class=\x22redText\x22>' + _0x625cdd[_0x38bd1d(0x3ef)]['ticket'] + _0x38bd1d(0x41e) : _0x2d8ea0 = _0x38bd1d(0x268) + _0x625cdd[_0x38bd1d(0x248)] + _0x38bd1d(0x2e0) + _0x625cdd[_0x38bd1d(0x3ef)][_0x38bd1d(0x3ef)] + _0x38bd1d(0x1e7) + _0x625cdd[_0x38bd1d(0x3ef)][_0x38bd1d(0x1c6)] + _0x38bd1d(0x250) + _0x625cdd[_0x38bd1d(0x3ef)][_0x38bd1d(0x2f0)] + _0x38bd1d(0x1fd);
    var _0x57cbad = $(_0x38bd1d(0x2ae) + _0x625cdd[_0x38bd1d(0x430)]['id'] + _0x38bd1d(0x38b))['text'](_0x625cdd[_0x38bd1d(0x430)][_0x38bd1d(0x3fd)]),
        _0x2e6569 = $('<h3>Winner:</h3>' + '<div\x20id=\x22fgHistoryWinner\x22><img\x20src=\x22' + _0x625cdd[_0x38bd1d(0x430)][_0x38bd1d(0x25d)] + _0x38bd1d(0x2d0) + (_0x625cdd[_0x38bd1d(0x430)][_0x38bd1d(0x23a)] || 0x1) + ')\x20' + _0x57cbad['prop'](_0x38bd1d(0x307)) + _0x38bd1d(0x1f2) + _0x38bd1d(0x262) + _0x625cdd[_0x38bd1d(0x22d)][_0x38bd1d(0x368)] + '\x22>' + '<img\x20src=\x22' + _0x625cdd[_0x38bd1d(0x22d)][_0x38bd1d(0x25d)] + _0x38bd1d(0x17d) + _0x625cdd['item']['price'][_0x38bd1d(0x432)](0x2) + _0x38bd1d(0x253) + '</div></div>' + _0x38bd1d(0x1ef) + _0x625cdd[_0x38bd1d(0x2a2)][_0x38bd1d(0x1e5)] + _0x38bd1d(0x2e9) + _0x413569 + '\x20Tickets</h4>\x20' + _0x3ae32e[_0x38bd1d(0x3a0)](_0x38bd1d(0x307)) + _0x38bd1d(0x1b5) + _0x38bd1d(0x22b) + _0x2d8ea0 + _0x38bd1d(0x1b5));
    $(_0x38bd1d(0x278))[_0x38bd1d(0x31d)](_0x2e6569), $('[data-toggle=\x22tooltip\x22]')[_0x38bd1d(0x3fa)]();
});

function viewFGHistory(_0x1d4e62) {
    var _0x107a8e = _0x43c573;
    $(_0x107a8e(0x34f))[_0x107a8e(0x326)](_0x107a8e(0x372)), $(_0x107a8e(0x3c7))[_0x107a8e(0x326)]('show'), $('#fgHistoryBody')[_0x107a8e(0x32a)](loader), socket[_0x107a8e(0x2bf)](_0x107a8e(0x399), _0x1d4e62);
}
$('#fgWinnerInfo')[_0x43c573(0x233)](function() {
    var _0x463475 = _0x43c573,
        _0x59d34a = $(_0x463475(0x445))['attr'](_0x463475(0x443));
    viewFGHistory(_0x59d34a);
}), $('#jpWinnerInfo')[_0x43c573(0x233)](function() {
    var _0x2fb244 = _0x43c573,
        _0x35e8ec = $(_0x2fb244(0x246))[_0x2fb244(0x279)](_0x2fb244(0x443));
    getJackpotHistory(_0x35e8ec);
}), socket['on'](_0x43c573(0x1bf), function(_0xd25db4) {
    var _0x3cb53a = _0x43c573;
    $(_0x3cb53a(0x34f))['modal'](_0x3cb53a(0x372)), $(_0x3cb53a(0x1d1))[_0x3cb53a(0x326)](_0x3cb53a(0x2b0)), $('#notificationBody')[_0x3cb53a(0x32a)](_0x3cb53a(0x212) + _0x3cb53a(0x191) + _0x3cb53a(0x433) + _0x3cb53a(0x290) + _0xd25db4 + '\x22\x20target=\x22_blank\x22>' + _0x3cb53a(0x32f) + _0x3cb53a(0x2e3) + '</div>');
}), $('#announcement')['on'](_0x43c573(0x233), _0x43c573(0x359), function() {
    var _0x39e91b = _0x43c573,
        _0x3868dc = new Audio('/sounds/luck.mp3');
    _0x3868dc[_0x39e91b(0x1a1)] = 0.4, _0x3868dc[_0x39e91b(0x20b)]();
    var _0x115672 = Number($('.luckButton')[_0x39e91b(0x279)](_0x39e91b(0x3f4))) || 0x0;
    _0x115672++, $(_0x39e91b(0x359))[_0x39e91b(0x279)]('pressed', _0x115672), $(_0x39e91b(0x359))[_0x39e91b(0x43d)](_0x39e91b(0x416) + _0x115672);
}), $(_0x43c573(0x323))['on'](_0x43c573(0x233), function() {
    var _0x320bf7 = _0x43c573;
    $(_0x320bf7(0x34f))['modal'](_0x320bf7(0x372)), $(_0x320bf7(0x1d1))[_0x320bf7(0x326)](_0x320bf7(0x2b0));
    var _0x4ec326 = $(_0x320bf7(0x1e2));
    _0x4ec326[_0x320bf7(0x32a)](''), _0x4ec326[_0x320bf7(0x31d)](loader), socket[_0x320bf7(0x2bf)]('user\x20verify');
}), socket['on'](_0x43c573(0x25a), function(_0x2fa9af) {
    var _0x1a364a = _0x43c573,
        _0x3920fc = $('#notificationBody');
    if (_0x2fa9af[_0x1a364a(0x206)]) {
        var _0x27eb94 = _0x2fa9af[_0x1a364a(0x1b0)];
        if (_0x27eb94 == _0x1a364a(0x382)) _0x3920fc[_0x1a364a(0x32a)](_0x1a364a(0x35b) + '<p\x20style=\x27font-size:\x2015px;\x20color:lightgrey;\x27>If\x20you\x20already\x20own\x20rust\x20please\x20update\x20your\x20privacy\x20settings\x20to\x20public\x20<a\x20href=\x27https://steamcommunity.com/my/edit/settings\x27\x20target=\x27_blank\x27>here.</a></p>');
        else {
            if (_0x27eb94 == 'NOT_IN_DISCORD') _0x3920fc[_0x1a364a(0x32a)](_0x1a364a(0x1cb) + _0x1a364a(0x2c6));
            else {
                if (_0x27eb94 == _0x1a364a(0x1aa)) _0x3920fc[_0x1a364a(0x32a)]('<h3\x20class=\x27redText\x27>You\x20haven\x27t\x20linked\x20your\x20Discord\x20to\x20your\x20account!</h3>');
                else {
                    if (_0x27eb94 == _0x1a364a(0x172)) _0x3920fc[_0x1a364a(0x32a)](_0x1a364a(0x218) + _0x1a364a(0x3b5) + '<p\x20style=\x27font-size:\x2015px;\x20color:lightgrey;\x27>If\x20you\x20already\x20are\x20in\x20the\x20group\x20please\x20update\x20your\x20privacy\x20settings\x20to\x20public\x20<a\x20href=\x27https://steamcommunity.com/my/edit/settings\x20target=\x27_blank\x27>here.</a></p>');
                    else {
                        if (_0x27eb94 == _0x1a364a(0x2f1)) _0x3920fc['html'](_0x1a364a(0x240) + _0x1a364a(0x301));
                        else _0x27eb94 == _0x1a364a(0x1a4) ? _0x3920fc[_0x1a364a(0x32a)](_0x1a364a(0x1bb)) : _0x3920fc[_0x1a364a(0x43d)](_0x1a364a(0x29d));
                    }
                }
            }
        }
    } else _0x3920fc[_0x1a364a(0x32a)](_0x1a364a(0x3a2) + _0x1a364a(0x433) + '<div\x20id=\x27Verify-Button\x27\x20onclick=\x27goHome()\x27>Continue...</div>');
});

function goHome() {
    window['location'] = '/';
}
$(_0x43c573(0x37e))['on'](_0x43c573(0x233), () => {
    var _0xe40dae = _0x43c573;
    $(_0xe40dae(0x28d))[_0xe40dae(0x372)](), $(_0xe40dae(0x1ec))['hide'](), $(_0xe40dae(0x294))['show'](), $(_0xe40dae(0x2af))[_0xe40dae(0x2b0)]();
}), $(_0x43c573(0x404))['on'](_0x43c573(0x233), () => {
    var _0x319626 = _0x43c573;
    $('#fgSelectOption')[_0x319626(0x372)](), $(_0x319626(0x1ec))['show'](), $('#fgOptionsJpConfirm')[_0x319626(0x372)](), $(_0x319626(0x2af))[_0x319626(0x2b0)]();
}), $(_0x43c573(0x3b0))['on'](_0x43c573(0x233), () => {
    var _0x4384dd = _0x43c573;
    $(_0x4384dd(0x28d))[_0x4384dd(0x2b0)](), $(_0x4384dd(0x1ec))[_0x4384dd(0x372)](), $(_0x4384dd(0x294))[_0x4384dd(0x372)](), $('#fgOptionsFinal')[_0x4384dd(0x372)]();
}), $(_0x43c573(0x313))[_0x43c573(0x233)](function() {
    var _0x28dec3 = _0x43c573;
    $(_0x28dec3(0x34f))['modal'](_0x28dec3(0x372)), $(_0x28dec3(0x3be))['html'](_0x28dec3(0x373)), $(_0x28dec3(0x3be))['append'](loader), $('#AcceptWinnings')[_0x28dec3(0x326)]('show');
    var _0x34774b = $('#fgSelectOption')[_0x28dec3(0x279)](_0x28dec3(0x443));
    socket[_0x28dec3(0x2bf)](_0x28dec3(0x26b), _0x34774b, 0x2);
}), $(_0x43c573(0x205))['on']('click', () => {
    var _0x45bd2d = _0x43c573,
        _0x2e4d60 = $(_0x45bd2d(0x294))['is'](_0x45bd2d(0x36e)),
        _0x273f7c = $(_0x45bd2d(0x1ec))['is'](_0x45bd2d(0x36e)),
        _0x29b121 = $('#fgSelectOption')[_0x45bd2d(0x279)](_0x45bd2d(0x443));
    if (_0x2e4d60 && !_0x273f7c) socket[_0x45bd2d(0x2bf)](_0x45bd2d(0x39c), _0x29b121, _0x45bd2d(0x201)), $(_0x45bd2d(0x34f))[_0x45bd2d(0x326)]('hide'), $('#notificationBody')[_0x45bd2d(0x32a)](_0x45bd2d(0x3e1)), $(_0x45bd2d(0x1e2))[_0x45bd2d(0x31d)](loader), $(_0x45bd2d(0x1d1))[_0x45bd2d(0x326)](_0x45bd2d(0x2b0));
    else {
        if (!_0x2e4d60 && _0x273f7c) {
            if (selectedCoin == null) return toastr['error']('Please\x20select\x20a\x20coin.');
            socket[_0x45bd2d(0x2bf)](_0x45bd2d(0x39c), _0x29b121, _0x45bd2d(0x394), selectedCoin), $(_0x45bd2d(0x34f))[_0x45bd2d(0x326)](_0x45bd2d(0x372)), $('#notificationBody')[_0x45bd2d(0x32a)](_0x45bd2d(0x3ae)), $(_0x45bd2d(0x1e2))['append'](loader), $(_0x45bd2d(0x1d1))[_0x45bd2d(0x326)](_0x45bd2d(0x2b0));
        }
    }
}), socket['on']('FGW\x20Info', _0x20a767 => {
    var _0x43c251 = _0x43c573;
    $(_0x43c251(0x34f))[_0x43c251(0x326)]('hide'), $(_0x43c251(0x28d))[_0x43c251(0x279)]('data-id', _0x20a767[_0x43c251(0x248)]), $(_0x43c251(0x28d))[_0x43c251(0x2b0)](), $(_0x43c251(0x1ec))[_0x43c251(0x372)](), $('#fgOptionsJpConfirm')[_0x43c251(0x372)](), $(_0x43c251(0x2af))['hide'](), $(_0x43c251(0x2c2))['removeClass']('selected'), selectedCoin = null, $(_0x43c251(0x3c5))[_0x43c251(0x279)](_0x43c251(0x26f), _0x20a767['item'][_0x43c251(0x368)]), $(_0x43c251(0x3e8))['text']('$' + _0x20a767['item'][_0x43c251(0x2fa)][_0x43c251(0x432)](0x2)), $(_0x43c251(0x288))[_0x43c251(0x279)]('src', _0x20a767['item'][_0x43c251(0x25d)]), _0x20a767[_0x43c251(0x2d9)] ? $(_0x43c251(0x313))['show']() : $('#fgOptionsNow')[_0x43c251(0x372)](), $('#fgWinningOptions')['modal'](_0x43c251(0x2b0));
}), socket['on'](_0x43c573(0x1ac), _0x2efa5a => {
    var _0x228aad = _0x43c573;
    let _0x4651fd = _0x2efa5a[_0x228aad(0x390)];
    if (_0x4651fd === _0x228aad(0x201)) toastr[_0x228aad(0x18c)](_0x228aad(0x2a3)), $('#notificationBody')[_0x228aad(0x32a)](_0x228aad(0x2e6));
    else {
        if (_0x4651fd === 'coinflip') $(_0x228aad(0x34f))[_0x228aad(0x326)]('hide'), viewActiveLobby(_0x2efa5a['id']);
        else _0x4651fd === _0x228aad(0x2b5) && (toastr[_0x228aad(0x2b5)]('We\x20failed\x20to\x20create\x20your\x20deposit'), $('#notificationBody')['html']('<h3>Please\x20go\x20ahead\x20and\x20resend\x20your\x20Flash\x20Giveaway\x20winnings\x20from\x20by\x20going\x20under\x20\x27My\x20profile\x27\x20top\x20right\x20of\x20the\x20page\x20and\x20clicking\x20on\x20the\x20blue\x20\x27Resend\x27\x20button.</h3>'));
    }
}), $(_0x43c573(0x304))['on'](_0x43c573(0x233), 'li', function(_0x1c8ee0) {
    var _0x35c37a = _0x43c573,
        _0x596eb8 = _0x1c8ee0[_0x35c37a(0x367)][_0x35c37a(0x29a)](_0x35c37a(0x227)) || _0x1c8ee0['target'][_0x35c37a(0x29a)](_0x35c37a(0x227));
    $(_0x35c37a(0x342))[_0x35c37a(0x32a)](_0x596eb8 + _0x35c37a(0x409)), $(_0x35c37a(0x342))['attr']('value', _0x596eb8);
}), $(_0x43c573(0x3b1))['on'](_0x43c573(0x2fd), function(_0x50d9ee) {
    var _0x1419b1 = _0x43c573;
    _0x50d9ee[_0x1419b1(0x366)]();
    var _0x5196b6 = $('#VerificationResults'),
        _0x2c4a6c = $(_0x1419b1(0x342))['attr'](_0x1419b1(0x227)),
        _0x428692 = $(_0x1419b1(0x28a))[_0x1419b1(0x3dc)]();
    $(_0x1419b1(0x28a))['prop'](_0x1419b1(0x444), !![]), $(_0x1419b1(0x36b))['prop']('disabled', !![]), _0x5196b6[_0x1419b1(0x32a)](''), $[_0x1419b1(0x24c)](_0x1419b1(0x1dc), {
        'type': _0x2c4a6c,
        'id': _0x428692
    }, function(_0x55dc5d, _0x37c781) {
        var _0x45e80c = _0x1419b1;
        $(_0x45e80c(0x28a))['prop'](_0x45e80c(0x444), ![]), $('#VerificationIDButton')[_0x45e80c(0x3a0)]('disabled', ![]);
        if (_0x37c781 !== 'success' || !_0x55dc5d[_0x45e80c(0x18c)]) return toastr[_0x45e80c(0x2b5)](_0x55dc5d[_0x45e80c(0x1b0)] || _0x45e80c(0x258));
        var _0x1a1d50 = _0x55dc5d[_0x45e80c(0x41f)];
        _0x5196b6[_0x45e80c(0x31d)]($('<div\x20class=\x22VerificationPiece\x20col-md-4\x20col-md-offset-2\x22>' + '<div\x20class=\x22VerificationLabel\x22>Seed</div>' + '<pre><code\x20class=\x22lang-none\x20dark\x22>' + _0x1a1d50[_0x45e80c(0x396)] + _0x45e80c(0x40a) + _0x45e80c(0x1b5))), _0x5196b6[_0x45e80c(0x31d)]($(_0x45e80c(0x421) + _0x45e80c(0x214) + '<pre><code\x20class=\x22lang-none\x20dark\x22>' + _0x1a1d50[_0x45e80c(0x2ba)] + _0x45e80c(0x40a) + _0x45e80c(0x1b5))), _0x5196b6['append']($(_0x45e80c(0x364) + _0x45e80c(0x303) + _0x45e80c(0x1b4) + JSON[_0x45e80c(0x43a)](_0x1a1d50[_0x45e80c(0x39b)])[_0x45e80c(0x31a)] + _0x45e80c(0x40a) + _0x45e80c(0x1b5))), _0x5196b6[_0x45e80c(0x31d)]($('<div\x20class=\x22VerificationPiece\x20col-md-8\x20col-md-offset-2\x22>' + _0x45e80c(0x1f1) + _0x45e80c(0x1b4) + _0x1a1d50['random'] + '</code></pre>' + '</div>')), _0x5196b6['append']($('<div\x20class=\x22VerificationPiece\x20col-md-8\x20col-md-offset-2\x22>' + _0x45e80c(0x42b) + _0x45e80c(0x1b4) + _0x1a1d50['signature'] + _0x45e80c(0x40a) + _0x45e80c(0x1b5))), Prism[_0x45e80c(0x274)](), _0x5196b6[_0x45e80c(0x31d)]($('<div\x20class=\x22col-md-12\x20\x22>' + _0x45e80c(0x418) + _0x45e80c(0x1b5)));
    });
}), $(document)[_0x43c573(0x327)](function() {
    var _0x3eb89d = _0x43c573,
        _0x1e460c = new URLSearchParams(window[_0x3eb89d(0x1ff)]['search']),
        _0x396f0c = Object[_0x3eb89d(0x3ed)](_0x1e460c[_0x3eb89d(0x2a2)]());
    _0x396f0c[_0x3eb89d(0x437)] && viewCoinfllipWhenReady(_0x396f0c[_0x3eb89d(0x437)]);
});

function viewCoinfllipWhenReady(_0x2d5797) {
    var _0x2ab2d2 = _0x43c573;
    socket[_0x2ab2d2(0x2ff)] ? viewActiveLobby(_0x2d5797) : setTimeout(function() {
        viewCoinfllipWhenReady(_0x2d5797);
    }, 0xfa);
}
socket['on'](_0x43c573(0x446), function(_0x367b44) {
    var _0x527baa = _0x43c573,
        _0x35da4e = Math[_0x527baa(0x1c7)](_0x367b44['rewards'] + _0x367b44['balance']) / 0x64;
    $(_0x527baa(0x2c3))[_0x527baa(0x43d)]('+\x20' + _0x35da4e[_0x527baa(0x432)](0x2)), $(_0x527baa(0x286))['show']();
}), socket[_0x43c573(0x2bf)](_0x43c573(0x446)), $(_0x43c573(0x238))['on'](_0x43c573(0x2fd), function(_0x2e7019) {
    var _0x4a11e1 = _0x43c573;
    _0x2e7019[_0x4a11e1(0x366)]();
    var _0xdcb8 = $(_0x4a11e1(0x37c))[_0x4a11e1(0x3dc)]();
    $(_0x4a11e1(0x34f))[_0x4a11e1(0x326)](_0x4a11e1(0x372)), $('#verifyHuman')[_0x4a11e1(0x326)](_0x4a11e1(0x2b0)), $(_0x4a11e1(0x431))[_0x4a11e1(0x32a)]('<div\x20id=\x27captcha\x27></div>'), hcaptcha[_0x4a11e1(0x208)](_0x4a11e1(0x3cb), {
        'theme': _0x4a11e1(0x202),
        'size': _0x4a11e1(0x19e),
        'sitekey': _0x4a11e1(0x41b),
        'callback': function(_0x49172e) {
            var _0x5f8ade = _0x4a11e1;
            $(_0x5f8ade(0x34f))[_0x5f8ade(0x326)](_0x5f8ade(0x372)), $(_0x5f8ade(0x1d1))[_0x5f8ade(0x326)](_0x5f8ade(0x2b0));
            var _0x5d8d09 = $(_0x5f8ade(0x1e2));
            _0x5d8d09[_0x5f8ade(0x32a)](''), _0x5d8d09[_0x5f8ade(0x31d)](loader), $['post'](_0x5f8ade(0x263), {
                'code': _0xdcb8,
                'secret': _0x49172e
            }, (_0x37fd87, _0x598a15) => {
                var _0xa3d587 = _0x5f8ade;
                if (_0x598a15 !== _0xa3d587(0x18c) || !_0x37fd87[_0xa3d587(0x18c)]) {
                    if (_0x37fd87[_0xa3d587(0x2b5)] === _0xa3d587(0x376)) _0x5d8d09[_0xa3d587(0x32a)](_0xa3d587(0x454));
                    else _0x37fd87[_0xa3d587(0x2b5)] === _0xa3d587(0x406) ? _0x5d8d09[_0xa3d587(0x32a)]('<h3\x20class=\x27redText\x27>You\x20must\x20own\x20Rust!</h3>' + _0xa3d587(0x2cc)) : _0x5d8d09[_0xa3d587(0x32a)](_0xa3d587(0x3fb));
                    return toastr[_0xa3d587(0x2b5)]('Failed\x20to\x20claim\x20code!');
                }
                _0x5d8d09[_0xa3d587(0x32a)](_0xa3d587(0x3dd)), toastr[_0xa3d587(0x18c)](_0xa3d587(0x3c9)), $('#grubClaimCode\x20button')[_0xa3d587(0x3a0)](_0xa3d587(0x444), !![]), $(_0xa3d587(0x234))['prop'](_0xa3d587(0x444), !![]), $(_0xa3d587(0x234))[_0xa3d587(0x3dc)](_0xdcb8), console[_0xa3d587(0x2c8)](_0x37fd87);
            });
        }
    });
}), $('#gcActivateButton')['on'](_0x43c573(0x233), function() {
    var _0x4d1b3b = _0x43c573,
        _0x4a1ac6 = $('#gcActivateInput')[_0x4d1b3b(0x3dc)]();
    if (_0x4a1ac6['length'] < 0xf) return;
    $(_0x4d1b3b(0x3ce))['attr'](_0x4d1b3b(0x444), !![]), $[_0x4d1b3b(0x24c)](_0x4d1b3b(0x420), {
        'code': _0x4a1ac6
    }, (_0x109bec, _0x19aa44) => {
        var _0x2c3ecf = _0x4d1b3b;
        if (_0x19aa44 !== 'success' || !_0x109bec['success']) {
            $('.modal')[_0x2c3ecf(0x326)]('hide'), $(_0x2c3ecf(0x1d1))[_0x2c3ecf(0x326)](_0x2c3ecf(0x2b0));
            var _0x4e7edf = $('#notificationBody');
            return _0x4e7edf['html'](_0x2c3ecf(0x22c)), $(_0x2c3ecf(0x3ce))['attr'](_0x2c3ecf(0x444), ![]), toastr[_0x2c3ecf(0x2b5)](_0x2c3ecf(0x3a8));
        }
        $(_0x2c3ecf(0x3da))[_0x2c3ecf(0x3dc)](''), $(_0x2c3ecf(0x32c))[_0x2c3ecf(0x372)](), $(_0x2c3ecf(0x19a))[_0x2c3ecf(0x2b0)](), $(_0x2c3ecf(0x24f))[_0x2c3ecf(0x43d)]('$' + (_0x109bec['data'] / 0x64)[_0x2c3ecf(0x432)](0x2)), toastr[_0x2c3ecf(0x18c)]('Successfully\x20redeemed\x20a\x20GiftCard!');
        var _0x21c1b2 = new Audio(_0x2c3ecf(0x1cf));
        _0x21c1b2['volume'] = 0.3, _0x21c1b2['play']();
    });
}), $(_0x43c573(0x375))['on'](_0x43c573(0x233), function() {
    var _0x7c37d3 = _0x43c573;
    $(_0x7c37d3(0x32c))[_0x7c37d3(0x2b0)](), $(_0x7c37d3(0x19a))[_0x7c37d3(0x372)](), $(_0x7c37d3(0x3ce))[_0x7c37d3(0x279)]('disabled', ![]);
});