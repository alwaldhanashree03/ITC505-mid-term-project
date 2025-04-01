document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.getElementById("start-screen");
    const movieSelectionScreen = document.getElementById("movie-selection");
    const gameContainer = document.getElementById("game-container");
    const startButton = document.getElementById("start-button");
    const quitButton = document.getElementById("quit-button");
    const movieButtons = document.querySelectorAll(".movie-choice");
    const movieTitle = document.getElementById("movie-title");
    const storyText = document.getElementById("story-text");
    const storyImg = document.getElementById("story-img");
    const choice1 = document.getElementById("choice1");
    const choice2 = document.getElementById("choice2");
    const resetButton = document.getElementById("reset-button");

    let selectedMovie = "";
    let currentStage = 0;

    startButton.addEventListener("click", () => {
        startScreen.classList.add("hidden");
        movieSelectionScreen.classList.remove("hidden");
    });

    quitButton.addEventListener("click", () => {
        alert("See you next time, hero!");
        window.close();
    });


    movieButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            selectedMovie = event.target.getAttribute("data-movie");
            movieSelectionScreen.classList.add("hidden");
            gameContainer.classList.remove("hidden");
            currentStage = 0;  
            loadStory(selectedMovie, currentStage);
        });
    });


    function loadStory(movie, stage) {

        const maxStages = 5;  // We have 5 stages for each movie

        if (stage >= maxStages) {
            storyText.innerText = "The story has concluded! You can restart or quit.";
            choice1.innerText = "Restart";
            choice2.innerText = "Quit";
            choice1.addEventListener("click", () => resetGame());
            choice2.addEventListener("click", () => window.close());
            return;
        }

        if (movie === "endgame") {
            movieTitle.innerText = "Avengers: Endgame"; 
            switch(stage) {
                case 0:
                    storyText.innerText = "Thanos has wiped out half of all life. What will you do?";
                    choice1.innerText = "Gather the Avengers";
                    choice2.innerText = "Go solo";
                    setupChoices("assemble", "solo");
                    break;
                case 1:
                    storyText.innerText = "You gathered the Avengers! Now, let's take the fight to Thanos.";
                    choice1.innerText = "Use the Time Stone";
                    choice2.innerText = "Prepare an army";
                    setupChoices("useTimeStone", "prepareArmy");
                    break;
                case 2:
                    storyText.innerText = "You’re at Thanos’s doorstep, ready for battle. What’s your next move?";
                    choice1.innerText = "Fight Thanos";
                    choice2.innerText = "Negotiate with him";
                    setupChoices("fightThanos", "negotiate");
                    break;
                case 3:
                    storyText.innerText = "The battle rages on, but Thanos seems unstoppable. How do you fight back?";
                    choice1.innerText = "Use the Infinity Stones";
                    choice2.innerText = "Join forces with Captain Marvel";
                    setupChoices("useInfinityStones", "joinCaptainMarvel");
                    break;
                case 4:
                    storyText.innerText = "Victory is within your reach. But will Thanos be truly defeated?";
                    choice1.innerText = "Take the final blow";
                    choice2.innerText = "Destroy the Stones forever";
                    setupChoices("finalBlow", "destroyStones");
                    break;
            }
        } else if (movie === "ultron") {
            movieTitle.innerText = "Avengers: Age of Ultron";
            switch(stage) {
                case 0:
                    storyText.innerText = "Ultron is planning world domination. What's your move?";
                    choice1.innerText = "Hack Ultron's network";
                    choice2.innerText = "Fight head-on";
                    setupChoices("hack", "fight");
                    break;
                case 1:
                    storyText.innerText = "You successfully hacked Ultron's network! Now, what next?";
                    choice1.innerText = "Shut him down";
                    choice2.innerText = "Infiltrate his base";
                    setupChoices("shutDown", "infiltrate");
                    break;
                case 2:
                    storyText.innerText = "Ultron has detected your presence. How do you escape?";
                    choice1.innerText = "Activate the EMP";
                    choice2.innerText = "Battle through his drones";
                    setupChoices("activateEMP", "battleDrones");
                    break;
                    case 3:
                        storyText.innerText = "You're face to face with Ultron now. What is your strategy?";
                        choice1.innerText = "Engage in a direct fight";
                        choice2.innerText = "Use the environment to your advantage";
                        setupChoices("directFight", "useEnvironment");
                        break;
                    case 4:
                        storyText.innerText = "The final showdown with Ultron is upon you. What’s your next move?";
                        choice1.innerText = "Destroy Ultron's core";
                        choice2.innerText = "Negotiate with him";
                        setupChoices("destroyCore", "negotiateUltron");
                        break;
                }
        } else if (movie === "infinity") {
            movieTitle.innerText = "Avengers: Infinity War";
            switch(stage) {
                case 0:
                    storyText.innerText = "Thanos is collecting Infinity Stones. How do you respond?";
                    choice1.innerText = "Protect the Time Stone";
                    choice2.innerText = "Ambush Thanos on Titan";
                    setupChoices("protect", "ambush");
                    break;
                case 1:
                    storyText.innerText = "Thanos has the Power Stone. What will you do?";
                    choice1.innerText = "Focus on the Mind Stone";
                    choice2.innerText = "Confront Thanos directly";
                    setupChoices("mindStone", "confrontThanos");
                    break;
                case 2:
                    storyText.innerText = "Thanos is close to completing his Infinity Gauntlet. What’s your strategy?";
                    choice1.innerText = "Destroy the Stones";
                    choice2.innerText = "Distract Thanos with a decoy";
                    setupChoices("destroyStones", "distractThanos");
                    break;
                case 3:
                    storyText.innerText = "It’s the final battle. What’s your next move?";
                    choice1.innerText = "Attack Thanos with all you have";
                    choice2.innerText = "Plan a sneak attack";
                    setupChoices("attackThanos", "sneakAttack");
                    break;
                case 4:
                    storyText.innerText = "Victory or defeat? The last choice is yours.";
                    choice1.innerText = "Use the Time Stone to reverse everything";
                    choice2.innerText = "Let Thanos complete his mission";
                    setupChoices("reverseTime", "letThanosWin");
                    break;
            }
        }
    }


    function setupChoices(choice1Action, choice2Action) {

        choice1.replaceWith(choice1.cloneNode(true));
        choice2.replaceWith(choice2.cloneNode(true));


        const newChoice1 = document.getElementById("choice1");
        const newChoice2 = document.getElementById("choice2");

        
        newChoice1.addEventListener("click", () => handleChoice(choice1Action));
        newChoice2.addEventListener("click", () => handleChoice(choice2Action));
    }


    function handleChoice(action) {
        if (action === "assemble") {
            storyText.innerText = "You gathered the Avengers! Now, let's take the fight to Thanos.";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "solo") {
            storyText.innerText = "Going solo is risky... but you're determined to face Thanos alone!";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "hack") {
            storyText.innerText = "You attempt to hack Ultron’s network... Can you outsmart him?";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "fight") {
            storyText.innerText = "You charge into battle against Ultron! The fate of Earth is in your hands.";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "protect") {
            storyText.innerText = "Doctor Strange protects the Time Stone, but will that be enough?";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "ambush") {
            storyText.innerText = "The Guardians and Avengers ambush Thanos on Titan... Will it work?";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "useTimeStone") {
            storyText.innerText = "You use the Time Stone... but does it change the outcome?";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "prepareArmy") {
            storyText.innerText = "You rally an army of heroes. Can they defeat Thanos?";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "useInfinityStones") {
            storyText.innerText = "You use the Infinity Stones, but the price may be too high!";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "joinCaptainMarvel") {
            storyText.innerText = "Captain Marvel's power gives you a fighting chance.";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "finalBlow") {
            storyText.innerText = "You strike the final blow, but was it enough?";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "destroyStones") {
            storyText.innerText = "You destroy the Infinity Stones forever. The universe is safe.";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "shutDown") {
            storyText.innerText = "You shut Ultron down, but at what cost?";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "infiltrate") {
            storyText.innerText = "You infiltrate Ultron’s base, but danger awaits.";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "activateEMP") {
            storyText.innerText = "You activate the EMP, crippling Ultron's army!";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "battleDrones") {
            storyText.innerText = "You battle through Ultron's drones. Can you make it out alive?";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "directFight") {
            storyText.innerText = "You engage Ultron directly. It's a brutal battle.";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "useEnvironment") {
            storyText.innerText = "You use the environment to your advantage, gaining the upper hand.";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "destroyCore") {
            storyText.innerText = "You destroy Ultron’s core, bringing an end to his reign of terror.";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "negotiateUltron") {
            storyText.innerText = "You try to negotiate with Ultron. Is it too late?";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "reverseTime") {
            storyText.innerText = "You reverse time, but what are the consequences?";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        } else if (action === "letThanosWin") {
            storyText.innerText = "Thanos completes his mission. The universe falls into darkness.";
            currentStage++;
            loadStory(selectedMovie, currentStage);
        }
    }

    resetButton.addEventListener("click", () => {
        gameContainer.classList.add("hidden");
        startScreen.classList.remove("hidden");
    });

    
    function resetGame() {
        gameContainer.classList.add("hidden");
        startScreen.classList.remove("hidden");
    }
});

