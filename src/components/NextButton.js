function NextButton({ dispatch, answer, QuestionsNum, index }) {
  if (answer === null) return null;
  if (index === QuestionsNum - 1)
    return (
      <button
        className="btn btn-ui "
        onClick={() => {
          dispatch({ type: "finished" });
        }}
      >
        Finish
      </button>
    );
  if (index < QuestionsNum - 1)
    return (
      <button
        className="btn btn-ui "
        onClick={() => {
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    );
}

export default NextButton;
