import { deletePrompt } from '@/prompts';

import container from '@/container';

export default {
  start: async () => {
    const { Git, EventBus } = container;

    const result = await Git.getLocalBranches();

    EventBus.on('quit-prompt', () => {
      //
    });

    EventBus.on('delete-branch', (branchName) => {
      EventBus.emit('branch-deleted', branchName);
    });

    EventBus.on('restore-branch', (branchName) => {
      EventBus.emit('branch-restored', branchName);
    });

    try {
      await deletePrompt({ branchSummary: result });
    } catch (_) {
      //
    }

    return;
  },
};
