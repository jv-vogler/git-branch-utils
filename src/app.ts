import { deletePrompt } from '@/prompts';

import container from '@/container';

export default {
  start: async () => {
    const { Git, EventBus } = container;

    const result = await Git.getLocalBranches();

    EventBus.on('delete-branch', async (branchName) => {
      try {
        await Git.deleteLocalBranches(branchName);
        EventBus.emit('branch-deleted', branchName);
      } catch (error) {
        console.log('Error deleting branch: ', error);
      }
    });

    EventBus.on('restore-branch', async (branchMetadata) => {
      try {
        await Git.restoreLocalBranch(branchMetadata);
        EventBus.emit('branch-restored', branchMetadata.name);
      } catch (error) {
        console.log('Error deleting branch: ', error);
      }
    });

    try {
      await deletePrompt({ branchSummary: result });
    } catch (_) {
      //
    }

    return;
  },
};
