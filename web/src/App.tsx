import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(123)
  },[])
  return <>123</>;
}

export default App;
