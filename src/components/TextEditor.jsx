import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import HighlightMark from './HighlightMark'; 
import '../TextEditor.css'

const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, HighlightMark],
    content: '<p>Try highlighting and adding comments to this text!</p>',
  });

  const handleHighlight = () => {
    if (!editor) return;
    editor.chain().focus().setHighlight('yellow').run();
  };

  const handleRemoveHighlight = () => {
    if (!editor) return;
    const isHighlighted = editor.isActive('highlight');
    
    if (isHighlighted) {
      editor.chain().focus().toggleMark('highlight').run();
    }
  };

  return (
    <div className="editor-container">
      <div>
        <button onClick={handleHighlight}>Highlight in Yellow</button>
        <button onClick={handleRemoveHighlight}>Remove Highlight</button>
      </div>

      <div className="tiptap-editor-content">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextEditor;



