// ==UserScript==
// @name         speak text
// @version      0.1
// @description  speaks text when an element is clicked on while holding the left alt key.
// @author       hf02
// @include      *
// @include      file:///*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/hf02/userscripts/master/speak%20thing.js
// ==/UserScript==

(function () {

    // this is a mess

    var keyCode = 'AltLeft'
    function launchSpeakText() {
        if (document.getElementById('alertasdnjfjisadnfalskjfnasljkgcnbsvdkjgbadcjbgvewruyvgvbraeiucgnvervbaglkajdsvgbnksdjfbvkdjsvmSPEAKTHINGdsbgcadsgc') == undefined) {
            var alertel = document.createElement('div')
            alertel.setAttribute('style', 'padding:10px;background-color: #ffffffcc;color:black;position:fixed;bottom:40%;left:50%;transform:translate(-50%, -50%);user-select: none;display:none;pointer-events: none;backdrop-filter:blur(10px);z-index: 9999999999999;font-family: sans-serif')
            alertel.id = 'alertasdnjfjisadnfalskjfnasljkgcnbsvdkjgbadcjbgvewruyvgvbraeiucgnvervbaglkajdsvgbnksdjfbvkdjsvmSPEAKTHINGdsbgcadsgc'
            document.body.appendChild(alertel)

            var alertttimeout1;
            var alertttimeout2;

            function alertt(text, timeout = 1000) {
                clearTimeout(alertttimeout1)
                clearTimeout(alertttimeout2)
                document.getElementById('alertasdnjfjisadnfalskjfnasljkgcnbsvdkjgbadcjbgvewruyvgvbraeiucgnvervbaglkajdsvgbnksdjfbvkdjsvmSPEAKTHINGdsbgcadsgc').innerText = text
                document.getElementById('alertasdnjfjisadnfalskjfnasljkgcnbsvdkjgbadcjbgvewruyvgvbraeiucgnvervbaglkajdsvgbnksdjfbvkdjsvmSPEAKTHINGdsbgcadsgc').style.display = 'unset'
                document.getElementById('alertasdnjfjisadnfalskjfnasljkgcnbsvdkjgbadcjbgvewruyvgvbraeiucgnvervbaglkajdsvgbnksdjfbvkdjsvmSPEAKTHINGdsbgcadsgc').style.animation = null
                alertttimeout1 = setTimeout(() => {
                    document.getElementById('alertasdnjfjisadnfalskjfnasljkgcnbsvdkjgbadcjbgvewruyvgvbraeiucgnvervbaglkajdsvgbnksdjfbvkdjsvmSPEAKTHINGdsbgcadsgc').style.animation = 'fadeoutalertasdnjfjisadnfalskjfnasljkgcnbsvdkjgbadcjbgvewruyvgvbraeiucgnvervbaglkajdsvgbnksdjfbvkdjsvmSPEAKTHINGdsbgcadsgc 1s'
                    alertttimeout2 = setTimeout(() => {
                        document.getElementById('alertasdnjfjisadnfalskjfnasljkgcnbsvdkjgbadcjbgvewruyvgvbraeiucgnvervbaglkajdsvgbnksdjfbvkdjsvmSPEAKTHINGdsbgcadsgc').style.animation = null
                        document.getElementById('alertasdnjfjisadnfalskjfnasljkgcnbsvdkjgbadcjbgvewruyvgvbraeiucgnvervbaglkajdsvgbnksdjfbvkdjsvmSPEAKTHINGdsbgcadsgc').style.display = 'none'
                    }, 1000);
                }, timeout);
            }

            var style = document.createElement('style')
            style.innerHTML = '/* speak text thingy, plz no remove */ .speaktexthighlightblahblahlbah3hwbfwae7cgm7823wsdgavagewvber5bv7547 {animation: anispeaktexthighlightblahblahlbah3hwbfwae7cgm7823wsdgavagewvber5bv7547 1s infinite linear}@keyframes anispeaktexthighlightblahblahlbah3hwbfwae7cgm7823wsdgavagewvber5bv7547 {0%{filter: invert(0)}50%{filter: invert(1)}100% {filter: invert(0)}} @keyframes fadeoutalertasdnjfjisadnfalskjfnasljkgcnbsvdkjgbadcjbgvewruyvgvbraeiucgnvervbaglkajdsvgbnksdjfbvkdjsvmSPEAKTHINGdsbgcadsgc {0% {opacity: 1}100% {opacity: 0}}'
            document.head.appendChild(style)
            //document.getElementsByClassName('info-section')[0].className

            var keyDown = false



            var lastHovered

            document.addEventListener('keydown', function (event) {


                if (event.code == keyCode) {
                    if (keyDown != true) {
                        window.speechSynthesis.cancel()
                    }
                    keyDown = true
                }

            })

            document.addEventListener('keyup', function (event) {

                if (event.code == keyCode) {
                    keyDown = false
                    speakTextNoMoreAnimationYoYay()
                }

            })

            function speakTextNoMoreAnimationYoYay() {

                if (document.getElementById('speaktexthighlightBOXblahblahlbah3hwbfwae7cgm7823wsdgavagewvber5bv7547')) document.getElementById('speaktexthighlightBOXblahblahlbah3hwbfwae7cgm7823wsdgavagewvber5bv7547').remove()
                if (document.getElementById('speaktexthighlightBOXblahblahlbah3hwbfwae7cgm7823wsdgavagewvber5bv7547')) console.log('yep')

                for (var i = 0; i < document.getElementsByClassName('speaktexthighlightblahblahlbah3hwbfwae7cgm7823wsdgavagewvber5bv7547').length; i++) {



                    var aaa = document.getElementsByClassName('speaktexthighlightblahblahlbah3hwbfwae7cgm7823wsdgavagewvber5bv7547')[i].className.split(' ')
                    var nnew = ''

                    for (var x = 0; x < aaa.length; x++) {

                        if (aaa[x] != 'speaktexthighlightblahblahlbah3hwbfwae7cgm7823wsdgavagewvber5bv7547') {
                            nnew = `${nnew} ${aaa[x]}`
                        }
                    }

                    document.getElementsByClassName('speaktexthighlightblahblahlbah3hwbfwae7cgm7823wsdgavagewvber5bv7547')[i].className = nnew

                }
            }

            document.addEventListener('mousemove', function (event) {


                if (keyDown == true) {

                    var selEl = event.path[0]
                    var posEl = selEl.getBoundingClientRect()

                    speakTextNoMoreAnimationYoYay()
                    // selEl.className = `${selEl.className} speaktexthighlightblahblahlbah3hwbfwae7cgm7823wsdgavagewvber5bv7547`
                    var n = document.createElement('div')
                    n.style.zIndex = '99999999999999'
                    n.style.position = 'fixed'
                    n.style.top = posEl.top + 'px'
                    n.style.left = posEl.left + 'px'
                    n.style.width = posEl.width + 'px'
                    n.style.height = posEl.height + 'px'
                    n.style.backgroundColor = '#ffff0096'
                    n.style.pointerEvents = 'none'
                    n.id = 'speaktexthighlightBOXblahblahlbah3hwbfwae7cgm7823wsdgavagewvber5bv7547'
                    document.body.appendChild(n)

                } else {

                    speakTextNoMoreAnimationYoYay()



                }

            })

            var sendPauseSignal = 2;

            setInterval(function () {

                if (sendPauseSignal != 2 && speechSynthesis.speaking == false) {

                    if (sendPauseSignal == 0) {
                        alertt('done speaking')
                    } else {
                        alertt('stopped speaking')
                    }
                    sendPauseSignal = 2;

                }


            }, 10)

            document.addEventListener('click', function (event) {

                speakTextNoMoreAnimationYoYay()

                // console.log('hehe')
                // console.log(keyDown)

                if (keyDown) {

                    var msg = new SpeechSynthesisUtterance();
                    msg.volume = 0.2
                    msg.text = event.path[0].innerText;
                    window.speechSynthesis.speak(msg);
                    sendPauseSignal = 0
                }

            });

            console.log(`speak text is ON! hold down the ${keyCode} key and then click on text to make it speak`)

        }

    }

    function tryToLaunchspeaktext() {

        if (document.body) {
            launchSpeakText()
            clearInterval(qwerty)

        } else {

            console.log('speak text: there is no body! retrying...')

        }

    }



    var qwerty = setInterval(function () {

        tryToLaunchspeaktext()

    }, 1000)

    tryToLaunchspeaktext()

})();