import simpleGit, { GitError as SimpleGitError } from 'simple-git';

import { type BranchSummary } from '@/services/gitService/types';

import { GitError } from '@/shared/errors';
import { unexpectedErrorIn } from '@/shared/errors/helpers';

const git = simpleGit();

const createGitService = () => ({
  checkoutBranch: (_branchName: string) => {
    return;
  },

  deleteLocalBranches: (_branches: string[] | string) => {
    return;
  },

  getLocalBranches: async (): Promise<BranchSummary> => {
    try {
      return await git.branchLocal();
    } catch (error) {
      if (error instanceof SimpleGitError) {
        const commands = error.task?.commands;

        throw new GitError(error.message, {
          options: {
            cause: error,
            details: { commands },
          },
        });
      }

      throw unexpectedErrorIn('getLocalBranches');
    }
  },

  restoreBranches: (_branches: string[] | string) => {
    return;
  },
});

export { createGitService };
