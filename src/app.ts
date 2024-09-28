import { deletePrompt } from '@/prompts';

import container from '@/container';

export default {
  start: async () => {
    const { Git, EventBus } = container;

    const result = await Git.getLocalBranches();

    EventBus.on('quit-prompt', () => {
      //
    });

    try {
      await deletePrompt({ branchSummary: result });
    } catch (_) {
      //
    }

    return;
  },
};
