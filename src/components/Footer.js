import { useQuiz } from "../context/useQuiz";
import NextButton from "./NextButton";
import Timer from "./Timer";
function Footer() {
  const { dispatch, answer, QuestionsNum, index, SecondRemaining } = useQuiz();
  return (
    <footer>
      <Timer dispatch={dispatch} SecondRemaining={SecondRemaining} />
      <NextButton
        dispatch={dispatch}
        answer={answer}
        QuestionsNum={QuestionsNum}
        index={index}
      />
    </footer>
  );
}

export default Footer;
