import {
  createCommandService,
  createEventBusService,
  createGitService,
  createPromptService,
} from '@/services';

const commandService = createCommandService();
const gitService = createGitService();
const eventBusService = createEventBusService();
const promptService = createPromptService();

const container = {
  Command: commandService,
  Git: gitService,
  EventBus: eventBusService,
  Prompt: promptService,
};

type Container = typeof container;

export default container;
export type { Container };
