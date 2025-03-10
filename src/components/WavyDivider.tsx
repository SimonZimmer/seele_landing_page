export function WavyDivider() {
  return (
    <section className="mt-12 space-y-16">
    <svg
      viewBox="0 0 1440 120"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      preserveAspectRatio="none"
    >
      <path
        d="
          M0,50
          C120,90 240,30 360,70
          C480,110 600,10 720,60
          C840,110 960,40 1080,80
          C1200,120 1320,20 1440,50
        "
        stroke="red"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="
          M0,50
          C100,80 200,20 300,60
          C400,100 500,10 600,50
          C700,90 800,30 900,70
          C1000,110 1100,20 1200,60
          C1300,100 1400,40 1440,50
        "
        stroke="red"
        strokeWidth="3"
        fill="none"
        opacity="1"
      />
    </svg>
    </section>
  );
}
