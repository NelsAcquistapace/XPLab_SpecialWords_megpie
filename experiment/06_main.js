// ---------- INITIALISATION AND CONFIGURATION ---------------------------------------------
// Here, the experiment is initialised and configured using magpieInit.


$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            intro,
            not_sarafi_it_is_evil,
            consent_form,
            instructions_practice_1,
            instructions_practice_2,
            instructions_practice_3,
            practice,
            instructions_main,
            main,
            postTest,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "162",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "directLink",
            contact_email: "kdunkel@uos.de",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                practice.name,
                main.name
            ],
            // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            // progress bar width is adjusted because else the progress shown for the main trials (384) would
            // not be visible nicely
            width: 400
        }
    });
});
