const font = {
  A: `
 ###
#   #
#####
#   #
#   #`,
  F: `
 ####
#
#####
#
#    `,
  B: `
####
#   #
#####
#   #
#### `,
  C: `
 ####
#
#
#
 ####`,
  D: `
####
#   #
#   #
#   #
#### `,
  E: `
 ####
#
#####
#
 ####`,
  G: `
 ####
#
#
#   #
 ### `,
  H: `
#   #
#   #
 ###
#   #
#   #`,
  I: `
## ##
  #
  #
  #
## ##`,
  J: `
  ##
    #
    #
    #
#### `,
  K: `
#   #
#   #
####
#   #
#   #`,
  L: `
#
#
#
#
 ####`,
  M: `
 # #
# # #
# # #
# # #
#   #`,
  N: `
 #  #
# # #
# # #
# # #
#  # `,
  O: `
 ###
#   #
#   #
#   #
 ###  `,
  P: `
 ###
#   #
####
#
#    `,
  Q: `
 ###
#   #
#   #
# # #
 ### `,
  R: `
 ###
#   #
#   #
####
#   #`,
  S: `
 ####
#
#####
    #
#### `,
  T: `
## ##
  #
  #
  #
  # `,
  U: `
#   #
#   #
#   #
#   #
 ### `,
  V: `
#   #
#   #
#   #
#   #
#### `,
  W: `
#   #
# # #
# # #
# # #
 # # `,
  X: `
#   #
## ##
  #
## ##
#   #`,
  Y: `
#   #
#   #
## ##
  #
  # `,
  Z: `
#####
    #
 ###
#
#####`,
  zero: `
 ###
#   #
# # #
#   #
 ### `,
  one: `
####
    #
    #
    #
    #`,
  two: `
####
    #
#####
#
 ####`,
  three: `
####
    #
#####
    #
####`,
  four: `
#   #
#   #
 ####
    #
    #`,
  five: `
#####
#
 ###
    #
#####`,
  six: `
 ####
#
####
#   #
 ### `,
  seven: `
####
    #
#####
    #
    #`,
  eight: `
 ###
#   #
#####
#   #
 ### `,
  nine: `
 ###
#   #
 ####
    #
#### `,
  question: `
 ###
#   #
  ##

  #`,
  exclam: `
  #
  #
  #

  #`,
  period: `




  #  `,
};

const fontMap = {
  A: { name: "A", shape: "A" },
  B: { name: "B", shape: "B" },
  C: { name: "C", shape: "C" },
  D: { name: "D", shape: "D" },
  E: { name: "E", shape: "E" },
  F: { name: "F", shape: "F" },
  G: { name: "G", shape: "G" },
  H: { name: "H", shape: "H" },
  I: { name: "I", shape: "I" },
  J: { name: "J", shape: "J" },
  K: { name: "K", shape: "K" },
  L: { name: "L", shape: "L" },
  M: { name: "M", shape: "M" },
  N: { name: "N", shape: "N" },
  O: { name: "O", shape: "O" },
  P: { name: "P", shape: "P" },
  Q: { name: "Q", shape: "Q" },
  R: { name: "R", shape: "R" },
  S: { name: "S", shape: "S" },
  T: { name: "T", shape: "T" },
  U: { name: "U", shape: "U" },
  V: { name: "V", shape: "V" },
  W: { name: "W", shape: "W" },
  X: { name: "X", shape: "X" },
  Y: { name: "Y", shape: "Y" },
  Z: { name: "Z", shape: "Z" },

  // ....

  a: { name: "a", shape: "A" },
  b: { name: "b", shape: "B" },
  c: { name: "c", shape: "C" },
  d: { name: "d", shape: "D" },
  e: { name: "e", shape: "E" },
  f: { name: "f", shape: "F" },
  g: { name: "g", shape: "G" },
  h: { name: "h", shape: "H" },
  i: { name: "i", shape: "I" },
  j: { name: "j", shape: "J" },
  k: { name: "k", shape: "K" },
  l: { name: "l", shape: "L" },
  m: { name: "m", shape: "M" },
  n: { name: "n", shape: "N" },
  o: { name: "o", shape: "O" },
  p: { name: "p", shape: "P" },
  q: { name: "q", shape: "Q" },
  r: { name: "r", shape: "R" },
  s: { name: "s", shape: "S" },
  t: { name: "t", shape: "T" },
  u: { name: "u", shape: "U" },
  v: { name: "v", shape: "V" },
  w: { name: "w", shape: "W" },
  x: { name: "x", shape: "X" },
  y: { name: "y", shape: "Y" },
  z: { name: "z", shape: "Z" },
  // ....

  0: { name: "zero", shape: "zero" },
  1: { name: "one", shape: "one" },
  2: { name: "two", shape: "two" },
  3: { name: "three", shape: "three" },
  4: { name: "four", shape: "four" },
  5: { name: "five", shape: "five" },
  6: { name: "six", shape: "six" },
  7: { name: "seven", shape: "seven" },
  8: { name: "eight", shape: "eight" },
  9: { name: "nine", shape: "nine" },
  // ....

  "?": { name: "question", shape: "question" },
  "!": { name: "exclam", shape: "exclam" },
  ".": { name: "period", shape: "period" },
};
