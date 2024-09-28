import {
  createPrompt,
  makeTheme,
  useKeypress,
  useMemo,
  usePagination,
  useState,
} from '@inquirer/core';
import figures from '@inquirer/figures';
import { cursorHide } from 'ansi-escapes';
import colors from 'yoctocolors';

import { BranchSummary } from '@/services/gitService/types';

import { COMMAND_KEYS } from '@/shared/constants';
import { wrapi } from '@/shared/helpers';

import container from '@/container';

type DeletePromptConfig = {
  branchSummary: BranchSummary;
};

type KeypressEvent = {
  sequence: string;
  name: string;
  ctrl: boolean;
  shift: boolean;
  meta: boolean;
};

const deletePrompt = createPrompt<string, DeletePromptConfig>((config, _done) => {
  const { EventBus } = container;
  const { all, current } = config.branchSummary;

  const [currentSelection, setCurrentSelection] = useState<number>(0);
  const [deletedBranches, setDeletedBranches] = useState<string[]>([]);

  const theme = makeTheme({
    icon: { cursor: colors.red(figures.cross) },
    style: {
      disabled: (text: string) => colors.dim(`${figures.star}  ${text}`),
      highlight: (text: string) => text,
    },
  });

  const branchNames = useMemo(() => {
    return all.filter((branch) => branch !== current);
  }, [all]);

  const MAX_INDEX = all.length - 2;

  const isBranchDeleted = (index: number) => {
    return deletedBranches.includes(branchNames[index] ?? '');
  };

  const selectPrevious = () => {
    setCurrentSelection(wrapi(currentSelection + 1, MAX_INDEX));
  };

  const selectNext = () => {
    setCurrentSelection(wrapi(currentSelection - 1, MAX_INDEX));
  };

  const deleteBranch = (branchName: string) => {
    setDeletedBranches([...deletedBranches, branchName]);
  };

  const restoreBranch = (branchName: string) => {
    const newBranches = deletedBranches.filter((branch) => branch !== branchName);

    setDeletedBranches(newBranches);
  };

  const isKeyInCommandKeys = (keyCommands: readonly string[], keyName: string) => {
    return keyCommands.some((k) => k === keyName);
  };

  // TODO - refactor key logic
  // @ts-expect-error: Type provided by the library is wrong https://github.com/SBoudrias/Inquirer.js/blob/main/packages/core/src/lib/key.mts
  useKeypress((key: KeypressEvent) => {
    const keyName = key.name;

    if (isKeyInCommandKeys(COMMAND_KEYS.QUIT.keys, keyName)) {
      EventBus.emit('quit-prompt');
    }

    if (isKeyInCommandKeys(COMMAND_KEYS.SELECT_NEXT.keys, keyName)) {
      selectNext();
    }

    if (isKeyInCommandKeys(COMMAND_KEYS.SELECT_PREVIOUS.keys, keyName)) {
      selectPrevious();
    }

    if (isKeyInCommandKeys(COMMAND_KEYS.DELETE_BRANCH.keys, keyName)) {
      const currentSelectedBranchName = branchNames[currentSelection] ?? '';

      if (isBranchDeleted(currentSelection)) {
        restoreBranch(currentSelectedBranchName);
      } else {
        deleteBranch(currentSelectedBranchName);
      }
    }
  });

  const page = usePagination({
    items: branchNames,
    active: currentSelection,
    renderItem({ item, isActive, index }) {
      if (isBranchDeleted(index)) {
        theme.icon.cursor = figures.tick;
      }

      const result = isActive ? theme.style.highlight : (string: string) => string;
      const cursor = isActive ? theme.icon.cursor : ` `;

      return result(
        ` ${isBranchDeleted(index) ? `${colors.green(cursor)} ${colors.strikethrough(colors.dim(item))}` : `${colors.red(cursor)} ${item}`}`,
      );
    },
    pageSize: 10,
    loop: true,
  });

  const header = `
  Welcome to ${colors.bold(colors.yellow('G'))}it ${colors.bold(colors.yellow('B'))}ranch ${colors.bold(colors.yellow('U'))}tils!

  ${colors.red('Delete/Restore:')}      [${colors.redBright('Space')}]
  ${colors.red('Delete/Restore All:')}  [${colors.redBright('Shift + Space')}]
`;
  const currentBranchName = colors.bgGreen(
    colors.black(` ${figures.star} ${current} (current branch)`),
  );

  const returnString = `${header}\n${currentBranchName}\n${page}${cursorHide}`;

  return returnString;
});

export { deletePrompt };
