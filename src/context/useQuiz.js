import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const QuizContext = createContext();

const SEC_PER_QUESTION = 30;

const initialState = {
  questions: [],
  //"loading", "error", "ready" ,"active","finished "
  status: "loading",
  index: 0,
  points: 0,
  answer: null,
  highScore: 0,
  SecondRemaining: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, status: "ready", questions: action.payload };
    case "error":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        SecondRemaining: state.questions.length * SEC_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions[state.index];
      console.log(question);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finished":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return {
        ...initialState,
        status: "ready",
        highScore: state.highScore,
        questions: state.questions,
      };
    case "tick":
      return {
        ...state,
        SecondRemaining: state.SecondRemaining - 1,
        status: state.SecondRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("unknown action");
  }
};

function ContextProvider({ children }) {
  const [
    { questions, status, index, answer, points, highScore, SecondRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  const QuestionsNum = questions.length;
  useEffect(() => {
    fetch("http://localhost:8000/questions#")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "error" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        SecondRemaining,
        dispatch,
        maxPoints,
        QuestionsNum,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("useAuth must be used within a AuthProvider");
  return context;
}
export { ContextProvider, useQuiz };
