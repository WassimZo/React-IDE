import { useSelector, useDispatch } from "react-redux"
import preview from "../features/preview"
import { togglePreview } from "../features/preview"
import show from '../assets/view.svg'
import hide from '../assets/hide.svg'


export default function PreviewButton() {

    const previewData = useSelector(state => state.preview)
    const dispatch = useDispatch()


  return (
    <button onClick={() => dispatch(togglePreview())} className="py-2 px-4 rounded bg-blue-700 flex mx-auto items-center text-slate-50">
        <img className="w-5 mr-3" src={previewData.preview ? hide : show} alt="" />
        <span>{previewData.preview ? "Hide" : "Show"} Preview</span>
    </button>
  )
}
