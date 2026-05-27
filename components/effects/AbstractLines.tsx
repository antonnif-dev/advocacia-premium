export default function AbstractLines() {
    return (
        <div
            className="
        absolute
        inset-0

        overflow-hidden

        pointer-events-none
      "
        >

            <svg
                className="
          absolute
          inset-0

          w-full
          h-full
        "
                fill="none"
            >

                <path
                    d="
            M0 200
            C300 100 500 300 900 180
            S1400 220 1600 120
          "
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1.2"
                />

                <path
                    d="
            M0 500
            C400 300 700 700 1400 420
          "
                    stroke="rgba(198,169,105,0.10)"
                    strokeWidth="1"
                />

            </svg>

        </div>
    );
}