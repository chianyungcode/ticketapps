/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";

const CardInvoice = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        border: 1px solid;
        width: 100%;
        padding: 2rem;
        border-radius: 1rem;
        border-color: #ebebeb;
      `}
    >
      {children}
    </div>
  );
};

export default CardInvoice;
