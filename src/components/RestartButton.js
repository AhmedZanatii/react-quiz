import { useQuiz } from "../context/useQuiz";

function RestartButton() {
  const { dispatch } = useQuiz();
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Requiz
    </button>
  );
}

export default RestartButton;
