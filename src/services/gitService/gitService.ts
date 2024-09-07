import { BranchSummary } from '@/services/gitService/types';
import simpleGit from 'simple-git';

const git = simpleGit();

const createGitService = () => ({
  checkoutBranch: (_branchName: string) => {
    return;
  },

  deleteLocalBranches: (_branches: string[] | string) => {
    return;
  },

  getLocalBranches: async (): Promise<BranchSummary> => {
    return await git.branchLocal();
  },

  restoreBranches: (_branches: string[] | string) => {
    return;
  },
});

export { createGitService };
