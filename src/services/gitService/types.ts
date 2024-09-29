import { createGitService } from '@/services';

type GitService = ReturnType<typeof createGitService>;

type BranchSummaryBranch = {
  current: boolean;
  name: string;
  commit: string;
  label: string;
  linkedWorkTree: boolean;
};

type BranchSummary = {
  detached: boolean;
  current: string;
  all: string[];
  branches: Record<string, BranchSummaryBranch>;
};

export type { GitService, BranchSummary, BranchSummaryBranch };
