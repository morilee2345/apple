import React, { useRef, useEffect } from 'react';

export const FadingVideo = ({ src, className, style }: { src: string; className?: string; style?: React.CSSProperties }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingOutRef = useRef(false);
  const rafId = useRef<number | null>(null);

  const fadeTo = (targetOpacity: number, duration: number) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    const video = videoRef.current;
    if (!video) return;

    const startOpacity = parseFloat(video.style.opacity || "0");
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      
      if (videoRef.current) {
        videoRef.current.style.opacity = currentOpacity.toString();
      }

      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      }
    };
    rafId.current = requestAnimationFrame(animate);
  };

  const handleLoadedData = () => {
    const video = videoRef.current;
    if (!video) return;
    video.style.opacity = "0";
    video.play().catch(() => {});
    fadeTo(1, 600);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const remaining = video.duration - video.currentTime;
    if (remaining <= 0.55 && remaining > 0 && !fadingOutRef.current) {
      fadingOutRef.current = true;
      fadeTo(0, 500);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;
    video.style.opacity = "0";
    setTimeout(() => {
      if (!videoRef.current) return;
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      fadingOutRef.current = false;
      fadeTo(1, 500);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={{ opacity: 0, ...style }}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
};
