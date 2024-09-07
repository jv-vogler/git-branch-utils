import container from '@/container';

export default {
  start: async () => {
    const { Git } = container;

    console.log('Hello World');

    const result = await Git.getLocalBranches();

    console.log(result);

    return;
  },
};
