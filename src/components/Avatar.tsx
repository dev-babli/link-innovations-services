import React from "react";
import Image from "next/image";

export type AvatarSize = "small" | "medium" | "large";

interface AvatarProps {
  src: string;
  size?: AvatarSize;
  borderColor?: string;
}

const sizeMap: Record<AvatarSize, number> = {
  small: 46,
  medium: 54,
  large: 66,
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  size = "large",
  borderColor = "#3B82F6",
}) => {
  const dimension = sizeMap[size];
  return (
    <div
      className="rounded-full overflow-hidden"
      style={{
        width: `${dimension}px`,
        height: `${dimension}px`,
        border: `3px solid ${borderColor}`,
      }}
    >
      <Image
        src={src}
        alt="Team Member"
        width={dimension}
        height={dimension}
        objectFit="cover"
      />
    </div>
  );
};

export default Avatar;