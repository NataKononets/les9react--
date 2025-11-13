import TwoRanges from "./TwoRanges";

export default function App() {
  return (
    <div className="container py-4" style={{ maxWidth: 720 }}>
      <h1 className="h4 mb-4">Два повзунки (Bootstrap + React)</h1>

      <TwoRanges
        labelA="Яскравість A"
        labelB="Яскравість B"
        min={0}
        max={100}
        step={1}
        initialA={30}
        initialB={70}
      />
    </div>
  );
}


