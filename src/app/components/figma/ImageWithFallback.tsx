import React, { useState } from "react";

const ERROR_IMG_SRC =
  'svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNDQiIGN5PSI0NCIgcj0iNDQiIGZpbGw9IiNFNUU3RUIiLz48cGF0aCBkPSJNMjcuNSAzMS41aDMzdi0zM2gtMzN2MzN6IiBmaWxsPSIjQzBDNEM0Ii8+PHBhdGggZD0iTTMwLjUgMzQuNWgyN3YtMjdoLTI3djI3eiIgZmlsbD0iI0U1RTdFQiIvPjxwYXRoIGQ9Ik00MyAzOC41aDEwdi0xMGgtMTB2MTB6IiBmaWxsPSIjQzBDNEM0Ii8+PHBhdGggZD0iTTQzIDQ2LjVoMTB2LTEwaC0xMHYxMHoiIGZpbGw9IiNFNUU3RUIiLz48cGF0aCBkPSJNNDMgNTQuNWgxMHYtMTBoLTEwdjEweiIgZmlsbD0iI0MwQzRDNCIvPjwvc3ZnPg==';

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export default function ImageWithFallback(props: Props) {
  const [didError, setDidError] = useState(false);

  const { src, alt, style, className, ...rest } = props;

  const handleError = () => {
    setDidError(true);
  };

  if (didError) {
    return (
      <span
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
        style={style}
      >
        <img
          className="flex items-center justify-center w-full h-full"
          src={`data:image/${ERROR_IMG_SRC}`}
          alt="Error loading image"
          {...rest}
          data-original-url={src}
        />
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
    />
  );
}

