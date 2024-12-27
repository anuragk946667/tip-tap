import {
  useEditor,
  EditorContent,
//   FloatingMenu, 
//   BubbleMenu,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
const extensions = [StarterKit, Underline];
const content = ``;

const Tiptap = ({onEditorContentSave}) => {
  const editor = useEditor ({
    extensions,
    content,
  });
  if (!editor) {
    return null;
  }
  const handleEditorContent = () =>{
    const html = editor.getHTML()
    onEditorContentSave(html)
  }
  return (
    <div>
      <div>
        <button
          onClick={() => editor.chain ().focus ().toggleBold ().run ()}
          disabled={!editor.can ().chain ().focus ().toggleBold ().run ()}
          className={editor.isActive ('bold') ? 'is-active' : ''}
        >
          <strong>B</strong>

        </button>

        <button
          onClick={() => editor.chain ().focus ().toggleStrike ().run ()}
          disabled={!editor.can ().chain ().focus ().toggleStrike ().run ()}
          className={editor.isActive ('strike') ? 'is-active' : ''}
        >
          <s>S</s>

        </button>

        <button
          onClick={() => editor.chain ().focus ().toggleCode ().run ()}
          disabled={!editor.can ().chain ().focus ().toggleCode ().run ()}
          className={editor.isActive ('code') ? 'is-active' : ''}
        >
          codeblock

        </button>

        <button
          onClick={() => editor.chain ().focus ().toggleUnderline ().run ()}
          className={editor.isActive ('underline') ? 'is-active' : ''}
        >
          Toggle underline
        </button>

        <button
          onClick={() => editor.chain ().focus ().setUnderline ().run ()}
          disabled={editor.isActive ('underline')}
        >
          Set underline
        </button>

        <button
          onClick={() => editor.chain ().focus ().setParagraph ().run ()}
          className={editor.isActive ('paragraph') ? 'is-active' : ''}
        >
          P

        </button>

        <button
          onClick={() => editor.chain ().focus ().unsetAllMarks ().run ()}
        >
          Clear marks
        </button>
        <button onClick={() => editor.chain ().focus ().clearNodes ().run ()}>
          Clear nodes
        </button>
        <button
          onClick={() =>
            editor.chain ().focus ().toggleHeading ({level: 1}).run ()}
          className={editor.isActive ('heading', {level: 1}) ? 'is-active' : ''}
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain ().focus ().toggleHeading ({level: 2}).run ()}
          className={editor.isActive ('heading', {level: 2}) ? 'is-active' : ''}
        >
          H2
        </button>

        <button
          onClick={() =>
            editor.chain ().focus ().toggleHeading ({level: 3}).run ()}
          className={editor.isActive ('heading', {level: 3}) ? 'is-active' : ''}
        >
          H3
        </button>

        <button
          onClick={() => editor.chain ().focus ().toggleCodeBlock ().run ()}
          className={editor.isActive ('codeBlock') ? 'is-active' : ''}
        >
          Code block
        </button>

        <button
          onClick={() => editor.chain ().focus ().undo ().run ()}
          disabled={!editor.can ().chain ().focus ().undo ().run ()}
        >
          Undo
        </button>

        <button
          onClick={() => editor.chain ().focus ().redo ().run ()}
          disabled={!editor.can ().chain ().focus ().redo ().run ()}
        >
          Redo
        </button>

        <button
          onClick={() => editor.chain ().focus ().toggleBulletList ().run ()}
          className={editor.isActive ('bulletList') ? 'is-active' : ''}
        >
          Bullet list
        </button>

        <button
          onClick={() => editor.chain ().focus ().toggleOrderedList ().run ()}
          className={editor.isActive ('orderedList') ? 'is-active' : ''}
        >
          Ordered list
        </button>

        <button
          onClick={() => editor.chain ().focus ().toggleBlockquote ().run ()}
          className={editor.isActive ('blockquote') ? 'is-active' : ''}
        >
          Blockquote
        </button>

      </div>

      <div>
        <EditorContent editor={editor} />
      </div>
      <button onClick={handleEditorContent}>Save</button>
    </div>
  );
};

export default Tiptap;
