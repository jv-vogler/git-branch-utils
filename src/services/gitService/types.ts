import { createGitService } from '@/services';

export type GitService = ReturnType<typeof createGitService>;

export type BranchSummaryBranch = {
  current: boolean;
  name: string;
  commit: string;
  label: string;
  linkedWorkTree: boolean;
};

export type BranchSummary = {
  detached: boolean;
  current: string;
  all: string[];
  branches: Record<string, BranchSummaryBranch>;
};
