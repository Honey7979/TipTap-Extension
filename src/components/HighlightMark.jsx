// src/HighlightMark.js
import { Mark } from '@tiptap/core';

const HighlightMark = Mark.create({
  name: 'highlight',

  addOptions() {
    return {
      color: 'yellow',
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[style="background-color: yellow"]', 
      },
    ];
  },

  renderHTML({ mark }) {
    return [
      'span',
      {
        style: 'background-color: yellow;', 
        class: 'highlight-mark',
      },
      0,
    ];
  },

  addCommands() {
    return {
      setHighlight: () => ({ commands }) => {
        return commands.toggleMark('highlight'); 
      },
    };
  },
});

export default HighlightMark;
