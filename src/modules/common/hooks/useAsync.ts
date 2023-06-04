import { CanceledError } from "axios";
import { useCallback, useReducer } from "react";

export type AsyncState<T> =
  | {
      status: "idle";
      data: null;
      error: null;
    }
  | {
      status: "pending";
      data: null;
      error: null;
    }
  | {
      status: "success";
      data: T;
      error: null;
    }
  | {
      status: "error";
      data: null;
      error: string;
    };

type Action<T> =
  | {
      type: "pending";
    }
  | {
      type: "resolved";
      data: T;
    }
  | {
      type: "rejected";
      error: string;
    };

function reducer<T>(state: AsyncState<T>, action: Action<T>): AsyncState<T> {
  switch (action.type) {
    case "pending":
      return { status: "pending", data: null, error: null };
    case "resolved":
      return { status: "success", data: action.data, error: null };
    case "rejected":
      return { status: "error", data: null, error: action.error };

    default:
      throw new Error("Invalid type");
  }
}

export const useAsync = <T>() => {
  const initialState: AsyncState<T> = {
    status: "idle",
    data: null,
    error: null,
  };

  const [state, dispatch] = useReducer(reducer<T>, initialState);

  const isIdle = () => status === "idle";
  const isLoading = () => status === "pending";
  const isError = () => status === "error";
  const isSuccess = () => status === "success";

  const run = useCallback((promise: Promise<T>) => {
    dispatch({ type: "pending" });
    promise
      .then((data) => dispatch({ type: "resolved", data }))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        dispatch({ type: "rejected", error: "error" });
      });
  }, []);

  return { data: state.data, isLoading, isIdle, isError, isSuccess, run };
};
