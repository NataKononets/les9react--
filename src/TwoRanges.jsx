import { useState, useMemo } from "react";

export default function TwoRanges({
  labelA = "A",
  labelB = "B",
  min = 0,
  max = 100,
  step = 1,
  initialA = 40,
  initialB = 60,
}) {

  const [a, setA] = useState(initialA);
  const [b, setB] = useState(initialB);

  const diff = useMemo(() => a - b, [a, b]);

  const deltaBadge = useMemo(() => {
    if (diff > 0) {
      return { text: `${labelA} > ${labelB} на +${diff}`, cls: "bg-success" };
    }
    if (diff < 0) {
      return { text: `${labelA} < ${labelB} на ${diff}`, cls: "bg-danger" };
    }
    return { text: `${labelA} = ${labelB} (0)`, cls: "bg-secondary" };
  }, [diff, labelA, labelB]);

  return (
    <div className="p-3 border rounded-3 shadow-sm bg-white">
      <div className="row g-4">
        <div className="col-md-6">
          <label
            htmlFor="rangeA"
            className="form-label d-flex justify-content-between"
          >
            <span>{labelA}</span>
            <span className="badge bg-primary">{a}</span>
          </label>
          <input
            id="rangeA"
            type="range"
            className="form-range"
            min={min}
            max={max}
            step={step}
            value={a}
            onInput={(e) => setA(Number(e.target.value))}
          />
        </div>

        <div className="col-md-6">
          <label
            htmlFor="rangeB"
            className="form-label d-flex justify-content-between"
          >
            <span>{labelB}</span>
            <span className="badge bg-primary">{b}</span>
          </label>
          <input
            id="rangeB"
            type="range"
            className="form-range"
            min={min}
            max={max}
            step={step}
            value={b}
            onInput={(e) => setB(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="mt-3 d-flex align-items-center gap-3">
        <span className="text-muted">
          Різниця ({labelA} − {labelB}):
        </span>
        <span
          className={`badge ${deltaBadge.cls}`}
          style={{ minWidth: "11rem" }}
        >
          {deltaBadge.text}
        </span>
      </div>
    </div>
  );
}