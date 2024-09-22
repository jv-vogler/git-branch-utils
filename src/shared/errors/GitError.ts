import { AppError } from '@/shared/errors';
import { ErrorKeys, ErrorName, errorKeysFactory } from '@/shared/errors/helpers';

type GitErrorDetails = {
  commands?: string[];
};

type Props = {
  options: {
    cause?: unknown;
    details: GitErrorDetails;
  };
};

class GitError extends AppError {
  public override readonly name: ErrorName;
  public override readonly keys: ErrorKeys;
  public readonly details?: GitErrorDetails;

  constructor(message: string, { options }: Props) {
    super(message, { options });
    this.name = 'GitError';
    this.keys = errorKeysFactory.GitError();
    this.details = options.details;

    Error.captureStackTrace(this, GitError);
  }
}

export { GitError };
