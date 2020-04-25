import React, { useRef, useState, useLayoutEffect } from "react";
import Quagga from "quagga";

export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true);
  const [product, setProduct] = useState("")
  const cameraDivRef = useRef();

  Quagga.onDetected((data) => {
    // OLD VERSION
    // onDetected(data.code);

    // New version
    onDetected(data.codeResult.code);
  });

  useLayoutEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: cameraDivRef.current,
        },
        decoder: {
          readers: ["ean_reader"],
        },
      },
      (err) => {
        if (err) {
          console.error("Failed to initialize reader", err);
          return;
        }
        Quagga.start();
        setInitializing(false);
      }
    );

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <>
    <p></p>
      {initializing && <div>Starting camera...</div>}
      <div ref={cameraDivRef} className={className} />
</>

  );
};
