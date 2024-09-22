import simpleGit from 'simple-git';

import { BranchSummary } from '@/services/gitService/types';

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
