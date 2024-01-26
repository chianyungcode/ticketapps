/** @jsxImportSource @emotion/react */
"use client";

import React from "react";
import { css } from "@emotion/react";

interface CardTicketProps {
  ticketname: string;
}

export const CardTicket: React.FC<CardTicketProps> = ({ ticketname }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 0.5rem;
        width: 30rem;
        position: relative;
      `}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-light">{ticketname}</h3>
        <span
          css={css`
            background-color: #331343;
            color: #ffffff;
            padding: 2px 10px;
            font-size: small;
            border-radius: 4px;
            position: absolute;
            top: -10px;
            right: -10px;
          `}
        >
          New Ticket
        </span>
      </div>
      <div
        css={css`
          background-color: rgba(255, 25, 255, 0.1);
          width: 100%;
          height: 10rem;
          border-radius: 0.3rem;
        `}
      ></div>
    </div>
  );
};

export default CardTicket;
