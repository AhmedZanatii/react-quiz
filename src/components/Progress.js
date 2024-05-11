import { useQuiz } from "../context/useQuiz";
function Progress() {
  const { index, QuestionsNum, points, maxPoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={QuestionsNum}
      ></progress>
      <p>
        Questions <strong>{index + 1}</strong>/<strong>{QuestionsNum}</strong>
      </p>
      <p>
        <strong>{points}</strong>/<strong>{maxPoints}</strong>
      </p>
    </header>
  );
}

export default Progress;
