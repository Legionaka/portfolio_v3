"use client";

import Image from "next/image";
import { useState } from "react";

function localPreviewFor(title: string) {
  const normalized = title.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (normalized.includes("mediclinic")) return "/images/medi-clinic/landing-page.png";
  if (normalized.includes("altis") || normalized.includes("atlis")) return "/images/atlis/landingpage.png";
  if (normalized.includes("tightlines") || normalized.includes("stillwater")) return "/images/stillwater/landingpage.png";
  return null;
}

export function ProjectPreview({ title, src }: { title: string; src: string | null }) {
  const reliableLocalPreview = localPreviewFor(title);
  const fallback = "/images/project-placeholder.svg";
  const [imageSrc, setImageSrc] = useState(reliableLocalPreview || src || fallback);

  return (
    <Image
      className="project-screenshot"
      src={imageSrc}
      alt={`${title} project preview`}
      fill
      sizes="(max-width: 700px) 100vw, 650px"
      unoptimized
      onError={() => {
        if (imageSrc !== fallback) setImageSrc(fallback);
      }}
    />
  );
}
