import simpleGit, { GitError as SimpleGitError } from 'simple-git';

import { type BranchSummary } from '@/services/gitService/types';

import { GitError } from '@/shared/errors';
import { unexpectedErrorIn } from '@/shared/errors/helpers';
import { BranchMetadata } from '@/shared/types';

const git = simpleGit();

const createGitService = () => ({
  deleteLocalBranches: async (branches: string[] | string) => {
    try {
      const localBranches = typeof branches === 'string' ? [branches] : branches;

      await git.deleteLocalBranches(localBranches, true);
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

      throw unexpectedErrorIn('deleteLocalBranches');
    }
  },

  restoreLocalBranch: async (branch: BranchMetadata) => {
    try {
      await git.branch([branch.name, branch.commit]);
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

      throw unexpectedErrorIn('restoreLocalBranch');
    }
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
});

export { createGitService };
