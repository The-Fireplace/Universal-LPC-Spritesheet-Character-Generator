const animationRowsLayout = {
  "thrust-n": 3,
  "thrust-w": 4,
  "thrust-s": 5,
  "thrust-e": 6,
  "walk-n": 7,
  "walk-w": 8,
  "walk-s": 9,
  "walk-e": 10,
  "slash-n": 11,
  "slash-w": 12,
  "slash-s": 13,
  "slash-e": 14
}

const customAnimations = {
  tool_rod: {
    frameSize: 128,
    frames: [
      ["thrust-n,0", "thrust-n,1", "thrust-n,2", "thrust-n,3", "thrust-n,4", "thrust-n,5", "thrust-n,4", "thrust-n,4", "thrust-n,4", "thrust-n,5", "thrust-n,4", "thrust-n,2", "thrust-n,3"],
      ["thrust-w,0", "thrust-w,1", "thrust-w,2", "thrust-w,3", "thrust-w,4", "thrust-w,5", "thrust-w,4", "thrust-w,4", "thrust-w,4", "thrust-w,5", "thrust-w,4", "thrust-w,2", "thrust-w,3"],
      ["thrust-s,0", "thrust-s,1", "thrust-s,2", "thrust-s,3", "thrust-s,4", "thrust-s,5", "thrust-s,4", "thrust-s,4", "thrust-s,4", "thrust-s,5", "thrust-s,4", "thrust-s,2", "thrust-s,3"],
      ["thrust-e,0", "thrust-e,1", "thrust-e,2", "thrust-e,3", "thrust-e,4", "thrust-e,5", "thrust-e,4", "thrust-e,4", "thrust-e,4", "thrust-e,5", "thrust-e,4", "thrust-e,2", "thrust-e,3"],
    ]
  },
  slash_128: {
    frameSize: 128,
    frames: [
      ["slash-n,0", "slash-n,1", "slash-n,2", "slash-n,3", "slash-n,4", "slash-n,5"],
      ["slash-w,0", "slash-w,1", "slash-w,2", "slash-w,3", "slash-w,4", "slash-w,5"],
      ["slash-s,0", "slash-s,1", "slash-s,2", "slash-s,3", "slash-s,4", "slash-s,5"],
      ["slash-e,0", "slash-e,1", "slash-e,2", "slash-e,3", "slash-e,4", "slash-e,5"]
    ]
  },
  thrust_oversize: {
    frameSize: 192,
    frames: [
      ["thrust-n,0", "thrust-n,1", "thrust-n,2", "thrust-n,3", "thrust-n,4", "thrust-n,5", "thrust-n,6", "thrust-n,7"],
      ["thrust-w,0", "thrust-w,1", "thrust-w,2", "thrust-w,3", "thrust-w,4", "thrust-w,5", "thrust-w,6", "thrust-w,7"],
      ["thrust-s,0", "thrust-s,1", "thrust-s,2", "thrust-s,3", "thrust-s,4", "thrust-s,5", "thrust-s,6", "thrust-s,7"],
      ["thrust-e,0", "thrust-e,1", "thrust-e,2", "thrust-e,3", "thrust-e,4", "thrust-e,5", "thrust-e,6", "thrust-e,7"]
    ]
  },
  slash_oversize: {
    frameSize: 192,
    frames: [
      ["slash-n,0", "slash-n,1", "slash-n,2", "slash-n,3", "slash-n,4", "slash-n,5"],
      ["slash-w,0", "slash-w,1", "slash-w,2", "slash-w,3", "slash-w,4", "slash-w,5"],
      ["slash-s,0", "slash-s,1", "slash-s,2", "slash-s,3", "slash-s,4", "slash-s,5"],
      ["slash-e,0", "slash-e,1", "slash-e,2", "slash-e,3", "slash-e,4", "slash-e,5"]
    ]
  },
  walk_128: {
    frameSize: 128,
    frames: [
      ["walk-n,1", "walk-n,2", "walk-n,3", "walk-n,4", "walk-n,5", "walk-n,6", "walk-n,7", "walk-n,8"],
      ["walk-w,1", "walk-w,2", "walk-w,3", "walk-w,4", "walk-w,5", "walk-w,6", "walk-w,7", "walk-w,8"],
      ["walk-s,1", "walk-s,2", "walk-s,3", "walk-s,4", "walk-s,5", "walk-s,6", "walk-s,7", "walk-s,8"],
      ["walk-e,1", "walk-e,2", "walk-e,3", "walk-e,4", "walk-e,5", "walk-e,6", "walk-e,7", "walk-e,8"]
    ]
  },
  thrust_128: {
    frameSize: 128,
    frames: [
      ["thrust-n,0", "thrust-n,1", "thrust-n,2", "thrust-n,3", "thrust-n,4", "thrust-n,5", "thrust-n,6", "thrust-n,7"],
      ["thrust-w,0", "thrust-w,1", "thrust-w,2", "thrust-w,3", "thrust-w,4", "thrust-w,5", "thrust-w,6", "thrust-w,7"],
      ["thrust-s,0", "thrust-s,1", "thrust-s,2", "thrust-s,3", "thrust-s,4", "thrust-s,5", "thrust-s,6", "thrust-s,7"],
      ["thrust-e,0", "thrust-e,1", "thrust-e,2", "thrust-e,3", "thrust-e,4", "thrust-e,5", "thrust-e,6", "thrust-e,7"]
    ]
  },
  slash_reverse_oversize: {
    frameSize: 192,
    frames: [
      ["slash-n,5", "slash-n,4", "slash-n,3", "slash-n,2", "slash-n,1", "slash-n,0"],
      ["slash-w,5", "slash-w,4", "slash-w,3", "slash-w,2", "slash-w,1", "slash-w,0"],
      ["slash-s,5", "slash-s,4", "slash-s,3", "slash-s,2", "slash-s,1", "slash-s,0"],
      ["slash-e,5", "slash-e,4", "slash-e,3", "slash-e,2", "slash-e,1", "slash-e,0"]
    ]
  },
  whip_oversize: {
    frameSize: 192,
    frames: [
      ["slash-n,0", "slash-n,1", "slash-n,4", "slash-n,5", "slash-n,3", "slash-n,2", "slash-n,2", "slash-n,1"],
      ["slash-w,0", "slash-w,1", "slash-w,5", "slash-w,4", "slash-w,3", "slash-w,3", "slash-w,3", "slash-w,2"],
      ["slash-s,0", "slash-s,1", "slash-s,5", "slash-s,4", "slash-s,3", "slash-s,3", "slash-s,2", "slash-w,1"],
      ["slash-e,0", "slash-e,1", "slash-e,5", "slash-e,4", "slash-e,3", "slash-e,3", "slash-e,3", "slash-e,2"]
    ]
  },
  tool_whip: {
    frameSize: 192,
    frames: [
      ["slash-n,0", "slash-n,1", "slash-n,4", "slash-n,5", "slash-n,3", "slash-n,2", "slash-n,2", "slash-n,1"],
      ["slash-w,0", "slash-w,1", "slash-w,5", "slash-w,4", "slash-w,3", "slash-w,3", "slash-w,3", "slash-w,2"],
      ["slash-s,0", "slash-s,1", "slash-s,5", "slash-s,4", "slash-s,3", "slash-s,3", "slash-s,2", "slash-s,1"],
      ["slash-e,0", "slash-e,1", "slash-e,5", "slash-e,4", "slash-e,3", "slash-e,3", "slash-e,3", "slash-e,2"]
    ]
  },
}
