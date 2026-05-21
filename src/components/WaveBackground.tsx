export const WaveBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#F2FAF2]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,217,127,0.28),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f2faf2_52%,#ffffff_100%)]" />

      <div className="absolute -left-[18%] top-[10%] h-[42vh] w-[138%] rounded-[50%] bg-[#E8F5D8]/70 blur-3xl animate-wave-breathe" />

      <svg
        className="absolute -left-[10%] top-[18%] h-[34vh] w-[120%] animate-wave-float-1"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#C8E6A0"
          fillOpacity="0.55"
          d="M0,192L80,176C160,160,320,128,480,144C640,160,800,224,960,229.3C1120,235,1280,181,1360,154.7L1440,128L1440,320L0,320Z"
        />
      </svg>

      <svg
        className="absolute -right-[10%] top-[42%] h-[38vh] w-[124%] animate-wave-float-2"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#A8D97F"
          fillOpacity="0.28"
          d="M0,224L80,213.3C160,203,320,181,480,160C640,139,800,117,960,133.3C1120,149,1280,203,1360,229.3L1440,256L1440,320L0,320Z"
        />
      </svg>

      <svg
        className="absolute -left-[8%] bottom-[-4%] h-[30vh] w-[116%] animate-wave-drift"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#DDF0C9"
          fillOpacity="0.62"
          d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L0,320Z"
        />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_48%,rgba(255,255,255,0.72)_100%)]" />
    </div>
  );
};
