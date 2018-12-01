// ==UserScript==
// @name            Gitter Emojies
// @namespace       https://github.com/i-programmer
// @description     Adds emoji window for a quick access to emoji list and possibility inserting them into the chat
// @author          Alexey Shimansky (iprogrammer) - http://iprogrammer.pro | https://github.com/i-programmer
// @version         1.0
// @encoding        utf-8
// @homepage        https://github.com/i-programmer/gitter-emojies/
// @contactURL      http://iprogrammer.pro/#contact
// @supportURL      https://github.com/i-programmer/gitter-emojies/issues
// @contributionURL http://iprogrammer.pro/main/donate/
// @updateURL       https://raw.githubusercontent.com/i-programmer/gitter-emojies/master/gitterEmojies.js
// @downloadURL     https://raw.githubusercontent.com/i-programmer/gitter-emojies/master/gitterEmojies.js
// @match           *://gitter.im/*
// @grant           none
// ==/UserScript==

(function() {
    "use strict";

    const emojiesObject = {"people":["smile","laughing","blush","smiley","relaxed","smirk","heart_eyes","kissing_heart","kissing_closed_eyes","flushed","relieved","satisfied","grin","wink","stuck_out_tongue_winking_eye","stuck_out_tongue_closed_eyes","grinning","kissing","kissing_smiling_eyes","stuck_out_tongue","sleeping","worried","frowning","anguished","open_mouth","grimacing","confused","hushed","expressionless","unamused","sweat_smile","sweat","disappointed_relieved","weary","pensive","disappointed","confounded","fearful","cold_sweat","persevere","cry","sob","joy","astonished","scream","bowtie","neckbeard","tired_face","angry","rage","triumph","sleepy","yum","mask","sunglasses","dizzy_face","imp","smiling_imp","neutral_face","no_mouth","innocent","alien","yellow_heart","blue_heart","purple_heart","heart","green_heart","broken_heart","heartbeat","heartpulse","two_hearts","revolving_hearts","cupid","sparkling_heart","sparkles","star","star2","dizzy","boom","collision","anger","exclamation","question","grey_exclamation","grey_question","zzz","dash","sweat_drops","notes","musical_note","fire","hankey","poop","shit","+1","thumbsup","-1","thumbsdown","ok_hand","punch","facepunch","fist","v","wave","hand","raised_hand","open_hands","point_up","point_down","point_left","point_right","raised_hands","pray","point_up_2","clap","muscle","metal","fu","runner","running","couple","family","two_men_holding_hands","two_women_holding_hands","dancer","dancers","ok_woman","no_good","information_desk_person","raising_hand","bride_with_veil","person_with_pouting_face","person_frowning","bow","couplekiss","couple_with_heart","massage","haircut","nail_care","boy","girl","woman","man","baby","older_woman","older_man","person_with_blond_hair","man_with_gua_pi_mao","man_with_turban","construction_worker","cop","angel","princess","smiley_cat","smile_cat","heart_eyes_cat","kissing_cat","smirk_cat","scream_cat","crying_cat_face","joy_cat","pouting_cat","japanese_ogre","japanese_goblin","see_no_evil","hear_no_evil","speak_no_evil","guardsman","skull","feet","lips","kiss","droplet","ear","eyes","nose","tongue","love_letter","bust_in_silhouette","busts_in_silhouette","speech_balloon","thought_balloon","feelsgood","finnadie","goberserk","godmode","hurtrealbad","rage1","rage2","rage3","rage4","suspect","trollface"],"nature":["sunny","umbrella","cloud","snowflake","snowman","zap","cyclone","foggy","ocean","cat","dog","mouse","hamster","rabbit","wolf","frog","tiger","koala","bear","pig","pig_nose","cow","boar","monkey_face","monkey","horse","racehorse","camel","sheep","elephant","panda_face","snake","bird","baby_chick","hatched_chick","hatching_chick","chicken","penguin","turtle","bug","honeybee","ant","beetle","snail","octopus","tropical_fish","fish","whale","whale2","dolphin","cow2","ram","rat","water_buffalo","tiger2","rabbit2","dragon","goat","rooster","dog2","pig2","mouse2","ox","dragon_face","blowfish","crocodile","dromedary_camel","leopard","cat2","poodle","paw_prints","bouquet","cherry_blossom","tulip","four_leaf_clover","rose","sunflower","hibiscus","maple_leaf","leaves","fallen_leaf","herb","mushroom","cactus","palm_tree","evergreen_tree","deciduous_tree","chestnut","seedling","blossom","ear_of_rice","shell","globe_with_meridians","sun_with_face","full_moon_with_face","new_moon_with_face","new_moon","waxing_crescent_moon","first_quarter_moon","waxing_gibbous_moon","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","last_quarter_moon_with_face","first_quarter_moon_with_face","crescent_moon","earth_africa","earth_americas","earth_asia","volcano","milky_way","partly_sunny","octocat","squirrel"],"objects":["bamboo","gift_heart","dolls","school_satchel","mortar_board","flags","fireworks","sparkler","wind_chime","rice_scene","jack_o_lantern","ghost","santa","christmas_tree","gift","bell","no_bell","tanabata_tree","tada","confetti_ball","balloon","crystal_ball","cd","dvd","floppy_disk","camera","video_camera","movie_camera","computer","tv","iphone","phone","telephone","telephone_receiver","pager","fax","minidisc","vhs","sound","speaker","mute","loudspeaker","mega","hourglass","hourglass_flowing_sand","alarm_clock","watch","radio","satellite","loop","mag","mag_right","unlock","lock","lock_with_ink_pen","closed_lock_with_key","key","bulb","flashlight","high_brightness","low_brightness","electric_plug","battery","calling","email","mailbox","postbox","bath","bathtub","shower","toilet","wrench","nut_and_bolt","hammer","seat","moneybag","yen","dollar","pound","euro","credit_card","money_with_wings","e-mail","inbox_tray","outbox_tray","envelope","incoming_envelope","postal_horn","mailbox_closed","mailbox_with_mail","mailbox_with_no_mail","package","door","smoking","bomb","gun","hocho","pill","syringe","page_facing_up","page_with_curl","bookmark_tabs","bar_chart","chart_with_upwards_trend","chart_with_downwards_trend","scroll","clipboard","calendar","date","card_index","file_folder","open_file_folder","scissors","pushpin","paperclip","black_nib","pencil2","straight_ruler","triangular_ruler","closed_book","green_book","blue_book","orange_book","notebook","notebook_with_decorative_cover","ledger","books","bookmark","name_badge","microscope","telescope","newspaper","football","basketball","soccer","baseball","tennis","8ball","rugby_football","bowling","golf","mountain_bicyclist","bicyclist","horse_racing","snowboarder","swimmer","surfer","ski","spades","hearts","clubs","diamonds","gem","ring","trophy","musical_score","musical_keyboard","violin","space_invader","video_game","black_joker","flower_playing_cards","game_die","dart","mahjong","clapper","memo","pencil","book","art","microphone","headphones","trumpet","saxophone","guitar","shoe","sandal","high_heel","lipstick","boot","shirt","tshirt","necktie","womans_clothes","dress","running_shirt_with_sash","jeans","kimono","bikini","ribbon","tophat","crown","womans_hat","mans_shoe","closed_umbrella","briefcase","handbag","pouch","purse","eyeglasses","fishing_pole_and_fish","coffee","tea","sake","baby_bottle","beer","beers","cocktail","tropical_drink","wine_glass","fork_and_knife","pizza","hamburger","fries","poultry_leg","meat_on_bone","spaghetti","curry","fried_shrimp","bento","sushi","fish_cake","rice_ball","rice_cracker","rice","ramen","stew","oden","dango","egg","bread","doughnut","custard","icecream","ice_cream","shaved_ice","birthday","cake","cookie","chocolate_bar","candy","lollipop","honey_pot","apple","green_apple","tangerine","lemon","cherries","grapes","watermelon","strawberry","peach","melon","banana","pear","pineapple","sweet_potato","eggplant","tomato","corn"],"places":["house","house_with_garden","school","office","post_office","hospital","bank","convenience_store","love_hotel","hotel","wedding","church","department_store","european_post_office","city_sunrise","city_sunset","japanese_castle","european_castle","tent","factory","tokyo_tower","japan","mount_fuji","sunrise_over_mountains","sunrise","stars","statue_of_liberty","bridge_at_night","carousel_horse","rainbow","ferris_wheel","fountain","roller_coaster","ship","speedboat","boat","sailboat","rowboat","anchor","rocket","airplane","helicopter","steam_locomotive","tram","mountain_railway","bike","aerial_tramway","suspension_railway","mountain_cableway","tractor","blue_car","oncoming_automobile","car","red_car","taxi","oncoming_taxi","articulated_lorry","bus","oncoming_bus","rotating_light","police_car","oncoming_police_car","fire_engine","ambulance","minibus","truck","train","station","train2","bullettrain_front","bullettrain_side","light_rail","monorail","railway_car","trolleybus","ticket","fuelpump","vertical_traffic_light","traffic_light","warning","construction","beginner","atm","slot_machine","busstop","barber","hotsprings","checkered_flag","crossed_flags","izakaya_lantern","moyai","circus_tent","performing_arts","round_pushpin","triangular_flag_on_post","jp","kr","cn","us","fr","es","it","ru","gb","uk","de"],"symbols":["one","two","three","four","five","six","seven","eight","nine","keycap_ten","1234","zero","hash","symbols","arrow_backward","arrow_down","arrow_forward","arrow_left","capital_abcd","abcd","abc","arrow_lower_left","arrow_lower_right","arrow_right","arrow_up","arrow_upper_left","arrow_upper_right","arrow_double_down","arrow_double_up","arrow_down_small","arrow_heading_down","arrow_heading_up","leftwards_arrow_with_hook","arrow_right_hook","left_right_arrow","arrow_up_down","arrow_up_small","arrows_clockwise","arrows_counterclockwise","rewind","fast_forward","information_source","ok","twisted_rightwards_arrows","repeat","repeat_one","new","top","up","cool","free","ng","cinema","koko","signal_strength","u5272","u5408","u55b6","u6307","u6708","u6709","u6e80","u7121","u7533","u7a7a","u7981","sa","restroom","mens","womens","baby_symbol","no_smoking","parking","wheelchair","metro","baggage_claim","accept","wc","potable_water","put_litter_in_its_place","secret","congratulations","m","passport_control","left_luggage","customs","ideograph_advantage","cl","sos","id","no_entry_sign","underage","no_mobile_phones","do_not_litter","non-potable_water","no_bicycles","no_pedestrians","children_crossing","no_entry","eight_spoked_asterisk","sparkle","eight_pointed_black_star","heart_decoration","vs","vibration_mode","mobile_phone_off","chart","currency_exchange","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","ophiuchus","six_pointed_star","negative_squared_cross_mark","a","b","ab","o2","diamond_shape_with_a_dot_inside","recycle","end","back","on","soon","clock1","clock130","clock10","clock1030","clock11","clock1130","clock12","clock1230","clock2","clock230","clock3","clock330","clock4","clock430","clock5","clock530","clock6","clock630","clock7","clock730","clock8","clock830","clock9","clock930","heavy_dollar_sign","copyright","registered","tm","x","heavy_exclamation_mark","bangbang","interrobang","o","heavy_multiplication_x","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","white_flower","100","heavy_check_mark","ballot_box_with_check","radio_button","link","curly_loop","wavy_dash","part_alternation_mark","trident","black_small_square","white_small_square","black_medium_small_square","white_medium_small_square","black_medium_square","white_medium_square","white_large_square","white_check_mark","black_square_button","white_square_button","black_circle","white_circle","red_circle","large_blue_circle","large_blue_diamond","large_orange_diamond","small_blue_diamond","small_orange_diamond","small_red_triangle","small_red_triangle_down","shipit"]};

    const gitterEmojiesWindowStyles =`
.chat-input__box  {
    margin-right: 70px;
}

#chat-input-buttons-region > div > div {
    display: inline-block;
}

#chat-input-buttons-region > div > div:first-child {
    vertical-align: top;
}

.emoji-module-section.emoji-btn {
    position: relative;
    width: 21px;
    margin-top: -2px;
    margin-right: -8px;
    padding-top: 1px;
}

.emoji-module-section.emoji-btn button {
  margin: 0;
  padding: 0;
  background: none;
  transform: scale(1.8);
  transform-origin: 5px 17px;
}

.emoji-module-section.emoji-btn button:after {
  content: '☺';
  color: black;
  opacity: .7;
  -webkit-transition: opacity .3s;
  transition: opacity .3s;
}

.emoji-module-section.emoji-btn button:hover:after {
  opacity: 1;
}

.emoji-module-section.emoji-btn.dark-theme button:after {
  color: #ccc;
  opacity: .5;
  -webkit-transition: opacity .3s;
  transition: opacity .3s;
}

.emoji-module-section.emoji-btn.dark-theme button:hover:after {
  color: white;
  opacity: 0.7;
}

.emoji-module-section .emoji-window-wrapper {
    position: absolute;
    top: -240px;
    left: -224px;
    width: 286px;
    height: 230px;
    background-color: #fff;
    border: 1px solid #c5d0db;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,.1);
    display: none;
}

.emoji-module-section.dark-theme .emoji-window-wrapper {
    background-color: #434141;
    border: 1px solid #2d2c2c;
}

.emoji-module-section .emoji-window-wrapper.d-show {
    display: block;
}

.emoji-module-section .emoji-window-wrapper:after {
    position: absolute;
    border: solid transparent;
    content: '';
    border-width: 9px;
    margin: 0px -5px;
    border-top-color: #e2e9ee;
    transform: translate3d(0, -1px, 0);
    top: 100%;
    right: 38px;
}

.emoji-module-section.dark-theme .emoji-window-wrapper:after {
    border-top-color: #383736;
}


.emoji-module-section .emoji-window-wrapper .emoji-block-rel {
    position: relative;
    height: 100%;
    overflow: hidden;
    cursor: default;
}

.emoji-module-section .emoji-window-wrapper .ui-scroll-container {
    overflow-y: scroll;
    width: 103%;
    height: 191px;
    margin: -16px 4px 0px 4px;
    padding: 20px 0;
}

.emoji-module-section .emoji-window-wrapper .emoji-tabs-wrap {
    background: #e2e9ee;
    border-radius: 0 0 4px 4px;
    width: 100%;
    height: 36px;
    overflow: hidden;
    bottom: 0;
    position: absolute;
    cursor: default;
}

.emoji-module-section.dark-theme .emoji-window-wrapper .emoji-tabs-wrap {
    background: #383736;
}

.emoji-module-section .emoji-window-wrapper .emoji-smile-link {
    display: inline-block;
    position: relative;
    padding: 2px 4px 0px 4px;
    cursor: pointer;
}

.emoji-module-section .emoji-window-wrapper .emoji-smile-link:hover {
    background: #e2e9ee;
}

.emoji-module-section.dark-theme .emoji-window-wrapper .emoji-smile-link:hover {
    background: #383736;
}

.emoji-module-section .emoji-window-wrapper .emoji {
    width: 19px;
    height: 19px;
    border: none;
    vertical-align: -2px;
    display: inline-block;
}

.emoji-module-section .emoji-window-wrapper .emoji-tab {
    display: inline-block;
    width: 19px;
    margin: 0 -2px;
    padding: 8px 9px;
    cursor: pointer;
}

.emoji-module-section .emoji-window-wrapper .emoji-tab:hover {
    background: #c9ccd0;
}

.emoji-module-section.dark-theme .emoji-window-wrapper .emoji-tab:hover {
    background: #545252;
}

.emoji-module-section .emoji-window-wrapper .emoji-tab.active {
    background: #c9ccd0;
}

.emoji-module-section.dark-theme .emoji-window-wrapper .emoji-tab.active {
    background-color: #545252;
}

.emoji-module-section .change-cdn {
    display: block;
    color: #222;
    position: absolute;
    right: 12px;
    top: 5px;
    font-size: 22px;
    cursor: pointer;
    
    transform: rotateZ(-20deg);
}

.emoji-module-section .change-cdn:after {
    content: "↺";
}

.emoji-module-section .change-cdn:hover {
    transform: rotateZ(-380deg);
    -webkit-transition: all 0.8s ease;
    -moz-transition: all 0.8s ease;
    -o-transition: all 0.8s ease;
    transition: all 0.8s ease;
}

.emoji-module-section.dark-theme .change-cdn {
    color: white;
}

.emoji-module-section .emoji-window-wrapper .emoji-smiles-content > div {
    display: none;
}

.emoji-module-section .emoji-window-wrapper .emoji-smiles-content > div.active {
    display: block;
}`;

    const chatTextArea = document.getElementById('chat-input-textarea');
    const emojiesCDNs = ['cdn01', 'cdn02', 'cdn03'];
    let CdnIndex = 0;
    const initTemplateHtml = `
        <div>
            <div class="emoji-btn chat-input__button emoji-module-section">
                <button class="chat-input__button js-emoji-window"></button>
                <div class="emoji-window-wrapper ">
                    <div class="emoji-block-rel">
                        <div class="ui-scroll-container">
                            <div class="emoji-smiles-content">
                                <div id="tab-people" class="emoji-tab-content"></div>
                                <div id="tab-nature" class="emoji-tab-content"></div>
                                <div id="tab-objects" class="emoji-tab-content"></div>
                                <div id="tab-places" class="emoji-tab-content"></div>
                                <div id="tab-symbols" class="emoji-tab-content"></div>
                            </div>
                        </div>
                    </div>
        
                    <div class="emoji-tabs-wrap">
                        <div class="emoji-tab" data-id="people"><img src="//${emojiesCDNs[CdnIndex]}.gitter.im/_s/62dee8c/images/emoji/smile.png" alt="people" title="people"></div>
                        <div class="emoji-tab" data-id="nature"><img src="//${emojiesCDNs[CdnIndex]}.gitter.im/_s/62dee8c/images/emoji/sunny.png" alt="nature" title="nature"></div>
                        <div class="emoji-tab" data-id="objects"><img src="//${emojiesCDNs[CdnIndex]}.gitter.im/_s/62dee8c/images/emoji/wrench.png" alt="objects" title="objects"></div>
                        <div class="emoji-tab" data-id="places"><img src="//${emojiesCDNs[CdnIndex]}.gitter.im/_s/62dee8c/images/emoji/hospital.png" alt="places" title="places"></div>
                        <div class="emoji-tab" data-id="symbols"><img src="//${emojiesCDNs[CdnIndex]}.gitter.im/_s/62dee8c/images/emoji/white_check_mark.png" alt="symbols" title="symbols"></div>
                        
                        <div class="change-cdn" alt="change emojies CDN" title="change emojies CDN"></div>
                    </div>
                </div>
            </div>
        </div>`;

    const darkThemeSwitchButton = document.querySelector('a[href="#dark-theme"]');
    const chatInputButtonsRegion = document.getElementById('chat-input-buttons-region');
    let chatButtonsDivElement = null;
    let isTextAreaFocused = true;
    let cursorPosCache = 0;
    let cachedChatInputButtonsRegion = '';

    /** Functions Section **/
    const addStylesToDocument = (cssString) => {
        let domNode = document.createElement('style');
        domNode.textContent = cssString;

        let target = document.getElementsByTagName ('head')[0] || document.body || document.documentElement;
        target.appendChild (domNode);
    };

    const getEmojiRowHtml = (htmlRowString) => {
        return `<div class="emoji-smiles-row">${htmlRowString}</div>`;
    };

    const getEmojiCellHtml = (imgName) => {
        return `<a class="emoji-smile-link" name="${imgName}">
       <div class="emoji"><img src="//${emojiesCDNs[CdnIndex]}.gitter.im/_s/62dee8c/images/emoji/${imgName}.png" alt="${imgName}" title="${imgName}"></div>
   </a>`;
    };

    // inserting a data at cursor into a textarea
    const insertAtCursor = (myField, myValue) => {
        let startPos, endPos;
        isTextAreaFocused = false;
        //IE support
        if (document.selection) {
            myField.focus();
            var sel = document.selection.createRange();
            sel.text = myValue;
        }
        // Microsoft Edge
        else if(window.navigator.userAgent.indexOf("Edge") > -1) {
            setCursorPositions();
            // myField.focus();
            myField.setSelectionRange(cursorPosCache, cursorPosCache);
        }
        //MOZILLA and others
        else if (myField.selectionStart || myField.selectionStart == '0') {
            setCursorPositions();
        } else {
            myField.value += myValue;
        }

        function setCursorPositions() {
            startPos = myField.selectionStart;
            endPos = myField.selectionEnd;
            if (cursorPosCache !== 0 && !isTextAreaFocused && startPos === endPos)
                startPos = endPos = cursorPosCache;

            myField.value = myField.value.substring(0, startPos)
                + myValue
                + myField.value.substring(endPos, myField.value.length);

            cursorPosCache = startPos + myValue.length;
        }
    };

    const setActiveTabAndContent = (tabName) => {
        document.querySelectorAll('.emoji-smiles-content div.emoji-tab-content').forEach((emojiTab) => {
            emojiTab.classList.remove('active');
        });
        document.querySelectorAll('.emoji-window-wrapper .emoji-tab').forEach((emojiTab) => {
            emojiTab.classList.remove('active');
        });

        document.querySelector(`.emoji-tab[data-id="${tabName}"]`).classList.add('active');

        let activatingTab = document.querySelector(`.emoji-smiles-content #tab-${tabName}`);
        activatingTab.classList.add('active');
    };

    const getEmojiContent = (tabName) => {
        let content = '', rowHtml = '';
        for (let item in emojiesObject[tabName]) {
            if (item % 10 === 0 && item !== 0) {
                content += getEmojiRowHtml(rowHtml);
                rowHtml = '';
            }

            rowHtml += getEmojiCellHtml(emojiesObject[tabName][item]);
        }

        return content;
    };

    const loadTabContent = (tabName) => {
        let currentActiveTab = document.querySelector('.emoji-tabs-wrap .emoji-tab.active');
        if (currentActiveTab && currentActiveTab.dataset && currentActiveTab.dataset.id === tabName)
            return;

        if (!tabName)
            return;

        setActiveTabAndContent(tabName);

        let activatingTab = document.querySelector(`.emoji-smiles-content #tab-${tabName}`);
        activatingTab.innerHTML = getEmojiContent(tabName);

        bindEmojiSmileLinkHandler();
    };

    const switchLightDarkTheme = () => {
        setTimeout(function () {
            let moduleSection = document.getElementsByClassName('emoji-module-section')[0];
            moduleSection.classList.remove('dark-theme');

            let isDarkTheme = document.getElementById('gitter-dark') !== null;
            if (isDarkTheme)
                moduleSection.classList.add('dark-theme');
        }, 350);
    };

    const init = () => {
        if (!cachedChatInputButtonsRegion)
            cachedChatInputButtonsRegion = initTemplateHtml + `<div> ${chatButtonsDivElement.innerHTML} </div>`;

        chatButtonsDivElement.innerHTML = cachedChatInputButtonsRegion;

        addStylesToDocument(gitterEmojiesWindowStyles);
        bindListeners();
        switchLightDarkTheme();

        if (darkThemeSwitchButton) {
            darkThemeSwitchButton.addEventListener('click', () => {
                switchLightDarkTheme();
            });
        }

        document.querySelector('.emoji-tabs-wrap .emoji-tab > img').click();
    };


    const bindListeners = () => {
        /**** listeners ****/
        // reset some variables for correct emoji inserting logic
        chatTextArea.addEventListener('focus', function(e) {
            e.preventDefault();
            isTextAreaFocused = true;
            cursorPosCache = 0;
        }, false);

        // show/hide emoji window
        document.querySelector('.js-emoji-window').addEventListener('click', function() {
            document.querySelector('.emoji-window-wrapper').classList.toggle('d-show');
            switchLightDarkTheme();
        }, false);

        // load emojies to a certain tab
        document.querySelectorAll('.emoji-tabs-wrap .emoji-tab').forEach((link) => {
            link.addEventListener('click', (el) => {
                let tabName = el.target.parentNode.dataset.id;
                loadTabContent(tabName);
            });
        });

        // change emojies CDN
        document.querySelector('.change-cdn').addEventListener('click', function() {
            CdnIndex++;
            if (CdnIndex >= emojiesCDNs.length)
                CdnIndex = 0;

            init();
            document.querySelector('.js-emoji-window').click();
        }, false);
    };

    const bindEmojiSmileLinkHandler = () => {
        document.querySelectorAll('.emoji-smile-link').forEach((link) => {
            link.addEventListener('click', () => {
                insertAtCursor(chatTextArea, `:${link.name}:`);
            });
        });
    };

    // ------------------------------------------------------------------------
    var delayInterval = setInterval(function () {
        if (chatInputButtonsRegion && chatInputButtonsRegion.children !== null && chatInputButtonsRegion.children[0]) {
            chatButtonsDivElement = chatInputButtonsRegion.children[0];
            clearInterval(delayInterval);
            init();
        }
    }, 200);
})();