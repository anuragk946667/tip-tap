import { useState } from "react";
import Tiptap from "../Tiptap"
import ShowPost from "./ShowPost";

const Newpost = () => {
    const [htmlContent,setHtmlContent] = useState('');
    const handleEditorContentSave =  (html) =>{
        // console.log(html)
        setHtmlContent(html) // Update the content state with the saved HTML content

    }
  return (
    <>
    <Tiptap onEditorContentSave={handleEditorContentSave}/>
    <hr />
    <ShowPost content={htmlContent}/>
    </>
  )
}

export default Newpost
