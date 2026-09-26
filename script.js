/* =====================================================
   MAIN ELEMENTS
===================================================== */

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const dog =
    document.getElementById("dog");

const dogMessage =
    document.getElementById("dogMessage");

const hint =
    document.getElementById("hint");


/* =====================================================
   SUCCESS SCREEN
===================================================== */

const successScreen =
    document.getElementById("successScreen");

const successMessage =
    document.getElementById("successMessage");

const backButton =
    document.getElementById("backButton");

const successSmall =
    document.getElementById("successSmall");

const successTitle =
    document.getElementById("successTitle");

const successText =
    document.getElementById("successText");


/* =====================================================
   ARRIVAL SCENE
===================================================== */

const arrivalScene =
    document.getElementById("arrivalScene");

const arrivalDog =
    document.getElementById("arrivalDog");

const arrivalRing =
    document.getElementById("arrivalRing");

const arrivalSpeech =
    document.getElementById("arrivalSpeech");

const arrivalSpeechText =
    document.getElementById("arrivalSpeechText");


/* =====================================================
   CAT
===================================================== */

const finalCat =
    document.getElementById("finalCat");

const finalHeart =
    document.getElementById("finalHeart");

const catSpeech =
    document.getElementById("catSpeech");

const catSpeechText =
    document.getElementById("catSpeechText");


/* =====================================================
   STATE
===================================================== */

let scene = 0;

let dogArrived = false;

let ringVisible = false;

let clickMeShown = false;

let noClicks = 0;

let successTimers = [];

let speechTimer = null;


/* =====================================================
   NO BUTTON MESSAGES
===================================================== */

const dogMessages = [

    "👈🐶this one",

    "bro... YES 😭",

    "why are you doing this",

    "I am literally blocking it",

    "NOPE. pick YES.",

    "you really tried 😭",

    "please... I'm a dog 🐶"

];


/* =====================================================
   CLEAR TIMERS
===================================================== */

function clearSuccessTimers() {

    successTimers.forEach(
        (timer) => {

            clearTimeout(timer);

        }
    );

    successTimers = [];

}


/* =====================================================
   RESET ARRIVAL STATE
===================================================== */

function resetArrivalState() {

    scene = 0;

    dogArrived = false;

    ringVisible = false;

    clickMeShown = false;


    arrivalDog.classList.remove(
        "speaking",
        "clicked"
    );


    arrivalRing.classList.remove(
        "visible",
        "clicked",
        "taken"
    );


    finalCat.classList.remove(
        "show",
        "clicked"
    );


    finalHeart.classList.remove(
        "show"
    );


    arrivalScene.classList.remove(
        "final-scene"
    );


    arrivalSpeech.classList.remove(
        "show"
    );


    catSpeech.classList.remove(
        "show"
    );


    arrivalSpeechText.textContent =
        "";

    catSpeechText.textContent =
        "";


    if (speechTimer) {

        clearTimeout(
            speechTimer
        );

        speechTimer = null;

    }

}


/* =====================================================
   FIRST SCREEN DOG TALK
===================================================== */

function makeDogTalk() {

    dog.classList.remove(
        "annoyed"
    );

    void dog.offsetWidth;

    dog.classList.add(
        "annoyed"
    );

}


/* =====================================================
   NO INTERACTION
===================================================== */

function handleNoInteraction() {

    noClicks++;


    if (noClicks === 1) {

        dog.classList.add(
            "visible"
        );

        dogMessage.textContent =
            "👈🐶this one";

        hint.textContent =
            "He seems to have an opinion.";

        makeDogTalk();

        return;

    }


    if (noClicks === 2) {

        dogMessage.textContent =
            "bro... YES 😭";

        hint.textContent =
            "He's getting impatient.";

        makeDogTalk();

        return;

    }


    if (noClicks === 3) {

        dogMessage.textContent =
            "why are you doing this";

        hint.textContent =
            "The dog is concerned.";

        makeDogTalk();

        return;

    }


    noButton.classList.add(
        "blocked"
    );


    const messageIndex =
        Math.min(
            noClicks - 1,
            dogMessages.length - 1
        );


    dogMessage.textContent =
        dogMessages[
            messageIndex
        ];


    hint.textContent =
        "The dog has spoken. 🐶";


    makeDogTalk();

}


/* =====================================================
   NO BUTTON CLICK
===================================================== */

noButton.addEventListener(
    "click",
    () => {

        handleNoInteraction();

    }
);


/* =====================================================
   FIRST SCREEN DOG CLICK
===================================================== */

dog.addEventListener(
    "click",
    (event) => {

        event.preventDefault();

        event.stopPropagation();

        handleNoInteraction();

    }
);


/* =====================================================
   DOG SPEECH
===================================================== */

function showDogSpeech(message) {

    catSpeech.classList.remove(
        "show"
    );


    arrivalSpeechText.textContent =
        message;


    arrivalSpeech.classList.remove(
        "show"
    );


    void arrivalSpeech.offsetWidth;


    arrivalSpeech.classList.add(
        "show"
    );


    /*
        Final sahnede köpeğin
        pozisyon animasyonunu bozma.
    */

    if (scene !== 3) {

        arrivalDog.classList.remove(
            "speaking"
        );

        void arrivalDog.offsetWidth;

        arrivalDog.classList.add(
            "speaking"
        );

    }


    if (speechTimer) {

        clearTimeout(
            speechTimer
        );

    }


    speechTimer = setTimeout(
        () => {

            arrivalSpeech.classList.remove(
                "show"
            );

        },
        2800
    );

}


/* =====================================================
   CAT SPEECH
===================================================== */

function showCatSpeech(message) {

    arrivalSpeech.classList.remove(
        "show"
    );


    catSpeechText.textContent =
        message;


    catSpeech.classList.remove(
        "show"
    );


    void catSpeech.offsetWidth;


    catSpeech.classList.add(
        "show"
    );


    if (speechTimer) {

        clearTimeout(
            speechTimer
        );

    }


    speechTimer = setTimeout(
        () => {

            catSpeech.classList.remove(
                "show"
            );

        },
        2800
    );

}


/* =====================================================
   CLICK ME
===================================================== */

function showClickMe() {

    if (scene !== 1) {

        return;

    }


    clickMeShown = true;


    arrivalSpeechText.textContent =
        "👈🐶 Click me!";


    arrivalSpeech.classList.remove(
        "show"
    );


    void arrivalSpeech.offsetWidth;


    arrivalSpeech.classList.add(
        "show"
    );

}


/* =====================================================
   CHANGE SUCCESS TEXT
===================================================== */

function changeSuccessText(
    small,
    title,
    text
) {

    successMessage.classList.remove(
        "scene-changing"
    );


    void successMessage.offsetWidth;


    successMessage.classList.add(
        "scene-changing"
    );


    successTimers.push(
        setTimeout(
            () => {

                successSmall.textContent =
                    small;

                successTitle.textContent =
                    title;

                successText.textContent =
                    text;

            },
            700
        )
    );

}


/* =====================================================
   YES BUTTON
===================================================== */

yesButton.addEventListener(
    "click",
    () => {

        clearSuccessTimers();

        resetArrivalState();


        noClicks = 0;


        noButton.classList.remove(
            "blocked"
        );


        dog.classList.remove(
            "visible",
            "annoyed"
        );


        dogMessage.textContent =
            "👈🐶this one";


        hint.textContent =
            "Take your time... ♡";


        successScreen.classList.remove(
            "second-scene"
        );


        successMessage.classList.remove(
            "scene-changing"
        );


        successSmall.textContent =
            "you said yes ♡";


        successTitle.textContent =
            "You really said yes.";


        successText.textContent =
            "I don't think you understand how happy that just made me.";


        successScreen.classList.add(
            "active"
        );


        scene = 1;


        /*
            Köpek gelişini tamamlıyor.
        */

        successTimers.push(
            setTimeout(
                () => {

                    dogArrived = true;

                },
                3300
            )
        );


        /*
            5 saniye sonra Click me.
        */

        successTimers.push(
            setTimeout(
                () => {

                    showClickMe();

                },
                5000
            )
        );

    }
);


/* =====================================================
   DOG CLICK
===================================================== */

arrivalDog.addEventListener(
    "click",
    (event) => {

        event.preventDefault();

        event.stopPropagation();


        /*
            SCENE 1
        */

        if (
            scene === 1 &&
            dogArrived &&
            clickMeShown
        ) {

            scene = 2;


            arrivalSpeech.classList.remove(
                "show"
            );


            showDogSpeech(
                "woof <3"
            );


            successScreen.classList.add(
                "second-scene"
            );


            changeSuccessText(

                "I came prepared 🐶",

                "I brought you something.",

                "You know... since you said yes, I figured I should probably make this official. 💍"

            );


            /*
                1.5 saniye sonra yüzük.
            */

            successTimers.push(
                setTimeout(
                    () => {

                        ringVisible = true;

                        arrivalRing.classList.add(
                            "visible"
                        );

                    },
                    1500
                )
            );


            return;

        }


        /*
            SCENE 2
            Köpek = woof
        */

        if (scene === 2) {

            showDogSpeech(
                "woof <3"
            );

            return;

        }


        /*
            SCENE 3
            Köpek = woof
        */

        if (scene === 3) {

            showDogSpeech(
                "woof <3"
            );

            return;

        }

    }
);


/* =====================================================
   RING CLICK
===================================================== */

arrivalRing.addEventListener(
    "click",
    (event) => {

        event.preventDefault();

        event.stopPropagation();


        if (
            scene !== 2 ||
            !ringVisible
        ) {

            return;

        }


        /*
            3. SAHNE
        */

        scene = 3;


        /*
            Final sahne animasyonunu başlat.
        */

        arrivalScene.classList.add(
            "final-scene"
        );


        /*
            Kedi sağdan gelsin.
        */

        finalCat.classList.add(
            "show"
        );


        /*
            Kalp başlangıçta görünmesin.
        */

        finalHeart.classList.remove(
            "show"
        );


        /*
            YÜZÜĞE tıklanınca
            köpeğin söylediği:
        */

        showDogSpeech(
            "For you, my love <3"
        );


        /*
            Yüzük glow.
        */

        arrivalRing.classList.remove(
            "clicked"
        );


        void arrivalRing.offsetWidth;


        arrivalRing.classList.add(
            "clicked"
        );


        /*
            Köpek + kedi yerleşsin.
            Sonra kalp gelsin.
        */

        successTimers.push(
            setTimeout(
                () => {

                    finalHeart.classList.add(
                        "show"
                    );

                },
                1000
            )
        );


        /*
            Yüzük alınmış gibi yukarı
            doğru kaybolsun.
        */

        successTimers.push(
            setTimeout(
                () => {

                    arrivalRing.classList.add(
                        "taken"
                    );

                },
                750
            )
        );


        /*
            Final yazıları.
        */

        changeSuccessText(

            "welp...",

            "I guess we're married now.",

            "Your little dog came all this way just to give you a ring. 🐶💍"

        );

    }
);


/* =====================================================
   CAT CLICK
===================================================== */

finalCat.addEventListener(
    "click",
    (event) => {

        event.preventDefault();

        event.stopPropagation();


        if (scene !== 3) {

            return;

        }


        /*
            Kedi:
            meow <3
        */

        showCatSpeech(
            "meow <3"
        );


        /*
            Küçük hop.
            Kedi yerinden kaybolmaz.
        */

        finalCat.classList.remove(
            "clicked"
        );


        void finalCat.offsetWidth;


        finalCat.classList.add(
            "clicked"
        );

    }
);


/* =====================================================
   DOG KEYBOARD
===================================================== */

arrivalDog.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            arrivalDog.click();

        }

    }
);


/* =====================================================
   RING KEYBOARD
===================================================== */

arrivalRing.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            arrivalRing.click();

        }

    }
);


/* =====================================================
   CAT KEYBOARD
===================================================== */

finalCat.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            finalCat.click();

        }

    }
);


/* =====================================================
   BACK BUTTON
===================================================== */

backButton.addEventListener(
    "click",
    () => {

        clearSuccessTimers();

        resetArrivalState();


        successScreen.classList.remove(
            "active",
            "second-scene"
        );


        successMessage.classList.remove(
            "scene-changing"
        );

    }
);