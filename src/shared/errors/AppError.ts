import { type ErrorKeys, type ErrorName, errorKeysFactory } from '@/shared/errors/helpers';

type Exception<TDetails = unknown> = {
  name: ErrorName;
  keys: ErrorKeys;
  details?: TDetails;
};

type Props = {
  options?: {
    cause?: unknown;
  };
};

class AppError extends Error implements Exception {
  public override readonly name: ErrorName;
  public readonly keys: ErrorKeys;

  constructor(message: string, { options }: Props) {
    super(message, options);
    this.name = 'AppError';
    this.keys = errorKeysFactory.AppError();

    Error.captureStackTrace(this, AppError);
  }

  is = (errorName: ErrorName): boolean => {
    return this.keys.some((key: ErrorName) => key === errorName);
  };
}

export { AppError };
