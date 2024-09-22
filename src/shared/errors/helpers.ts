type ErrorKeysFactory = typeof errorKeysFactory;

type ErrorName = keyof ErrorKeysFactory;

type ErrorKeys = ReturnType<ErrorKeysFactory[keyof ErrorKeysFactory]>;

const errorKeysFactory = {
  // Base Error
  AppError: () => ['AppError'] as const,

  // Git Errors
  GitError: () => [...errorKeysFactory.AppError(), 'GitError'] as const,

  // Prompt Errors
  PromptError: () => [...errorKeysFactory.AppError(), 'PromptError'] as const,
};

const unexpectedErrorIn = (functionName: string) => {
  return new Error(`Unexpected error in ${functionName}`);
};

export { errorKeysFactory, unexpectedErrorIn };
export type { ErrorName, ErrorKeys };
