import { useQuiz } from "../context/useQuiz";

function FinishScreen() {
  const { points, maxPoints, highScore } = useQuiz();

  const percentage = Math.ceil((points / maxPoints) * 100);
  //   const highScore = localStorage.getItem("highScore") || 0;
  let emoji;
  if (percentage === 100) emoji = "🎉";
  else if (percentage >= 80) emoji = "👏";
  else if (percentage >= 60) emoji = "👍";
  else emoji = "👎";
  return (
    <div>
      <p className="result">
        <span>{emoji}</span>Your score is<strong> {points}</strong> out of{" "}
        {maxPoints} ({percentage}
        %)
      </p>
      <p className="highscore"> Your high score is {highScore}</p>
    </div>
  );
}

export default FinishScreen;
