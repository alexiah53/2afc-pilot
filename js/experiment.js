// set up experiment logic for each slide
function make_slides(f) {
  var slides = {};

  // set up initial slide
  slides.i0 = slide({
    name: "i0",
      start: function() {
      exp.startT = Date.now();
      },
      button: function() {
        exp.go(); //use exp.go() if and only if there is no "present" data.
      },
  });

    slides.block_1 = slide({
    name: "block_1",
      start: function() {
      },
      button: function() {
        // exp.go(); //use exp.go() if and only if there is no "present" data.
      },
  });
  
  slides.block_2 = slide({
    name: "block_2",
      start: function() {
      },
      button: function() {
        // exp.go(); //use exp.go() if and only if there is no "present" data.
      },
  });
  
  slides.block_3 = slide({
    name: "block_3",
      start: function() {
      },
      button: function() {
        // exp.go(); //use exp.go() if and only if there is no "present" data.
      },
  });
  
  slides.block_4 = slide({
    name: "block_4",
      start: function() {
      },
      button: function() {
        // exp.go(); //use exp.go() if and only if there is no "present" data.
      },
  });
  
  slides.block_5 = slide({
    name: "block_5",
      start: function() {
      },
      button: function() {
        // exp.go(); //use exp.go() if and only if there is no "present" data.
      },
  });
  
  slides.block_6 = slide({
    name: "block_6",
      start: function() {
      },
      button: function() {
        // exp.go(); //use exp.go() if and only if there is no "present" data.
      },
  });


// SOUND CHECK

  slides.sound_test = slide({
     name: "sound_test",
	  start: function(){
	  	$('.err').hide();
	  },
     soundtest_OK : function(e){
       exp.trial_no = 0;

	   var sound_test = $(".sound_test").val();
	   sound_test = sound_test.toLowerCase();

	   if (sound_test == "ready") {
	   	 exp.go();
	   } else {
	   	$('.err').show();
	   }
     }
   });

  // INSTRUCTIONS FOR PRACTICE TRIALS

  slides.practice_instructions = slide({
    name: "practice_instructions",
    start: function() {
    },
    button: function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    },
  });

   // PRACTICE TRIAL 1

  slides.practice_trial_1 = slide({
    name: "practice_trial_1",

    // To rotate through stimulus list
    start : function()
	 {
		$('.err').hide();
		$('.correct').hide();
		exp.allow_key_press = 0;
		exp.response = "";

// this connects to html file
var practice1_aud = document.getElementById("happy");

// this indexes to the prime file name
practice1_aud.src = "audio/happy.wav";
practice1_aud.load();
practice1_aud.play();

practice1_aud.onended = function() {
	console.log("audio ended");
      exp.allow_key_press = 1;
	// setTimeout(function(){
	//  }, 500);

	 document.onkeydown = checkKey;
	 function checkKey(e) {
		 e = e || window.event;
		 if (e.keyCode == 76 && exp.allow_key_press == 1) {
		 	 console.log("L pressed");
			 exp.response = "happy";
			 $('.err').hide();
			 $('.correct').show();
		 	setTimeout(function(){
				// WHEN I ADD NEW PRACTICE THIS TURNS INTO EXP.GO()
				 exp.go();
		 	 }, 2000);
		 } if (e.keyCode == 83 && exp.allow_key_press == 1) {
		 	console.log("S pressed");
			exp.response = "sad";
			$('.err').show();
		 }
	 }

 };
     },

     // handle click on "Continue" button
     button: function() {
         this.log_responses();
     },

     // save response
     log_responses: function() {
       exp.data_trials.push({

 	// "Response_Time": 0,
 	// "Response": "",
  //   "Pair_Number": "",
 	// "List": "",
	// "Prime": "doctor",
  //   "Target": "nurse",
	// "Semantically": "related",
 	// "Trial_Type": "practice",
 	// "Target_Word_Type": "real",
 	// "Prime_Voice": "",
	// "Target_Voice": "",
	// "slide_number_in_experiment": exp.phase

       });
     },
   });

    // PRACTICE TRIAL 2

   slides.practice_trial_2 = slide({
     name: "practice_trial_2",

     // To rotate through stimulus list
     start : function()
 	 {
		 // IS THIS RIGHT
		$('#stimuli').show();
		$('.err').hide();
 		$('.correct').hide();
 		exp.allow_key_press = 0;
 		exp.response = "";

 // this connects to html file
 var practice2_aud = document.getElementById("sad");

 // this indexes to the prime file name
 practice2_aud.src = "audio/sad.wav";
 practice2_aud.load();
 practice2_aud.play();

 practice2_aud.onended = function() {
 	console.log("audio ended");
      exp.allow_key_press = 1;
 	// setTimeout(function(){
 	//  }, 500);

 	 document.onkeydown = checkKey;
 	 function checkKey(e) {
 		 e = e || window.event;
 		 if (e.keyCode == 76 && exp.allow_key_press == 1) {
 		 	 console.log("L pressed");
 			 exp.response = "sad";
 			 $('.correct').show();
$('.err').hide();
              setTimeout(function(){
        exp.go();
       }, 2000);


 		 } if (e.keyCode == 83 && exp.allow_key_press == 1) {
 		 	console.log("S pressed");
 			exp.response = "happy";
 			$('.err').show();
			$('.correct').hide();
 		 	// setTimeout(function(){
			// 	exp.go();
 		 	//  }, 2000);
 		 }
 	 }

  };


      },

      // handle click on "Continue" button
      button: function() {
          this.log_responses();
          // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
      },

      // save response
      log_responses: function() {
        exp.data_trials.push({

  // 	"Response_Time": 0,
  // 	"Response": "",
  //    "Pair_Number": "",
  // 	"List": "",
 	// "Prime": "doctor",
  //    "Target": "wug",
 	// "Semantically": "unrelated",
  // 	"Trial_Type": "practice",
  // 	"Target_Word_Type": "pseudo",
  // 	"Prime_Voice": "",
 	// "Target_Voice": "",
 	// "slide_number_in_experiment": exp.phase

        });
      },
    });

   // set up slide with instructions for main experiment
   slides.startExp = slide({
     name: "startExp",
     start: function() {
     },
     button: function() {
       exp.go(); //use exp.go() if and only if there is no "present" data.
     },
   });

// BLOCK 1

  slides.block_1 = slide({
    name: "block_1",

    // To rotate through stimulus list, comment out the above 7 lines and  uncomment the following 2:
    present: exp.stimuli_block1,
    present_handle : function(stim)
	 {
		exp.allow_key_press = 0;
		exp.response = null;

      // store stimulus data
      this.stim = stim;

// this connects to html file
var audio = document.getElementById("block_1_audio");

// this indexes to the prime file name
var audio_source = stim.participant + "_" + stim.phrase
console.log(audio_source);
audio.src = "audio/" + audio_source + ".wav";
audio.load();
audio.play();

var my_time;
   audio.onended = function() {
   exp.allow_key_press = 1;
  console.log("audio ended");
      exp.startTime = Date.now();
  my_time = setTimeout(function(){
    // exp.startTime = Date.now();
if (exp.response == null) {
               console.log("No response");
              exp.response_time = Date.now() - exp.startTime
              exp.response = "skip";
              exp.response_type = "skip";
              _s.button();
              console.log("should skip to next trial")
          }
   }, 3000);

     document.onkeydown = checkKey;
     function checkKey(e) {
       e = e || window.event;
       if (e.keyCode == 76 && exp.allow_key_press == 1) {
         console.log("L pressed");
          exp.allow_key_press = 0;
console.log("clicking disabled");
         exp.response_time = Date.now() - exp.startTime
         exp.response = "blue_collar";
         exp.response_type = "stereotype";
      var stereotype_text_var = document.getElementById("stereotype_text_1");
      stereotype_text_var.classList.add("active_bold");
      console.log('check:', stereotype_text_var.className);
         setTimeout(function(){
            clearTimeout(my_time);
          _s.button();
        }, 1000);
       } if (e.keyCode == 83 && exp.allow_key_press == 1) {
        console.log("S pressed");
           exp.allow_key_press = 0;
console.log("clicking disabled");
        exp.response_time = Date.now() - exp.startTime
        exp.response = "white_collar";
        exp.response_type = "non_stereotype";
      var non_stereotype_text_var = document.getElementById("non_stereotype_text_1");
      non_stereotype_text_var.classList.add("active_bold");
      console.log('check:', non_stereotype_text_var.className);
        setTimeout(function(){
           clearTimeout(my_time);
          _s.button();
         }, 1000);
       }
     }

};
      $(".err").hide();
    },

    // handle click on "Continue" button
    button: function() {
		// exp.audio_source = "";
		// exp.target_source = "";
        this.log_responses();
		var stereotype_text_var = document.getElementById("stereotype_text_1");
		var non_stereotype_text_var = document.getElementById("non_stereotype_text_1");
		stereotype_text_var.classList.remove("active_bold");
		non_stereotype_text_var.classList.remove("active_bold");
        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
		$('#stimuli').show();
        // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
		// $('#stimuli').hide();
		// $('#landing_page').show();
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({

      "block": "block_1",
      "choices": "white_collar-blue_collar",
      "response_time": exp.response_time,
      "response": exp.response,
      "response_type": exp.response_type,
      "slide_number_in_experiment": exp.phase-6,
      stim_num: this.stim.stim_num,
      participant: this.stim.participant,
      phrase: this.stim.phrase,
      gender: this.stim.gender,
      start_time: this.stim.start_time,
      end_time: this.stim.end_time,
      duration: this.stim.duration

      });
    },
  });
  
// BLOCK 2

  slides.block_2 = slide({
    name: "block_2",

    // To rotate through stimulus list, comment out the above 7 lines and  uncomment the following 2:
    present:  exp.stimuli_block2,
    present_handle : function(stim)
	 {
		exp.allow_key_press = 0;
		exp.response = null;

      // store stimulus data
      this.stim = stim;

// this connects to html file
var audio = document.getElementById("block_2_audio");

// this indexes to the prime file name
var audio_source = stim.participant + "_" + stim.phrase
console.log(audio_source);
audio.src = "audio/" + audio_source + ".wav";
audio.load();
audio.play();

var my_time;
   audio.onended = function() {
   exp.allow_key_press = 1;
  console.log("audio ended");
       exp.startTime = Date.now();
  my_time = setTimeout(function(){
    // exp.startTime = Date.now();
if (exp.response == null) {
               console.log("No response");
              exp.response_time = Date.now() - exp.startTime
              exp.response = "skip";
              exp.response_type = "skip";
              _s.button();
              console.log("should skip to next trial")
          }
   }, 3000);

     document.onkeydown = checkKey;
     function checkKey(e) {
       e = e || window.event;
       if (e.keyCode == 76 && exp.allow_key_press == 1) {
         console.log("L pressed");
           exp.allow_key_press = 0;
         exp.response_time = Date.now() - exp.startTime
         exp.response = "white_collar";
         exp.response_type = "non_stereotype";
      var non_stereotype_text_var = document.getElementById("non_stereotype_text_2");
      non_stereotype_text_var.classList.add("active_bold");
      console.log('check:', non_stereotype_text_var.className);
         setTimeout(function(){
            clearTimeout(my_time);
          _s.button();
        }, 1000);
       } if (e.keyCode == 83 && exp.allow_key_press == 1) {
        console.log("S pressed");
        exp.allow_key_press = 0;
        exp.response_time = Date.now() - exp.startTime
        exp.response = "blue_collar";
        exp.response_type = "stereotype";
      var stereotype_text_var = document.getElementById("stereotype_text_2");
      stereotype_text_var.classList.add("active_bold");
      console.log('check:', stereotype_text_var.className);
        setTimeout(function(){
           clearTimeout(my_time);
          _s.button();
         }, 1000);
       }
     }

};
      $(".err").hide();
    },

    // handle click on "Continue" button
    button: function() {
		// exp.audio_source = "";
		// exp.target_source = "";
        this.log_responses();
		var stereotype_text_var = document.getElementById("stereotype_text_2");
		var non_stereotype_text_var = document.getElementById("non_stereotype_text_2");
		stereotype_text_var.classList.remove("active_bold");
		non_stereotype_text_var.classList.remove("active_bold");
        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
		$('#stimuli').show();
        // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
		// $('#stimuli').hide();
		// $('#landing_page').show();
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({

      "block": "block_2",
      "choices": "blue_collar-white_collar",
      "response_time": exp.response_time,
      "response": exp.response,
      "response_type": exp.response_type,
      "slide_number_in_experiment": exp.phase-6,
      stim_num: this.stim.stim_num,
      participant: this.stim.participant,
      phrase: this.stim.phrase,
      gender: this.stim.gender,
      start_time: this.stim.start_time,
      end_time: this.stim.end_time,
      duration: this.stim.duration

      });
    },
  });
  
// BLOCK 3

  slides.block_3 = slide({
    name: "block_3",

    // To rotate through stimulus list, comment out the above 7 lines and  uncomment the following 2:
    present:  exp.stimuli_block3,
    present_handle : function(stim)
	 {
		exp.allow_key_press = 0;
		exp.response = null;

      // store stimulus data
      this.stim = stim;

// this connects to html file
var audio = document.getElementById("block_3_audio");

// this indexes to the prime file name
var audio_source = stim.participant + "_" + stim.phrase
console.log(audio_source);
audio.src = "audio/" + audio_source + ".wav";
audio.load();
audio.play();

var my_time;
   audio.onended = function() {
   exp.allow_key_press = 1;
  console.log("audio ended");
       exp.startTime = Date.now();
  my_time = setTimeout(function(){
    // exp.startTime = Date.now();
if (exp.response == null) {
               console.log("No response");
              exp.response_time = Date.now() - exp.startTime
              exp.response = "skip";
              exp.response_type = "skip";
              _s.button();
              console.log("should skip to next trial")
          }
   }, 3000);

     document.onkeydown = checkKey;
     function checkKey(e) {
       e = e || window.event;
       if (e.keyCode == 76 && exp.allow_key_press == 1) {
         console.log("L pressed");
         exp.allow_key_press = 0;
         exp.response_time = Date.now() - exp.startTime
         exp.response = "born_outside_US";
         exp.response_type = "stereotype";
      var stereotype_text_var = document.getElementById("stereotype_text_3");
      stereotype_text_var.classList.add("active_bold");
      console.log('check:', stereotype_text_var.className);
         setTimeout(function(){
            clearTimeout(my_time);
          _s.button();
        }, 1000);
       } if (e.keyCode == 83 && exp.allow_key_press == 1) {
        console.log("S pressed");
        exp.allow_key_press = 0;
        exp.response_time = Date.now() - exp.startTime
        exp.response = "born_in_US";
        exp.response_type = "non_stereotype";
      var non_stereotype_text_var = document.getElementById("non_stereotype_text_3");
      non_stereotype_text_var.classList.add("active_bold");
      console.log('check:', non_stereotype_text_var.className);
        setTimeout(function(){
           clearTimeout(my_time);
          _s.button();
         }, 1000);
       }
     }

};
      $(".err").hide();
    },

    // handle click on "Continue" button
    button: function() {
		// exp.audio_source = "";
		// exp.target_source = "";
        this.log_responses();
		var stereotype_text_var = document.getElementById("stereotype_text_3");
		var non_stereotype_text_var = document.getElementById("non_stereotype_text_3");
		stereotype_text_var.classList.remove("active_bold");
		non_stereotype_text_var.classList.remove("active_bold");
        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
		$('#stimuli').show();
        // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
		// $('#stimuli').hide();
		// $('#landing_page').show();
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({

      "block": "block_3",
      "choices": "born_in_US-born_outside_US",
      "response_time": exp.response_time,
      "response": exp.response,
      "response_type": exp.response_type,
      "slide_number_in_experiment": exp.phase-6,
      stim_num: this.stim.stim_num,
      participant: this.stim.participant,
      phrase: this.stim.phrase,
      gender: this.stim.gender,
      start_time: this.stim.start_time,
      end_time: this.stim.end_time,
      duration: this.stim.duration

      });
    },
  });

// BLOCK 4

  slides.block_4 = slide({
    name: "block_4",

    // To rotate through stimulus list, comment out the above 7 lines and  uncomment the following 2:
    present:  exp.stimuli_block4,
    present_handle : function(stim)
	 {
		exp.allow_key_press = 0;
		exp.response = null;

      // store stimulus data
      this.stim = stim;

// this connects to html file
var audio = document.getElementById("block_4_audio");

// this indexes to the prime file name
var audio_source = stim.participant + "_" + stim.phrase
console.log(audio_source);
audio.src = "audio/" + audio_source + ".wav";
audio.load();
audio.play();

var my_time;
   audio.onended = function() {
   exp.allow_key_press = 1;
  console.log("audio ended");
       exp.startTime = Date.now();
  my_time = setTimeout(function(){
    // exp.startTime = Date.now();
if (exp.response == null) {
               console.log("No response");
              exp.response_time = Date.now() - exp.startTime
              exp.response = "skip";
              exp.response_type = "skip";
              _s.button();
              console.log("should skip to next trial")
          }
   }, 3000);

     document.onkeydown = checkKey;
     function checkKey(e) {
       e = e || window.event;
       if (e.keyCode == 76 && exp.allow_key_press == 1) {
         console.log("L pressed");
         exp.allow_key_press = 0;
         exp.response_time = Date.now() - exp.startTime
         exp.response = "born_in_US";
         exp.response_type = "non_stereotype";
      var non_stereotype_text_var = document.getElementById("non_stereotype_text_4");
      non_stereotype_text_var.classList.add("active_bold");
      console.log('check:', non_stereotype_text_var.className);
         setTimeout(function(){
            clearTimeout(my_time);
          _s.button();
        }, 1000);
       } if (e.keyCode == 83 && exp.allow_key_press == 1) {
        console.log("S pressed");
        exp.allow_key_press = 0;
        exp.response_time = Date.now() - exp.startTime
        exp.response = "born_outside_US";
        exp.response_type = "stereotype";
      var stereotype_text_var = document.getElementById("stereotype_text_4");
      stereotype_text_var.classList.add("active_bold");
      console.log('check:', stereotype_text_var.className);
        setTimeout(function(){
           clearTimeout(my_time);
          _s.button();
         }, 1000);
       }
     }

};
      $(".err").hide();
    },

    // handle click on "Continue" button
    button: function() {
		// exp.audio_source = "";
		// exp.target_source = "";
        this.log_responses();
		var stereotype_text_var = document.getElementById("stereotype_text_4");
		var non_stereotype_text_var = document.getElementById("non_stereotype_text_4");
		stereotype_text_var.classList.remove("active_bold");
		non_stereotype_text_var.classList.remove("active_bold");
        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
		$('#stimuli').show();
        // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
		// $('#stimuli').hide();
		// $('#landing_page').show();
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({

      "block": "block_4",
      "choices": "born_outside_US-born_in_US",
      "response_time": exp.response_time,
      "response": exp.response,
      "response_type": exp.response_type,
      "slide_number_in_experiment": exp.phase-6,
      stim_num: this.stim.stim_num,
      participant: this.stim.participant,
      phrase: this.stim.phrase,
      gender: this.stim.gender,
      start_time: this.stim.start_time,
      end_time: this.stim.end_time,
      duration: this.stim.duration

      });
    },
  });
  
// BLOCK 5

  slides.block_5 = slide({
    name: "block_5",

    // To rotate through stimulus list, comment out the above 7 lines and  uncomment the following 2:
    present:  exp.stimuli_block5,
    present_handle : function(stim)
	 {
		exp.allow_key_press = 0;
		exp.response = null;

      // store stimulus data
      this.stim = stim;

// this connects to html file
var audio = document.getElementById("block_5_audio");

// this indexes to the prime file name
var audio_source = stim.participant + "_" + stim.phrase
console.log(audio_source);
audio.src = "audio/" + audio_source + ".wav";
audio.load();
audio.play();

var my_time;
   audio.onended = function() {
   exp.allow_key_press = 1;
  console.log("audio ended");
       exp.startTime = Date.now();
  my_time = setTimeout(function(){
    // exp.startTime = Date.now();
if (exp.response == null) {
               console.log("No response");
              exp.response_time = Date.now() - exp.startTime
              exp.response = "skip";
              exp.response_type = "skip";
              _s.button();
              console.log("should skip to next trial")
          }
   }, 3000);

     document.onkeydown = checkKey;
     function checkKey(e) {
       e = e || window.event;
       if (e.keyCode == 76 && exp.allow_key_press == 1) {
         console.log("L pressed");
         exp.allow_key_press = 0;
         exp.response_time = Date.now() - exp.startTime
         exp.response = "texas_border";
         exp.response_type =  "stereotype";
      var stereotype_text_var = document.getElementById("stereotype_text_5");
      stereotype_text_var.classList.add("active_bold");
      console.log('check:', stereotype_text_var.className);
         setTimeout(function(){
            clearTimeout(my_time);
          _s.button();
        }, 1000);
       } if (e.keyCode == 83 && exp.allow_key_press == 1) {
        console.log("S pressed");
        exp.allow_key_press = 0;
        exp.response_time = Date.now() - exp.startTime
        exp.response = "south_florida";
        exp.response_type = "non_stereotype";
      var non_stereotype_text_var = document.getElementById("non_stereotype_text_5");
      non_stereotype_text_var.classList.add("active_bold");
      console.log('check:', non_stereotype_text_var.className);
        setTimeout(function(){
           clearTimeout(my_time);
          _s.button();
         }, 1000);
       }
     }

};
      $(".err").hide();
    },

    // handle click on "Continue" button
    button: function() {
		// exp.audio_source = "";
		// exp.target_source = "";
        this.log_responses();
		var stereotype_text_var = document.getElementById("stereotype_text_5");
		var non_stereotype_text_var = document.getElementById("non_stereotype_text_5");
		stereotype_text_var.classList.remove("active_bold");
		non_stereotype_text_var.classList.remove("active_bold");
        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
		$('#stimuli').show();
        // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
		// $('#stimuli').hide();
		// $('#landing_page').show();
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({

      "block": "block_5",
      "choices": "south_florida-texas_border",
      "response_time": exp.response_time,
      "response": exp.response,
      "response_type": exp.response_type,
      "slide_number_in_experiment": exp.phase-6,
      stim_num: this.stim.stim_num,
      participant: this.stim.participant,
      phrase: this.stim.phrase,
      gender: this.stim.gender,
      start_time: this.stim.start_time,
      end_time: this.stim.end_time,
      duration: this.stim.duration

      });
    },
  });
  
// BLOCK 6

  slides.block_6 = slide({
    name: "block_6",

    // To rotate through stimulus list, comment out the above 7 lines and  uncomment the following 2:
    present:  exp.stimuli_block6,
    present_handle : function(stim)
	 {
		exp.allow_key_press = 0;
		exp.response = null;

      // store stimulus data
      this.stim = stim;

// this connects to html file
var audio = document.getElementById("block_6_audio");

// this indexes to the prime file name
var audio_source = stim.participant + "_" + stim.phrase
console.log(audio_source);
audio.src = "audio/" + audio_source + ".wav";
audio.load();
audio.play();

var my_time;
	 audio.onended = function() {
   exp.allow_key_press = 1;
  console.log("audio ended");
       exp.startTime = Date.now();
  my_time = setTimeout(function(){
    // exp.startTime = Date.now();
if (exp.response == null) {
               console.log("No response");
              exp.response_time = Date.now() - exp.startTime
              exp.response = "skip";
              exp.response_type = "skip";
              _s.button();
              console.log("should skip to next trial")
          }
   }, 3000);

  // if (exp.response == null) {
  //           console.log("No response");
  //           exp.response_time = Date.now() - exp.startTime
  //           exp.response = "skip";
  //           _s.button();
  //           console.log("should skip to next trial")
  //           exp.startTime = Date.now();
  //   exp.allow_key_press = 1;
  //       }
  //     }, 3000);


	 	// console.log("audio ended");
	 	// my_time = setTimeout(function(){
 		//  		console.log("waiting to play next audio");
 		//  		// move to next trial
    //     if (exp.response == null) {
    //         console.log("No response");
		// 			 	exp.response_time = Date.now() - exp.startTime
		// 			 	exp.response = "skip";
		// 			 	_s.button();
		// 			 	console.log("should skip to next trial")
		// 		}
    //   }, 3000);

   	 document.onkeydown = checkKey;
   	 function checkKey(e) {
   		 e = e || window.event;
   		 if (e.keyCode == 76 && exp.allow_key_press == 1) {
   		 	 console.log("L pressed");
         exp.allow_key_press = 0;
   			 exp.response_time = Date.now() - exp.startTime
   			 exp.response = "south_florida";
         exp.response_type = "non_stereotype";
 			var non_stereotype_text_var = document.getElementById("non_stereotype_text_6");
 			non_stereotype_text_var.classList.add("active_bold");
 			console.log('check:', non_stereotype_text_var.className);
   			 setTimeout(function(){
            clearTimeout(my_time);
   			 	_s.button();
   		 	}, 1000);
   		 } if (e.keyCode == 83 && exp.allow_key_press == 1) {
   		 	console.log("S pressed");
        exp.allow_key_press = 0;
   			exp.response_time = Date.now() - exp.startTime
   			exp.response = "texas_border";
        exp.response_type = "stereotype"
			var stereotype_text_var = document.getElementById("stereotype_text_6");
			stereotype_text_var.classList.add("active_bold");
			console.log('check:', stereotype_text_var.className);
   		 	setTimeout(function(){
           clearTimeout(my_time);
   				_s.button();
   	 	   }, 1000);
   		 }
   	 }

};
      $(".err").hide();
    },

    // handle click on "Continue" button
    button: function() {
		// exp.audio_source = "";
		// exp.target_source = "";
        this.log_responses();
		var stereotype_text_var = document.getElementById("stereotype_text_6");
		var non_stereotype_text_var = document.getElementById("non_stereotype_text_6");
		stereotype_text_var.classList.remove("active_bold");
		non_stereotype_text_var.classList.remove("active_bold");
        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
		$('#stimuli').show();
        // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
		// $('#stimuli').hide();
		// $('#landing_page').show();
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({

      "block": "block_6",
      "choices": "texas_border-south_florida",
      "response_time": exp.response_time,
      "response": exp.response,
      "response_type": exp.response_type,
      "slide_number_in_experiment": exp.phase-6,
      stim_num: this.stim.stim_num,
      participant: this.stim.participant,
      phrase: this.stim.phrase,
      gender: this.stim.gender,
      start_time: this.stim.start_time,
      end_time: this.stim.end_time,
      duration: this.stim.duration

      });
    },
  });

  slides.follow_up = slide({
      name: "follow_up",
      start: function() {
      exp.allow_key_press = 0;
      console.log("exp.allow_key_press", exp.allow_key_press)
      },

      // handle click on "Continue" button
      button_follow_up: function() {

      if  (!$("#white_collar_1").val() |
        !$("#white_collar_2").val() |
        !$("#white_collar_3").val() |
          !$("#blue_collar_1").val() |
        !$("#blue_collar_2").val() |
        !$("#blue_collar_3").val() |
        !$("#born_in_us_1").val() |
        !$("#born_in_us_2").val() |
          !$("#born_in_us_3").val() |
       !$("#born_outside_us_1").val() |
        !$("#born_outside_us_2").val() |
          !$("#born_outside_us_3").val() |
    !$("#florida_1").val() |
        !$("#florida_2").val() |
          !$("#florida_3").val() |
 !$("#texas_1").val() |
          !$("#texas_2").val() |
        !$("#texas_3").val()) {

        $(".err").show();
    }
      else {
              this.log_responses();
              exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
      }
      },

      // save response
      log_responses: function() {
        exp.data_trials.push({
            "white_collar_1":$("#white_collar_1").val(),
      "white_collar_2":$("#white_collar_2").val(),
      "white_collar_3":$("#white_collar_3").val(),
      "blue_collar_1":$("#blue_collar_1").val(),
      "blue_collar_2":$("#blue_collar_2").val(),
      "blue_collar_3":$("#blue_collar_3").val(),
      "born_in_us_1":$("#born_in_us_1").val(),
        "born_in_us_2":$("#born_in_us_2").val(),
      "born_in_us_3":$("#born_in_us_3").val(),
      "born_outside_us_1":$("#born_outside_us_1").val(),
      "born_outside_us_2":$("#born_outside_us_2").val(),
      "born_outside_us_3":$("#born_outside_us_3").val(),
          "florida_1":$("#florida_1").val(),
      "florida_2":$("#florida_2").val(),
      "florida_3":$("#florida_3").val(),
            "texas_1":$("#texas_1").val(),
      "texas_2":$("#texas_2").val(),
      "texas_3":$("#texas_3").val(),
        });
      }
  });


  // slide to collect subject information
  slides.subj_info = slide({
    name: "subj_info",
    submit: function(e) {


	  if  (
		  !$("#heritage_country").val() |
		  !$("#current_region").val() |
		  !$("#first_language").val() |
		  !$("#parent_languages").val() |
	  	  !$("#exposure").val() |
		  !$("#english_acquisition_age").val()) {

	  	$(".err").show();
	}
	else {

		var races = document.querySelectorAll('[name="race"]:checked');
		console.log("race:", races.length);

		var race_list = [];

		for (var i = 0; i < races.length; i++) {

			if (races[i].type=="checkbox" && races[i].checked == true){
				race_list += races[i].value+", \n";
			}
		}

		console.log("list:", race_list);

      exp.subj_data = {
        // asses: $('input[name="assess"]:checked').val(),
        age: $("#age").val(),
        gender: $("#gender").val(),
        education: $("#education").val(),
        comments: $("#comments").val(),
		race: race_list,
		// heritage_country: $("#heritage_country").val(),
		current_region: $("#current_region").val(),
		other_regions: $("#other_regions").val(),
		first_language: $("#first_language").val(),
		other_languages: $("#other_languages").val(),
		// english_acquisition_age: $("#english_acquisition_age").val(),
		parent_languages: $("#parent_languages").val(),
		exposure: $("#exposure").val(),
		// email: $("#email").val()
      };

      exp.go();

}
    }
  });

  //
  slides.thanks = slide({
    name: "thanks",
    start: function() {
      exp.data = {
        "trials": exp.data_trials,
        "catch_trials": exp.catch_trials,
        "system": exp.system,
        // "condition": exp.condition,
        "subject_information": exp.subj_data,
        "time_in_minutes": (Date.now() - exp.startT) / 60000
      };
      
	  setTimeout(function (){
	  	turk.submit(exp.data);
	  }, 1000);
    }
  });

  return slides;
}

/// initialize experiment
function init() {

  // exp.trials = [];
  // exp.catch_trials = [];
  // exp.conditions = _.shuffle(["block_1","block_2","block_3","block_4","Block_5","block_6"]);
  // exp.participant_condition = exp.conditions.pop()
  //
  // if (exp.participant_condition == "block_1") {
  // 	var stimuli = block_1
  // } else if (exp.participant_condition == "block_2") {
  // 	var stimuli = block_2
  // } else if (exp.participant_condition == "block_3") {
  // 	var stimuli = block_3
  // } else if (exp.participant_condition == "block_4") {
  // 	var stimuli = block_4
  // } else if (exp.participant_condition == "block_5") {
  // 	var stimuli = block_5
  // } else {
  // 	var stimuli = block_6
  // }

  var stimuli = all_stims;

  exp.stimuli_block1 = _.shuffle(stimuli); //call _.shuffle(stimuli) to randomize the order;
  exp.stimuli_block2 = _.shuffle(stimuli); //call _.shuffle(stimuli) to randomize the order;
  exp.stimuli_block3 = _.shuffle(stimuli); //call _.shuffle(stimuli) to randomize the order;
  exp.stimuli_block4 = _.shuffle(stimuli); //call _.shuffle(stimuli) to randomize the order;
  exp.stimuli_block5 = _.shuffle(stimuli); //call _.shuffle(stimuli) to randomize the order;
  exp.stimuli_block6 = _.shuffle(stimuli); //call _.shuffle(stimuli) to randomize the order;


  // console.log(exp.stimuli)
  // exp.n_trials = exp.stimuli.length;

  // exp.condition = _.sample(["context", "no-context"]); //can randomize between subjects conditions here

  exp.system = {
    Browser: BrowserDetect.browser,
    OS: BrowserDetect.OS,
    screenH: screen.height,
    screenUH: exp.height,
    screenW: screen.width,
    screenUW: exp.width
  };

  //blocks of the experiment:
  // blocks = ["block_1", "block_2", "block_3", "block_4", "block_5", "block_6"];
//   blocks = _.shuffle(blocks);
//   exp.structure = [
//     "i0",
// 	"sound_test",
// 	"practice_instructions",
// 	"practice_trial_1",
// 	"practice_trial_2",
// 	"startExp"];
//   exp.structure.push(blocks);
//   exp.structure.push("follow_up","subj_info","thanks");

// exp.structure = [
//     "i0",
// 	"sound_test",
// 	"practice_instructions",
// 	"practice_trial_1",
// 	"practice_trial_2",
// 	"startExp",
// 	"block_1",
// 	"block_2",
// 	"follow_up",
// 	"subj_info",
// 	"thanks"];

var blocks = ["block_1","block_2","block_3","block_4","block_5","block_6"];
blocks = _.shuffle(blocks);
exp.structure = [
    "i0",
	"sound_test",
	"practice_instructions",
	"practice_trial_1",
	"practice_trial_2",
	"startExp"];
exp.structure = exp.structure.concat(blocks);
// exp.structure = exp.structure.concat(["follow_up","subj_info","thanks"]);
exp.structure = exp.structure.concat(["follow_up","subj_info","thanks"]);

  exp.data_trials = [];

  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length();
  //this does not work if there are stacks of stims (but does work for an experiment with this structure)
  //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

// this is for prolific
  $("#start_button").click(function() {
    exp.go();
  });

  exp.go(); //show first slide
}
