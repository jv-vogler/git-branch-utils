import { deletePrompt } from '@/prompts';

import container from '@/container';

export default {
  start: async () => {
    const { Git } = container;

    const result = await Git.getLocalBranches();

    try {
      await deletePrompt({ container, branchSummary: result });
    } catch (_) {
      //
    }

    return;
  },
};
