const COMMAND_KEYS = {
  SELECT_NEXT: {
    keys: ['up'],
    ctrl: false,
  },
  SELECT_PREVIOUS: {
    keys: ['down'],
    ctrl: false,
  },
  DELETE_BRANCH: {
    keys: ['space'],
    ctrl: false,
  },
  RESTORE_BRANCH: {
    keys: ['space', 'r'],
    ctrl: false,
  },
  QUIT: {
    keys: ['escape', 'q'],
    ctrl: false,
  },
} as const;

export { COMMAND_KEYS };
