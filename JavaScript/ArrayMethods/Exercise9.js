let studentScores = [
  92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81,
];

const scale_func = (score) => {
  let Grading_scale;
  if (score >= 90 && score <= 100) {
    Grading_scale = "A";
  } else if (score >= 80 && score <= 89) {
    Grading_scale = "B";
  } else if (score >= 70 && score <= 79) {
    Grading_scale = "C";
  } else {
    Grading_scale = "F";
  }

  return Grading_scale;
};

let studentScoresCount = studentScores.reduce(
  (student_scale, score) => {
    let scale = scale_func(score);
    student_scale[scale] += 1;
    return student_scale;
  },
  { A: 0, B: 0, C: 0, F: 0 }
);

console.log(studentScoresCount);
