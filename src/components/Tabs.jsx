import CodeTab from "./CodeTab"
import { useSelector } from "react-redux"
export default function Tabs() {

  const tabs = useSelector(state => state.tabs);
  
  return (
    <div className="flex grow">
        <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
            <button>HTML</button>
            <button>CSS</button>
            <button>JS</button>
        </div>
        <div className="w-full grow relative">
            <CodeTab/>
        </div>
    </div>
  )
}
