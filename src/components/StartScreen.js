import { useQuiz } from "../context/useQuiz";

function StartScreen() {
  const { QuestionsNum, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to the react Quiz!</h2>
      <h3>{QuestionsNum} questions to test you the react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "start" });
        }}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
