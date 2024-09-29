import { deletePrompt } from '@/prompts';

import container from '@/container';

export default {
  start: async () => {
    const { Git, EventBus } = container;

    EventBus.on('delete-branch', async (branchName) => {
      await Git.deleteLocalBranches(branchName);
      EventBus.emit('branch-deleted', branchName);
    });

    EventBus.on('restore-branch', async (branchMetadata) => {
      await Git.restoreLocalBranch(branchMetadata);
      EventBus.emit('branch-restored', branchMetadata.name);
    });

    const result = await Git.getLocalBranches();

    if (result.all.length <= 1) {
      throw new Error('No branches to delete');
    }

    await deletePrompt({ branchSummary: result });

    return;
  },
};
