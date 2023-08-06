import { useSelector } from "react-redux"

export default function Preview() {

    const tabs = useSelector(state => state.tabs)

    function getCode(lang) {
        return tabs.find(obj => obj.lang === lang).code
    }

    const doc = `
<!DOCTYPE html>
<html lang="en">
<head>
    <style>${getCode('css')}</style>
</head>
<body>
${getCode('html')}
    <script>${getCode('javascript')}</script>
</body>
</html>`
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-zinc-900">
        <iframe className="block w-full h-full" srcDoc={doc} sandbox="allow-scripts"></iframe>
    </div>
  )
}
