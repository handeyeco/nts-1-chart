const controls = [
  {
    name: "Envelope Generator Type",
    cc: 14,
    location: "EG - TYPE",
    desc: "Selects the amplitude EG type.",
    values:
      "ADSR ( A d s r ), AHR ( A H r ), AR ( A r ), AR loop ( A r L o o p ), Open ( o P E n )",
  },
  {
    name: "Envelope Generator Attack",
    cc: 16,
    location: "EG - A",
    desc: "Sets the time required for the EG to reach it's maximum level once a note is played",
    values: null,
  },
  {
    name: "Envelope Generator Release",
    cc: 19,
    location: "EG - B",
    desc: "Sets the time required for the EG to reach 0 once a note has ended.",
    values: null,
  },
  {
    name: "Tremolo Depth",
    cc: 20,
    location: "EG + B",
    desc: "Sets the tremolo depth.",
    values: "0-100",
  },
  {
    name: "Tremolo Rate",
    cc: 21,
    location: "EG + A",
    desc: "Sets the tremolo frequency.",
    values: "0-60",
  },
  {
    name: "Oscillator LFO Rate",
    cc: 24,
    location: "OSC + A",
    desc: "Sets the LFO frequency.",
    values: "0-30",
  },
  {
    name: "Oscillator LFO Depth",
    cc: 26,
    location: "OSC + B",
    desc: "Sets the amount of pitch or shape modulation.",
    values: "Pitch 100-001 -- Shape 001-100",
  },
  {
    name: "Modulation Time",
    cc: 28,
    location: "MOD - A",
    desc: "Sets the modulation speed.",
    values: null,
  },
  {
    name: "Modulation Depth",
    cc: 29,
    location: "MOD - B",
    desc: "Sets the intensity of the effect.",
    values: null,
  },
  {
    name: "Delay Time",
    cc: 30,
    location: "DELAY - A",
    desc: "Sets the delay time.",
    values: null,
  },
  {
    name: "Delay Depth",
    cc: 31,
    location: "DELAY - B",
    desc: "Sets the intensity of the effect.",
    values: null,
  },
  {
    name: "Delay Mix",
    cc: 33,
    location: "DELAY + B",
    desc: "Sets the dry/wet balance of the effect.",
    values: "Dry 100-001 -- Wet 001-100",
  },
  {
    name: "Reverb Time",
    cc: 34,
    location: "REVERB - A",
    desc: "Sets the reverb time.",
    values: null,
  },
  {
    name: "Reverb Depth",
    cc: 35,
    location: "REVERB - B",
    desc: "Sets the intensity of the effect.",
    values: null,
  },
  {
    name: "Reverb Mix",
    cc: 36,
    location: "REVERB + B",
    desc: "Sets the dry/wet balance of the effect.",
    values: "Dry 100-001 -- Wet 001-100",
  },
  {
    name: "Filter Type",
    cc: 42,
    location: "FILTER - TYPE",
    desc: "Selects the filter type.",
    values:
      "Low pass-2 pole ( L p 2 ), Low pass-4 pole ( L p 4 ), Band pass-2 pole ( b p 2 ), Band pass-4 pole ( b p 4 ), High pass-2 pole ( H p 2 ), High pass-4 pole ( H p 4 ), OFF ( o f f )",
  },
  {
    name: "Filter Cutoff",
    cc: 43,
    location: "FILTER - A",
    desc: "Sets the cutoff frequency, altering the brightness of the sound.",
    values: null,
  },
  {
    name: "Filter Resonance",
    cc: 44,
    location: "FILTER - B",
    desc: "Adds emphasis to the overtones occuring at the cutoff frequency.",
    values: null,
  },
  {
    name: "Filter Sweep Depth",
    cc: 45,
    location: "FILTER + B",
    desc: "Sets the direction (up/down) and depth of the cutoff sweep.",
    values: "Up 100-001 -- Down 001-100",
  },
  {
    name: "Filter Sweep Rate",
    cc: 46,
    location: "FILTER + A",
    desc: "Sets the cutoff sweep frequency.",
    values: "0-30",
  },
  {
    name: "Oscillator Type",
    cc: 53,
    location: "OSC - TYPE",
    desc: "Selects the waveform.",
    values:
      "Sawtooth ( s A U ), Triangle ( t r I ), Square ( s q r ), VPM ( U P N ), User OSC*",
  },
  {
    name: "Oscillator Shape",
    cc: 54,
    location: "OSC - A",
    desc: "Amount of wave-shaping applied.",
    values: null,
  },
  {
    name: "Oscillator Alt",
    cc: 55,
    location: "OSC - B",
    desc: "Alternate parameter (varies per oscillator).",
    values: null,
  },
  {
    name: "Modulation Type",
    cc: 88,
    location: "MOD - TYPE",
    desc: "Selects the modulation effect.",
    values:
      "OFF ( o f f ), Chorus ( C H o r u s ), Ensemble ( E n s E N b L E ), Phaser ( P H A s E r ), Flanger ( F L A n G E r )",
  },
  {
    name: "Delay Type",
    cc: 89,
    location: "DELAY - TYPE",
    desc: "Selects the delay effect.",
    values:
      "OFF ( o f f ), Stereo ( s t E r E o ), Mono ( N o n o ), Ping Pong ( P I N G P o n g ), High Pass ( H I G H P a s s ), Tape ( t A p E )",
  },
  {
    name: "Reverb Type",
    cc: 90,
    location: "REVERB - TYPE",
    desc: "Selects the reverb effect.",
    values:
      "OFF ( o f f ), Hall ( H A L L ), Plate ( p L A t E ), Space ( S p A C E ), Riser ( r I S E r ), Submarine ( S u b N A r I n E )",
  },
  {
    name: "Arpeggiator Pattern",
    cc: 117,
    location: "ARP + TYPE",
    desc: "Selects the arpeggiator pattern.",
    values:
      "Up ( u p ), Down ( d o U n ), Up-Down ( u - D ), Down-Up ( d - u ), Converge ( C o n U ), Diverge ( d I U ), Conv.-Div. ( C - D ), Div.-Conv. ( d - C ), Random ( r A n d ), Stochastic ( S t o C )",
  },
  {
    name: "Arpeggiator Intervals",
    cc: 118,
    location: "ARP + B",
    desc: null,
    values: "Synced: 16th-64th Tempo: 56-240",
  },
  {
    name: "Arpeggiator Length",
    cc: 119,
    location: "ARP + A",
    desc: "ARP pattern length.",
    values: "1-24",
  },
  {
    name: "Arpeggiator Notes: Octave",
    cc: null,
    location: "ARP + OSC",
    desc: null,
    values: null,
  },
  {
    name: "Arpeggiator Notes: Major Triad",
    cc: null,
    location: "ARP + FILTER",
    desc: null,
    values: null,
  },
  {
    name: "Arpeggiator Notes: Major Suspended",
    cc: null,
    location: "ARP + EG",
    desc: null,
    values: null,
  },
  {
    name: "Arpeggiator Notes: Major Augmented",
    cc: null,
    location: "ARP + MOD",
    desc: null,
    values: null,
  },
  {
    name: "Arpeggiator Notes: Minor Triad",
    cc: null,
    location: "ARP + DELAY",
    desc: null,
    values: null,
  },
  {
    name: "Arpeggiator Notes: Minor Diminished",
    cc: null,
    location: "ARP + REVERB",
    desc: null,
    values: null,
  },
];
